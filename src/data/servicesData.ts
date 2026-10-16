export type CategoryId = "education" | "business" | "healthcare" | "personal";

export type TierId = "starter" | "professional" | "premium";

export interface CarePlan {
  id: string;
  name: string;
  monthlyPrice: number;
  monthlyPriceDisplay: string;
  features: string[];
  description?: string;
  popular?: boolean;
}

export interface ServiceTier {
  id: TierId;
  name: string;
  price: number;
  priceDisplay: string;
  targetAudience: string;
  pageScope: string;
  features: string[];
  revisionCount: string;
  highlights?: string[];
  optionalNotes?: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: CategoryId;
  title: string;
  shortDescription: string;
  iconName: string;
  tiers: ServiceTier[];
  maintenancePlans?: CarePlan[];
  note?: string;
}

export const SERVICES_DATA: Record<CategoryId, ServiceCategory> = {
  education: {
    id: "education",
    title: "Education & Coaching",
    shortDescription:
      "Modern web platforms and portals for coaching institutes, tuition academies, colleges, and educators.",
    iconName: "GraduationCap",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: 8000,
        priceDisplay: "₹8,000",
        targetAudience: "Tutors, individual instructors, and early-stage tuition batches",
        pageScope: "Up to 5 pages",
        revisionCount: "1 round of revisions",
        features: [
          "Up to 5 custom-styled responsive pages",
          "Course curriculum & class timing overview",
          "Quick student admission enquiry form",
          "Click-to-Call & direct WhatsApp button",
          "Embedded Google Maps campus location",
          "On-page foundational SEO setup",
          "1 round of design & content revisions",
        ],
        optionalNotes: "Ideal for establishing online legitimacy and collecting initial student inquiries.",
      },
      {
        id: "professional",
        name: "Professional",
        price: 15000,
        priceDisplay: "₹15,000",
        targetAudience: "Established coaching institutes, private schools, and training academies",
        pageScope: "Up to 10 pages",
        revisionCount: "2 rounds of revisions",
        popular: true,
        highlights: ["Most Popular", "Best Value"],
        features: [
          "Up to 10 custom-styled responsive pages",
          "Faculty directory & qualification profiles",
          "Student testimonials & ranker achievement showcase",
          "Interactive campus / classroom photo gallery",
          "Multi-course admission enquiry engine",
          "Latest news, announcements & circulars feed",
          "Google Analytics & inquiry conversion tracking",
          "2 rounds of design & content revisions",
        ],
        optionalNotes: "Engineered to convert website visitors into walk-in admissions.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 23000,
        priceDisplay: "₹23,000",
        targetAudience: "Multi-branch institutions, colleges, and premier competitive coaching centers",
        pageScope: "Up to 20 pages",
        revisionCount: "3 rounds of revisions",
        highlights: ["Comprehensive Suite"],
        features: [
          "Up to 20 custom-styled responsive pages",
          "Bespoke brand design system & micro-interactions",
          "Dedicated branch / department sub-pages",
          "Advanced admission workflow with email notification routing",
          "Digital prospectus & syllabus download portal",
          "Academic events calendar & examination schedules",
          "Full XML sitemap & advanced local SEO optimization",
          "3 rounds of design & content revisions",
        ],
        optionalNotes: "Enterprise-grade digital campus for institutions with high enrollment volume.",
      },
    ],
    maintenancePlans: [
      {
        id: "edu-starter-care",
        name: "Starter Care",
        monthlyPrice: 999,
        monthlyPriceDisplay: "₹999/mo",
        features: [
          "Cloud hosting management & SSL renewal",
          "Monthly security patches & Next.js updates",
          "1 batch announcement or timetable update/month",
          "Automated weekly cloud backups",
        ],
      },
      {
        id: "edu-pro-care",
        name: "Professional Care",
        monthlyPrice: 1999,
        monthlyPriceDisplay: "₹1,999/mo",
        popular: true,
        features: [
          "High-speed CDN hosting & 99.9% uptime SLA",
          "Up to 4 content / batch / faculty updates/month",
          "Admission season priority support",
          "Daily automated cloud backups",
          "Monthly visitor analytics summary report",
        ],
      },
      {
        id: "edu-premium-care",
        name: "Premium Care",
        monthlyPrice: 3999,
        monthlyPriceDisplay: "₹3,999/mo",
        features: [
          "Unlimited routine text & image updates",
          "Direct WhatsApp line with senior developer",
          "Examination & results rush publishing",
          "2-hour emergency response SLA",
          "Quarterly technical SEO health audit",
        ],
      },
    ],
  },

  business: {
    id: "business",
    title: "Business & E-Commerce",
    shortDescription:
      "Conversion-focused corporate platforms, digital showrooms, and full-fledged e-commerce storefronts.",
    iconName: "Building2",
    tiers: [
      {
        id: "starter",
        name: "Starter",
        price: 12000,
        priceDisplay: "₹12,000",
        targetAudience: "Local business showrooms, consulting firms, and boutique service providers",
        pageScope: "Up to 5 pages",
        revisionCount: "1 round of revisions",
        features: [
          "Up to 5 custom-styled responsive pages",
          "Curated product/service catalogue (item-limited)",
          "Direct WhatsApp lead inquiry trigger button",
          "Click-to-Call & Google Business Map embed",
          "On-page business metadata & local SEO",
          "1 round of design & content revisions",
          "No checkout / payment gateway (inquiry based)",
        ],
        optionalNotes: "Perfect for local businesses wanting a high-trust digital presence and WhatsApp leads.",
      },
      {
        id: "professional",
        name: "Professional",
        price: 18000,
        priceDisplay: "₹18,000",
        targetAudience: "Growing retail brands, distributors, and expanding commercial enterprises",
        pageScope: "Up to 10 pages",
        revisionCount: "2 rounds of revisions",
        popular: true,
        highlights: ["Most Popular", "High Conversion"],
        features: [
          "Up to 10 custom-styled responsive pages",
          "Expanded product / service catalogue with category filters",
          "Dedicated product detail view pages with photo zoom",
          "Customer reviews, ratings & trust badges",
          "Product-specific WhatsApp enquiry pre-fill",
          "Lead capture forms with automated email delivery",
          "2 rounds of design & content revisions",
        ],
        optionalNotes: "Designed for businesses showcasing wide catalogues with direct WhatsApp negotiation.",
      },
      {
        id: "premium",
        name: "Premium",
        price: 30000,
        priceDisplay: "₹30,000+",
        targetAudience: "Full D2C brands, online retailers, and automated order fulfillment platforms",
        pageScope: "Up to 15 pages",
        revisionCount: "3 rounds of revisions",
        highlights: ["Complete Storefront"],
        features: [
          "Up to 15 custom-styled responsive pages",
          "Full e-commerce storefront with shopping cart & checkout",
          "Payment gateway integration (Razorpay / UPI / Cards)",
          "Cash on Delivery (COD) workflow configuration",
          "Order management dashboard & customer confirmation emails",
          "Promotional coupon codes & discount engine",
          "Inventory status badges & stock indicators",
          "3 rounds of design & content revisions",
        ],
        optionalNotes: "Complete transactional infrastructure for direct online selling without marketplace fees.",
      },
    ],
    maintenancePlans: [
      {
        id: "biz-starter-care",
        name: "Business Care",
        monthlyPrice: 999,
        monthlyPriceDisplay: "₹999/mo",
        features: [
          "Cloud hosting maintenance & SSL certificate",
          "Next.js dependency & security patching",
          "1 catalogue price/item update per month",
          "Weekly automated database & file backups",
        ],
      },
      {
        id: "biz-growth-care",
        name: "Growth Care",
        monthlyPrice: 1999,
        monthlyPriceDisplay: "₹1,999/mo",
        popular: true,
        features: [
          "High-performance CDN edge hosting",
          "Up to 5 product / banner updates per month",
          "Conversion funnel monitoring",
          "Daily automated cloud backups",
          "Monthly lead analytics report",
        ],
      },
      {
        id: "biz-store-priority",
        name: "Store Priority",
        monthlyPrice: 3999,
        monthlyPriceDisplay: "₹3,999/mo",
        features: [
          "Payment gateway & checkout uptime monitoring",
          "Unlimited catalogue & banner updates",
          "Flash sale & festive rush readiness",
          "Priority 2-hour bug fix SLA",
          "Monthly checkout performance optimization",
        ],
      },
    ],
  },

  healthcare: {
    id: "healthcare",
    title: "Clinics & Healthcare",
    shortDescription:
      "Patient-first, authoritative medical platforms designed to inspire trust and streamline appointment bookings.",
    iconName: "Stethoscope",
    note: "Notice: No sensitive patient medical records or PHI stored via standard web forms.",
    tiers: [
      {
        id: "starter",
        name: "Clinic Starter",
        price: 12000,
        priceDisplay: "₹12,000",
        targetAudience: "Solo practitioners, private dental clinics, and specialist consulting rooms",
        pageScope: "Up to 5 pages",
        revisionCount: "1 round of revisions",
        features: [
          "Up to 5 custom medical-themed responsive pages",
          "Doctor bio, degrees, fellowships & clinical experience",
          "Clinic consulting hours & Google Maps directions",
          "Core treatments & procedures overview",
          "Online appointment request inquiry form",
          "Direct WhatsApp clinic helpline button",
          "1 round of design & content revisions",
        ],
        optionalNotes: "Builds instant local credibility and drives direct clinic inquiries.",
      },
      {
        id: "professional",
        name: "Healthcare Professional",
        price: 25000,
        priceDisplay: "₹25,000",
        targetAudience: "Multi-doctor clinics, diagnostic centers, and specialized therapy centers",
        pageScope: "Up to 10 pages",
        revisionCount: "2 rounds of revisions",
        popular: true,
        highlights: ["Most Popular", "Clinically Validated"],
        features: [
          "Up to 10 custom-styled responsive pages",
          "Profiles for up to 5 consulting doctors & specialists",
          "Detailed treatment and department specialty pages",
          "Patient testimonials, case outcomes & recovery stories",
          "Appointment booking form with preferred date/time slot picker",
          "Local clinic search engine optimization (Google My Business sync)",
          "Pre-treatment preparation guidelines & patient FAQs",
          "2 rounds of design & content revisions",
        ],
        optionalNotes: "Designed to reduce front-desk telephone load through organized web inquiries.",
      },
      {
        id: "premium",
        name: "Healthcare Premium",
        price: 50000,
        priceDisplay: "₹50,000+",
        targetAudience: "Hospitals, nursing homes, polyclinics, and multi-location healthcare providers",
        pageScope: "Up to 20 pages",
        revisionCount: "3 rounds of revisions",
        highlights: ["Enterprise Healthcare"],
        features: [
          "Up to 20 custom-styled responsive pages",
          "Multi-department specialty architecture (Cardiology, Ortho, etc.)",
          "Expanded doctor directory with OPD schedule matrices",
          "Multi-location clinic / hospital campus pages",
          "Department-specific appointment routing to respective coordinators",
          "Patient resource center & downloadable health advisories",
          "Web accessibility compliance (ADA / WCAG high contrast & screen reader)",
          "3 rounds of design & content revisions",
        ],
        optionalNotes: "Comprehensive healthcare portal for multi-department organizations.",
      },
    ],
    maintenancePlans: [
      {
        id: "health-clinic-care",
        name: "Clinic Care",
        monthlyPrice: 999,
        monthlyPriceDisplay: "₹999/mo",
        features: [
          "Secure HIPAA-conscious cloud hosting & SSL",
          "Doctor timing & holiday schedule updates",
          "Monthly security updates & patch review",
          "Weekly automated cloud backups",
        ],
      },
      {
        id: "health-growth-care",
        name: "Healthcare Growth",
        monthlyPrice: 1999,
        monthlyPriceDisplay: "₹1,999/mo",
        popular: true,
        features: [
          "High-speed medical portal hosting",
          "Up to 4 doctor profile or treatment updates/month",
          "Monthly appointment inquiry log review",
          "Daily automated backups",
          "Quarterly local SEO review",
        ],
      },
      {
        id: "health-priority-care",
        name: "Priority Care",
        monthlyPrice: 3999,
        monthlyPriceDisplay: "₹3,999/mo",
        features: [
          "Emergency OPD schedule modification within 2 hours",
          "Unlimited doctor & service additions",
          "High-availability server infrastructure",
          "Dedicated healthcare account manager",
          "Monthly patient engagement report",
        ],
      },
    ],
  },

  personal: {
    id: "personal",
    title: "Personal & Digital Gifts",
    shortDescription:
      "Bespoke interactive milestone websites created to celebrate relationships, birthdays, weddings, and lifelong memories.",
    iconName: "Gift",
    note: "One-time investment. Includes 1-year high-speed hosting with zero monthly recurring charges.",
    tiers: [
      {
        id: "starter",
        name: "Little Surprise",
        price: 1200,
        priceDisplay: "₹1,200",
        targetAudience: "Birthday surprises, heartfelt thank-yous, and quick celebration wishes",
        pageScope: "One-page site",
        revisionCount: "1 round of small edits",
        features: [
          "Single-page animated reveal celebration site",
          "Personalized greeting with recipient's name & custom message",
          "Photo gallery containing up to 5 curated photographs",
          "Shareable private link ready for WhatsApp or QR gifting",
          "Confetti celebration animation on page load",
          "1 round of small text/photo edits prior to delivery",
        ],
        optionalNotes: "A magical, interactive digital card that lasts longer than flowers.",
      },
      {
        id: "professional",
        name: "Our Story",
        price: 1800,
        priceDisplay: "₹1,800",
        targetAudience: "Anniversaries, proposals, friendship milestones, and couple retrospectives",
        pageScope: "Up to 3 sections/pages",
        revisionCount: "2 rounds of edits",
        popular: true,
        highlights: ["Most Loved", "Romantic Milestone"],
        features: [
          "Multi-section interactive storytelling website (up to 3 sections)",
          "Up to 15 curated high-resolution photos",
          "Interactive chronological relationship / memory timeline",
          "Favorite moments highlight reel with personal captions",
          "Live countdown or count-up timer to/since special date",
          "Optional background music integration with play/pause controls",
          "2 rounds of revisions and timeline adjustments",
        ],
        optionalNotes: "An emotional storytelling experience celebrating your journey together.",
      },
      {
        id: "premium",
        name: "Forever Moments",
        price: 3000,
        priceDisplay: "₹3,000",
        targetAudience: "Grand wedding celebrations, 25th/50th anniversaries, and luxury tributes",
        pageScope: "Up to 5 sections/pages",
        revisionCount: "3 rounds of edits",
        highlights: ["The Ultimate Tribute"],
        features: [
          "Full bespoke digital tribute website (up to 5 sections/pages)",
          "Up to 30 curated high-resolution photos with lightbox captions",
          "Interactive secret surprise screen / envelope opening animation",
          "Comprehensive milestones timeline with custom chapters",
          "Personal love letter or poem reveal modal",
          "Optional video embed (YouTube / Drive) & ambient background soundtrack",
          "Interactive digital guestbook for friends/family to leave wishes",
          "Optional private password protection for loved ones",
          "3 rounds of edits and customizations",
        ],
        optionalNotes: "An unforgettable keepsake treasured by family and loved ones forever.",
      },
    ],
  },
};

/**
 * Returns a specific service category by ID.
 */
export function getCategoryById(id: CategoryId): ServiceCategory | undefined {
  return SERVICES_DATA[id];
}

/**
 * Returns a specific tier by category and tier ID.
 */
export function getTier(
  categoryId: CategoryId,
  tierId: TierId
): ServiceTier | undefined {
  const category = SERVICES_DATA[categoryId];
  return category?.tiers.find((t) => t.id === tierId);
}

/**
 * Returns an array of all available service categories.
 */
export function getAllCategories(): ServiceCategory[] {
  return Object.values(SERVICES_DATA);
}

/**
 * Helper to get the list of category IDs.
 */
export const CATEGORY_IDS: CategoryId[] = [
  "education",
  "business",
  "healthcare",
  "personal",
];

/**
 * Helper to get the list of tier IDs.
 */
export const TIER_IDS: TierId[] = ["starter", "professional", "premium"];
