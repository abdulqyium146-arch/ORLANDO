export const SITE_CONFIG = {
  name: "Affordable Locksmith Orlando",
  shortName: "Affordable Locksmith",
  tagline: "Fast, Affordable & Trusted Locksmith in Orlando, FL",
  phone: "(855) 633-0750",
  phoneRaw: "18556330750",
  email: "info@affordablelocksmithorlando.com",
  address: {
    street: "7721 Newlan Dr",
    city: "Orlando",
    state: "FL",
    zip: "32818",
    country: "US",
    full: "7721 Newlan Dr, Orlando, FL 32818",
  },
  geo: {
    lat: 28.5677,
    lng: -81.4637,
  },
  hours: {
    weekdays: "24/7 Emergency Service",
    note: "Available around the clock, every day of the year",
  },
  rating: 4.8,
  reviewCount: 56,
  url: "https://affordablelocksmithorlando.com",
  social: {
    google: "https://www.google.com/maps?cid=8420155941837107426",
  },
  googlePlaceId: "0x88e777ebd8187e9f:0x74da67379a9870e2",
  googleCid: "8420155941837107426",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.564982386056!2d-81.49288428926452!3d28.612824475574087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e777ebd8187e9f%3A0x74da67379a9870e2!2sAffordable%20Locksmith%20Orlando!5e0!3m2!1sen!2s!4v1780207016083!5m2!1sen!2s",
  licenseNumber: "FL-LIC-2024-LOCK",
  founded: "2015",
  serviceRadius: "30 miles",
} as const;

export const SERVICE_AREAS = [
  { name: "Orlando", slug: "orlando", zip: "32801" },
  { name: "Winter Garden", slug: "winter-garden", zip: "34787" },
  { name: "Ocoee", slug: "ocoee", zip: "34761" },
  { name: "Apopka", slug: "apopka", zip: "32703" },
  { name: "Winter Park", slug: "winter-park", zip: "32789" },
  { name: "Kissimmee", slug: "kissimmee", zip: "34741" },
  { name: "Sanford", slug: "sanford", zip: "32771" },
  { name: "Lake Mary", slug: "lake-mary", zip: "32746" },
  { name: "Altamonte Springs", slug: "altamonte-springs", zip: "32701" },
  { name: "Maitland", slug: "maitland", zip: "32751" },
  { name: "Longwood", slug: "longwood", zip: "32750" },
  { name: "Casselberry", slug: "casselberry", zip: "32707" },
] as const;

