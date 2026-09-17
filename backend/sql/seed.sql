-- Robox Industries — seed data (generated from live site content)
SET NAMES utf8mb4;

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('guidebot', 'GuideBot', 'Service', 'AI-powered autonomous guide for smarter, engaging guest experiences.', 'The Robox GuideBot is an advanced autonomous service robot engineered to redefine the guest experience. By integrating high-precision navigation, a 22" digital signage, and AI model, GuideBot serves as a host, guide, and marketing powerhouse for modern facilities.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775290629/robox/products/thumbnails/nvmsf38s34xoaw1bdca7.png', 'https://youtu.be/XLVuoF08FUU', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1779731570/robox/pdfs/specification_1779731570316_lhoi20r', 'Ready to elevate your guest interaction experience?', 'Discover more about GuideBot and know how it can make your place smarter and bring satisfaction to your customers.', 0, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775290630/robox/products/n0bm3voiueyc5chuwitv.png', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775290857/robox/products/leh1kc1ae9mzfk7ky4j9.png', 1);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775290857/robox/products/oovraxvcv2vokbz8m0f9.jpg', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Dimensions (W x H x D)', '500 x 500x 1500 mm', 'FaRulerCombined', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Weight', '80 kg ', 'FaWeight', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Runtime', '9 Hours Continuous Operation', 'FaClock', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Charging Time', '9 Hours (Overnight)', 'FaChargingStation', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Connectivity', 'Wi-Fi, LTE (Optional)', 'FaWifi', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Upper screen Size', '10-inch', 'FaRuler', 5);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Main Screen Size', '22-inch', 'FaRuler', 6);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'AI commands', 'Voice interaction, screen typing', 'FaVoicemail', 7);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Core Interaction & AI Capabilities', 'The brain of GuideBot is designed for natural, meaningful engagement.
- Multilingual AI Engine: Native support for Egyptian Arabic (Local Dialect) and English.
- Voice Interaction: noise-canceling microphone for clear speech recognition in busy environments.
- Knowledge Base: Fully customizable to pre-load FAQs, and service menus.
- Lead Generation: Interactive forms to capture user data (Name, Phone, Email).
- Entertainment: Integrated "Spin & Win" games and photo-booth functionality.
- Instant Delivery: On-board camera captures high-res photos and sends them to users immediately via email.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775290736/robox/sections/hsn8ysghxfqkawbzoccq.jpg', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Display & Multimedia System', 'Maximizing visibility and engagement through a double-screen architecture.
- Head Display: 10" LCD "Digital Face" for emotional expression and status alerts.
- Main Signage: 22" Full HD Touchscreens. Users can navigate menus or play games and interact with the robot.
- Audio: Dual 10W High-Fidelity speakers for clear announcements and docent commentary.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775290859/robox/sections/cxkkovwyarns7xb6sboy.jpg', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Navigation & Mobility (ROS-Powered)', 'Industrial-grade movement for safe, autonomous operation in public spaces.
- Operating System: (Robot Operating System).
- Sensor Fusion of multiple sensors.
- Surface Compatibility: Marble, Tile, Low-pile Carpet, Cement, and Wood.
- Drive Width (Min): 80 cm.
- Max Speed: 1.0 m/s (Adjustable for safety).
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775290860/robox/sections/t0gwgcsbqkseejo3xdzy.jpg', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Application & Deployment', 'GuideBot is versatile enough to provide ROI in various sectors:', '', 3);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, '', '', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775291144/robox/sections/ubvsms5ydt1ht44zbp5g.png', 4);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('adbot', 'Adbot', 'Advertising', 'Autonomous navigating advertising robot with screens for open spaces', 'Adbot is an AI-powered autonomous advertising robot designed specifically for high-traffic environments like malls, exhibitions, and corporate venues. Unlike static billboards, Adbot actively seeks out your audience, ensuring your message is never missed.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775292110/robox/products/thumbnails/eehocky9jdckpkpbtrjh.png', 'https://youtu.be/dyoTaxp92C0', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1775292111/robox/pdfs/specification_1775292111122_m945egi', 'Ready to elevate your Ads existence?', 'Discover more about Adbot and know how it can make your ads more dynamic.', 1, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775293248/robox/products/kjrdiqmhuo4dih12ctyb.jpg', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775293248/robox/products/wqpzz1hze1mjodlntpbr.jpg', 1);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775293248/robox/products/swzowrjjg1keo9xnyfod.jpg', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Display System', 'Dual 40-inch Ultra-HD Screens (1920 x 1080)', 'FaRuler', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Content Support', 'Images & High-Definition Video', 'FaAd', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Dimensions', '58.5 x 58.5 x 160 cm (Compact footprint for indoor venues)', 'FaRulerCombined', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Navigation', 'Fully Autonomous AI-Driven SLAM Technology', 'FaWalking', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Battery Capacity', 'Up to 9 hours of continuous operation', 'FaClock', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Connectivity', 'Wifi', 'FaWifi', 5);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Key Benefits:', '- 60% Higher Engagement: Moving screens capture attention significantly better than traditional static displays.

- Dynamic Revenue Streams: Use it to promote your own projects, sell ad space to mall tenants, or rent slots to external marketing agencies.

- Interactive Experiences: Engage visitors through gamified ads, contests, or seasonal themes (like Ramadan) to create lasting memories.

- Data-Backed Performance: Access real-time audience analytics to prove ad effectiveness and ROI.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775292775/robox/sections/xxi7jdt9tzdxz4np1kd0.jpg', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Advanced Autonomous Navigation & Safety', 'The true "magic" of Adbot lies in its ability to navigate complex, crowded environments without human intervention.

- AI-Driven mapping technology: Using mapping techniques, Adbot creates a virtual map of your venue in real-time, allowing it to know exactly where it is and where it needs to go.

- Intelligent Obstacle Avoidance: Equipped with a 230° horizontal Field of View (FOV) and a detection range of up to 6 meters, Adbot instantly recognizes moving people and stationary objects, adjusting its path smoothly to ensure 100% safety.

- All-Zone Coverage: While traditional ads stay in one corner, Adbot roams across multiple zones, ensuring your brand message reaches every corner of the mall or exhibition floor.

- Reliable Operations: Designed for indoor durability, its high-capacity 124,000 mAh battery ensures it remains active during peak hours, providing consistent performance throughout the day.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775292776/robox/sections/equx49lkmihqpwoy3row.jpg', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Robox Ad Management System: Total Control', '- Managing a mobile advertising fleet has never been easier. Our centralized management software allows you to stay in command of every pixel displayed.

