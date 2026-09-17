// Hand-crafted narrative + interactive layout for individual products.
// Image fields are intentionally left as PLACEHOLDERS (not the current database
// photos) so real photography/renders can be dropped in later without touching
// the layout or copy. Each placeholder describes what should go there.

export const PRODUCT_STORIES = {
  guidebot: {
    hook: "The first face your guests meet — and the smartest one on the team.",

    philosophy:
      "Every decision — from the shape of its face to the sound of its voice — was made to answer one question: how do you make a machine feel like part of the team, not just another screen in the lobby?",

    hero: {
      placeholder: { label: "Hero shot — GuideBot, front-facing studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 18, title: "Expressive Face Display", text: "10-inch LCD \"digital face\" reacts and welcomes guests with personality." },
        { x: 50, y: 48, title: "22-inch Interactive Signage", text: "Full-HD touchscreen for menus, maps, ads, and games." },
        { x: 50, y: 85, title: "360° Sensor Fusion", text: "ROS-powered navigation reads the room and avoids obstacles in real time." },
      ],
    },

    view360: {
      label: "360° rotation set — 24–36 sequential studio shots, 10° apart",
      frames: [],
    },

    bento: [
      {
        size: "large",
        icon: "FaComments",
        title: "Bilingual AI Engine",
        text: "Fluent, natural conversation in English and Egyptian Arabic — tuned for busy, noisy spaces.",
        placeholder: { label: "Close-up — face display speaking", ratio: "16 / 9" },
      },
      {
        size: "normal",
        icon: "FaRoute",
        title: "ROS-Powered Navigation",
        text: "Sensor-fused, obstacle-aware movement across almost any indoor surface.",
      },
      {
        size: "normal",
        icon: "FaClock",
        title: "9-Hour Runtime",
        text: "A full shift on one overnight charge.",
      },
      {
        size: "wide",
        icon: "FaAudioDescription",
        title: "22-inch Interactive Display",
        text: "Menus, maps, ads, and games on a full-HD touchscreen — paired with a 10-inch expressive face.",
        placeholder: { label: "Screen detail — touchscreen menu", ratio: "16 / 9" },
      },
      {
        size: "wide",
        icon: "FaGamepad",
        title: "Lead Capture & \"Spin & Win\"",
        text: "Turns casual encounters into captured leads, game plays, and instant photo-booth moments.",
      },
      {
        size: "normal",
        icon: "FaWifi",
        title: "Wi-Fi / LTE Ready",
        text: "Stays online and synced, with LTE as a backup connection.",
      },
    ],

    stats: [
      { value: 9, suffix: "h", label: "Continuous runtime" },
      { value: 22, suffix: "\"", label: "HD interactive touchscreen" },
      { value: 2, suffix: "", label: "Native languages — EN / AR" },
      { value: 80, suffix: "kg", label: "Total operating weight" },
    ],

    tabs: [
      {
        title: "A Host That Understands You",
        summary: "Bilingual AI, tuned to listen.",
        placeholder: { label: "Close-up — face display mid-conversation", ratio: "4 / 3" },
        text:
          "GuideBot's AI engine speaks the room fluently — natively in English and Egyptian Arabic — and listens through a noise-canceling microphone built for busy lobbies and crowded halls.\n\nIts knowledge base is fully yours to shape: pre-load FAQs, service menus, and directions so every answer feels native to your brand.\n\nEvery conversation is also an opportunity. Interactive lead-capture forms, a built-in \"Spin & Win\" game, and an on-board camera that emails guests their photo instantly turn casual encounters into lasting engagement.",
      },
      {
        title: "Built to Be Seen, and Heard",
        summary: "Dual screens, dual 10W speakers.",
        placeholder: { label: "Screen detail — 22-inch touchscreen in use", ratio: "4 / 3" },
        text:
          "A 10-inch expressive display gives GuideBot a face — reacting, alerting, and welcoming with personality.\n\nIts 22-inch full-HD touchscreen turns every interaction into a menu, a map, or a game, while dual 10W speakers keep announcements crisp even in noisy, high-traffic spaces.",
      },
      {
        title: "Moves With Purpose",
        summary: "ROS-powered, safety-first navigation.",
        placeholder: { label: "Action shot — GuideBot navigating an open floor", ratio: "4 / 3" },
        text:
          "Powered by ROS and a fusion of onboard sensors, GuideBot finds its way across marble, tile, low-pile carpet, cement, and wood without missing a step.\n\nIt threads through aisles as narrow as 80 cm at a controlled, safety-adjustable pace of up to 1.0 m/s — confident indoors, considerate around people.",
      },
      {
        title: "Built for a Full Day's Work",
        summary: "9-hour shifts, one overnight charge.",
        placeholder: { label: "Detail shot — charging dock overnight", ratio: "4 / 3" },
        text:
          "GuideBot runs a full shift on a single overnight charge — nine hours of continuous operation, plugged in after closing and ready before the doors open.\n\nAt 80 kg, it's substantial enough to feel stable on the floor, yet light enough to reposition without special equipment. Wi-Fi keeps it synced with your systems, and an optional LTE connection keeps it online even if the in-house network goes down.",
      },
    ],

    compare: {
      title: "GuideBot or GuideBot Pro?",
      description: "Both are built on the same platform. Pro adds a bigger display and active guest escorting for larger, higher-traffic facilities.",
      rows: [
        { label: "Main Display", a: "22\" HD Touchscreen", b: "27\" Ultra-Wide HD Touchscreen" },
        { label: "Guest Escorting", a: "Interactive on-screen guidance", b: "Point-to-point Waypoint Navigation" },
        { label: "Safety Sensors", a: "Multi-sensor fusion", b: "360° Safety-Ring sensor array" },
        { label: "Continuous Runtime", a: "9 hours", b: "9 hours" },
      ],
      linkTo: "/products/guidebot-pro",
      linkLabel: "See GuideBot Pro",
    },

    credibility:
      "GuideBot is designed, engineered, and assembled by Robox Industries — built for the local market, supported locally, and continuously improved.",

    useCases: {
      title: "Everywhere a Guest Needs Guidance",
      description: "GuideBot adapts to any facility that lives and dies by first impressions.",
      placeholder: { label: "Wide shot — GuideBot in a real deployment setting", ratio: "21 / 9" },
      items: [
        { icon: "FaStore", title: "Retail & Malls", text: "Wayfinding to shops, mobile advertising, and \"Spin & Win\" promotions." },
        { icon: "FaHotel", title: "Hospitality & Hotels", text: "Receptionist duties and tourist info." },
        { icon: "FaBuilding", title: "Corporate Offices", text: "Visitor registration and employee engagement." },
        { icon: "FaHospital", title: "Healthcare", text: "Directing patients to clinics and reducing administrative staff workload." },
        { icon: "FaLandmark", title: "Museums & Galleries", text: "\"Docent Mode\" providing audio-visual tours of specific exhibits." },
        { icon: "FaUsers", title: "Events & Expos", text: "High-tech attraction for lead generation and brand awareness." },
      ],
    },
  },
};