export const SERVICES = [
  {
    slug: "emergency-locksmith",
    name: "Emergency Locksmith",
    shortName: "Emergency",
    icon: "AlertTriangle",
    description: "24/7 emergency locksmith services. Locked out? We arrive in 20–30 minutes.",
    heroDescription: "Locked out of your home, car, or business? Our emergency locksmiths are available 24 hours a day, 7 days a week, 365 days a year. We guarantee fast arrival — typically 20 to 30 minutes throughout Orlando.",
    price: "Starting at $45",
    responseTime: "20–30 min",
    popular: true,
  },
  {
    slug: "residential-locksmith",
    name: "Residential Locksmith",
    shortName: "Residential",
    icon: "Home",
    description: "Complete home lock services including installation, rekeying, repair, and smart locks.",
    heroDescription: "Protect your home and family with professional residential locksmith services. From deadbolt installation to complete security upgrades, we keep Orlando homes safe.",
    price: "Starting at $55",
    responseTime: "Same day",
    popular: true,
  },
  {
    slug: "commercial-locksmith",
    name: "Commercial Locksmith",
    shortName: "Commercial",
    icon: "Building2",
    description: "Business security solutions including master key systems, access control, and high-security locks.",
    heroDescription: "Protect your business assets with enterprise-grade security. We serve offices, retail stores, warehouses, and multi-unit properties throughout Orlando.",
    price: "Starting at $75",
    responseTime: "Same day",
    popular: false,
  },
  {
    slug: "automotive-locksmith",
    name: "Automotive Locksmith",
    shortName: "Automotive",
    icon: "Car",
    description: "Car lockouts, key programming, transponder keys, and key fob replacement for all vehicle makes.",
    heroDescription: "Locked out of your car? Lost your car keys? Our automotive locksmiths are trained on all makes and models — domestic, foreign, luxury, and commercial vehicles.",
    price: "Starting at $65",
    responseTime: "20–30 min",
    popular: true,
  },
  {
    slug: "car-key-replacement",
    name: "Car Key Replacement",
    shortName: "Car Keys",
    icon: "KeyRound",
    description: "Replacement car keys cut and programmed on-site for all vehicle makes and models.",
    heroDescription: "Lost your car keys? Need a spare? We cut and program replacement car keys on-site — often faster and cheaper than your dealership.",
    price: "Starting at $95",
    responseTime: "Same day",
    popular: false,
  },
  {
    slug: "car-key-programming",
    name: "Car Key Programming",
    shortName: "Key Programming",
    icon: "Cpu",
    description: "Transponder key programming, remote key fob programming, and push-button start key services.",
    heroDescription: "Modern vehicles require precise electronic key programming. Our certified technicians program transponder keys, smart keys, and key fobs for all makes and models.",
    price: "Starting at $85",
    responseTime: "Same day",
    popular: false,
  },
  {
    slug: "lock-rekeying",
    name: "Lock Rekeying",
    shortName: "Rekeying",
    icon: "RefreshCw",
    description: "Rekey your locks without replacing them. The most cost-effective way to secure your property.",
    heroDescription: "Just moved? Lost a key? Rekeying changes your lock's internal pins so old keys no longer work. It's faster and less expensive than full lock replacement.",
    price: "Starting at $25/lock",
    responseTime: "Same day",
    popular: true,
  },
  {
    slug: "lock-repair",
    name: "Lock Repair",
    shortName: "Repair",
    icon: "Wrench",
    description: "Professional repair for broken, jammed, or damaged locks. All lock brands and types.",
    heroDescription: "A broken lock is a security vulnerability. Our technicians diagnose and repair all types of lock problems — from worn-out cylinders to broken deadbolts — restoring full security.",
    price: "Starting at $45",
    responseTime: "Same day",
    popular: false,
  },
  {
    slug: "safe-opening",
    name: "Safe Opening",
    shortName: "Safe Services",
    icon: "Shield",
    description: "Non-destructive safe opening, combination changes, and safe repair for all brands.",
    heroDescription: "Locked out of your safe? Forgotten your combination? Our safe technicians open all types of safes — residential, commercial, floor safes, and fireproof models — using non-destructive techniques when possible.",
    price: "Starting at $150",
    responseTime: "Same day",
    popular: false,
  },
  {
    slug: "lock-installation",
    name: "Lock Installation",
    shortName: "Installation",
    icon: "PlusSquare",
    description: "Professional installation of deadbolts, smart locks, security locks, and commercial hardware.",
    heroDescription: "Upgrade your security with professionally installed locks. We install all major brands including Schlage, Kwikset, Baldwin, and smart lock systems from August, Yale, and Nest.",
    price: "Starting at $55",
    responseTime: "Same day",
    popular: false,
  },
  {
    slug: "access-control-systems",
    name: "Access Control Systems",
    shortName: "Access Control",
    icon: "Shield",
    description: "Keypad, card reader, biometric, and cloud-based access control installation and programming for businesses.",
    heroDescription: "Secure your business with professionally installed access control systems. From single-door keypad entry to multi-building cloud-based systems with remote management — we design, install, and service access control for Orlando offices, warehouses, retail, and healthcare facilities.",
    price: "Starting at $400",
    responseTime: "Scheduled",
    popular: false,
  },
  {
    slug: "fire-alarm-monitoring",
    name: "Fire Alarm Monitoring",
    shortName: "Fire Alarm",
    icon: "AlertTriangle",
    description: "24/7 UL Listed fire alarm remote monitoring and installation for commercial and residential properties in Orlando.",
    heroDescription: "Protect your property and meet Florida fire code compliance with professional fire alarm installation and 24/7 remote monitoring. Our UL Listed central station monitoring ensures the fire department is notified within seconds of any alarm activation — day or night.",
    price: "From $25/mo",
    responseTime: "24/7 monitoring",
    popular: false,
  },
] as const;

