/**
 * Centralized Site Content Configuration
 * Easy to update texts, dates, and graduation timeline.
 */

export const siteContent = {
  person: "Ulfa",
  fullName: "Ulfatul Mutthoimah, S.Farm",
  event: "Yudisium",
  eventDateFormatted: "18 August 2026",
  eventDateNumeric: "18.08.2026",
  signature: "F",

  // Section 01: Opening
  opening: {
    greeting: "Hey, I made something for you.",
    subtext: "A little celebration for your special day.",
    cta: "Open Your Surprise ♡"
  },

  // Section 02: Hero
  hero: {
    badge: "Yudisium — 18 August 2026",
    title: "Congratulations, Ulfa ♡",
    subtitle: "One beautiful chapter completed.",
    supportingText: "And so many beautiful things are waiting for you.",
    scrollCue: "Scroll to explore"
  },

  // Section 03: Achievement Moment
  achievement: {
    title: "You did it, Ulfa.",
    date: "18.08.2026",
    copy: "Hari ini adalah bukti dari semua proses, usaha, dan langkah yang berhasil kamu lalui sampai sejauh ini."
  },

  // Section 04: Personal Message
  personalMessage: {
    badge: "A Note for You",
    message:
      "Selamat atas yudisiumnya, Ulfa. Aku bangga atas perjuanganmu. Semoga langkahmu selalu dimudahkan, penuh kebahagiaan, dan sukses sampai wisuda nanti, sayang.",
    signature: "— F"
  },

  // Section 06: Things I'm Proud of You For
  proudOfYou: {
    badge: "Reasons to Celebrate",
    title: "Things I'm Proud of You For",
    cards: [
      {
        id: "hard-work",
        title: "Your Hard Work",
        description: "Untuk semua usaha yang membawa kamu sampai sejauh ini.",
        icon: "sparkles",
        tag: "Dedication"
      },
      {
        id: "strength",
        title: "Your Strength",
        description: "Untuk tetap melangkah bahkan ketika semuanya tidak selalu mudah.",
        icon: "heart",
        tag: "Resilience"
      },
      {
        id: "journey",
        title: "Your Journey",
        description: "Untuk setiap proses yang akhirnya menjadi bagian dari pencapaian hari ini.",
        icon: "compass",
        tag: "Growth"
      },
      {
        id: "you",
        title: "And You",
        description: "Because you deserve to be proud of yourself too. ♡",
        icon: "award",
        tag: "Everything"
      }
    ]
  },

  // Section 07: Cinematic Section
  cinematic: {
    heading: "This is your moment.",
    subheading: "You earned it.",
    caption: "Program Studi Farmasi — Universitas Mataram"
  },

  // Section 08: Next Chapter (Graduation)
  graduation: {
    badge: "Next Chapter",
    title: "Graduation 🎓",
    month: "September",
    year: 2026,
    // Set exact date (e.g. "2026-09-20") whenever announced to automatically trigger countdown.
    // If null, countdown is safely hidden and teaser copy is displayed.
    date: null,
    copy: "Another beautiful moment is waiting for you."
  },

  // Section 09: Final Letter
  finalLetter: {
    teaser: "One last thing...",
    openPrompt: "Tap to read the letter ♡",
    paragraphs: [
      "Wherever your next journey takes you, I hope you'll always remember how far you've come.",
      "I'm proud of you today, and I'll still be proud of you tomorrow.",
      "Congratulations, Ulfa. ♡"
    ],
    signature: "— F"
  },

  // Section 10: Ending
  ending: {
    title: "Congratulations, Ulfa ♡",
    date: "18 August 2026",
    footerText: "This little page was made just for you.",
    signature: "— F"
  }
}
