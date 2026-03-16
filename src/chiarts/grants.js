// Grant deadlines — sorted by urgency
// status: "open" | "opening-soon" | "closed" | "ongoing" | "relationship"
export const grantDeadlines = [
  {
    name: "Field Foundation of Illinois — ART Program",
    amount: "$15K–$50K/year",
    deadline: "Mid-April 2026",
    deadlineDate: "2026-04-15", // approximate
    status: "opening-soon",
    badge: "⏰ Opens April",
    notes: "Portal re-opens mid-April. Chicago arts and social justice focus. Apply promptly when it opens.",
    url: "https://fieldfoundation.org",
    action: "Set a calendar reminder for April 1 to check the portal.",
  },
  {
    name: "Prince Charitable Trusts",
    amount: "Varies",
    deadline: "Rolling (inquiry form)",
    deadlineDate: null,
    status: "open",
    badge: "✅ Open Now",
    notes: "Low-barrier community inquiry form available now. ALAANA focus. Chicago arts and community development.",
    url: "https://forms.office.com/r/LYKy8J2XQp",
    action: "Submit the inquiry form today — it takes 10 minutes.",
  },
  {
    name: "Joyce Foundation — Culture Program",
    amount: "$25K–$250K+",
    deadline: "Rolling (LOI-first)",
    deadlineDate: null,
    status: "open",
    badge: "✅ Open Now",
    notes: "Email culture@joycefdn.org to initiate. LOI-first process. Chicago's premier arts funder — relationship matters.",
    url: "https://joycefdn.org",
    action: "Email culture@joycefdn.org this week. Don't overthink it — just introduce ChiArts.",
    contact: "culture@joycefdn.org",
  },
  {
    name: "Ingenuity / Creative Schools Fund",
    amount: "$10K–$100K",
    deadline: "Fall 2026 cycle",
    deadlineDate: "2026-10-01", // approximate
    status: "relationship",
    badge: "📋 Fall 2026",
    notes: "Apply via CPS Creative Schools Survey. ChiArts should already be participating — confirm with administration.",
    url: "https://ingenuity-inc.org",
    action: "Confirm with ChiArts admin that they're registered on the IAC Salesforce portal and included in the CPS Creative Schools Survey.",
  },
  {
    name: "21st Century Community Learning Centers (ISBE)",
    amount: "$10K–$330K/year",
    deadline: "Summer/Fall 2026 NOFO",
    deadlineDate: "2026-09-01", // approximate
    status: "relationship",
    badge: "📋 Fall 2026",
    notes: "Federal flow-through grant via Illinois State Board of Education. Multi-year funding. Start building the relationship with your CPS district contact now.",
    url: "https://www.ed.gov/grants-and-programs/formula-grants/school-improvement-grants/nita-m-lowey-21st-century-community-learning-centers-title-iv-part-b",
    action: "Contact CPS district coordinator now to get ChiArts on the radar before the NOFO drops.",
  },
  {
    name: "Polk Bros. Foundation",
    amount: "Varies",
    deadline: "Re-opens Fall 2026",
    deadlineDate: "2026-10-01", // approximate
    status: "closed",
    badge: "🔒 Closed — Fall 2026",
    notes: "Currently closed to new proposals. Re-opens Fall 2026. Build relationship now — attend their convenings, get on their radar.",
    url: "https://polkbrosfdn.org",
    action: "Follow Polk Bros on LinkedIn. Attend a public event. Be visible before the portal reopens.",
  },
  {
    name: "C3/Lollapalooza Arts Education Fund",
    amount: "Varies",
    deadline: "Wrapping in 2026",
    deadlineDate: "2026-06-01", // approximate
    status: "opening-soon",
    badge: "⚡ Act Now",
    notes: "Fund is winding down in 2026. Get into the conversation immediately. Chicago-native cultural institution with arts ed history.",
    url: "https://c3presents.com",
    action: "Make contact now before the fund closes entirely.",
  },
  {
    name: "Gaylord & Dorothy Donnelley Foundation",
    amount: "Up to $100K+",
    deadline: "Rolling (LOI-first)",
    deadlineDate: null,
    status: "open",
    badge: "✅ Open Now",
    notes: "$7M given in 2024. LOI required. Strong Chicago arts and culture fit.",
    url: "https://gddf.org",
    action: "Draft a brief LOI. Focus on ChiArts as a community anchor and talent pipeline.",
  },
  {
    name: "MAP Fund",
    amount: "Up to $31K",
    deadline: "Check website for cycle",
    deadlineDate: null,
    status: "ongoing",
    badge: "🎭 Performing Arts",
    notes: "No 501c3 required. Supports live performance and interdisciplinary work. Good fit for ChiArts Theatre/Dance Conservatories.",
    url: "https://mapfund.org",
    action: "Check current cycle dates at mapfund.org.",
  },
  {
    name: "Shubert Foundation",
    amount: "Varies (theatre focus)",
    deadline: "December annually",
    deadlineDate: "2026-12-01", // approximate
    status: "relationship",
    badge: "🎭 Theatre — Dec",
    notes: "Supports professional theatre organizations nationally. Strong fit for ChiArts Theatre Conservatory. Build relationship with program staff first.",
    url: "https://shubertfoundation.org",
    action: "Review eligibility criteria and initiate contact with program staff.",
  },
];

export const urgentActions = [
  {
    action: "Apply — NAMM Foundation Music Program Grant",
    detail: "Deadline April 1, 2026. nammfoundation.org — $5K–$25K for music education programs.",
    urgency: "April 1",
  },
  {
    action: "Apply — American Theatre Wing / Andrew Lloyd Webber Initiative",
    detail: "Active cycle now. Up to $50K for K-12 public school theatre programs. americantheatrewing.org",
    urgency: "ASAP",
  },
  {
    action: "Email Joyce Foundation",
    detail: "culture@joycefdn.org — just introduce ChiArts. Two sentences is fine.",
    urgency: "This week",
  },
  {
    action: "Submit Prince Charitable Trusts inquiry",
    detail: "10-minute form at forms.office.com/r/LYKy8J2XQp",
    urgency: "This week",
  },
  {
    action: "Confirm Creative Schools Survey registration",
    detail: "Ask ChiArts admin if they're registered on IAC Salesforce portal.",
    urgency: "This week",
  },
  {
    action: "Watch Field Foundation portal",
    detail: "Portal opens mid-April 2026. Set a calendar reminder for April 1.",
    urgency: "April 1",
  },
  {
    action: "Contact C3/Lollapalooza fund now",
    detail: "Fund is winding down. Don't miss the window.",
    urgency: "ASAP",
  },
];