export const AUTHOR = {
  name: "Zack Tramar",
  slug: "zack-tramar",
  jobTitle: "Licensed Master Locksmith & Owner",
  shortBio: "Zack Tramar is the founder and lead technician of Affordable Locksmith Orlando. A Florida-licensed master locksmith with 10+ years of experience, Zack personally oversees every job and trains every technician on staff.",
  fullBio: "Zack Tramar founded Affordable Locksmith Orlando in 2015 with a single mission: deliver fast, honest, and affordable locksmith services to Orlando residents and businesses. With over a decade of hands-on experience in residential, commercial, and automotive locksmithing, Zack holds a Florida State Locksmith License, ALOA certification, and is a certified automotive key programming specialist. He has personally completed thousands of lockouts, rekeying jobs, and security installations throughout the greater Orlando metro area. Zack leads a team of background-checked, licensed technicians and maintains the company's 4.8-star Google rating through a relentless focus on customer satisfaction, transparent pricing, and technical excellence.",
  credentials: [
    "Florida State Licensed Locksmith (FL-LIC-2024-LOCK)",
    "ALOA Certified Registered Locksmith (CRL)",
    "Automotive Key Programming Specialist",
    "Safe Technician — Basic & Intermediate Certified",
    "Background Checked & Insured",
    "10+ Years Professional Experience",
  ],
  expertise: [
    "Emergency Locksmith Services",
    "Residential Lock Installation & Rekeying",
    "Commercial Security & Master Key Systems",
    "Automotive Locksmith & Key Programming",
    "Transponder Key & Smart Key Programming",
    "Safe Opening & Combination Resetting",
    "Access Control Installation",
    "Smart Lock Installation",
  ],
  yearsExperience: 10,
  jobsCompleted: "5,000+",
  url: "https://affordablelocksmithorlando.com/about",
  image: "https://affordablelocksmithorlando.com/team/zack-tramar.jpg",
  sameAs: [
    "https://www.linkedin.com/in/zack-tramar-locksmith",
    "https://www.google.com/maps?cid=8420155941837107426",
  ],
} as const;

export const TRUST_SIGNALS = [
  { label: "Licensed & Insured", icon: "Shield" },
  { label: "4.8★ Google Rating", icon: "Star" },
  { label: "56+ Reviews", icon: "MessageSquare" },
  { label: "20–30 Min Response", icon: "Clock" },
  { label: "Upfront Pricing", icon: "DollarSign" },
  { label: "24/7 Available", icon: "Phone" },
] as const;

export const REVIEWS = [
  {
    id: 1,
    name: "Maria R.",
    rating: 5,
    date: "May 2026",
    isoDate: "2026-05-14",
    text: "I was locked out of my house at 11pm and they arrived in under 25 minutes. The technician was professional, friendly, and had me back inside quickly. Price was very reasonable. Highly recommend!",
    service: "Emergency House Lockout",
    verified: true,
  },
  {
    id: 2,
    name: "James T.",
    rating: 5,
    date: "April 2026",
    isoDate: "2026-04-28",
    text: "Called them for a car lockout near International Drive. Fast response, professional service. The technician explained everything clearly and had my car open in minutes. Will definitely use again.",
    service: "Car Lockout",
    verified: true,
  },
  {
    id: 3,
    name: "Sandra K.",
    rating: 5,
    date: "May 2026",
    isoDate: "2026-05-08",
    text: "Needed to rekey all locks after a break-in scare. They came same day, rekeyed 4 locks quickly and charged a fair price. Very professional team. Peace of mind restored!",
    service: "Lock Rekeying",
    verified: true,
  },
  {
    id: 4,
    name: "David M.",
    rating: 5,
    date: "March 2026",
    isoDate: "2026-03-30",
    text: "Best locksmith in Orlando! I needed a new car key programmed and they did it for half the price the dealership quoted. Great work, fast service. 5 stars all the way.",
    service: "Car Key Programming",
    verified: true,
  },
  {
    id: 5,
    name: "Angela B.",
    rating: 5,
    date: "April 2026",
    isoDate: "2026-04-30",
    text: "Moved into a new home and had all locks rekeyed. Excellent service from start to finish. On time, professional, and affordable. Already recommended to my neighbors.",
    service: "Lock Rekeying",
    verified: true,
  },
  {
    id: 6,
    name: "Carlos V.",
    rating: 4,
    date: "April 2026",
    isoDate: "2026-04-12",
    text: "Good service for my business. Had them install new commercial locks on our office. Professional installation, clean work. Small delay in arrival but they communicated well about it.",
    service: "Commercial Lock Installation",
    verified: true,
  },
] as const;