- Seamless Campaign Scheduling: Organize and launch ad campaigns with full flexibility. Schedule specific ads for different times of the day to target varying audience demographics.

- Versatile Media Support: Upload your own media formats—whether it\'s high-definition video, eye-catching images, or fully interactive web pages—tailored to your specific location.

- Real-Time Analytics Dashboard: Monitor active campaigns, track active slots, and view detailed performance reports to optimize your advertising strategy on the fly.

- Multi-Location Management: Manage campaigns across different venues and audience types from a single, intuitive interface.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775292915/robox/sections/lenvzm3mqgdrtftbznij.jpg', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, ' Operations Flow', 'We don\'t just sell you a machine; we provide a complete advertising ecosystem.', '', 3);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, '', '', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775292963/robox/sections/zmrb5mcecktpkphbivha.jpg', 4);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('rfid-bot', 'RFID-Bot', 'Service', 'Autonomous RFID inventory-checking robot', 'RFID-Bot, the autonomous mobile robot (AMR) designed to revolutionize inventory accuracy and efficiency in retail, warehouses, and logistics centers. Built on a sophisticated, AI-powered navigation platform, RFID-Bot replaces static inventory checks with dynamic, real-time data collection. Equipped with high-performance UHF RFID readers, RFID-Bot provides an ultra-fast, comprehensive, and automated way to know exactly what\'s on your shelves, when you need it.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775293691/robox/products/thumbnails/zahnaqlphlyuvlteacq6.png', 'https://youtube.com/shorts/e_R_Dc6WMn8?si=A9Ox85LEgOGzGXM-', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1775293989/robox/pdfs/specification_1775293989787_96y6bg8', 'Ready to control your inventory?', 'Discover more about RFID-Bot and know how it can help you in checking your inventory everyday. ', 2, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775293692/robox/products/patgnmges0d1ohs4qgwx.png', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775294355/robox/products/k9mnmfwqk8gfo3wdz99q.jpg', 1);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775294354/robox/products/yfcc8za19uph0kiqkonw.png', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Dimensions (W x D x H)	(58x 58 x 200 cm)', '58x 58 x 200 cm', 'FaRulerCombined', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'RFID Technology', 'Integrated High-Performance UHF RFID Reader', 'FaNetworkWired', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Read Rate	', '650 tag/second', 'FaShippingFast', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Max Read distance', '5 meters', 'FaRulerHorizontal', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Max Capture Hight	', '3 meters', 'FaRulerVertical', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Connectivity	', 'Wi-Fi / Ethernet (Real-Time Data Sync)', 'FaWifi', 5);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Battery Life	', 'Up to 8 hours Continuous Operation (or similar)', 'FaClock', 6);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Temperature	', '0 °C to +50 °C', 'FaTemperatureHigh', 7);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Charging time	', '4-8 hours', 'FaClock', 8);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Environment	', 'Indoor (Retail, Warehouse, Logistics Centers)', 'FaDoorClosed', 9);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Safety Features	', 'Smart Obstacle Avoidance, Emergency Stop Buttons', 'FaStop', 10);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Data Output	 ', 'Real-time Data, API Integration', 'FaDatabase', 11);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Why RFID-Bot is Your Inventory Advantage', 'Traditional inventory is slow, labor-intensive, and prone to human error. RFID-Bot provides a seamless, accurate, and scalable solution. By automating the auditing process, you free up your team to focus on customer engagement and critical tasks, ensuring your inventory records are always accurate.', '', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Key Benefits:', '- Real-Time Stock Accuracy: Achieve near-perfect inventory accuracy by reading thousands of tags per minutes, dramatically reducing out-of-stocks and misplaced items.
- Unrivaled Speed: Complete a full store or warehouse audit significantly faster than manual methods, minimizing disruption to operations.
- Data-Driven Insights: Gain valuable location data and performance analytics to optimize stocking, prevent shrinkage, and improve supply chain flow.
- Autonomous Operation: Smart navigation and obstacle avoidance ensure safe, seamless, and reliable operation alongside staff and customers.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775294190/robox/sections/dompdcsv35iuc8azwarb.jpg', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'RFID-Bot Core Features', '- High-Performance UHF RFID: Integrates state-of-the-art readers for maximum read range and accuracy, even in complex retail environments.
- Intelligent Autonomous Navigation: Uses AI and advanced sensors to map its environment, navigate dynamic crowds, and execute optimal scanning routes.
- Real-Time Data Sync: Instantly transmits inventory data to your management systems for immediate analysis and decision-making.
- Safe Obstacle Avoidance: Ensures smooth, safe operation around people and fixtures without requiring constant supervision.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775294326/robox/sections/nfz865rcinxztdauwrvo.png', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Market Relevance: Driving the Future of Retail and Logistics', 'The modern market demands absolute inventory precision and speed. With the rapid growth of e-commerce, click-and-collect, and micro-fulfillment, relying on inaccurate stock data is no longer viable. RFID-Bot positions your business at the forefront of this digital transformation by:
- Enabling Omnichannel Success: Providing the accurate, location-specific inventory data required to fulfill online orders reliably.
- Reducing Operational Costs: Minimizing labor hours dedicated to auditing and decreasing losses from shrinkage and misplaced products.
- Optimizing Supply Chain: Delivering granular data that informs replenishment, warehousing layout, and receiving processes for peak efficiency.
- Increasing Customer Satisfaction: Ensuring product availability, which is the foundation of a positive shopping experience.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775294328/robox/sections/opwu5xr0r66pktej7uzu.jpg', 3);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('delbot', 'Delbot', 'Delivery', 'A reliable, precise delivery solution featuring robust navigation and intuitive human-robot interaction', 'Delbot is Robox\'s advanced autonomous delivery robot, designed to enhance operational efficiency and customer experience in various service environments. Featuring robust navigation, intuitive human-robot interaction, and a modular design, Delbot provides reliable and precise delivery services.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775294759/robox/products/thumbnails/haainmhxa21aebsdestf.png', 'https://youtu.be/kxePdSwPpNU', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1775295357/robox/pdfs/specification_1775295357728_jjv0wsb', 'Ready to elevate your guest interaction experience?', 'Discover more about Delbot and know how it can make your place smarter and bring satisfaction to your customers.', 3, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775294760/robox/products/lscyfgf0jcvevnplq1uu.png', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775295998/robox/products/qjlednuhrkzhqvi8rso6.jpg', 1);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775295998/robox/products/v6zibuj4xoqr8zp6gjw7.jpg', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Daily Working Life', '10–12 Hours', 'FaClock', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Charging Time', '8 hours', 'FaClock', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Dimensions (LxWxH)', '500 mm x 500 mm x 1300 mm', 'FaRulerCombined', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Net Weight', '55 kg', 'FaWeight', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Carrying Capacity', '3 Layers; 10 kg limit per tray (30 kg total)', 'FaWeightHanging', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Tray Size', '450 mm x 500 mm (Detachable for cleaning)', 'FaRulerCombined', 5);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Navigation Width', 'Minimum 65 cm aisle required', 'FaRulerHorizontal', 6);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Connectivity', 'Internal Wi-Fi AP for independent network operation', 'FaWifi', 7);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Key Features: Designed for Excellence', 'Delbot is more than just a delivery tool; it is a sophisticated service partner built to handle the rigors of high-traffic environments.
- Modular & Hygienic Design: Features a modular chassis for enhanced stability and detachable trays that are easy to clean.
- Humanized Interaction: Includes a 10-inch, high-resolution (1280x720) interactive screen and intelligent voice broadcasts to guide users during pickup.
- Rapid Deployment: Designed for effortless setup via an intuitive on-screen interface, requiring no complex code configuration.
- Extended Battery Life: Engineered for a full day\'s work with up to 12 hours of continuous operation on a single 8-hour charge.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775295358/robox/sections/avgx0jfj9oahqpeifw5g.jpg', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Navigation Capabilities: Precision in Motion', 'Powered by advanced 3D perception and autonomous mapping, Delbot navigates complex spaces with unmatched agility.
- Autonomous Self-Localization: Delbot identifies its own position and executes delivery tasks autonomously from its home base to the target.
- Elite Obstacle Avoidance: Features rapid detection and avoidance of static and dynamic obstacles, including low-lying and overhanging obstructions.
- Superior Sensing: Capable of up to 3,000 detections per minute with a wide horizontal detection angle of 230 degrees.
- Instant Response: Boasts an obstacle response time as short as 0.25 seconds and a front detection range exceeding 6 meters.
- Agile Maneuverability: Specifically designed to navigate narrow aisles as small as 65 cm in width.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775295474/robox/sections/a4k5fn5zsldz9farx9dk.jpg', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, '', '', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775295971/robox/sections/nkdyusk198sdulyhnajk.jpg', 2);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('armbot-pi', 'Armbot PI', 'Education', 'Educational robotic arm for ROS 2, Computer Vision, and Human-AI Interaction', 'ArmBot is a sophisticated, 6-DOF educational robotic arm designed to bridge the gap between theoretical robotics and real-world AI applications. Powered by the Raspberry Pi 5, it serves as a high-performance terminal for mastering mechatronics, automation, and intelligent systems.
Whether for university laboratories or advanced research, ArmBot provides a robust environment for mastering ROS 2, MoveIt 2, and OpenCV.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783009305/robox/products/thumbnails/hx7y25ruw88mpfh3igxe.png', 'https://youtu.be/SC0Frqn6KsY', 'https://drive.google.com/file/d/13cgg3uIXbONUBXrCpjdhaZQx-RH1NvKw/view?usp=sharing', 'Want to know more about Armbot?', 'Increase your knowledge with MoveIt and ROS2 and discover their integration with OpenCV.', 4, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783033944/robox/products/zgqzy1yeq48bzuvknatn.jpg', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783033990/robox/products/f6olio12dxwdhzp97yba.jpg', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Degrees of Freedom', '6-Axis (including gripper) ', '', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Max Reach / Height', '400 mm', 'FaRulerVertical', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Payload Capacity', '250 g at full extension ', 'FaWeightHanging', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Main Controller', 'Raspberry Pi 5', 'FaLaptopCode', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Dimensions', '155x155 x500 mm', 'FaRulerCombined', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Weight', '3kg', 'FaWeightHanging', 5);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Vision', '2K Camera', 'FaCamera', 6);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Power', '12V - 5A', '', 7);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Key Highlights', '- Next-Gen Processing: Powered by the Raspberry Pi 5 (8GB) for seamless execution of ROS 2 Jazzy Jalisco and complex AI models.
- Precision Actuation: Equipped with high-torque bus servos (up to 25 kg·cm) providing 0.29° position resolution for industrial-grade accuracy.
- Integrated AI Suite: Features a built-in HD vision system and dedicated audio hardware for natural human-robot interaction.
- Open Framework: Fully open-source software stack including ROS 2, MoveIt 2, OpenCV, and Python 3.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783010115/robox/sections/itqkht6ef0i9e8anunxp.jpg', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Advanced AI Interaction', 'The ArmBot stands out through its sophisticated Human-AI Interaction capabilities, moving beyond simple automation into the realm of social and assistive robotics. Using an external USB microphone and speaker system, ArmBot leverages speech recognition and Natural Language Processing (NLP).
- Natural Language Commands: Users can command the arm using intuitive phrases such as "Pick the red cube and place it in the green bin".
- Voice-Vision Synergy: The arm can describe what it "sees" through its camera, providing audio feedback on object colors, positions, or QR codes.
- Text-to-Speech (TTS): Integrated pyttsx3 allows the robot to provide status alerts and interactive responses to the user.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783037245/robox/sections/mqpqn2nfeywsxs55mhys.jpg', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Vision-Driven Intelligence', 'The vision kit acts as the eyes of the robot enabling:
- Autonomous Tracking: Real-time visual servoing to follow moving objects.
- Intelligent Decision Making: Sorting and stacking objects based on complex visual criteria (Color, ID, or Spatial Orientation).
- QR-Code Cognition: Identifying and reacting to specific digital signatures for logistics and sorting simulations.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783011827/robox/sections/riys3aqsi1qfkvwskdh2.jpg', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Kinematic Visualization', 'Exploring URDF models and joint limits in RViz', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783010242/robox/sections/zy6qauu4lbvdtrpuhgpe.jpg', 3);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Autonomous Color Sorting', 'Developing vision-based pick-and-place workflows.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783010824/robox/sections/j6ibvdjv8mjaduraavsu.jpg', 4);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'QR Recognition', 'Implementing digital identification for logistics simulations.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783010337/robox/sections/fnzixsy1tdcwi3k7ukd9.jpg', 5);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Dynamic Color Tracking', 'Mastering real-time visual servoing', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783010590/robox/sections/vnckbybqi7tt09willq4.jpg', 6);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Smart Stacking', 'Logic-based object organization and spatial planning', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783010617/robox/sections/xpwjkc8zbbtzoy55ujsn.jpg', 7);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Manual Teleoperation', 'Precision control via PS4 DualShock controller', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783010722/robox/sections/itjaakcxiircmoamxwwc.jpg', 8);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Voice-Vision Interaction', 'Combining speech and sight for human-centric tasks', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783010742/robox/sections/lvdnlrbwenzqzza6kue1.jpg', 9);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, '', '', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783033804/robox/sections/lgibedom7fnfdhn7v5uf.jpg', 10);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('carbot-orin', 'CarBot Orin', 'Education', 'Advanced Autonomous Car for Navigation & AI Platform', 'CarBot is a premium educational robot kit engineered to bridge the gap between classroom theory and real-world autonomous systems. Designed for students and developers, it provides a rugged, high-performance platform for mastering the Robot Operating System (ROS 2). From basic kinematics to advanced AI-driven navigation and sensor fusion, CarBot offers a comprehensive hardware-software suite for developing next-generation robotics skills.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1782957301/robox/products/thumbnails/edhxojik1fb7ekzrsrhm.png', 'https://youtu.be/03OJ-zzCReU', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1783009201/robox/pdfs/specification_1783009201488_inb2qoa', 'Want to know more about CarBot?', 'Increase your knowledge with autonomous navigation and ROS2 and discover the integration of AI with the vision module.', 5, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783009049/robox/products/ved0ipinykdzww5a6ohf.jpg', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Dimensions', '390 x 290 x 213.5 mm', 'FaRulerCombined', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Wheelbase', '330mm', 'FaRulerHorizontal', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Weight', '6 kg (Dead load) with a 5 kg Payload capacity', 'FaWeightHanging', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Drive Modes', 'Four-wheel Differential and Mecanum (Omnidirectional) ', '', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Max speed', '1 m/s', 'FaShippingFast', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Mobility', 'climbing capacity of up to 10°', '', 5);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Environment', 'Operational range of -10°C to +40°C', 'FaTemperatureHigh', 6);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Computing & System', '- Onboard IPC: NVIDIA Jetson Orin Nano Super.
- GPU: 1024-core NVIDIA Ampere architecture with 32 Tensor cores.
- CPU: 6-core Arm Cortex-A78AE.
- Memory: 8GB LPDDR5.
- Storage: 256GB MicroSD Card.
- OS: Ubuntu 22.04.
- Display: Integrated 7-inch IPS touch screen (1024x600 resolution) for real-time interaction.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1782950634/robox/sections/swqcvpjg4x3ucil9mbws.jpg', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Advanced Sensor Suite', '- LiDAR: Slamtec RPLIDAR A1 for 360-degree environment scanning up to 12 meters.
- Depth Camera: Orbbec Astra Pro (RGB-D) for 3D vision and structured light depth sensing.
- IMU: Absolute Orientation Sensor for precise heading and motion tracking.
- Encoders: High-precision Hall effect encoders built into BLDC motors for odometry.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1782957569/robox/sections/iwpqlj1g6fkyhyiwlbx7.jpg', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Power System', '- Battery: 12V 12Ah high-capacity battery.
- Endurance: 3 hours of continuous working time; 5 hours standby.
- Charging: Included 12.6V 2A charger with trickle-charge protection.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1782959216/robox/sections/phdvbr30fgaukld5f15f.jpg', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Software Capabilities', 'CarBot is fully integrated into the ROS 2 ecosystem, providing a modular and extensible software framework.
- Navigation Stack: Utilizes Nav2 (Navigation2), featuring behavior trees for high-level decision making and recovery strategies.
- Mapping & Localization: Supports SLAM Toolbox for 2D mapping and AMCL (Adaptive Monte Carlo Localization) for precise positioning.
- Advanced 3D SLAM: Supports RTAB-Map for dense 3D point cloud and voxel map generation using fused LiDAR and depth camera data.
- Remote Access: Full support for SSH command-line control and X11/VNC for remote graphical tools like RViz and rqt.
- Development Tools: Includes Python and C++ drivers, with pre-configured launch files for teleoperation (Keyboard/Joystick) and visualization.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783009096/robox/sections/mtnbgqhk0fq6rk3lljum.jpg', 3);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'SLAM Mapping', 'Real-time 2D occupancy grid creation', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1782959588/robox/sections/m9zacdbt4ia04zyrfojq.png', 4);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Autonomous Navigation', 'Goal-based path planning using global and local costmaps', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1782959787/robox/sections/cffhjqosh1udhlrk7xcj.png', 5);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, '3D/2D Obstacle Avoidance', 'Moving through environments using 3D obstacle avoidance
(LiDAR + Depth Camera) and global path planning', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1782960041/robox/sections/hl79wvnm8kbtq8swolvu.png', 6);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, '3D Mapping & Navigation', 'By using depth Camera and RTAB-Map Algorithm', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783008302/robox/sections/rgwqv3c0malzqlxmcn5n.png', 7);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'AI & Vision', 'Color detection/tracking, QR code recognition, object detection/tracking,
scene recognition and semantic segmentation, and deep learning-based object following', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783008372/robox/sections/hbafcmzjpoxwyjr6knrz.jpg', 8);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Human-Robot Interaction', 'Voice command execution, gesture recognition, and human detection and following', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783008443/robox/sections/xcthplt3o6dwkuejvrsu.jpg', 9);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Kinematic Modeling', 'Hands-on study of differential drive vs. omnidirectional Mecanum movement', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783008469/robox/sections/guph0fkecgagbygj0c6m.jpg', 10);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('manibot-orin', 'ManiBot Orin', 'Education', 'Autonomous Manipulation & Navigation Platform', 'ManiBot is a premium educational robot kit engineered to bridge the gap between classroom theory and real-world autonomous systems. Designed for students and developers, it provides a rugged, high-performance platform for mastering the Robot Operating System (ROS 2). From basic kinematics to advanced AI-driven navigation to sensor fusion and robotic arm manipulator, ManiBot offers a comprehensive hardware-software suite for developing next-generation robotics skills.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783029961/robox/products/thumbnails/bgwlntervmatfcycfoad.png', 'https://youtu.be/CCtYUMaw_nc', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1783034049/robox/pdfs/specification_1783034049300_hzzptur', 'Want to know more about ManiBot?', 'Increase your knowledge with autonomous navigation and ROS2 integrated with a robotic arm manipulator.', 6, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783030032/robox/products/lgb48pthouyyyhvmx7qy.jpg', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783030596/robox/products/lqlhtkmlh6kcb2kfs7pe.jpg', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Dimensions', '380x 300x 350 mm', 'FaRulerCombined', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Wheelbase', '330 mm', 'FaRulerHorizontal', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Weight', '8 kg', 'FaWeightHanging', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Drive Modes', 'Four-wheel Differential and Mecanum (Omnidirectional) ', '', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Max speed ', '1 m/s', 'FaShippingFast', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Mobility', 'climbing capacity of up to 10°', '', 5);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Environment', 'Operational range of -10°C to +40°C.', 'FaTemperatureHigh', 6);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Sensor Suite', 'LiDAR, Depth Camera, IMU, and Higher precision encoders', 'FaCamera', 7);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Arm DOF', '6', '', 8);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Arm max reach', '400mm', 'FaRulerHorizontal', 9);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Payload', '250g', 'FaWeightHanging', 10);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Arm Controller', 'Raspberry Pi 5', 'FaBrain', 11);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Computing & System', '- Onboard IPC: NVIDIA Jetson Orin Nano Super.
- GPU: 1024-core NVIDIA Ampere architecture with 32 Tensor cores.
- CPU: 6-core Arm Cortex-A78AE.
- Memory: 8GB LPDDR5.
- Storage: 256GB MicroSD Card.
- OS: Ubuntu 22.04.
- Display: Integrated 7-inch IPS touch screen (1024x600 resolution) for real-time interaction.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783030270/robox/sections/vouugva1u8g0etz8wliq.jpg', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Advanced Sensor Suite', '- LiDAR: Slamtec RPLIDAR A1 for 360-degree environment scanning up to 12 meters.
- Depth Camera: Orbbec Astra Pro (RGB-D) for 3D vision and structured light depth sensing.
- IMU: 9-axis Absolute Orientation Sensor for precise heading and motion tracking.
- Encoders: High-precision Hall effect encoders built into BLDC motors for odometry.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783030443/robox/sections/yrorrcn0wuaxgdphjan4.jpg', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Power System', '- Battery: 12V 12Ah high-capacity battery.
- Endurance: 3 hours of continuous working time; 5 hours standby.
- Charging: Included 12.6V 2A charger with trickle-charge protection.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783030597/robox/sections/js8gvbuvps07b9itu8xu.jpg', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Robotic Manipulation: The ArmBot System', 'The ManiBot features the ArmBot as its primary manipulation unit, transforming the mobile base into a sophisticated mobile manipulator.
- Degrees of Freedom (DOF): 6-DOF for complex spatial positioning.
- Performance: 250g payload with a 400mm working radius and ±0.5mm repeatability.
- Communication & Control: The arm communicates via Wi-Fi and is fully integrated into the robot\'s power and control topology.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783030899/robox/sections/t0729b3lovtwuxzhua0f.jpg', 3);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Software Capabilities', 'ManiBot is fully integrated into the ROS 2 ecosystem, providing a modular and extensible software framework.
- Navigation Stack: Utilizes Nav2 (Navigation2), featuring behavior trees for high-level decision-making and recovery strategies.
- Mapping & Localization: Supports SLAM Toolbox for 2D mapping and AMCL (Adaptive Monte Carlo Localization) for precise positioning.
- Advanced 3D SLAM: Supports RTAB-Map for dense 3D point cloud and voxel map generation using fused LiDAR and depth camera data.
- Remote Access: Full support for SSH command-line control and X11/VNC for remote graphical tools like RViz and rqt.
- Development Tools: Includes Python and C++ drivers, with pre-configured launch files for teleoperation (keyboard/joystick) and visualization.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783032342/robox/sections/tqfxd2bs9giprxza0wzh.jpg', 4);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'SLAM Mapping', 'Real-time 2D occupancy grid creation and 3D point cloud generation.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783031109/robox/sections/w84rnqbeidizucybumuy.png', 5);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Autonomous Navigation', 'Goal-based path planning using global and local costmaps.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783031379/robox/sections/bcnrm5y7rdf2khtpd5po.jpg', 6);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Autonomous 3D Navigation', 'Moving through environments using 3D obstacle avoidance (LiDAR + Depth Camera) and global path planning.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783031183/robox/sections/fcsizymcdh19qy1zpo4d.jpg', 7);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'AI & Vision', 'Color detection/tracking, QR code recognition, and deep learning-based object following.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783031420/robox/sections/rvr9yosrab629iotwhkb.jpg', 8);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Robotic Manipulation', 'Integration with the ArmBot for 6-DOF pick-and-place tasks like picking an item from one location and placing it in another to simulate an automated logistics chain.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783031238/robox/sections/ky0bmmgh4yxi5lx5zrme.jpg', 9);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Human-Robot Interaction', 'Voice command execution, gesture recognition, and emotion recognition.
', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783031005/robox/sections/zi1mahqitcv0upprgeza.jpg', 10);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Visual Servoing', 'Lock onto, track, and grab targets with computer vision.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783030956/robox/sections/naubcnxyn7n6y9f6brou.jpg', 11);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('guidebot-pro', 'GuideBot Pro', 'Service', 'Autonomous host robot for your reception', 'Elevate your facility’s hospitality with a premium 27-inch display, fluent bilingual AI, and active point-to-point guest escorting. Engineered by Robox Industries to bridge the gap between complex robotics and practical everyday utility.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779749121/robox/products/thumbnails/qmf9rnjjrul8zaekfd9p.png', 'https://youtu.be/0prR7dZZ63U', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1780546336/robox/pdfs/specification_1780546336623_osufwh6', 'Ready to Step into the Future?', 'Bring autonomous efficiency and world-class engagement to your commercial space. Schedule an exclusive, hands-on demonstration with the Robox engineering team today.', 7, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779748786/robox/products/rtamlluphrmynbodrlrb.png', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779749155/robox/products/hjkrnzruohhxqj9bstte.jpg', 1);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779749178/robox/products/ajpzjadoqq1zffeklyjd.jpg', 2);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779749194/robox/products/invxd1b4d65h28dne0mu.jpg', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Dimensions (W x H x D)', '540 x 500x 1500 mm', 'FaRulerCombined', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Primary Digital Display', '27-inch Ultra-Wide High-Definition Touchscreen', 'FaAudioDescription', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Interface Status Display', '10-inch Interactive Facial Expression & Status Screen', 'FaAd', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Navigation System', 'ROS (Robot Operating System)', 'FaCarSide', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Sensor Fusion Array', '360° Safety-Ring', 'FaCamera', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Language Compatibility', 'Native English & Arabic (Optimized for Egyptian Dialect)', 'FaParagraph', 5);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Max Operational Speed', '0.5 m/s (Fully software-adjustable for site safety)', 'FaShippingFast', 6);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Power & Charging', '9 Hours Continuous Autonomous Runtime / Intelligent Auto-Docking', 'FaChargingStation', 7);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'The Core Evolution', 'GuideBot Pro isn’t just a digital sign—it’s an active operational asset. Unlike traditional roaming robots, the Pro edition actively interacts, plans optimal paths, and physically escorts your visitors directly to their destination.

