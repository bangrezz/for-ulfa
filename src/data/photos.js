/**
 * Photo Registry & Metadata
 * Maps all 10 curated photographs with specific object-positions, aspect ratios,
 * and storytelling captions.
 */

export const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : `${base}/`
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${cleanBase}${cleanPath}`
}

export const photos = {
  hero: {
    id: "hero-main",
    src: getAssetUrl("photos/hero-main.jpeg"),
    alt: "Ulfa tersenyum di tangga kayu mengenakan selempang Yudisium S.Farm dan memegang buket bunga",
    caption: "Momen Yudisium S.Farm — Universitas Mataram",
    objectPosition: "50% 30%",
    aspectRatio: "3/4"
  },
  cinematic: {
    id: "cinematic-milestone",
    src: getAssetUrl("photos/cinematic-milestone.jpeg"),
    alt: "Ulfa di depan backdrop Seminar Proposal Farmasi dengan buket ungu",
    caption: "Seminar Proposal — Evaluasi Pelayanan Kefarmasian",
    objectPosition: "50% 45%",
    aspectRatio: "9/16"
  },
  ending: {
    id: "ending-detail",
    src: getAssetUrl("photos/ending-detail.jpeg"),
    alt: "Detail selempang kesarjanaan Ulfatul Mutthoimah, S.Farm dan buket bunga mawar & lili",
    caption: "Ulfatul Mutthoimah, S.Farm ♡",
    objectPosition: "50% 50%",
    aspectRatio: "3/4"
  },
  gallery: [
    {
      id: "journey-proposal-grass",
      src: getAssetUrl("photos/gallery-05.jpeg"),
      alt: "Ulfa duduk di rumput taman kampus dengan naskah skripsi penuh catatan dan buket bunga",
      title: "The Milestones",
      subtitle: "Perjuangan proposal skripsi, revisi, dan doa yang tak pernah putus.",
      objectPosition: "50% 35%",
      aspectRatio: "9/16",
      featured: true,
      tag: "Process & Heart"
    },
    {
      id: "almamater-portrait",
      src: getAssetUrl("photos/gallery-01.jpeg"),
      alt: "Ulfa mengenakan jas almamater biru tersenyum anggun memegang buket bunga",
      title: "Semangat Baru",
      subtitle: "Setiap langkah kecil yang konsisten membawamu ke hari ini.",
      objectPosition: "50% 40%",
      aspectRatio: "9/16",
      featured: false,
      tag: "Milestone"
    },
    {
      id: "stairs-candid",
      src: getAssetUrl("photos/gallery-02.jpeg"),
      alt: "Ulfa duduk tersenyum candid di tangga arsitektur lengkung",
      title: "Penuh Syukur",
      subtitle: "Senyum kebahagiaan setelah melewati proses panjang.",
      objectPosition: "50% 30%",
      aspectRatio: "3/4",
      featured: false,
      tag: "Celebration"
    },
    {
      id: "journey-candid-reading",
      src: getAssetUrl("photos/gallery-06.jpeg"),
      alt: "Ulfa menatap naskah skripsi dengan senyum haru di tengah buket bunga",
      title: "Lembar Perjalanan",
      subtitle: "Setiap coretan dan catatan yang akhirnya berbuah manis.",
      objectPosition: "50% 40%",
      aspectRatio: "9/16",
      featured: false,
      tag: "Memories"
    },
    {
      id: "architectural-look",
      src: getAssetUrl("photos/gallery-04.jpeg"),
      alt: "Ulfa berpose elegan di samping pilar megah",
      title: "Langkah Tegap",
      subtitle: "Menatap masa depan dengan penuh keyakinan dan harapan.",
      objectPosition: "50% 25%",
      aspectRatio: "3/4",
      featured: true,
      tag: "Poise"
    },
    {
      id: "elevator-lobby",
      src: getAssetUrl("photos/gallery-03.jpeg"),
      alt: "Ulfa berdiri di lobby marmer mengenakan selempang kesarjanaan",
      title: "Hari Istimewa",
      subtitle: "Gelar dan pencapaian yang sangat layak kamu dapatkan.",
      objectPosition: "50% 35%",
      aspectRatio: "3/4",
      featured: false,
      tag: "Achievement"
    },
    {
      id: "playful-bouquet-peek",
      src: getAssetUrl("photos/gallery-07.jpeg"),
      alt: "Pose playful Ulfa bersembunyi di balik buket bunga kesayangan",
      title: "Joy & Laughter",
      subtitle: "Keceriaan yang selalu membuat hari-hari terasa lebih indah.",
      objectPosition: "50% 45%",
      aspectRatio: "3/4",
      featured: false,
      tag: "Sweet Moments"
    }
  ]
}