export const FAQ_GENERAL = [
  {
    q: "How fast can you arrive for a lockout emergency in Orlando?",
    a: "Our average response time in Orlando is 20 to 30 minutes. We have mobile units stationed throughout the Orlando metro area to ensure rapid response 24 hours a day, 7 days a week.",
  },
  {
    q: "How much does a locksmith cost in Orlando?",
    a: "Our locksmith services start at $45 for basic lockouts. Lock rekeying starts at $25 per lock. Car key programming starts at $85. We provide upfront pricing before any work begins — no hidden fees.",
  },
  {
    q: "Are you available on nights, weekends, and holidays?",
    a: "Yes. We operate 24/7/365 including all holidays, nights, and weekends. Emergency locksmith needs don't follow business hours, and neither do we.",
  },
  {
    q: "Do you require proof of ownership before opening a lock?",
    a: "Yes, for security we require proof of ownership or residency (ID, lease agreement, vehicle registration, or title) before performing any lockout service. This protects our customers and the community.",
  },
  {
    q: "Is Affordable Locksmith Orlando licensed and insured?",
    a: "Yes. We are a fully licensed and insured locksmith company operating in Florida. All technicians are background-checked, trained, and certified.",
  },
  {
    q: "Do you serve areas outside of Orlando?",
    a: "Yes. We serve the greater Orlando metro area including Winter Garden, Ocoee, Apopka, Winter Park, Kissimmee, Sanford, Lake Mary, Altamonte Springs, Maitland, Longwood, and Casselberry.",
  },
  {
    q: "Can you make a car key without the original?",
    a: "Yes. Our automotive locksmiths can cut and program replacement car keys even without the original key, using your vehicle's VIN number and proof of ownership.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept cash, all major credit cards (Visa, MasterCard, American Express, Discover), and digital payments including Apple Pay and Google Pay.",
  },
] as const;

