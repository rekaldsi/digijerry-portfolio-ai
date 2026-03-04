import { useRef, useEffect, useCallback } from 'react'

const GRID_SIZE = 60

type Direction = 'up' | 'down' | 'left' | 'right'

interface Particle {
  gridX: number
  gridY: number
  direction: Direction
  progress: number
  speed: number
  opacity: number
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
  }
}

export default function GridParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)
  const dimsRef = useRef({ cols: 0, rows: 0, w: 0, h: 0 })

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { cols, rows, w, h } = dimsRef.current
    ctx.clearRect(0, 0, w, h)

    for (const p of particlesRef.current) {
      p.progress += p.speed / 60

      if (p.progress >= 1) {
        // advance to next intersection
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
        }
      }

      // pixel position: interpolate from current intersection toward next
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

      ctx.beginPath()
      ctx.arc(px, py, 1.5, 0, Math.PI * 2)
      ctx.fillStyle = p.isLime
        ? `rgba(200,241,53,${p.opacity})`
        : `rgba(255,255,255,${p.opacity})`
      ctx.fill()
    }

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
        // clamp existing particles to valid grid coords
        for (const p of particlesRef.current) {
          p.gridX = Math.min(p.gridX, cols - 1)
          p.gridY = Math.min(p.gridY, rows - 1)
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
