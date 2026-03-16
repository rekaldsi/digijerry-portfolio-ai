export const targetCallouts = {
  "leo burnett": {
    callout:
      "You've built your entire philosophy around work that has people at its core — their needs, wants, dreams, and hopes. ChiArts students are exactly those people: young Chicagoans whose creative futures are waiting to be unlocked. Partnering with ChiArts is HumanKind in action.",
  },
  "ddb chicago": {
    callout:
      "DDB has staked its entire identity on the belief that unexpected creativity is the only path to genuine impact. ChiArts students are Chicago's most unexpected creative voices — young artists from every neighborhood who haven't had the chance to be seen yet. Help us change that.",
  },
  "energy bbdo": {
    callout:
      "Energy BBDO already knows what it looks like to show up for Chicago's young creatives — you've volunteered in classrooms to help kids find their voices. ChiArts is full of those same kids, and they need you again.",
  },
  "havas chicago": {
    callout:
      "Your Meaningful Brands research proves it: 70% of people want brands to invest in their local communities. ChiArts is that investment — arts education that turns students into exactly the empowered Change Makers your research says audiences are hungry to support.",
  },
  "fcb chicago": {
    callout:
      "FCB's 'Never Finished' philosophy isn't just a tagline — it's a proof point. You built Dreamcaster because you believed joy should be accessible to everyone. ChiArts students are asking for the same thing: access to the creative future they've already earned.",
    footnote:
      "FCB Chicago was absorbed into Omnicom in late 2025 — verify current entity before sending.",
  },
  "macarthur foundation": {
    callout:
      "MacArthur's 2025 Culture, Equity, and the Arts grants went to organizations doing exactly what you believe in: building Chicago's creative future through equity and access. ChiArts is the school where that future gets made — every day, for students who have nowhere else to go for this education.",
  },
  "pritzker pucker family foundation": {
    callout:
      "PPFF built its arts giving around a simple belief: that art and social justice belong together. ChiArts is the living proof of that belief — a tuition-free conservatory where every student, regardless of zip code, gets a serious arts education and a real future.",
  },
  "chicago community trust": {
    callout:
      "The Chicago Community Trust has spent over 100 years mobilizing resources for a more equitable Chicago — and your 2025 arts RFP proves you know that arts and culture are economic engines, not extras. ChiArts is the institution that makes that engine run for students who are already here, already working, already ready.",
  },
  "second city": {
    callout:
      "Second City has spent 65 years proving that comedy is a serious art form that builds confidence, community, and careers. ChiArts students are your people: young Chicagoans developing their voices right now who need institutional partners who understand what creative training actually does to a life.",
  },
  "second city chicago": {
    callout:
      "Second City has spent 65 years proving that comedy is a serious art form that builds confidence, community, and careers. ChiArts students are your people: young Chicagoans developing their voices right now who need institutional partners who understand what creative training actually does to a life.",
  },
  netflix: {
    callout:
      "Netflix built the Fund for Creative Equity because you believe more inclusion behind the camera leads to more representation on screen. ChiArts graduates are the behind-the-camera talent you're investing to find — trained, Chicago-raised, and ready. Let's make sure they get there.",
  },
};