export const LOCATION_CONTENT: Partial<Record<string, {
  intro: string;
  neighborhoods: string;
  faqs: { q: string; a: string }[];
}>> = {
  "lake-mary": {
    intro: `Affordable Locksmith Orlando serves Lake Mary, FL (ZIP 32746) — one of Seminole County's fastest-growing communities. From the Heathrow business corridor to Colonial TownPark and Timacuan's upscale residential neighborhoods, our certified locksmiths provide fast, professional service to Lake Mary residents and businesses 24 hours a day, 7 days a week.`,
    neighborhoods: `We serve all Lake Mary areas including Heathrow, Timacuan, Magnolia Plantation, Colonial TownPark, the Lake Mary Tech Corridor along I-4, and surrounding Seminole County neighborhoods. Our mobile units are positioned throughout the area for rapid 20–30 minute response.`,
    faqs: [
      {
        q: "How fast can a locksmith reach Heathrow or Colonial TownPark in Lake Mary?",
        a: "Our average arrival time in Lake Mary is 20–30 minutes, including the Heathrow business park, Colonial TownPark retail district, and residential areas like Timacuan. We operate 24/7 including nights and weekends.",
      },
      {
        q: "Do you provide commercial locksmith service to offices in the Heathrow business park?",
        a: "Yes. We provide full commercial locksmith services to offices in Heathrow and along the Lake Mary Tech Corridor — including master key systems, access control installation, commercial lockouts, and lock hardware upgrades. Same-day service available.",
      },
      {
        q: "How much does a locksmith cost in Lake Mary, FL?",
        a: "Locksmith services in Lake Mary start at $45 for emergency lockouts. Lock rekeying starts at $25 per lock. Car key programming starts at $85. We provide upfront pricing with no hidden fees for all Lake Mary customers.",
      },
      {
        q: "What areas near Lake Mary do you serve?",
        a: "We serve Lake Mary and surrounding Seminole County areas including Heathrow, Longwood, Sanford, Altamonte Springs, Casselberry, and Maitland — all with the same fast response and upfront pricing.",
      },
    ],
  },
  "orlando": {
    intro: `Affordable Locksmith Orlando is Orlando's most affordable licensed locksmith — serving all Orlando ZIP codes 24/7 with transparent, upfront pricing. Whether you're in Dr. Phillips, Lake Nona, College Park, Audubon Park, or Downtown Orlando, we provide fast, licensed locksmith services starting at just $45.`,
    neighborhoods: `We serve all Orlando neighborhoods including Dr. Phillips, Lake Nona, College Park, Audubon Park, Thornton Park, Mills 50, Parramore, Milk District, Baldwin Park, Waterford Lakes, and every ZIP code in between. Our mobile units cover all 32XXX ZIP codes for 20–30 minute response times.`,
    faqs: [
      {
        q: "What is the most affordable locksmith in Orlando?",
        a: "Affordable Locksmith Orlando offers the lowest prices among licensed locksmiths in the area — starting at $45 for lockouts, $25/lock for rekeying, and $85 for car key programming. We provide upfront pricing with no hidden service call fees. All prices quoted before work begins.",
      },
      {
        q: "Is there a locksmith available 24/7 in Orlando, FL?",
        a: "Yes. We're available 24 hours a day, 7 days a week, 365 days a year throughout all Orlando ZIP codes. No extra charge for nights, weekends, or holidays. Average arrival time is 20–30 minutes.",
      },
      {
        q: "How much does an emergency lockout cost in Orlando?",
        a: "Emergency lockout service in Orlando starts at $45. The exact price depends on lock type, but you'll always receive an upfront quote before any work begins. We do not charge extra for nights or weekends.",
      },
      {
        q: "Are you cheaper than a dealership for car keys in Orlando?",
        a: "Yes — typically 40–60% cheaper. Dealerships often charge $200–$500+ for transponder key programming. Our mobile automotive locksmiths charge $85–$200 depending on the vehicle make and model, with no towing required.",
      },
    ],
  },
  "kissimmee": {
    intro: `Affordable Locksmith Orlando provides fast, professional locksmith services throughout Kissimmee, FL (ZIP 34741) — including the I-4 tourism corridor, Celebration, Poinciana, and vacation rental communities near Walt Disney World. We serve Kissimmee residents, property managers, vacation rental owners, and businesses 24/7 with 20–30 minute response times.`,
    neighborhoods: `We cover all Kissimmee areas: the tourist corridor along US-192 and US-441, Celebration, Poinciana, Buenaventura Lakes, Osceola Parkway corridor, and vacation rental communities near Disney World and Universal. We understand the unique needs of vacation rental operators and property managers in Osceola County.`,
    faqs: [
      {
        q: "Do you provide locksmith service for vacation rentals in Kissimmee?",
        a: "Yes. We specialize in vacation rental locksmith services including emergency lockouts, smart lock installation and programming, lock rekeying between guests, and master key systems for property managers. Available 24/7 to handle guest lockouts at any hour.",
      },
      {
        q: "How fast can a locksmith arrive near Disney World or the tourist corridor in Kissimmee?",
        a: "We typically arrive within 20–30 minutes throughout the Kissimmee tourist corridor including US-192, US-441, and vacation rental communities near Walt Disney World. Available 24/7 for tourist and guest emergencies.",
      },
      {
        q: "Can you rekey locks for a vacation rental property in Kissimmee?",
        a: "Yes. We rekey vacation rental properties and install smart locks that allow remote access code management — ideal for Kissimmee vacation rental operators. This eliminates the need to physically hand over keys between guests.",
      },
      {
        q: "How much does a locksmith cost in Kissimmee?",
        a: "Locksmith services in Kissimmee start at $45 for emergency lockouts. Lock rekeying starts at $25 per lock. Smart lock installation starts at $55 (labor). Upfront pricing with no hidden fees for all Kissimmee and Osceola County customers.",
      },
    ],
  },
  "altamonte-springs": {
    intro: `Affordable Locksmith Orlando provides fast, licensed locksmith service throughout Altamonte Springs, FL (ZIP 32701 & 32714, Seminole County) — available 24/7 with a 20–30 minute average response time. From emergency lockouts near Cranes Roost Park to commercial security upgrades along the SR 434 corridor, we serve every Altamonte Springs neighborhood with upfront pricing starting at $45.`,
    neighborhoods: `We cover all Altamonte Springs areas including Cranes Roost, Forest City, Spring Lake, Sanlando Springs, the Altamonte Mall corridor, AdventHealth campus, SunRail station area, and all residential streets along SR 434, SR 436, and US-17/92. See our <a href="/altamonte-springs-locksmith">dedicated Altamonte Springs locksmith service page</a> for full details.`,
    faqs: [
      {
        q: "What locksmith services are available in Altamonte Springs, FL?",
        a: "Affordable Locksmith Orlando provides complete locksmith services in Altamonte Springs including 24/7 emergency lockouts, lock rekeying, deadbolt installation, smart lock setup, car key programming, safe opening, and commercial security — available across ZIP codes 32701 and 32714 with 20–30 minute response.",
      },
      {
        q: "How fast can a locksmith arrive in Altamonte Springs?",
        a: "Our average response time in Altamonte Springs is 20–30 minutes. We have mobile units positioned throughout Seminole County for rapid dispatch to Cranes Roost, Forest City, Spring Lake, and the SR 434 and SR 436 corridors.",
      },
      {
        q: "How much does locksmith service cost in Altamonte Springs?",
        a: "Locksmith service in Altamonte Springs starts at $45 for emergency lockouts. Lock rekeying from $25/lock. Car key programming from $85. All prices quoted upfront — no hidden service call fees.",
      },
      {
        q: "Are you licensed to provide locksmith service in Altamonte Springs?",
        a: "Yes. Affordable Locksmith Orlando holds Florida State Locksmith License FL-LIC-2024-LOCK and is fully insured. All technicians are background-checked and ALOA certified, authorized to serve all of Seminole County including Altamonte Springs.",
      },
    ],
  },
  "winter-park": {
    intro: `Affordable Locksmith Orlando provides premium locksmith services to Winter Park, FL (ZIP 32789) — serving Park Avenue's historic district, Rollins College area, and Winter Park's upscale residential communities. Our licensed locksmiths are experienced with high-security lock brands and smart home systems favored in the Winter Park area.`,
    neighborhoods: `We serve all Winter Park neighborhoods including the Park Avenue corridor, Rollins College area, Via Tuscany, Windsong, Alaqua Lakes, Genius Drive, and surrounding Orange County communities. Our technicians are familiar with the historic homes, custom doors, and high-security hardware common in Winter Park.`,
    faqs: [
      {
        q: "Do you service high-security locks and smart locks in Winter Park?",
        a: "Yes. We install and service high-security locks from Medeco, Mul-T-Lock, Baldwin, and Schlage — as well as smart lock systems from August, Yale, Kwikset Halo, and Google Nest. We're experienced with the premium lock hardware common in Winter Park homes.",
      },
      {
        q: "Can you work on historic or custom doors in Winter Park?",
        a: "Yes. Our locksmiths are experienced with older mortise locks, European-style locks, and custom hardware found in Winter Park's historic homes and estates. We assess the right approach before any work begins to preserve your doors.",
      },
      {
        q: "How much does a locksmith cost in Winter Park?",
        a: "Locksmith services in Winter Park start at $45 for emergency lockouts. Lock rekeying starts at $25 per lock. High-security lock installation and smart lock setup costs vary by brand and complexity. Upfront pricing always provided before work begins.",
      },
      {
        q: "Do you provide locksmith service near Park Avenue in Winter Park?",
        a: "Yes. We serve Park Avenue, the historic district, and all Winter Park ZIP codes (32789, 32792). Our average arrival time in Winter Park is 20–30 minutes. Available 24/7 including nights and weekends.",
      },
    ],
  },
};
