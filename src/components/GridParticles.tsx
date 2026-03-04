import { useRef, useEffect, useCallback } from 'react'

const GRID_SIZE = 60
const TRAIL_LENGTH = 14     // how many trail segments behind each dot
const COLLISION_DIST = 8    // px — how close particles need to be to "collide"
const BOUNCE_DURATION = 18  // frames the bounce flash lasts

type Direction = 'up' | 'down' | 'left' | 'right'

interface Particle {
  gridX: number
  gridY: number
  direction: Direction
  progress: number
  speed: number
  opacity: number
  isLime: boolean
  // trail: last N pixel positions
  trail: Array<{ x: number; y: number }>
}

interface Bounce {
  x: number
  y: number
  frame: number // counts up to BOUNCE_DURATION then removed
  isLime: boolean
}

const PERPENDICULAR: Record<Direction, [Direction, Direction]> = {
  up: ['left', 'right'],
  down: ['left', 'right'],
  left: ['up', 'down'],
  right: ['up', 'down'],
}

const ALL_DIRS: Direction[] = ['up', 'down', 'left', 'right']

function randDir(): Direction {
  return ALL_DIRS[Math.floor(Math.random() * 4)]
}

function createParticle(cols: number, rows: number): Particle {
  return {
    gridX: Math.floor(Math.random() * cols),
    gridY: Math.floor(Math.random() * rows),
    direction: randDir(),
    progress: Math.random(),
    speed: 0.3 + Math.random() * 0.5,
    opacity: 0.15 + Math.random() * 0.2,
    isLime: Math.random() > 0.3,
    trail: [],
  }
}

function getPixelPos(p: Particle): { x: number; y: number } {
  const baseX = p.gridX * GRID_SIZE
  const baseY = p.gridY * GRID_SIZE
  let px = baseX
  let py = baseY
  switch (p.direction) {
    case 'up':    py = baseY - p.progress * GRID_SIZE; break
    case 'down':  py = baseY + p.progress * GRID_SIZE; break
    case 'left':  px = baseX - p.progress * GRID_SIZE; break
    case 'right': px = baseX + p.progress * GRID_SIZE; break
  }
  return { x: px, y: py }
}

export default function GridParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const bouncesRef = useRef<Bounce[]>([])
  const rafRef = useRef<number>(0)
  const dimsRef = useRef({ cols: 0, rows: 0, w: 0, h: 0 })

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { cols, rows, w, h } = dimsRef.current
    ctx.clearRect(0, 0, w, h)

    const particles = particlesRef.current

    // Update particle positions and trails
    for (const p of particles) {
      const pos = getPixelPos(p)

      // Push current position to trail before moving
      p.trail.push({ x: pos.x, y: pos.y })
      if (p.trail.length > TRAIL_LENGTH) p.trail.shift()

      p.progress += p.speed / 60

      if (p.progress >= 1) {
        switch (p.direction) {
          case 'up':    p.gridY -= 1; break
          case 'down':  p.gridY += 1; break
          case 'left':  p.gridX -= 1; break
          case 'right': p.gridX += 1; break
        }
        p.progress = 0

        // wrap edges
        if (p.gridX < 0) p.gridX = cols - 1
        if (p.gridX >= cols) p.gridX = 0
        if (p.gridY < 0) p.gridY = rows - 1
        if (p.gridY >= rows) p.gridY = 0

        // 40% chance to turn perpendicular
        if (Math.random() < 0.4) {
          const perp = PERPENDICULAR[p.direction]
          p.direction = perp[Math.floor(Math.random() * 2)]
          p.trail = [] // clear trail on turn so it doesn't look odd
        }
      }
    }

    // Collision detection — check all pairs
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i]
        const b = particles[j]
        const pa = getPixelPos(a)
        const pb = getPixelPos(b)
        const dx = pa.x - pb.x
        const dy = pa.y - pb.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < COLLISION_DIST) {
          // Only spawn a bounce if neither particle spawned one very recently
          const alreadyBouncing = bouncesRef.current.some(
            bx => Math.abs(bx.x - pa.x) < COLLISION_DIST && Math.abs(bx.y - pa.y) < COLLISION_DIST
          )
          if (!alreadyBouncing) {
            bouncesRef.current.push({
              x: (pa.x + pb.x) / 2,
              y: (pa.y + pb.y) / 2,
              frame: 0,
              isLime: a.isLime || b.isLime,
            })
          }
        }
      }
    }

    // Draw trails
    for (const p of particles) {
      if (p.trail.length < 2) continue
      for (let t = 0; t < p.trail.length; t++) {
        const trailOpacity = (t / p.trail.length) * p.opacity * 1.1
        if (trailOpacity < 0.01) continue
        ctx.beginPath()
        ctx.arc(p.trail[t].x, p.trail[t].y, 1.3, 0, Math.PI * 2)
        ctx.fillStyle = p.isLime
          ? `rgba(200,241,53,${trailOpacity.toFixed(2)})`
          : `rgba(255,255,255,${trailOpacity.toFixed(2)})`
        ctx.fill()
      }
    }

    // Draw particles (dots)
    for (const p of particles) {
      const pos = getPixelPos(p)
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = p.isLime
        ? `rgba(200,241,53,${p.opacity})`
        : `rgba(255,255,255,${p.opacity})`
      ctx.fill()
    }

    // Draw and age bounce flashes
    const activeBounces: Bounce[] = []
    for (const b of bouncesRef.current) {
      b.frame++
      if (b.frame >= BOUNCE_DURATION) continue // expired
      activeBounces.push(b)

      // Expanding ring that fades out
      const t = b.frame / BOUNCE_DURATION          // 0 to 1
      const radius = t * 12                        // expands to 12px
      const opacity = (1 - t) * 0.5               // fades out
      const color = b.isLime
        ? `rgba(200,241,53,${opacity.toFixed(2)})`
        : `rgba(255,255,255,${opacity.toFixed(2)})`

      ctx.beginPath()
      ctx.arc(b.x, b.y, radius, 0, Math.PI * 2)
      ctx.strokeStyle = color
      ctx.lineWidth = 0.8
      ctx.stroke()

      // Small bright flash at center (first 6 frames only)
      if (b.frame < 6) {
        const flashOpacity = ((6 - b.frame) / 6) * 0.6
        ctx.beginPath()
        ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = b.isLime
          ? `rgba(200,241,53,${flashOpacity.toFixed(2)})`
          : `rgba(255,255,255,${flashOpacity.toFixed(2)})`
        ctx.fill()
      }
    }
    bouncesRef.current = activeBounces

    rafRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement
    if (!container) return

    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      canvas.width = w
      canvas.height = h

      const cols = Math.ceil(w / GRID_SIZE) + 1
      const rows = Math.ceil(h / GRID_SIZE) + 1
      dimsRef.current = { cols, rows, w, h }

      const count = w < 768 ? 18 : 35

      if (particlesRef.current.length === 0) {
        particlesRef.current = Array.from({ length: count }, () =>
          createParticle(cols, rows)
        )
      } else {
        for (const p of particlesRef.current) {
          p.gridX = Math.min(p.gridX, cols - 1)
          p.gridY = Math.min(p.gridY, rows - 1)
          p.trail = []
        }
        while (particlesRef.current.length < count) {
          particlesRef.current.push(createParticle(cols, rows))
        }
        if (particlesRef.current.length > count) {
          particlesRef.current.length = count
        }
      }
    }

    resize()
    rafRef.current = requestAnimationFrame(draw)

    const ro = new ResizeObserver(resize)
    ro.observe(container)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