Key Structural Pillars:

- Expanded 27" HD Screen: A massive, ultra-wide canvas built to display complex facility maps, large-scale media loops, and crystal-clear user interfaces.

- Waypoint Navigation: Point-to-point autonomous routing that guides guests step-by-step to specific shops, offices, clinics, or exhibition booths.

- Auto Dock & Return: After safely delivering a guest, GuideBot Pro seamlessly returns to its primary reception standby post.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779749370/robox/sections/fjqrqfegdtktgwyemk1w.png', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Key Features Showcase', '- AI That Speaks Your Language
Communication without barriers. Powered by the Robox AI engine, GuideBot Pro features dual language support, effortlessly conversing in both English and natural Egyptian Arabic.

- 360° Safety & Total Autonomy
Navigating crowded spaces demands absolute safety. Operating on ROS with real-time sensing, GuideBot Pro detects dynamic obstacles and smoothly adjusts its path.

- A High-Yield Marketing Powerhouse
Turn foot traffic into tangible business growth. GuideBot Pro actively captures high-intent customer leads, hosts interactive "Spin & Win" promotional games, and delivers instant, branded photo-booth pictures straight to your visitors\' emails.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779750367/robox/sections/soseli1trvtpr1wd7unb.png', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Display & Multimedia System', 'Maximizing visibility and engagement through a double-screen architecture.

