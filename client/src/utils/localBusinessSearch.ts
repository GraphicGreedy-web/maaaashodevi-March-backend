import { companyProfile } from "../data/companyProfile.ts";

export interface TourSearchCandidate {
  _id?: string;
  id?: string;
  title: string;
  image?: string;
  description?: string;
  locations?: string[];
  state?: string;
  region?: string;
  duration?: string;
  groupSize?: string | number;
  startDate?: string;
  price?: string | number;
  featured?: boolean;
  order?: number;
}

export const LOCAL_BUSINESS_KEYWORD_GROUPS = {
  travelAndTour: [
    "tour agency",
    "travel agency",
    "tour operator",
    "travel agent",
    "tour and travels",
    "travel services",
    "holiday packages",
    "tour packages",
    "trip planner",
    "travel company",
  ],
  religiousAndPilgrimage: [
    "dharam yatra",
    "pilgrimage tour",
    "religious tour",
    "yatra package",
    "teerth yatra",
    "char dham yatra",
    "jyotirlinga yatra",
    "temple tour",
    "religious travel",
    "spiritual tour",
  ],
  otherRelevantServices: [
    "bus tour operator",
    "group tour",
    "family tour",
    "domestic tour operator",
    "outstation travel",
    "taxi and tour services",
    "honeymoon packages",
    "adventure tour",
    "holiday tour",
    "travel consultant",
  ],
} as const;

const LOCATION_ALIASES = [
  ["lal ghati", "lalghati", "lal ghati bhopal", "lalghati bhopal"],
  ["bhopal", "bhopal mp", "bhopal madhya pradesh"],
];

const WORD_NORMALIZATIONS: Record<string, string> = {
  agencies: "agency",
  operators: "operator",
  travels: "travel",
  services: "service",
  packages: "package",
  planners: "planner",
  consultants: "consultant",
  tours: "tour",
  yatras: "yatra",
  dharma: "dharam",
  temples: "temple",
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "at",
  "best",
  "for",
  "from",
  "in",
  "local",
  "me",
  "near",
  "of",
  "on",
  "or",
  "the",
  "to",
  "with",
]);

const BUSINESS_INTENT_TOKENS = new Set(
  Object.values(LOCAL_BUSINESS_KEYWORD_GROUPS)
    .flat()
    .join(" ")
    .split(/\s+/)
    .map((token) => WORD_NORMALIZATIONS[token] || token),
);

const PILGRIMAGE_CONTEXT_TERMS = [
  "char dham",
  "kedarnath",
  "ujjain",
  "mahakal",
  "vrindavan",
  "pashupatinath",
  "nepal",
  "somnath",
  "jagannath",
  "dakshin",
  "yatra",
  "pilgrimage",
  "darshan",
  "temple",
  "spiritual",
  "religious",
];

const COMPANY_DISCOVERY_TERMS = [
  companyProfile.name,
  companyProfile.shortName,
  companyProfile.address,
  companyProfile.city,
  companyProfile.region,
  companyProfile.establishedProof,
  companyProfile.serviceAreaLabel,
  ...companyProfile.routeCoverage,
  ...companyProfile.trustPoints,
  ...Object.values(LOCAL_BUSINESS_KEYWORD_GROUPS).flat(),
  "maa aasho devi dharam yatra",
  "maa aashodevi dharam yatra",
  "maa ashodevi dharam yatra",
  "pilgrimage travel",
  "spiritual travel",
  "religious travel",
  "lal ghati travel agency",
  "lalghati travel agency",
];

const INTENT_CLUSTERS = [
  [
    "tour agency",
    "travel agency",
    "tour operator",
    "travel agent",
    "tour and travel",
    "travel service",
    "trip planner",
    "travel company",
    "travel consultant",
  ],
  [
    "dharam yatra",
    "pilgrimage tour",
    "religious tour",
    "yatra package",
    "teerth yatra",
    "char dham yatra",
    "jyotirlinga yatra",
    "temple tour",
    "religious travel",
    "spiritual tour",
  ],
  [
    "bus tour operator",
    "group tour",
    "family tour",
    "domestic tour operator",
    "outstation travel",
    "taxi and tour service",
    "honeymoon package",
    "adventure tour",
    "holiday tour",
  ],
];

const stripHtml = (value = "") => value.replace(/<[^>]+>/g, " ");

export const normalizeSearchText = (value = "") =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => WORD_NORMALIZATIONS[token] || token)
    .join(" ")
    .trim();

const dedupe = (items: string[]) => [...new Set(items.filter(Boolean))];

const buildCombinedText = (parts: Array<string | undefined>) =>
  normalizeSearchText(parts.filter(Boolean).join(" "));

const getQueryTokens = (query: string) =>
  dedupe(
    normalizeSearchText(query)
      .split(" ")
      .filter((token) => token && !STOP_WORDS.has(token)),
  );

