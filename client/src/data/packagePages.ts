import { blogPosts } from "./blogPosts";

export interface PackagePageContent {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  blogSlug: string;
  departureDates: string[];
  routeHighlights: string[];
  inclusions: string[];
  exclusions: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export const packagePages: PackagePageContent[] = [
  {
    slug: "char-dham-yatra-from-bhopal",
    title: "Char Dham Yatra from Bhopal",
    metaTitle: "Char Dham Yatra from Bhopal | Package Dates, Route Highlights and Booking Help",
    metaDescription:
      "Explore Char Dham Yatra from Bhopal with package dates, route highlights, inclusions, exclusions and family-friendly pilgrimage support.",
    summary:
      "A high-intent Char Dham page for Bhopal travellers who want clear route planning, upcoming departure dates, and confident family pilgrimage support.",
    blogSlug: "char-dham-yatra-package-from-bhopal",
    departureDates: ["18 September 2026", "3 October 2026", "14 May 2027"],
    routeHighlights: ["Haridwar", "Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    inclusions: [
      "Route planning from Bhopal with departure guidance",
      "Shared accommodation and on-route travel coordination",
      "Vegetarian meals as per the confirmed itinerary",
      "Support for darshan timing and temple-route movement",
    ],
    exclusions: [
      "Personal shopping and porter expenses",
      "Medical emergencies or travel insurance costs",
      "Helicopter bookings and special VIP darshan charges",
      "Expenses caused by weather or government restrictions",
    ],
    faqs: [
      {
        question: "Is this suitable for senior citizens?",
        answer:
          "Yes, when the family chooses the right departure window and discusses health and mobility requirements before booking.",
      },
      {
        question: "How early should we reserve the package?",
        answer:
          "For Char Dham, earlier booking is better because rooming, route planning, and peak-season travel all need advance coordination.",
      },
    ],
  },
  {
    slug: "kedarnath-tour-package-from-bhopal",
    title: "Kedarnath Tour Package from Bhopal",
    metaTitle: "Kedarnath Tour Package from Bhopal | Dates, Route Details and Booking Support",
    metaDescription:
      "Check Kedarnath tour package from Bhopal with departure dates, route details, package inclusions, FAQs and family booking guidance.",
    summary:
      "A focused Kedarnath package page for Bhopal pilgrims who want practical route details, booking expectations, and comfort guidance before they enquire.",
    blogSlug: "kedarnath-tour-package-from-bhopal",
    departureDates: ["12 September 2026", "26 September 2026", "22 May 2027"],
    routeHighlights: ["Haridwar", "Guptkashi", "Sonprayag", "Kedarnath"],
    inclusions: [
      "Pickup and route guidance from the planned departure point",
      "Stay coordination and temple-route assistance",
      "Vegetarian meals and standard group support",
      "Help with itinerary pacing for family groups",
    ],
    exclusions: [
      "Pony, palki, helicopter, and porter charges",
      "Medical tests, medicines, or emergency treatment",
      "Optional room upgrades or private transport upgrades",
      "Items not listed in the confirmed itinerary",
    ],
    faqs: [
      {
        question: "Can this package work for first-time pilgrims?",
        answer:
          "Yes. Many first-time pilgrims choose Kedarnath with guided planning because route support matters more than generic sightseeing arrangements.",
      },
      {
        question: "What should we ask before booking?",
        answer:
          "Ask about stay quality, route timing, pace for elders, and what support is available during the climb or transfer portions.",
      },
    ],
  },
  {
    slug: "ujjain-tour-package-from-bhopal",
    title: "Ujjain Tour Package from Bhopal",
    metaTitle: "Ujjain Tour Package from Bhopal | Mahakal Darshan Planning and Booking",
    metaDescription:
      "View Ujjain tour package from Bhopal with Mahakal darshan planning, travel support, inclusions, exclusions and family-friendly booking help.",
    summary:
      "A short-route Ujjain package page for Bhopal families who want a manageable Mahakal journey with simple logistics and clear darshan planning.",
    blogSlug: "ujjain-tour-package-from-bhopal",
    departureDates: ["17 August 2026", "7 September 2026", "5 October 2026"],
    routeHighlights: ["Bhopal", "Ujjain", "Mahakaleshwar Temple"],
    inclusions: [
      "Trip coordination for a short pilgrimage schedule",
      "Temple-visit timing guidance",
      "Shared transport and standard stay support when applicable",
      "Family-friendly assistance for darshan planning",
    ],
    exclusions: [
      "VIP darshan or special puja charges",
      "Personal shopping and food outside the itinerary",
      "Room category upgrades",
      "Expenses due to local crowd-control or timing changes",
    ],
    faqs: [
      {
        question: "Is Ujjain better for elders than a mountain yatra?",
        answer:
          "For many families, yes. It is a shorter and simpler route, which often makes it easier for elders and first-time pilgrims.",
      },
      {
        question: "Can we request a private family plan?",
        answer:
          "Yes. Families can contact the team for private transport or date-specific planning support.",
      },
    ],
  },
  {
    slug: "vrindavan-tour-package-from-bhopal",
    title: "Vrindavan Tour Package from Bhopal",
    metaTitle: "Vrindavan Tour Package from Bhopal | Family-Friendly Devotional Travel",
    metaDescription:
      "See Vrindavan tour package details from Bhopal, including departure planning, inclusions, FAQs and devotional travel support.",
    summary:
      "A devotional family route for travellers who want temple-focused planning, group comfort, and a smoother Bhopal-to-Vrindavan journey.",
    blogSlug: "vrindavan-tour-package-from-bhopal",
    departureDates: ["29 August 2026", "24 October 2026", "13 March 2027"],
    routeHighlights: ["Mathura", "Vrindavan", "Banke Bihari Temple", "Prem Mandir"],
    inclusions: [
      "Temple-route planning and group coordination",
      "Travel and stay guidance for family groups",
      "Vegetarian meal planning as per itinerary",
      "Support for darshan timing and local movement",
    ],
    exclusions: [
      "Private puja or special temple donation charges",
      "Personal transport outside the group plan",
      "Shopping and personal expenses",
      "Anything not included in the confirmed quotation",
    ],
    faqs: [
      {
        question: "Is this good for group travel with children?",
        answer:
          "Yes. Vrindavan often works well for mixed-age family groups when travel and darshan timing are planned properly.",
      },
      {
        question: "Do you help with temple timing questions?",
        answer:
          "Yes. Families can ask the team about route flow, timing expectations, and basic planning support before booking.",
      },
    ],
  },
  {
    slug: "nepal-tour-package-from-bhopal",
    title: "Nepal Tour Package from Bhopal",
    metaTitle: "Nepal Tour Package from Bhopal | Pashupatinath-Focused Spiritual Travel",
    metaDescription:
      "Review Nepal tour package details from Bhopal with Pashupatinath-focused planning, inclusions, FAQs and family support.",
    summary:
      "A Nepal spiritual travel page for families comparing broader Nepal routes and Pashupatinath-centred pilgrimage support from Bhopal.",
    blogSlug: "nepal-tour-package-from-bhopal",
    departureDates: ["10 October 2026", "21 November 2026", "9 April 2027"],
    routeHighlights: ["Gorakhpur corridor", "Kathmandu", "Pashupatinath Temple"],
    inclusions: [
      "Cross-route planning support before departure",
      "Stay and devotional travel coordination",
      "Family communication support for a longer route",
      "Basic guidance on the pilgrimage flow",
    ],
    exclusions: [
      "Passport or identity-related compliance costs",
      "Optional sightseeing outside the pilgrimage plan",
      "Personal shopping, insurance, or emergency expenses",
      "Charges not listed in the confirmed itinerary",
    ],
    faqs: [
      {
        question: "Is this only for Pashupatinath devotees?",
        answer:
          "Many travellers choose it for Pashupatinath first, but it can also suit families comparing broader Nepal spiritual travel.",
      },
      {
        question: "Should families book earlier for Nepal trips?",
        answer:
          "Yes. Longer travel routes benefit from earlier coordination, especially when families want smoother movement and stay planning.",
      },
    ],
  },
  {
    slug: "pashupatinath-tour-package-from-bhopal",
    title: "Pashupatinath Tour Package from Bhopal",
    metaTitle: "Pashupatinath Tour Package from Bhopal | Nepal Darshan Route and Booking Help",
    metaDescription:
      "Explore Pashupatinath tour package from Bhopal with Nepal darshan route clarity, inclusions, FAQs and family booking support.",
    summary:
      "A focused Pashupatinath page for Bhopal devotees who want a temple-first Nepal route instead of a broad general travel package.",
    blogSlug: "pashupatinath-tour-package-from-bhopal",
    departureDates: ["15 October 2026", "28 December 2026", "16 April 2027"],
    routeHighlights: ["Bhopal departure support", "Kathmandu", "Pashupatinath darshan"],
    inclusions: [
      "Pashupatinath-focused route planning",
      "Group coordination and stay support",
      "Pilgrimage timing guidance before departure",
      "Family-friendly communication support",
    ],
    exclusions: [
      "Personal puja charges or special temple offerings",
      "Travel insurance and medical costs",
      "Private transport requests outside the group plan",
      "Personal expenses outside agreed package scope",
    ],
    faqs: [
      {
        question: "How is this different from a broader Nepal package?",
        answer:
          "This page is focused on devotees whose primary intent is Pashupatinath darshan rather than a general Nepal sightseeing route.",
      },
      {
        question: "Can families request additional Nepal stops?",
        answer:
          "Yes. Custom discussions can happen before booking, depending on time, budget, and route feasibility.",
      },
    ],
  },
];

export const getPackagePage = (slug: string) =>
  packagePages.find((pkg) => pkg.slug === slug) || null;

export const getPackageBlogPost = (blogSlug: string) =>
  blogPosts.find((post) => post.slug === blogSlug) || null;

const packageMatchers: Array<{ pattern: RegExp; slug: string }> = [
  { pattern: /char\s*dham/i, slug: "char-dham-yatra-from-bhopal" },
  { pattern: /kedarnath/i, slug: "kedarnath-tour-package-from-bhopal" },
  { pattern: /ujjain|mahakal/i, slug: "ujjain-tour-package-from-bhopal" },
  { pattern: /vrindavan|mathura/i, slug: "vrindavan-tour-package-from-bhopal" },
  { pattern: /pashupatinath/i, slug: "pashupatinath-tour-package-from-bhopal" },
  { pattern: /nepal/i, slug: "nepal-tour-package-from-bhopal" },
];

export const getPackagePathForTitle = (title: string) => {
  const match = packageMatchers.find(({ pattern }) => pattern.test(title));
  return match ? `/${match.slug}` : null;
};