- Head Display: 10" LCD "Digital Face" for emotional expression and status alerts.
- Main Signage: 27" Full HD Touchscreens. Users can navigate menus or play games and interact with the robot.
- Audio: Dual 10W High-Fidelity speakers for clear announcements and docent commentary.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779751211/robox/sections/qu3qkrhqzpwcmjd76ifp.jpg', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Industry Deployments', 'Discover how GuideBot Pro optimizes operations and customer retention across specialized commercial environments.', '', 3);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, '', '', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1779751039/robox/sections/t1gz3tx60ovxjnhwvylh.png', 4);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('hexabot', 'HexaBot', 'Education', '18 DOF Programmable Advanced Hexapod Robot', 'Meet HexaBot, a highly programmable hexapod robot engineered to make the complex world of multi-legged robotics accessible, interactive, and deeply educational. Boasting 18 degrees of freedom (3 DOF per leg), HexaBot effortlessly mimics biological lifeforms—walking, climbing, waving, and dancing with unmatched fluidity. Whether you are a university student, robotics educator, or an ambitious developer, HexaBot’s open-source platform powered by Arduino is your perfect gateway to advanced programming and bionics.  ', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783032413/robox/products/thumbnails/i0vrn0ov7qgchuuusfml.png', 'https://youtu.be/LuQHOJatZm8', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1783034084/robox/pdfs/specification_1783034084055_8w8rej0', 'Bring state-of-the-art bionics and multi-joint kinematics to your laboratory.', '', 8, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783032438/robox/products/eflymvzxidwb1irq5g4x.jpg', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783033624/robox/products/apqkrpbnhxmiixesopkw.jpg', 1);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783033624/robox/products/ytau1xkmii4b2e0p0rxe.png', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Brain', 'Robox Hexapod Arduino Control Board', 'FaBrain', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Agility', '18 Degrees of Freedom (3 per leg)', '', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Senses', '2cm – 80cm Ultrasonic Distance Sensor', 'FaRuler', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Endurance', 'Lithium Battery (60-120 mins runtime)', 'FaBatteryFull', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Leg Length', '255mm', 'FaRulerHorizontal', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Max Stretching Footprint', '695mm x 614mm', 'FaRulerCombined', 5);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Engineered for High Performance.', 'HexaBot does not just stand out in the classroom—it thrives in dynamic, real-world testing environments.  
- The Ultimate Tripod Gait: Its unique tripod gait design guarantees exceptional physical stability. By keeping three contact points on the ground at all times, HexaBot easily balances and maneuvers across diverse surfaces and shifting environments.
- Intelligent High-Voltage Servos: Driven by high-performance intelligent servos, HexaBot delivers pinpoint accuracy and enhanced linearity. Reinforced with durable metal gears and high-precision potentiometers, these actuators are built to outlast intense operation cycles.
- Infinite Expansion Capabilities: Never stop innovating. HexaBot features a rugged alloy back bracket engineered with reserved mounting holes. Easily bolt on additional sensors, cameras, or custom electronics to watch your creations grow.  ', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783033318/robox/sections/pfbmwx2uo8qwnoenauqk.jpg', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Software Framework & Capabilities', 'HexaBot operates on an entirely open-box ecosystem, facilitating smooth integration into engineering curricula:
- Arduino IDE Native Compatibility: Program the robot using standard C/C++ libraries within the familiar Arduino environment.  
- Open-Source Code Repositories: Provided with clean, modifiable source code for immediate behavioral modifications.  
- PC Visual Configuration Software: Includes a dedicated desktop interface to easily calibrate servos, test gaits, and construct complex action patterns.  
- Wireless Firmware Stack: Pre-configured to receive instant, low-latency movement commands from the dedicated wireless gamepad peripheral.  ', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783033544/robox/sections/idyua0qsjwtssnpnjj5w.png', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Multi-Axis Inverse Kinematics', 'Studying the mathematical coordinates required to coordinate 18 simultaneous joints.  ', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783033460/robox/sections/layzgrjseq2ewxtwzruj.png', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Autonomous Obstacle Avoidance', 'Utilizing real-time ultrasonic telemetry to calculate trajectories around environmental hurdles.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783032788/robox/sections/bynwmlh3ttyhqk1p4edy.jpg', 3);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Bionic Movement Algorithms', 'Programming lifelike responses including custom gaits, walking, climbing, waving, and synchronous dancing.', '', 4);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, '', '', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1783038516/robox/sections/g9iozlsglvnlh3kzopp1.png', 5);