const getMatchedLocationAliases = (query: string) => {
  const normalizedQuery = normalizeSearchText(query);
  return LOCATION_ALIASES.filter((aliases) =>
    aliases.some((alias) => normalizedQuery.includes(normalizeSearchText(alias))),
  );
};

const getMatchedIntentClusters = (query: string) => {
  const normalizedQuery = normalizeSearchText(query);
  const tokens = getQueryTokens(query);

  return INTENT_CLUSTERS.filter((cluster) => {
    const normalizedCluster = cluster.map((phrase) => normalizeSearchText(phrase));
    if (normalizedCluster.some((phrase) => normalizedQuery.includes(phrase))) {
      return true;
    }

    return normalizedCluster.some((phrase) =>
      phrase.split(" ").every((token) => tokens.includes(token)),
    );
  });
};

const hasPilgrimageContext = (text: string) =>
  PILGRIMAGE_CONTEXT_TERMS.some((term) => text.includes(normalizeSearchText(term)));

const getTripSearchDocument = (trip: TourSearchCandidate) =>
  buildCombinedText([
    trip.title,
    stripHtml(trip.description),
    ...(trip.locations || []),
    trip.state,
    trip.region,
  ]);

const companySearchDocument = buildCombinedText(COMPANY_DISCOVERY_TERMS);

const scoreIntentCluster = (cluster: string[], tripText: string) => {
  const normalizedCluster = cluster.map((phrase) => normalizeSearchText(phrase));
  const tripMatches = normalizedCluster.some((phrase) => tripText.includes(phrase));
  const companyMatches = normalizedCluster.some((phrase) =>
    companySearchDocument.includes(phrase),
  );

  if (tripMatches) return 10;
  if (companyMatches) return 5;
  if (hasPilgrimageContext(tripText)) return 3;
  return 0;
};

export const rankTourByLocalBusinessQuery = <T extends TourSearchCandidate>(
  trip: T,
  query: string,
) => {
  const normalizedQuery = normalizeSearchText(query);
  if (!normalizedQuery) {
    return 1;
  }

  const tripText = getTripSearchDocument(trip);
  const queryTokens = getQueryTokens(query);
  const matchedLocationAliases = getMatchedLocationAliases(query);
  const matchedIntentClusters = getMatchedIntentClusters(query);

  let score = 0;
  let matchedSemanticSignal = false;

  if (tripText.includes(normalizedQuery)) {
    score += 16;
    matchedSemanticSignal = true;
  }

  matchedIntentClusters.forEach((cluster) => {
    const clusterScore = scoreIntentCluster(cluster, tripText);
    if (clusterScore > 0) {
      matchedSemanticSignal = true;
      score += clusterScore;
    }
  });

  matchedLocationAliases.forEach((aliases) => {
    const locationMatched = aliases.some((alias) => {
      const normalizedAlias = normalizeSearchText(alias);
      return tripText.includes(normalizedAlias) || companySearchDocument.includes(normalizedAlias);
    });

    if (locationMatched) {
      score += 6;
      matchedSemanticSignal = true;
    }
  });

  let tripTokenMatches = 0;
  let companyTokenMatches = 0;

  queryTokens.forEach((token) => {
    if (tripText.includes(token)) {
      tripTokenMatches += 1;
      matchedSemanticSignal = true;
      return;
    }

    if (companySearchDocument.includes(token)) {
      companyTokenMatches += 1;
    }
  });

  score += tripTokenMatches * 2;
  score += companyTokenMatches;

  const hasBusinessIntent = queryTokens.some((token) => BUSINESS_INTENT_TOKENS.has(token));

  if (
    !matchedSemanticSignal &&
    !(hasBusinessIntent && matchedLocationAliases.length > 0 && companyTokenMatches > 0)
  ) {
    return 0;
  }

  if (hasBusinessIntent && matchedLocationAliases.length > 0 && hasPilgrimageContext(tripText)) {
    score += 4;
  }

  return score;
};

export const filterAndRankToursByLocalBusinessQuery = <T extends TourSearchCandidate>(
  tours: T[],
  query: string,
) =>
  [...tours]
    .map((trip) => ({
      trip,
      score: rankTourByLocalBusinessQuery(trip, query),
    }))
    .filter(({ score }) => score > 0)
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return (left.trip.order || 0) - (right.trip.order || 0);
    })
    .map(({ trip }) => trip);

export const getLocalBusinessSearchTerms = (additionalTerms: string[] = []) =>
  dedupe([
    ...Object.values(LOCAL_BUSINESS_KEYWORD_GROUPS).flat(),
    ...COMPANY_DISCOVERY_TERMS,
    ...additionalTerms,
  ]);

export const getLocalBusinessServiceTypes = (additionalTypes: string[] = []) =>
  dedupe([
    "Travel Agency",
    "Tour Agency",
    "Tour Operator",
    "Travel Services",
    "Pilgrimage Tour",
    "Religious Tour",
    "Yatra Package",
    "Spiritual Tour",
    ...additionalTypes,
  ]);