export const templates = {
  "Ad Agency / Creative Company": (company, contact, date, calloutData) => {
    const contactLine = contact ? contact : "Creative Director";
    const para2 = calloutData
      ? `${calloutData.callout}\n\nThat school is at a critical inflection point — and the right partner can change what happens next.`
      : `ChiArts is a public magnet high school in Chicago where students are admitted based on artistic audition and trained at a conservatory level. Not after-school enrichment. Not a class period. A full, rigorous, professional-track arts education — in dance, music, theatre, visual arts, and creative writing — inside the Chicago public school system. Free of charge to every student accepted.`;
    const footnote = calloutData?.footnote
      ? `\n\n⚠️ Note: ${calloutData.footnote}`
      : "";
    return `${date}\n\n${contactLine}\n${company}\n\nDear ${contactLine},\n\nYour industry runs on creative talent. The writers, art directors, cinematographers, animators, choreographers behind every campaign you've ever loved — they came from somewhere. Some of them came from programs like Chicago High School for the Arts.\n\n${para2}\n\nThe school is facing significant funding cuts. The board is pulling back. And the students who depend on this program — many of them the first in their families to pursue a professional creative path — are feeling it.\n\nHere's what I'm asking you to consider: ${company} talks about creativity. It's in your mission, your pitch decks, your culture decks. ChiArts is where creativity gets built, one teenager at a time. This is a chance to back that claim with something real.\n\nSpecifically, we're looking for partners willing to:\n• Provide direct financial support to sustain programming and supplies\n• Donate professional-grade materials — software licenses, equipment, design tools\n• Launch a mentorship program connecting your team with ChiArts students\n• Create an internship pipeline that gives graduates a real first step into the industry\n\nYou get access to emerging talent before anyone else does. You get a genuine story about investing in Chicago's creative future. And your team gets to work with students who are, frankly, extraordinary.\n\nIf you're interested in a conversation, I'd welcome the chance. I can share student work, program details, and specific partnership structures.\n\nRespectfully,\nA ChiArts Supporter${footnote}`;
  },

  Foundation: (company, contact, date, calloutData) => {
    const contactLine = contact ? contact : "Program Officer";
    const para2 = calloutData
      ? `${calloutData.callout}\n\nThat institution is at a critical inflection point — and it needs philanthropic partners who understand what's at stake.`
      : `ChiArts is a public magnet high school within Chicago Public Schools, offering rigorous conservatory-level training in dance, music, theatre, visual arts, and creative writing. Students are admitted through competitive audition, and tuition is free. The student body reflects the full diversity of Chicago — young artists from every neighborhood, many from under-resourced communities, gaining access to professional-track arts education that would otherwise be financially out of reach.`;
    const footnote = calloutData?.footnote
      ? `\n\n⚠️ Note: ${calloutData.footnote}`
      : "";
    return `${date}\n\n${contactLine}\n${company}\n\nDear ${contactLine},\n\nI am writing on behalf of the Chicago High School for the Arts community to respectfully bring ChiArts to your attention as an institution that reflects the core mission of ${company} — and one that is in a critical moment.\n\n${para2}\n\nThe school is navigating a meaningful funding gap as state and district funding has contracted. Programs that define ChiArts — master classes, visiting artist residencies, production resources, and critical student support services — are under pressure. The community is working to bridge that gap through private partnerships.\n\n${company}'s commitment to arts education and community investment aligns directly with what ChiArts represents: a model of public arts education that produces measurable outcomes. Graduates go on to attend top conservatories and universities, enter creative industries, and return to their communities as artists, educators, and civic contributors. The program is not supplemental — it is transformational.\n\nWe are seeking grant consideration and would welcome the opportunity to submit a formal proposal or arrange an introductory meeting with the appropriate program officer.\n\nSpecifically, we are hoping to explore:\n• Multi-year general operating support to stabilize programming\n• Project-based funding for specific initiatives (residencies, student productions, equipment)\n• Capacity-building investment in the school's development infrastructure\n\nChiArts is exactly the kind of institution that philanthropic missions like ${company}'s exist to sustain. We would be grateful for your consideration.\n\nThank you for your time and for the work your foundation does in this city.\n\nWith respect,\nA ChiArts Supporter${footnote}`;
  },

  "Retail / Entertainment / Corporate": (company, contact, date, calloutData) => {
    const contactLine = contact ? contact : "Community Relations";
    const para2 = calloutData
      ? `${calloutData.callout}\n\nAnd right now, that program needs community partners who are willing to show up for it.`
      : `ChiArts is a public magnet high school where students audition for a conservatory-level arts education in dance, music, theatre, and visual arts. These are teenagers performing at the Harris Theater, exhibiting at professional galleries, and building the skills that drive Chicago's creative economy. And they're looking for partners who believe in what they're building.`;
    const footnote = calloutData?.footnote
      ? `\n\n⚠️ Note: ${calloutData.footnote}`
      : "";
    return `${date}\n\n${contactLine}\n${company}\n\nDear ${contactLine},\n\nChicago is full of extraordinary young artists. A lot of them go to school at Chicago High School for the Arts — ChiArts — and you may not have met them yet.\n\n${para2}\n\n${company} has a natural stake in Chicago's creative culture. We'd love to explore what a sponsorship partnership might look like — one that's genuinely mutual.\n\nHere's what that could include:\n• Event sponsorship — ChiArts hosts performances, showcases, and exhibitions throughout the year. Your brand, in a room full of Chicago's next creative leaders and their families.\n• Employee engagement — Mentorship, panels, or volunteer opportunities that connect your team with students in a meaningful way.\n• Community visibility — Recognition across ChiArts communications, social channels, and events as a committed Chicago culture partner.\n\nThis isn't a donation ask with a tax receipt at the end. This is a sponsorship — a real partnership with a school that is doing something rare and important in this city.\n\nWe'd love to share more about ChiArts and find the right structure for your organization. Would you be open to a brief conversation?\n\nWith appreciation,\nA ChiArts Supporter${footnote}`;
  },
};

