// Hand-crafted narrative + interactive layout for individual products.
// Image fields are intentionally left as PLACEHOLDERS (not the current database
// photos) so real photography/renders can be dropped in later without touching
// the layout or copy. Each placeholder describes what should go there.
//
// Every entry follows the same shape (hook, philosophy, hero, stats, tabs,
// bento, view360, useCases or compare, credibility) but the content itself is
// specific to what that product actually does — nothing here is copy-pasted
// across products, only the structure is shared.

const STANDARD_360 = {
  label: "360° rotation set — 24–36 sequential studio shots, 10° apart",
  frames: [],
};

export const PRODUCT_STORIES = {
  guidebot: {
    videoIntro: {
      eyebrow: "Meet GuideBot",
      title: "The First Face Your Guests Meet",
      subtitle:
        "An autonomous host that greets, guides, and never clocks out — running the floor while your team focuses on the guests who need them most.",
      video: "/GuideBotIntro.mp4",
    },

    hook: "The first face your guests meet — and the smartest one on the team.",

    philosophy:
      "Every decision — from the shape of its face to the sound of its voice — was made to answer one question: how do you make a machine feel like part of the team, not just another screen in the lobby?",

    hero: {
      placeholder: { label: "Hero shot — GuideBot, front-facing studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 18, title: "Expressive Face Display", text: "10-inch LCD \"digital face\" reacts and welcomes guests with personality." },
        { x: 50, y: 48, title: "22-inch Interactive Signage", text: "Full-HD touchscreen for menus, maps, ads, and games." },
        { x: 50, y: 85, title: "Safety-Ring Sensor Array", text: "ROS with SLAM navigation reads the room and avoids obstacles in real time." },
      ],
    },

    stats: [
      { value: 9, suffix: "h", label: "Continuous runtime", icon: "FaClock" },
      { value: 22, suffix: "\"", label: "HD interactive touchscreen", icon: "FaAudioDescription" },
      { value: 2, suffix: "", label: "Native languages — EN / AR", icon: "FaComments" },
      { value: 80, suffix: "kg", label: "Total operating weight", icon: "FaWeightHanging" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaComments",
        title: "Bilingual AI Engine",
        text: "Fluent, natural conversation in English and Egyptian Arabic — tuned for busy, noisy spaces.",
        placeholder: { label: "Close-up — face display speaking", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaRoute", title: "ROS + SLAM Navigation", text: "Safety-Ring sensor fusion and SLAM mapping for obstacle-aware movement across almost any indoor surface." },
      { size: "normal", icon: "FaClock", title: "9-Hour Runtime", text: "A full shift on one overnight charge." },
      {
        size: "wide",
        icon: "FaAudioDescription",
        title: "22-inch Interactive Display",
        text: "Menus, maps, ads, and games on a full-HD touchscreen — paired with a 10-inch expressive face.",
        placeholder: { label: "Screen detail — touchscreen menu", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaGamepad", title: "Lead Capture & \"Spin & Win\"", text: "Turns casual encounters into captured leads, game plays, and instant photo-booth moments." },
      {
        size: "wide",
        icon: "FaWalking",
        title: "Ambient Interaction",
        text: "Continuously roams the floor — and the moment someone steps into its path, it pauses to engage, play, and capture leads, then resumes its route on its own.",
      },
      { size: "normal", icon: "FaWifi", title: "Wi-Fi / Bluetooth / LTE", text: "Stays online and synced, with Bluetooth pairing and LTE as a backup connection." },
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
        summary: "ROS + SLAM, Safety-Ring first.",
        placeholder: { label: "Action shot — GuideBot navigating an open floor", ratio: "4 / 3" },
        text:
          "Powered by ROS with SLAM navigation and a Safety-Ring sensor array, GuideBot maps a facility once and then continuously roams it — finding its way across marble, tile, low-pile carpet, cement, and wood without missing a step, and without needing to stop at fixed destination points.\n\nIt threads through aisles as narrow as 80 cm at a controlled, safety-adjustable pace of up to 1.0 m/s. And when someone steps directly into its path, it doesn't just avoid them — it pauses its route entirely to engage, play a game, or capture a lead, then quietly resumes roaming once the moment is over.",
      },
      {
        title: "Built for a Full Day's Work",
        summary: "9-hour shifts, one overnight charge.",
        placeholder: { label: "Detail shot — charging dock overnight", ratio: "4 / 3" },
        text:
          "GuideBot runs a full shift on a single overnight charge — nine hours of continuous operation, plugged in after closing and ready before the doors open.\n\nAt 80 kg, it's substantial enough to feel stable on the floor, yet light enough to reposition without special equipment. Wi-Fi and Bluetooth keep it synced with your systems, and an optional LTE connection keeps it online even if the in-house network goes down.",
      },
    ],

    compare: {
      title: "GuideBot or GuideBot Pro?",
      description: "Both are built on the same platform. Pro adds a bigger display and active guest escorting for larger, higher-traffic facilities.",
      rows: [
        { label: "Main Display", a: "22\" HD Touchscreen", b: "27\" Ultra-Wide HD Touchscreen" },
        { label: "Guest Escorting", a: "Interactive on-screen guidance", b: "Point-to-point Waypoint Navigation" },
        { label: "Safety Sensors", a: "Safety-Ring sensor array", b: "360° Safety-Ring sensor array" },
        { label: "Continuous Runtime", a: "9 hours", b: "9 hours" },
      ],
      bLabel: "GuideBot Pro",
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

  "guidebot-pro": {
    hook: "Not just a host — an escort. GuideBot Pro walks your guests all the way there.",

    philosophy:
      "A screen can tell you where to go. GuideBot Pro actually takes you — because in a large or unfamiliar space, being told the direction isn't the same as being led there.",

    hero: {
      placeholder: { label: "Hero shot — GuideBot Pro, front-facing studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 15, title: "27-inch Ultra-Wide Display", text: "A massive HD canvas for maps, media, and interfaces." },
        { x: 50, y: 48, title: "Waypoint Navigation", text: "Point-to-point autonomous routing — GuideBot Pro walks guests to the destination." },
        { x: 50, y: 85, title: "360° Safety-Ring Sensors", text: "Real-time obstacle detection for confident movement in crowded spaces." },
      ],
    },

    stats: [
      { value: 27, suffix: "\"", label: "Ultra-wide HD display" },
      { value: 9, suffix: "h", label: "Continuous runtime" },
      { value: 2, suffix: "", label: "Native languages — EN / AR" },
      { value: 0.5, decimals: 1, suffix: " m/s", label: "Adjustable top speed" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaRoute",
        title: "Point-to-Point Waypoint Navigation",
        text: "Walks guests directly to a shop, office, or booth — then returns on its own.",
        placeholder: { label: "Action shot — waypoint escorting", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaAudioDescription", title: "27-inch Ultra-Wide Display", text: "The largest canvas in the GuideBot lineup." },
      { size: "normal", icon: "FaComments", title: "Native Bilingual AI", text: "Fluent English and Egyptian Arabic." },
      {
        size: "wide",
        icon: "FaCamera",
        title: "360° Safety-Ring Sensors",
        text: "Real-time obstacle detection for confident movement in crowds.",
        placeholder: { label: "Sensor detail — safety ring", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaGamepad", title: "Lead Capture & Photo Booth", text: "Spin & Win promotions and instant branded photos, emailed on the spot." },
      { size: "normal", icon: "FaChargingStation", title: "Auto-Docking", text: "Returns to standby on its own after every escort." },
    ],

    tabs: [
      {
        title: "An Active Escort, Not Just a Sign",
        summary: "Point-to-point Waypoint Navigation.",
        placeholder: { label: "Action shot — GuideBot Pro escorting a guest", ratio: "4 / 3" },
        text:
          "GuideBot Pro isn't a digital sign that waits to be read — it's an active operational asset that plans optimal paths and physically escorts visitors to their destination.\n\nWaypoint Navigation guides guests step by step to a specific shop, office, clinic, or exhibition booth, then automatically docks and returns to its reception standby post once the handoff is complete.",
      },
      {
        title: "Built to Be the Biggest Voice in the Room",
        summary: "27-inch screen, bilingual AI, safety-first sensing.",
        placeholder: { label: "Detail shot — 27-inch display", ratio: "4 / 3" },
        text:
          "A dual-language AI engine converses fluently in both English and natural Egyptian Arabic, communicating without the usual barriers.\n\nOperating on ROS with real-time sensing, GuideBot Pro detects dynamic obstacles and adjusts its path smoothly — even in crowded, unpredictable spaces.\n\nIt's also a marketing asset: capturing high-intent leads, running \"Spin & Win\" promotions, and sending branded photo-booth pictures straight to visitors' inboxes.",
      },
      {
        title: "Display & Multimedia, Scaled Up",
        summary: "10-inch face, 27-inch signage, dual speakers.",
        placeholder: { label: "Close-up — face display detail", ratio: "4 / 3" },
        text:
          "A 10-inch LCD \"digital face\" handles emotional expression and status alerts, while a 27-inch full-HD touchscreen carries menus, games, and interactive content.\n\nDual 10W high-fidelity speakers keep announcements and docent commentary clear, even in busy commercial spaces.",
      },
    ],

    compare: {
      title: "GuideBot Pro or GuideBot?",
      description: "Pro adds a bigger display and active guest escorting for larger, higher-traffic facilities.",
      rows: [
        { label: "Main Display", a: "27\" Ultra-Wide HD Touchscreen", b: "22\" HD Touchscreen" },
        { label: "Guest Escorting", a: "Point-to-point Waypoint Navigation", b: "Interactive on-screen guidance" },
        { label: "Safety Sensors", a: "360° Safety-Ring sensor array", b: "Multi-sensor fusion" },
        { label: "Continuous Runtime", a: "9 hours", b: "9 hours" },
      ],
      bLabel: "GuideBot",
      linkTo: "/products/guidebot",
      linkLabel: "See GuideBot",
    },

    credibility: "GuideBot Pro is designed, engineered, and assembled by Robox Industries — request a hands-on demonstration with the engineering team.",

    useCases: {
      title: "For Spaces Where Guests Need Leading, Not Just Pointing",
      description: "GuideBot Pro is built for larger or higher-traffic facilities than the standard GuideBot.",
      placeholder: { label: "Wide shot — GuideBot Pro escorting a guest", ratio: "21 / 9" },
      items: [
        { icon: "FaHotel", title: "Large Hotels & Resorts", text: "Escorts guests through sprawling lobbies to rooms or amenities." },
        { icon: "FaStore", title: "Flagship Retail & Malls", text: "Walks shoppers directly to a specific store or department." },
        { icon: "FaBuilding", title: "Corporate Campuses", text: "Guides visitors across large office floors to the right meeting room." },
        { icon: "FaHospital", title: "Hospitals & Large Clinics", text: "Escorts patients to the correct department, reducing wayfinding stress." },
      ],
    },
  },

  adbot: {
    hook: "Billboards wait for an audience. Adbot goes and finds one.",

    philosophy:
      "A screen that never moves is easy to walk past. Every part of Adbot exists to make that impossible — to put your message where the people already are, not the other way around.",

    hero: {
      placeholder: { label: "Hero shot — Adbot, dual-screen front view, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 20, title: "Dual 40-inch 4K Screens", text: "Two ultra-HD displays run video, images, or interactive campaigns on both sides at once." },
        { x: 50, y: 55, title: "230° Obstacle Detection", text: "A wide field of view spots people and objects up to 6 meters out, adjusting its path smoothly." },
        { x: 50, y: 88, title: "124,000 mAh Battery", text: "Enough capacity for a full day of roaming, even during peak hours." },
      ],
    },

    stats: [
      { value: 40, suffix: "\"", label: "Dual 4K displays" },
      { value: 9, suffix: "h", label: "Continuous operation" },
      { value: 230, suffix: "°", label: "Obstacle-detection field of view" },
      { value: 6, suffix: "m", label: "Detection range" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaBullhorn",
        title: "Dual 4K Advertising Screens",
        text: "Two 40-inch Ultra-HD displays run video or interactive campaigns, visible from both sides at once.",
        placeholder: { label: "Close-up — dual screens playing a campaign", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaWalking", title: "AI-Driven SLAM Navigation", text: "Builds and updates its own map of the venue in real time." },
      { size: "normal", icon: "FaBatteryFull", title: "124,000 mAh Battery", text: "Built for a full day roaming the floor." },
      {
        size: "wide",
        icon: "FaChartLine",
        title: "Real-Time Analytics Dashboard",
        text: "Track impressions, active slots, and campaign performance from one screen.",
        placeholder: { label: "Screen detail — analytics dashboard", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaClock", title: "Scheduled Campaigns", text: "Launch different ads for different times of day, automatically." },
      { size: "normal", icon: "FaMapMarkedAlt", title: "230° Obstacle Awareness", text: "Sees people and objects up to 6 meters out." },
    ],

    tabs: [
      {
        title: "Moving Beats Static",
        summary: "60% higher engagement than fixed displays.",
        placeholder: { label: "Action shot — Adbot roaming a mall atrium", ratio: "4 / 3" },
        text:
          "Moving screens capture attention significantly better than traditional static displays — engagement climbs by roughly 60% simply because the ad comes to the viewer instead of waiting for them.\n\nThat mobility also opens new revenue streams: promote your own campaigns, sell ad space to mall tenants, or rent time slots to outside agencies.\n\nSeasonal themes, contests, and gamified ads turn a glance into a memory — backed by real-time audience analytics that prove exactly how well each campaign performs.",
      },
      {
        title: "Navigates Crowds Like It Was Born There",
        summary: "AI-driven SLAM, safety-first sensing.",
        placeholder: { label: "Detail shot — sensor array in motion", ratio: "4 / 3" },
        text:
          "Adbot builds a live map of your venue as it moves, always knowing exactly where it is and where it needs to go next.\n\nA 230° field of view and 6-meter detection range let it spot moving people and stationary objects early, adjusting its path smoothly instead of stopping short.\n\nWhile static ads stay in one corner, Adbot covers every zone of a mall or exhibition floor — and a high-capacity 124,000 mAh battery keeps it active straight through peak hours.",
      },
      {
        title: "One Dashboard, Every Screen",
        summary: "Schedule, upload, and analyze centrally.",
        placeholder: { label: "Screen detail — campaign dashboard", ratio: "4 / 3" },
        text:
          "Robox's ad management software puts you in command of every pixel Adbot displays.\n\nSchedule campaigns to run at specific times for specific audiences, upload video, images, or full interactive pages, and track performance on a real-time analytics dashboard.\n\nManaging a fleet across multiple venues? Control all of it — and every audience type — from one intuitive interface.",
      },
    ],

    credibility: "Adbot is designed, engineered, and assembled by Robox Industries, with a dedicated ad-management platform built and supported in-house.",

    useCases: {
      title: "Everywhere Your Audience Already Is",
      description: "Adbot goes where foot traffic happens — no fixed installation required.",
      placeholder: { label: "Wide shot — Adbot roaming a mall atrium", ratio: "21 / 9" },
      items: [
        { icon: "FaStore", title: "Malls & Retail", text: "Roams the floor promoting tenants or your own campaigns." },
        { icon: "FaUsers", title: "Exhibitions & Trade Shows", text: "An interactive, mobile presence on the show floor." },
        { icon: "FaBuilding", title: "Corporate Venues", text: "Announcements and branding that move with the event." },
        { icon: "FaGamepad", title: "Seasonal Campaigns", text: "Ramadan themes, contests, and gamified promotions on demand." },
      ],
    },
  },

  "rfid-bot": {
    hook: "Inventory counts used to take a team all night. Now it takes one robot.",

    philosophy:
      "Manual stock counts are guesswork with a clipboard. RFID-Bot exists to replace that guesswork with a number you can trust — updated automatically, every night, without anyone touching a scanner.",

    hero: {
      placeholder: { label: "Hero shot — RFID-Bot, front-facing studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 15, title: "UHF RFID Reader Array", text: "Integrated high-performance readers scan up to 650 tags per second." },
        { x: 50, y: 50, title: "5-Meter Read Range", text: "Captures tags up to 5 meters away and 3 meters high — full shelf coverage without close contact." },
        { x: 50, y: 85, title: "Smart Obstacle Avoidance", text: "Emergency stop buttons and autonomous avoidance keep it safe around staff and customers." },
      ],
    },

    stats: [
      { value: 650, suffix: "", label: "Tags read per second" },
      { value: 5, suffix: "m", label: "Max read distance" },
      { value: 8, suffix: "h", label: "Battery life" },
      { value: 99.9, decimals: 1, suffix: "%", label: "Inventory accuracy" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaTags",
        title: "650 Tags Read Per Second",
        text: "A full shelf or rack scanned in seconds, not hours.",
        placeholder: { label: "Close-up — UHF RFID reader", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaRulerHorizontal", title: "5-Meter Read Range", text: "Covers tall racks without close contact." },
      { size: "normal", icon: "FaStop", title: "Smart Safety Stop", text: "Obstacle avoidance plus a physical emergency stop." },
      {
        size: "wide",
        icon: "FaNetworkWired",
        title: "Real-Time Data Sync",
        text: "Every scan lands in your WMS or ERP instantly over Wi-Fi or Ethernet.",
        placeholder: { label: "Screen detail — live inventory sync", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaWarehouse", title: "Built for Retail, Warehouse & Logistics", text: "Indoor operation from 0°C to 50°C, day or night." },
      { size: "normal", icon: "FaChargingStation", title: "4–8 Hour Charge", text: "Back on the floor the same day." },
    ],

    tabs: [
      {
        title: "Why Manual Counts Don't Scale",
        summary: "Slow, labor-intensive, and error-prone.",
        placeholder: { label: "Wide shot — RFID-Bot scanning a warehouse aisle", ratio: "4 / 3" },
        text:
          "Traditional inventory management is slow, labor-intensive, and prone to human error — manual scanning alone is historically only about 65% accurate.\n\nRFID-Bot replaces that process with dynamic, real-time data collection: near-perfect accuracy, reading thousands of tags per minute, with far less disruption to daily operations.\n\nThe team that used to spend a night counting shelves is now free to focus on customers and the tasks that actually need a person.",
      },
      {
        title: "Built Around a Serious RFID Reader",
        summary: "650 tags/second, 5-meter range.",
        placeholder: { label: "Detail shot — RFID reader unit", ratio: "4 / 3" },
        text:
          "At its core is a high-performance UHF RFID reader capable of scanning up to 650 tags every second, with a read range of up to 5 meters and a capture height of 3 meters — enough to cover a full retail shelf or warehouse rack in one pass.\n\nEvery read syncs instantly over Wi-Fi or Ethernet to your existing management systems, so the data is usable the moment it's collected.",
      },
      {
        title: "Navigates the Floor Safely, On Its Own",
        summary: "Autonomous, obstacle-aware, always on schedule.",
        placeholder: { label: "Action shot — navigating around shelving", ratio: "4 / 3" },
        text:
          "Intelligent autonomous navigation lets RFID-Bot map its environment and plan optimal scanning routes on its own, working smoothly around staff, customers, and fixtures.\n\nSmart obstacle avoidance and physical emergency-stop buttons keep operation safe, whether it's running a cycle count overnight or during open hours.",
      },
    ],

    credibility:
      "RFID-Bot was developed by Robox Industries in strategic partnership with RFID Egypt, combining Robox's autonomous mobile platform with RFID Egypt's UHF tracking technology — a collaboration that reaches 99.9% inventory accuracy without human intervention.",

    useCases: {
      title: "Wherever Stock Needs Counting",
      description: "From a single storeroom to a full distribution center.",
      placeholder: { label: "Wide shot — RFID-Bot scanning a warehouse aisle", ratio: "21 / 9" },
      items: [
        { icon: "FaStore", title: "Retail Stores", text: "Nightly cycle counts without closing early." },
        { icon: "FaWarehouse", title: "Warehouses", text: "Full-rack scans that used to take a team all shift." },
        { icon: "FaTruck", title: "Logistics Centers", text: "Location-accurate data for faster fulfillment." },
        { icon: "FaBoxOpen", title: "Distribution Hubs", text: "Catch misplaced or missing stock before it becomes a shortage." },
      ],
    },
  },

  delbot: {
    hook: "The tray shows up. The line doesn't.",

    philosophy:
      "A delivery robot only works if people trust it near them. Every choice in Delbot — the rounded chassis, the calm voice prompts, the quiet stop — is about making automation feel considerate, not intrusive.",

    hero: {
      placeholder: { label: "Hero shot — Delbot, front-facing studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 18, title: "10-inch Interactive Screen", text: "High-resolution display with voice broadcasts guides guests through pickup." },
        { x: 50, y: 50, title: "3 Detachable Trays", text: "Modular, hygienic trays carry up to 30 kg total, 10 kg per layer." },
        { x: 50, y: 85, title: "230° Obstacle Detection", text: "Up to 3,000 detections per minute with a 0.25-second response time." },
      ],
    },

    stats: [
      { value: 12, suffix: "h", label: "Hours of daily working life" },
      { value: 30, suffix: "kg", label: "Total carrying capacity" },
      { value: 65, suffix: "cm", label: "Minimum aisle width" },
      { value: 0.25, decimals: 2, suffix: "s", label: "Obstacle response time" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaBoxOpen",
        title: "3-Layer Modular Trays",
        text: "Detachable, hygienic, up to 30 kg total capacity.",
        placeholder: { label: "Close-up — detachable delivery tray", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaClock", title: "12-Hour Working Day", text: "One 8-hour charge, a full day of deliveries." },
      { size: "normal", icon: "FaRulerHorizontal", title: "65cm Aisle Access", text: "Fits where space is tight." },
      {
        size: "wide",
        icon: "FaStop",
        title: "0.25-Second Obstacle Response",
        text: "3,000 detections per minute across a 230° field of view.",
        placeholder: { label: "Sensor detail — obstacle detection in action", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaWifi", title: "Independent Wi-Fi Network", text: "Runs on its own internal access point — no dependency on site Wi-Fi." },
      { size: "normal", icon: "FaAudioDescription", title: "Guided Pickup", text: "Voice broadcasts and on-screen prompts guide every handoff." },
    ],

    tabs: [
      {
        title: "Designed to Be Trusted, Not Just Autonomous",
        summary: "Modular, hygienic, easy to set up.",
        placeholder: { label: "Detail shot — tray and touchscreen", ratio: "4 / 3" },
        text:
          "Delbot's modular chassis stays stable under load, and its detachable trays lift off in seconds for cleaning — no tools required.\n\nA 10-inch screen and intelligent voice broadcasts guide guests through pickup step by step, so the interaction feels considerate rather than robotic.\n\nSetup is just as simple: an intuitive on-screen interface gets it running with no code, and a single 8-hour charge covers up to 12 hours of continuous work.",
      },
      {
        title: "Precision in Motion",
        summary: "3D perception, autonomous mapping, fast reflexes.",
        placeholder: { label: "Action shot — navigating a narrow aisle", ratio: "4 / 3" },
        text:
          "Delbot finds and localizes itself autonomously, running deliveries from its home base to the target without step-by-step supervision.\n\nAdvanced obstacle avoidance covers both static and dynamic obstacles — including low-lying or overhanging ones — at up to 3,000 detections per minute across a 230-degree field of view.\n\nWith a response time as short as 0.25 seconds and the ability to navigate aisles just 65 cm wide, it moves through tight, busy spaces with confidence.",
      },
    ],

    credibility: "Delbot is designed, engineered, and assembled by Robox Industries, built to operate safely alongside guests and staff from day one.",

    useCases: {
      title: "Wherever a Handoff Needs to Feel Effortless",
      description: "Built for service environments where every delivery is a small moment of hospitality.",
      placeholder: { label: "Wide shot — Delbot delivering in a hotel corridor", ratio: "21 / 9" },
      items: [
        { icon: "FaHotel", title: "Hotels & Resorts", text: "Room service and amenities, delivered quietly." },
        { icon: "FaStore", title: "Restaurants & F&B", text: "Food runs from kitchen to table without the wait." },
        { icon: "FaHospital", title: "Hospitals & Clinics", text: "Medication and supplies moved on a predictable schedule." },
        { icon: "FaBuilding", title: "Offices & Business Centers", text: "Mail, packages, and refreshments — on demand." },
      ],
    },
  },

  "armbot-pi": {
    hook: "A robotic arm that talks back, sees what it grabs, and never stops teaching.",

    philosophy:
      "Most educational arms teach motion. ArmBot was built to teach thinking — pairing precise mechanics with real AI, so students go straight from theory to a robot that can see, decide, and respond.",

    hero: {
      placeholder: { label: "Hero shot — ArmBot PI, studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 15, title: "6-DOF Precision Arm", text: "High-torque bus servos deliver 0.29° position resolution for industrial-grade accuracy." },
        { x: 50, y: 50, title: "Raspberry Pi 5 Brain", text: "Runs ROS 2 Jazzy Jalisco and real AI models at the edge." },
        { x: 50, y: 85, title: "2K Vision System", text: "Tracks, sorts, and reacts to color, position, and QR codes in real time." },
      ],
    },

    stats: [
      { value: 6, suffix: "", label: "Degrees of freedom" },
      { value: 0.29, decimals: 2, suffix: "°", label: "Position resolution" },
      { value: 400, suffix: "mm", label: "Max reach" },
      { value: 25, suffix: " kg·cm", label: "Servo torque" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaRobot",
        title: "6-DOF Precision Arm",
        text: "High-torque servos with 0.29° resolution — industrial accuracy at a lab scale.",
        placeholder: { label: "Close-up — 6-DOF arm in motion", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaLaptopCode", title: "Raspberry Pi 5 Onboard", text: "Runs ROS 2 and AI models without an external PC." },
      { size: "normal", icon: "FaCamera", title: "2K Vision System", text: "Real-time tracking and object recognition." },
      {
        size: "wide",
        icon: "FaComments",
        title: "Natural Language Commands",
        text: "Speak a task in plain English — the arm executes it.",
        placeholder: { label: "Screen detail — voice command interface", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaMicrochip", title: "Open Software Stack", text: "ROS 2, MoveIt 2, OpenCV, and Python 3 — fully modifiable." },
      { size: "normal", icon: "FaWeightHanging", title: "250g Payload", text: "At a full 400mm extension." },
    ],

    tabs: [
      {
        title: "Industrial-Grade Precision, Classroom-Ready",
        summary: "Raspberry Pi 5, high-torque servos.",
        placeholder: { label: "Detail shot — arm joints and servos", ratio: "4 / 3" },
        text:
          "ArmBot runs on a Raspberry Pi 5 (8GB), fast enough for ROS 2 Jazzy Jalisco and real AI models without a separate workstation.\n\nHigh-torque bus servos — up to 25 kg·cm — deliver 0.29° position resolution, the kind of accuracy usually reserved for industrial arms.\n\nEverything on top is open: ROS 2, MoveIt 2, OpenCV, and Python 3, ready to modify from day one.",
      },
      {
        title: "An Arm That Understands Plain Language",
        summary: "Voice commands, vision feedback, text-to-speech.",
        placeholder: { label: "Action shot — voice command demo", ratio: "4 / 3" },
        text:
          "Students can command the arm with natural phrases like \"pick the red cube and place it in the green bin,\" using an external microphone and speech recognition.\n\nThe arm talks back, too — describing what its camera sees, from object color and position to QR codes — and uses text-to-speech for status alerts and responses.",
      },
      {
        title: "Vision That Makes Its Own Decisions",
        summary: "Tracking, sorting, and QR recognition.",
        placeholder: { label: "Close-up — color sorting demo", ratio: "4 / 3" },
        text:
          "The onboard vision kit gives ArmBot real-time visual servoing — following moving objects instead of just reaching for fixed points.\n\nIt sorts and stacks based on color, ID, or spatial position, and recognizes QR codes for logistics and sorting simulations, turning a single arm into a flexible test bed for computer-vision coursework.",
      },
    ],

    credibility: "ArmBot is designed, engineered, and assembled by Robox Industries, built on a fully open ROS 2 software stack for classrooms and labs.",

    useCases: {
      title: "Built for the Lab, Not Just the Demo Table",
      description: "ArmBot is a terminal for mastering mechatronics and AI, not a toy.",
      placeholder: { label: "Wide shot — ArmBot on a lab bench", ratio: "21 / 9" },
      items: [
        { icon: "FaGraduationCap", title: "University Robotics Labs", text: "A hands-on platform for mechatronics and controls coursework." },
        { icon: "FaFlask", title: "Research Projects", text: "An open stack ready for custom manipulation research." },
        { icon: "FaUsers", title: "Robotics Clubs & Competitions", text: "A flexible base for pick-and-place challenges." },
        { icon: "FaCogs", title: "Vocational & STEM Training", text: "A real path from theory into applied robotics." },
      ],
    },
  },

  "carbot-orin": {
    hook: "The same platform researchers use for real autonomy — sized for a classroom.",

    philosophy:
      "Nav2 and SLAM are easy to explain on a slide and hard to really understand until something moves. CarBot exists to make that motion available on a lab bench, not just in a simulator.",

    hero: {
      placeholder: { label: "Hero shot — CarBot Orin, studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 15, title: "NVIDIA Jetson Orin Nano Super", text: "1024-core GPU and a 6-core Arm CPU for real onboard AI." },
        { x: 50, y: 50, title: "RPLIDAR + Depth Camera", text: "360° LiDAR up to 12m, paired with 3D depth sensing." },
        { x: 50, y: 85, title: "Four-Wheel Mecanum Drive", text: "Differential or omnidirectional movement, up to 1 m/s." },
      ],
    },

    stats: [
      { value: 12, suffix: "m", label: "LiDAR range" },
      { value: 1024, suffix: "", label: "GPU cores (Jetson Orin)" },
      { value: 5, suffix: "kg", label: "Max payload" },
      { value: 3, suffix: "h", label: "Continuous runtime" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaMicrochip",
        title: "NVIDIA Jetson Orin Nano Super",
        text: "1024-core GPU and 6-core CPU for real onboard AI.",
        placeholder: { label: "Close-up — Jetson Orin module", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaMapMarkedAlt", title: "360° LiDAR, 12m Range", text: "Full-room mapping in real time." },
      { size: "normal", icon: "FaCar", title: "Mecanum + Differential Drive", text: "Omnidirectional or standard movement." },
      {
        size: "wide",
        icon: "FaRoute",
        title: "Full Nav2 Stack Pre-Installed",
        text: "SLAM Toolbox, AMCL, and RTAB-Map, ready to run.",
        placeholder: { label: "Screen detail — Nav2 path planning", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaCamera", title: "AI & Vision Ready", text: "Object detection, tracking, and scene recognition out of the box." },
      { size: "normal", icon: "FaLaptopCode", title: "SSH / VNC Remote Access", text: "Drive and debug from your own laptop." },
    ],

    tabs: [
      {
        title: "A Real Onboard Computer, Not a Toy Controller",
        summary: "Jetson Orin Nano Super, Ubuntu, ROS 2.",
        placeholder: { label: "Detail shot — onboard computer and touchscreen", ratio: "4 / 3" },
        text:
          "CarBot's onboard computer is an NVIDIA Jetson Orin Nano Super — a 1024-core Ampere GPU with 32 Tensor cores and a 6-core Arm CPU, running Ubuntu 22.04 with 8GB of memory and 256GB of storage.\n\nAn integrated 7-inch touchscreen gives students a direct window into what the robot is doing, in real time, without a separate laptop.",
      },
      {
        title: "Sensors Built for Serious Mapping",
        summary: "360° LiDAR, depth camera, IMU.",
        placeholder: { label: "Detail shot — LiDAR and depth camera", ratio: "4 / 3" },
        text:
          "A Slamtec RPLIDAR A1 scans a full 360 degrees up to 12 meters out, while an Orbbec Astra Pro depth camera adds 3D vision through structured light.\n\nAn absolute-orientation IMU and high-precision Hall-effect encoders round out the picture, giving CarBot the same class of sensing used in real research platforms.",
      },
      {
        title: "The Full ROS 2 Navigation Stack, Ready to Run",
        summary: "Nav2, SLAM Toolbox, RTAB-Map.",
        placeholder: { label: "Screen detail — RViz visualization", ratio: "4 / 3" },
        text:
          "CarBot ships with the Nav2 stack for path planning and recovery behaviors, SLAM Toolbox and AMCL for 2D mapping and localization, and RTAB-Map for dense 3D point clouds.\n\nRemote access over SSH and VNC means students can drive, debug, and visualize with RViz or rqt from their own laptop — with Python and C++ drivers ready for teleoperation or custom code.",
      },
    ],

    compare: {
      title: "CarBot or ManiBot Orin?",
      description: "Same navigation platform. ManiBot adds a 6-DOF arm for manipulation research.",
      rows: [
        { label: "Base Platform", a: "Jetson Orin Nano Super, full Nav2 stack", b: "Identical Jetson Orin Nano Super platform" },
        { label: "Manipulation", a: "Not included", b: "6-DOF ArmBot arm, 250g payload" },
        { label: "Weight", a: "6 kg + 5 kg payload", b: "8 kg" },
        { label: "Best for", a: "Pure navigation & SLAM coursework", b: "Manipulation + navigation research" },
      ],
      bLabel: "ManiBot Orin",
      linkTo: "/products/manibot-orin",
      linkLabel: "See ManiBot Orin",
    },

    credibility: "CarBot Orin is designed, engineered, and assembled by Robox Industries on a fully open ROS 2 Humble stack.",

    useCases: {
      title: "Where CarBot Earns Its Keep",
      description: "A research-grade mobile base, scaled for teaching.",
      placeholder: { label: "Wide shot — CarBot Orin on a lab floor", ratio: "21 / 9" },
      items: [
        { icon: "FaGraduationCap", title: "University Robotics Courses", text: "Hands-on ROS 2, SLAM, and Nav2 coursework." },
        { icon: "FaFlask", title: "Research Labs", text: "A ready platform for navigation and sensor-fusion research." },
        { icon: "FaUsers", title: "Robotics Competitions", text: "A capable base for autonomous-navigation challenges." },
      ],
    },
  },

  "manibot-orin": {
    hook: "Everything CarBot can do — plus an arm that can actually pick things up.",

    philosophy:
      "Navigation and manipulation are usually taught as two separate robots. ManiBot exists to close that gap — one mobile base, one arm, one integrated control system.",

    hero: {
      placeholder: { label: "Hero shot — ManiBot Orin, studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 15, title: "6-DOF Manipulator Arm", text: "250g payload, 400mm reach, ±0.5mm repeatability." },
        { x: 50, y: 50, title: "NVIDIA Jetson Orin Nano Super", text: "Same 1024-core GPU platform as CarBot Orin." },
        { x: 50, y: 85, title: "360° LiDAR + Depth Camera", text: "Full sensor suite for simultaneous navigation and manipulation." },
      ],
    },

    stats: [
      { value: 6, suffix: "", label: "Arm degrees of freedom" },
      { value: 400, suffix: "mm", label: "Arm working radius" },
      { value: 8, suffix: "kg", label: "Total platform weight" },
      { value: 3, suffix: "h", label: "Continuous runtime" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaRobot",
        title: "Mobile Manipulation, Integrated",
        text: "A 6-DOF arm built into the same power and control system as the base.",
        placeholder: { label: "Close-up — arm and mobile base together", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaWeightHanging", title: "250g Payload", text: "At a 400mm working radius." },
      { size: "normal", icon: "FaMapMarkedAlt", title: "Full Nav2 Stack", text: "Same SLAM and path-planning as CarBot Orin." },
      {
        size: "wide",
        icon: "FaRoute",
        title: "Navigate, Then Manipulate",
        text: "Drive to a target, then pick and place — one integrated workflow.",
        placeholder: { label: "Screen detail — task sequence", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaCamera", title: "Vision-Guided Grasping", text: "Color, ID, and QR-code recognition drive what the arm picks up." },
      { size: "normal", icon: "FaComments", title: "Voice & Gesture Control", text: "Command the whole platform hands-free." },
    ],

    tabs: [
      {
        title: "One Mobile Base, Full Manipulation",
        summary: "The ArmBot system, integrated.",
        placeholder: { label: "Action shot — arm reaching from mobile base", ratio: "4 / 3" },
        text:
          "ManiBot integrates the ArmBot arm as its primary manipulation unit, turning the mobile base into a genuine mobile manipulator.\n\nThe arm delivers 6 degrees of freedom, a 250g payload at a 400mm working radius, and ±0.5mm repeatability — communicating over Wi-Fi and fully integrated into the robot's own power and control system.",
      },
      {
        title: "The Same Serious Navigation Platform",
        summary: "Jetson Orin, Nav2, SLAM Toolbox.",
        placeholder: { label: "Detail shot — sensor suite", ratio: "4 / 3" },
        text:
          "Under the arm sits the same research-grade platform as CarBot Orin: an NVIDIA Jetson Orin Nano Super, a 360° RPLIDAR, an Orbbec depth camera, and the full ROS 2 Nav2 stack.\n\nThat means ManiBot can map a room, plan a path, and avoid obstacles in 3D — all before it ever reaches for anything.",
      },
      {
        title: "Pick-and-Place, End to End",
        summary: "Navigate, grab, deliver — one workflow.",
        placeholder: { label: "Action shot — pick-and-place demo", ratio: "4 / 3" },
        text:
          "Students can chain navigation and manipulation into a single workflow: drive to a location, identify an object with color or QR-code recognition, then pick it up and place it elsewhere — a simplified model of a real automated logistics chain.\n\nVoice commands, gesture recognition, and emotion recognition round out the human-robot interaction side of the platform.",
      },
    ],

    compare: {
      title: "ManiBot or CarBot Orin?",
      description: "Same navigation platform. CarBot is the lighter, arm-free option for pure mobility research.",
      rows: [
        { label: "Base Platform", a: "Identical Jetson Orin Nano Super platform", b: "Jetson Orin Nano Super, full Nav2 stack" },
        { label: "Manipulation", a: "6-DOF ArmBot arm, 250g payload", b: "Not included" },
        { label: "Weight", a: "8 kg", b: "6 kg + 5 kg payload" },
        { label: "Best for", a: "Manipulation + navigation research", b: "Pure navigation & SLAM coursework" },
      ],
      bLabel: "CarBot Orin",
      linkTo: "/products/carbot-orin",
      linkLabel: "See CarBot Orin",
    },

    credibility: "ManiBot Orin is designed, engineered, and assembled by Robox Industries, integrating the ArmBot manipulator into a fully open ROS 2 Humble platform.",

    useCases: {
      title: "Where ManiBot Earns Its Keep",
      description: "For coursework and research that needs more than just wheels.",
      placeholder: { label: "Wide shot — ManiBot Orin on a lab floor", ratio: "21 / 9" },
      items: [
        { icon: "FaGraduationCap", title: "Advanced Robotics Courses", text: "Manipulation, navigation, and sensor fusion in one platform." },
        { icon: "FaFlask", title: "Manipulation Research", text: "A real arm-on-a-base test rig for grasping and logistics studies." },
        { icon: "FaUsers", title: "Robotics Competitions", text: "Pick-and-place challenges without cobbling two robots together." },
      ],
    },
  },

  hexabot: {
    hook: "Six legs, eighteen joints, and a tripod gait that never loses its footing.",

    philosophy:
      "Wheels are efficient. Legs are honest — they show you exactly what balance and gait really mean. HexaBot exists to make that mechanical honesty something you can program, not just watch.",

    hero: {
      placeholder: { label: "Hero shot — HexaBot, studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 15, title: "18 Degrees of Freedom", text: "Three servos per leg for lifelike, precise movement." },
        { x: 50, y: 50, title: "Tripod Gait Stability", text: "Three legs stay grounded at all times for constant balance." },
        { x: 50, y: 85, title: "Ultrasonic Distance Sensing", text: "2–80cm range for autonomous obstacle avoidance." },
      ],
    },

    stats: [
      { value: 18, suffix: "", label: "Degrees of freedom" },
      { value: 6, suffix: "", label: "Legs, 3 DOF each" },
      { value: 80, suffix: "cm", label: "Max sensing range" },
      { value: 120, suffix: " min", label: "Battery runtime" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaSpider",
        title: "18-DOF Hexapod Platform",
        text: "Six legs, three servos each, built for lifelike bionic movement.",
        placeholder: { label: "Close-up — leg joints in motion", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaMicrochip", title: "Arduino-Based Control", text: "Standard C/C++, fully open source." },
      { size: "normal", icon: "FaRuler", title: "2–80cm Sensing", text: "Ultrasonic obstacle detection." },
      {
        size: "wide",
        icon: "FaGamepad",
        title: "Wireless Gamepad Control",
        text: "Instant, low-latency manual driving whenever you want it.",
        placeholder: { label: "Action shot — gamepad control", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaCogs", title: "Expandable by Design", text: "A reinforced back bracket with mounting holes for new sensors or electronics." },
      { size: "normal", icon: "FaBatteryFull", title: "60–120 Min Runtime", text: "Lithium battery, field-ready." },
    ],

    tabs: [
      {
        title: "Stability by Design",
        summary: "Tripod gait, metal-geared servos.",
        placeholder: { label: "Action shot — HexaBot walking", ratio: "4 / 3" },
        text:
          "HexaBot's tripod gait keeps three legs on the ground at all times, so it balances and maneuvers across uneven or shifting surfaces without hesitation.\n\nHigh-performance intelligent servos, reinforced with metal gears and precision potentiometers, deliver the accuracy to keep 18 joints moving in sync through walking, climbing, waving, and dancing.\n\nA rugged alloy back bracket with reserved mounting holes means new sensors or electronics bolt straight on — HexaBot is a platform to keep building on, not a finished toy.",
      },
      {
        title: "An Open Box, Not a Black Box",
        summary: "Arduino IDE, open-source code, gamepad control.",
        placeholder: { label: "Screen detail — gait configuration software", ratio: "4 / 3" },
        text:
          "Everything runs on standard Arduino IDE and C/C++ libraries, with clean, modifiable open-source code ready for immediate changes.\n\nA dedicated PC configuration tool lets you calibrate servos and build custom gaits visually, and a wireless gamepad gives instant, low-latency manual control whenever you want to drive rather than program.",
      },
    ],

    credibility: "HexaBot is designed, engineered, and assembled by Robox Industries on a fully open, Arduino-based software stack.",

    useCases: {
      title: "Where Legs Teach What Wheels Can't",
      description: "HexaBot is built for hands-on bionics and gait programming.",
      placeholder: { label: "Wide shot — HexaBot on a lab bench", ratio: "21 / 9" },
      items: [
        { icon: "FaGraduationCap", title: "Robotics & Bionics Courses", text: "A hands-on platform for legged-locomotion theory." },
        { icon: "FaFlask", title: "Research & Custom Builds", text: "Open mounting points for sensors and new experiments." },
        { icon: "FaUsers", title: "Clubs & STEM Outreach", text: "Walking, climbing, and dancing demos that get attention." },
      ],
    },
  },

  cruiser: {
    hook: "A UGV built to carry a real payload, not just survive a demo.",

    philosophy:
      "Most research robots make you choose between structural strength and software readiness. Cruiser exists to remove that trade-off — industrial lifting capacity and a native ROS 2 stack, in the same machine.",

    hero: {
      placeholder: { label: "Hero shot — Cruiser 2.0, studio render, 1:1", ratio: "1 / 1" },
      hotspots: [
        { x: 50, y: 15, title: "100kg Operational Payload", text: "Heavy enough for industrial collaborative arms or real logistics cargo." },
        { x: 50, y: 50, title: "360° LiDAR, 12m Range", text: "Full-room mapping for serious SLAM coursework." },
        { x: 50, y: 85, title: "Pre-Installed ROS 2 Humble", text: "Ubuntu 22.04, ready to develop on — no driver setup required." },
      ],
    },

    stats: [
      { value: 100, suffix: "kg", label: "Operational payload" },
      { value: 12, suffix: "m", label: "LiDAR range" },
      { value: 36, suffix: "V", label: "Battery system" },
      { value: 26.4, decimals: 1, suffix: "Ah", label: "Energy capacity" },
    ],

    view360: STANDARD_360,

    bento: [
      {
        size: "large",
        icon: "FaWeightHanging",
        title: "100kg Operational Payload",
        text: "Carries industrial cobots, sensor arrays, or real cargo.",
        placeholder: { label: "Close-up — payload deck", ratio: "16 / 9" },
      },
      { size: "normal", icon: "FaMapMarkedAlt", title: "360° LiDAR, 12m Range", text: "Full-room SLAM mapping." },
      { size: "normal", icon: "FaMicrochip", title: "Ubuntu 22.04 + ROS 2 Humble", text: "Pre-installed, ready to develop." },
      {
        size: "wide",
        icon: "FaRoute",
        title: "Full Nav2 Path Planning",
        text: "Global and local planners, configurable from day one.",
        placeholder: { label: "Screen detail — path planning", ratio: "16 / 9" },
      },
      { size: "wide", icon: "FaStop", title: "Active Safety Systems", text: "Rear emergency stop and front illumination LEDs." },
      { size: "normal", icon: "FaCarBattery", title: "36V Li-ion, 26.4Ah", text: "Serious power for a serious payload." },
    ],

    tabs: [
      {
        title: "Strong Enough for Real Industrial Loads",
        summary: "100kg payload, high-torque BLDC motors.",
        placeholder: { label: "Wide shot — Cruiser carrying a payload", ratio: "4 / 3" },
        text:
          "Cruiser is built to carry what research robots usually can't — full-sized industrial collaborative arms, heavy sensor arrays, or real logistics cargo, up to 100 kg.\n\nHigh-torque BLDC hub motors and a two-wheel differential drive with four passive caster wheels give it the stability to move that load predictably, indoors or in a lab environment.",
      },
      {
        title: "Power On, Start Developing",
        summary: "Ubuntu 22.04, ROS 2 Humble, pre-installed.",
        placeholder: { label: "Detail shot — onboard computing unit", ratio: "4 / 3" },
        text:
          "A dedicated onboard computing unit ships with Ubuntu 22.04 LTS and ROS 2 Humble already installed — no driver setup, no dependency chasing.\n\nA 360° LiDAR with 12-meter range and a 9-axis IMU give students everything they need to start mapping a space in the first session, not the third week.",
      },
      {
        title: "A Full Semester of Lab Modules, Built In",
        summary: "SLAM, Nav2, kinematics, HMI.",
        placeholder: { label: "Screen detail — SLAM map in progress", ratio: "4 / 3" },
        text:
          "Students drive Cruiser to actively scan complex indoor spaces and build precise 2D maps with the SLAM Toolbox, then move into the ROS 2 Nav2 stack to configure global and local planners for safe autonomous navigation.\n\nThe lab curriculum runs from kinematics modeling and sensor fusion through real-time mapping, path planning, and hands-on human-machine control — a full semester's worth of robotics fundamentals on one platform.",
      },
    ],

    credibility: "Cruiser is designed, engineered, and assembled by Robox Industries — request a quote for tender or bulk-lab pricing.",

    useCases: {
      title: "Where Cruiser Does Real Work",
      description: "Sized for university labs, built for industrial-grade research.",
      placeholder: { label: "Wide shot — Cruiser 2.0 in a lab", ratio: "21 / 9" },
      items: [
        { icon: "FaGraduationCap", title: "University Robotics Labs", text: "A full semester of SLAM and Nav2 coursework on one platform." },
        { icon: "FaFlask", title: "Advanced Research", text: "A heavy-duty base for cobot and sensor-array integration studies." },
        { icon: "FaTruck", title: "Logistics Prototyping", text: "Test real cargo-handling concepts before scaling up." },
      ],
    },
  },
};
