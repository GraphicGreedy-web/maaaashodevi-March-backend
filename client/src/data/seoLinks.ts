export interface ContextLink {
  title: string;
  path: string;
  description: string;
}

export const planningGuides: ContextLink[] = [
  {
    title: "Char Dham Yatra Package from Bhopal",
    path: "/blog/char-dham-yatra-package-from-bhopal",
    description:
      "Planning advice, route expectations, and package tips for Char Dham travellers from Bhopal.",
  },
  {
    title: "Kedarnath Tour Package from Bhopal",
    path: "/blog/kedarnath-tour-package-from-bhopal",
    description:
      "A practical guide for families comparing Kedarnath travel timings, support, and package fit.",
  },
  {
    title: "Uttarakhand Tour Package from Bhopal",
    path: "/blog/uttarakhand-tour-package-from-bhopal",
    description:
      "Useful for travellers exploring Himalayan pilgrimage circuits beyond a single shrine visit.",
  },
  {
    title: "Ujjain Tour Package from Bhopal",
    path: "/blog/ujjain-tour-package-from-bhopal",
    description:
      "Shorter spiritual circuit guidance for Mahakal devotees and family groups.",
  },
  {
    title: "Vrindavan Tour Package from Bhopal",
    path: "/blog/vrindavan-tour-package-from-bhopal",
    description:
      "Travel ideas for Vrindavan-focused darshan, temple visits, and family planning.",
  },
  {
    title: "Nepal Tour Package from Bhopal",
    path: "/blog/nepal-tour-package-from-bhopal",
    description:
      "Cross-border pilgrimage planning help for families considering Nepal routes.",
  },
];

const guideMatchers: Array<{ pattern: RegExp; link: ContextLink }> = [
  { pattern: /char\s*dham/i, link: planningGuides[0] },
  { pattern: /kedarnath/i, link: planningGuides[1] },
  { pattern: /uttarakhand|gangotri|yamunotri|badrinath/i, link: planningGuides[2] },
  { pattern: /ujjain|mahakal/i, link: planningGuides[3] },
  { pattern: /vrindavan|mathura/i, link: planningGuides[4] },
  { pattern: /nepal|pashupatinath/i, link: planningGuides[5] },
];

export const getGuideForTourTitle = (title: string): ContextLink | null => {
  const match = guideMatchers.find(({ pattern }) => pattern.test(title));
  return match ? match.link : null;
};