export const templateTypes = [
  "Ad Agency / Creative Company",
  "Foundation",
  "Retail / Entertainment / Corporate",
];

// Staff/faculty voice variants — same targets, different perspective
export const staffTemplates = {
  "Ad Agency / Creative Company": (company, contact, date, calloutData) => {
    const contactLine = contact ? contact : "Creative Director";
    const para2 = calloutData
      ? `${calloutData.callout}\n\nThat's the school where I work. And right now it needs industry partners who are willing to show up for it.`
      : `ChiArts is a public magnet high school within Chicago Public Schools — conservatory-level training in dance, music, theatre, visual arts, and creative writing. Students audition to get in. The training is professional-grade. And it's entirely free. I've watched students arrive as tentative freshmen and leave as working artists with conservatory acceptances, agency internships, and industry mentors.`;
    const footnote = calloutData?.footnote ? `\n\n⚠️ Note: ${calloutData.footnote}` : "";
    return `${date}\n\n${contactLine}\n${company}\n\nDear ${contactLine},\n\nI'm a faculty member at Chicago High School for the Arts — ChiArts — and I'm writing because the school where I've dedicated my career is facing a significant funding crisis.\n\n${para2}\n\nThis letter isn't a form letter from a development office. It's from a teacher who has sat across from students choosing between a professional artistic future and the financial pressures that push so many talented young people out of the arts entirely. ChiArts is the thing that tips that balance.\n\nHere's what I'd like to explore with ${company}:\n• Direct program support — supplies, software licenses, or materials that our budget can no longer cover\n• Artist-in-residence or mentorship partnerships that connect your team with our students\n• Internship pipelines that give our graduates a real industry entry point\n• Scholarship contributions for students facing financial barriers\n\nYour industry is built on people who went through programs like ours. You know exactly what this school does and why it matters. I'm asking you to invest in the next generation of those people.\n\nI'd welcome a conversation. I can share student work, program details, and specific partnership structures at any level of commitment.\n\nWith gratitude,\nA ChiArts Faculty Member${footnote}`;
  },

  Foundation: (company, contact, date, calloutData) => {
    const contactLine = contact ? contact : "Program Officer";
    const para2 = calloutData
      ? `${calloutData.callout}\n\nI teach here. I see what this school does to students every day.`
      : `ChiArts is a public magnet high school within Chicago Public Schools offering rigorous conservatory-level training in dance, music, theatre, visual arts, and creative writing. Students are admitted through competitive audition; tuition is free. Our student body reflects the full diversity of Chicago — young artists from every neighborhood, many from communities where professional-track arts education would otherwise be inaccessible.`;
    const footnote = calloutData?.footnote ? `\n\n⚠️ Note: ${calloutData.footnote}` : "";
    return `${date}\n\n${contactLine}\n${company}\n\nDear ${contactLine},\n\nI am a faculty member at Chicago High School for the Arts, and I am writing to bring ChiArts to the attention of ${company} during a critical moment for the school and the students I serve.\n\n${para2}\n\nBudget reductions at the state and district level are placing significant pressure on the programs that define ChiArts — visiting artist residencies, production resources, master classes, and the student support services that make this level of training accessible to all students regardless of financial circumstance.\n\nI've witnessed what targeted philanthropic investment does to a school like ours. It keeps programs alive that would otherwise disappear. It allows students who have already earned their place here to fully access the education they've been promised.\n\n${company}'s commitment to arts education and community investment aligns directly with ChiArts's model and outcomes. Our graduates consistently go on to conservatories, universities, and professional creative careers — and they return to Chicago as artists, educators, and civic contributors.\n\nWe are seeking grant consideration and would welcome the opportunity to discuss how ${company}'s priorities align with ChiArts's needs. I'm happy to connect you with the school's administration or share program documentation.\n\nThank you for your consideration and for the work your foundation does to sustain arts education in this city.\n\nRespectfully,\nA ChiArts Faculty Member${footnote}`;
  },

  "Retail / Entertainment / Corporate": (company, contact, date, calloutData) => {
    const contactLine = contact ? contact : "Community Relations";
    const para2 = calloutData
      ? `${calloutData.callout}\n\nI work at that school. I've seen what happens when students get the support they need — and what happens when they don't.`
      : `ChiArts is a public magnet high school where students earn their place through artistic audition and receive conservatory-level training in dance, music, theatre, and visual arts. These are teenagers performing at the Harris Theater, exhibiting professionally, building portfolios that get them into top schools — and doing it all within Chicago Public Schools, at no cost to their families.`;
    const footnote = calloutData?.footnote ? `\n\n⚠️ Note: ${calloutData.footnote}` : "";
    return `${date}\n\n${contactLine}\n${company}\n\nDear ${contactLine},\n\nI teach at Chicago High School for the Arts — ChiArts — and I'm reaching out directly because our school is at a pivotal moment and I believe ${company} is exactly the kind of organization that should be in the ChiArts orbit.\n\n${para2}\n\nBudget cuts are hitting programs hard. We're asking community partners to step in where institutional funding has pulled back.\n\nHere's what a partnership with ChiArts could look like for ${company}:\n• Event sponsorship — We host performances, showcases, and exhibitions year-round. Your brand, in front of Chicago's most engaged arts families and creative community.\n• Mentorship and career exposure — My students are extraordinary. Give them a day with your team and you'll see what I mean.\n• Employee volunteer engagement — Panels, workshops, studio visits. Your team gets as much as they give.\n• In-kind support — Professional equipment, software, materials, or services that reduce our operating costs.\n\nI've seen what the right industry partner can do for a student's trajectory. I'm asking you to be that partner.\n\nWould you be open to a brief conversation?\n\nWith appreciation,\nA ChiArts Faculty Member${footnote}`;
  },
};

export const emailTemplate = `The Chicago High School for the Arts — ChiArts — is one of the few public schools in Illinois where students are admitted based on artistic talent and trained at a conservatory level across dance, music, theatre, visual arts, and more. These are the next generation of Chicago's creative class. Right now, the school is navigating a funding crisis driven by state and district-level cuts — and the students most affected are the ones who can least afford it. I'm reaching out because I believe your organization is aligned with what ChiArts stands for, and I'd love to share a one-page overview of how a partnership could work. Would you be open to a brief call or a look at the full letter? I'll keep it worth your time.`;

export const subjectLines = [
  "You say creativity matters. Here's your chance to prove it.",
  "The next great Chicago creative is in a classroom right now.",
  "A Chicago arts school needs a partner. You might be the right fit.",
];