INSERT INTO products (slug, name, category, short_description, description, thumbnail, video, pdf_file, cta_title, cta_text, sort_order, status) VALUES ('cruiser', 'Cruiser', 'Education', 'UGV Platform for Advanced Robotics & Logistics Research', 'The Robox Cruiser 2.0 is a heavy-duty, 100kg operational payload UGV platform engineered for university labs, ROS 2 SLAM navigation research, and industrial logistics prototyping. Request a quote today.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785359839/robox/products/thumbnails/wwrr0yxiy4wahwnrizrg.png', 'https://youtu.be/Mr83JXMFc28', 'https://res.cloudinary.com/dponbhz3m/raw/upload/v1788892460/robox/pdfs/specification_1788892459986_ytm3ojz', 'Ready to Elevate Your Lab’s Robotics Capabilities?', 'Speak directly with a product expert to request a custom tender quotation.', 9, 'Active');
SET @pid = LAST_INSERT_ID();
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785360727/robox/products/w3qcfjfjuunw1mh8zwra.jpg', 0);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785689463/robox/products/hd4awlnonejsxafnqlvz.jpg', 1);
INSERT INTO product_photos (product_id, url, sort_order) VALUES (@pid, 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785689508/robox/products/orocigpqftpd9aczef3y.jpg', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Operational Payload', '100 kg', 'FaWeightHanging', 0);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Drive Kinematics', 'Two-wheel differential drive with 4 passive caster wheels', 'FaCar', 1);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Actuation System', 'High-torque DC Hub Motors (High-precision BLDC)', '', 2);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'LiDAR Configuration', '360° Laser Radar, 12m Range', '', 3);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Inertial Sensing', '9-Axis IMU', '', 4);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Odometry', 'High-resolution integrated Hall-effect Encoders', '', 5);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Battery System', '36V Lithium-ion Battery Set', 'FaCarBattery', 6);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Energy Capacity', '26.4 Ah (Nominal Voltage: 38V)', 'FaBatteryFull', 7);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'Active Safety', 'Rear Emergency Stop Switch, Front Illumination LEDs', 'FaStop', 8);
INSERT INTO product_specs (product_id, name, detail, icon, sort_order) VALUES (@pid, 'System Core', 'Ubuntu 22.04 LTS + ROS 2 Humble Hawksbill', '', 9);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Engineered for excellence', 'Most research robots force you to choose between structural strength and software readiness. The Cruiser 2.0 eliminates that compromise. By combining massive industrial lifting capacity with a native ROS 2 computing ecosystem, it serves as the ultimate physical twin for complex autonomous engineering.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785361368/robox/sections/ki4rmqjci4svwvkwrnjn.jpg', 0);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Industrial Strength', 'Capable of easily carrying full-sized industrial collaborative arms (cobots), complex heavy sensor arrays, or physical logistics cargo.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785363811/robox/sections/s9ehh3tg0y3dcaeid9bx.jpg', 1);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'All-in-One Architecture', 'Features a dedicated, pre-installed Computing Unit running Ubuntu 22.04 LTS and ROS 2 Humble. No complex driver setups required—just power on and develop.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785366395/robox/sections/msxzyxrkgtjzltngpbiy.png', 2);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Real-Time Mapping & SLAM', 'Hands-on usage of the SLAM Toolbox environment. Students drive the robot to actively scan complex indoor spaces and construct highly precise, high-definition 2D maps via LiDAR.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785362054/robox/sections/zifymmmjezfessm0haoc.jpg', 3);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Autonomous Path Planning & Navigation', 'Dive deep into the ROS 2 Nav2 stack. Teach students how to configure global planners alongside dynamic local planners to navigate safely around obstacles.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785362127/robox/sections/tswfnodm5kq8ckprg02w.jpg', 4);
INSERT INTO product_sections (product_id, title, text, image, sort_order) VALUES (@pid, 'Educational Applications & Lab Modules', '- Kinematics Modeling
- Odometry & Advanced Sensor Fusion
- Real-Time Mapping & SLAM
- Autonomous Path Planning & Navigation
- Seamless Human-Machine Control', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785362251/robox/sections/d9tmbr9dokobzssxibss.jpg', 5);

INSERT INTO partners (name, logo, sort_order) VALUES ('ACUD', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785348885/robox/partners/ehwr5fg27sdzlpsosqcg.png', 0);
INSERT INTO partners (name, logo, sort_order) VALUES ('Byit', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785348865/robox/partners/elw2kuurja0tyuy53kmj.png', 1);
INSERT INTO partners (name, logo, sort_order) VALUES ('MNU', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785348833/robox/partners/z99vhhjs7eyxarmu2vyl.png', 2);
INSERT INTO partners (name, logo, sort_order) VALUES ('suez uni', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1785348567/robox/partners/fxs2kgeyszu9whmofism.png', 3);
INSERT INTO partners (name, logo, sort_order) VALUES ('arcorp', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1776966716/robox/partners/zje48qmxn9ojhi6tekoz.png', 4);
INSERT INTO partners (name, logo, sort_order) VALUES ('Granite', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775291374/robox/partners/w5vcdnk6givvtljbclhl.png', 5);
INSERT INTO partners (name, logo, sort_order) VALUES ('SIMPLEX', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775291365/robox/partners/n2qmipjpla6jqyqribyt.png', 6);
INSERT INTO partners (name, logo, sort_order) VALUES ('Cardoo', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775291356/robox/partners/fftqgxiu6an6oramtksm.png', 7);
INSERT INTO partners (name, logo, sort_order) VALUES ('RFID', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775291322/robox/partners/ljoxuxw5rlnuqhoj9lbx.png', 8);
INSERT INTO partners (name, logo, sort_order) VALUES ('DME', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775291305/robox/partners/cl3fmjff8kwnlbn3qg2v.png', 9);
INSERT INTO partners (name, logo, sort_order) VALUES ('SafeHearts', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775291286/robox/partners/psewghsiesyxgorhsmty.png', 10);

INSERT INTO blogs (slug, title, excerpt, text, photo) VALUES ('robox-industries-at-irc-expo-2025-autonomous-excellence-at-the-new-administrative-capital', 'Robox Industries at IRC Expo 2025: Autonomous Excellence at the New Administrative Capital', 'The International Research Commercialization Expo (IRC Expo 2025) is not just a typical exhibition—it is a landmark gathering dedicated to the theme "Market the Mind." Hosted at the St. Regis in Egypt’s New Administrative Capital, and held under the patronage of His Excellency the President of Egypt', 'The International Research Commercialization Expo (IRC Expo 2025) is not just a typical exhibition—it is a landmark gathering dedicated to the theme "Market the Mind." Hosted at the St. Regis in Egypt’s New Administrative Capital, and held under the patronage of His Excellency the President of Egypt and the supervision of the Prime Minister, the event serves as the ultimate platform for turning scientific research into economic reality.

For Robox Industries, participating in the IRC Expo was a proud moment to showcase how Egyptian-made robotics are leading the charge in this new era of "Knowledge-to-Industry" transformation.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775299062/robox/blogs/ird88ogwvtcptxkjbw4v.jpg');
SET @bid = LAST_INSERT_ID();
INSERT INTO blog_sections (blog_id, title, text, photo, sort_order) VALUES (@bid, 'Showcasing Our Technology: From Lab to Market', 'At our booth, we didn\'t just present concepts—we showcased working, market-ready autonomous solutions that prove Egypt can compete on a global scale.

- Adbot: The Voice of the Expo: Our Adbot became a central attraction, acting as an interactive ambassador. It engaged with international delegates, government officials, and investors, proving that marketing is no longer static—it is intelligent and mobile.

- The RFID-Bot Revolution: Developed in partnership with RFID Egypt, we presented our autonomous inventory solution. This was a key highlight for the "Smart Cities" and "Engineering & Manufacturing" sectors at the expo, showing how we can eliminate human error in warehouse management through automated cycle counting.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775299062/robox/blogs/sections/uykw3rblxq20hkaok20l.jpg', 0);
INSERT INTO blog_sections (blog_id, title, text, photo, sort_order) VALUES (@bid, 'The "Market the Mind" Philosophy', 'The core of the IRC Expo is about commercializing research. Robox Industries stands as a prime example of this mission. By leveraging local engineering talent and regional resources, we have successfully moved beyond the research phase to manufacturing robots that are already reducing costs and increasing safety for Egyptian businesses.

Our participation reinforced our commitment to Egypt’s 2030 Vision. We aren\'t just consumers of technology; we are creators. Our localized manufacturing allows for a faster response time, lower initial costs, and a quality that matches international standards—making the dream of an automated industry accessible to the local market.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775299063/robox/blogs/sections/ka6pnauv3ml1ccxnoadm.jpg', 1);

INSERT INTO blogs (slug, title, excerpt, text, photo) VALUES ('strategic-partnership-with-rfid-egypt', 'Strategic Partnership with RFID Egypt', 'Innovation rarely happens in isolation. We are thrilled to highlight our strategic partnership with RFID Egypt, a collaboration that birthed the revolutionary RFID-Bot.

By combining Robox’s autonomous mobile robot (AMR) platforms with RFID Egypt’s world-class tracking technology, we have created a ', 'Innovation rarely happens in isolation. We are thrilled to highlight our strategic partnership with RFID Egypt, a collaboration that birthed the revolutionary RFID-Bot.

By combining Robox’s autonomous mobile robot (AMR) platforms with RFID Egypt’s world-class tracking technology, we have created a solution that performs 100% accurate inventory counts without human intervention. This partnership represents a leap forward for Egyptian logistics, offering warehouses a way to eliminate errors and unlock 24/7 operational visibility.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775298753/robox/blogs/vuagrvzrgpuryf75rnhj.jpg');
SET @bid = LAST_INSERT_ID();
INSERT INTO blog_sections (blog_id, title, text, photo, sort_order) VALUES (@bid, 'The Vision: Engineering a "Zero-Error" Warehouse', 'Traditional inventory management relies on manual scanning, which is historically 65% inaccurate and labor-intensive. Robox Industries and RFID Egypt joined forces to eliminate these inefficiencies. By combining Robox’s Autonomous Mobile Robot (AMR) platforms with RFID Egypt’s expertise in UHF (Ultra High Frequency) tracking, we have created a system that provides 99.9% inventory accuracy without human intervention.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775298754/robox/blogs/sections/kxo0vwyxofj8rtkvkory.jpg', 0);
INSERT INTO blog_sections (blog_id, title, text, photo, sort_order) VALUES (@bid, 'Technical Synergy: How the Partnership Works', 'This collaboration is a perfect marriage of hardware and "digital brains":

- The Robox Contribution: We provide the physical "driver"—the autonomous base equipped with LiDAR, SLAM (Simultaneous Localization and Mapping), and obstacle avoidance sensors. This allows the robot to navigate complex warehouse aisles safely during or after business hours.

- The RFID Egypt Contribution: They provide the "intellect"—integrating high-performance RFID readers and antennas capable of scanning thousands of tags per minute. Their software ensures that the data collected is seamlessly integrated into a client\'s existing ERP or Warehouse Management System (WMS).', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775298755/robox/blogs/sections/l8jpszbsu9pbt9l5gvyg.jpg', 1);
INSERT INTO blog_sections (blog_id, title, text, photo, sort_order) VALUES (@bid, 'Key Benefits of the RFID-Bot Solution', 'Through this partnership, we offer our clients a competitive edge that was previously only accessible to global giants:

- Rapid ROI: By manufacturing locally in Egypt, we reduce the initial acquisition cost by up to 40% compared to imported robotic systems, while offering the same (or superior) technical specifications.

- 24/7 Operations: The RFID-Bot can perform full-facility "cycle counts" every single night, ensuring that "out-of-stock" or "misplaced" items are identified before the next business day begins.

- Localized Support: Unlike international vendors, our partnership ensures that technical support, tag provisioning, and hardware maintenance are handled by local experts with a fast response time.', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775298756/robox/blogs/sections/k6vrtlcxmnxqmcxbszpm.jpg', 2);
INSERT INTO blog_sections (blog_id, title, text, photo, sort_order) VALUES (@bid, 'Strategic Impact', 'This partnership isn\'t just about building a product; it’s about securing the Egyptian supply chain. By leveraging regional talent and resources, Robox Industries and RFID Egypt are proving that the future of Industry 4.0 is being built right here at home.

"Our partnership with RFID Egypt allows us to transform a passive warehouse into an active, intelligent environment. We are no longer just tracking assets; we are giving businesses real-time visibility into their entire operation."', 'https://res.cloudinary.com/dponbhz3m/image/upload/v1775298757/robox/blogs/sections/vqxzexmdgeizisilpl63.png', 3);
