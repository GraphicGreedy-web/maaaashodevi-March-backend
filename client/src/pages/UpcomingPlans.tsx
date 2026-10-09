import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchAllTours, getCachedTours } from "../frontRoutes/fetchRoutes.js";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Search,
  Share2,
  Check,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";
import SEO from "../components/SEO";
import { getGuideForTourTitle, planningGuides } from "../data/seoLinks";
import { getPackagePathForTitle, packagePages } from "../data/packagePages";
import {
  filterAndRankToursByLocalBusinessQuery,
  getLocalBusinessSearchTerms,
  rankTourByLocalBusinessQuery,
} from "../utils/localBusinessSearch";

const getTourShareSlug = (title: string) =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

interface TourCardData {
  _id?: string;
  id?: string;
  title: string;
  image: string;
  description: string;
  locations: string[];
  state: string;
  region: string;
  duration: string;
  groupSize?: string;
  startDate: string;
  price: string;
  featured?: boolean;
}

const UpcomingPlans: React.FC = () => {
  const location = useLocation();
  const cachedTours = getCachedTours();
  const hasCachedTours = Boolean(cachedTours?.tours?.length);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("all");
  const [allTours, setAllTours] = useState<TourCardData[]>(cachedTours?.tours ?? []);
  const [isLoading, setIsLoading] = useState(!hasCachedTours);
  const [shareToast, setShareToast] = useState<string | null>(null);
  const [activeSharedTourSlug, setActiveSharedTourSlug] = useState<string | null>(null);
  const tourCardRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const shouldSkipSharedScrollRef = useRef<string | null>(null);

  useEffect(() => {
    const navigationEntry = performance.getEntriesByType("navigation")[0] as
      | PerformanceNavigationTiming
      | undefined;
    const isReloadNavigation = navigationEntry?.type === "reload";
    const params = new URLSearchParams(location.search);
    const hasSharedTourParam = Boolean(params.get("tour"));

    if (!isReloadNavigation || !hasSharedTourParam) {
      return;
    }

    shouldSkipSharedScrollRef.current = location.search;
    const previousScrollRestoration = window.history.scrollRestoration;

    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    window.requestAnimationFrame(() => {
      window.history.scrollRestoration = previousScrollRestoration;
    });
  }, [location.search]);

  useEffect(() => {
    let isMounted = true;

    const loadTours = async () => {
      try {
        const tours = await fetchAllTours({ forceRefresh: true });
        if (isMounted) {
          setAllTours(tours ?? []);
        }
      } catch {
        // console.error("Failed to load tours", error);
        if (isMounted && !hasCachedTours) {
          setAllTours([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadTours();

    return () => {
      isMounted = false;
    };
  }, [hasCachedTours]);

  useEffect(() => {
    if (!shareToast) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setShareToast(null);
    }, 2500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [shareToast]);

  useEffect(() => {
    if (!allTours.length) {
      return;
    }

    const params = new URLSearchParams(location.search);
    const sharedTourSlug = params.get("tour");

    if (!sharedTourSlug) {
      setActiveSharedTourSlug(null);
      return;
    }

    const matchingTour = allTours.find(
      (trip) => getTourShareSlug(trip.title) === sharedTourSlug,
    );

    if (!matchingTour) {
      setActiveSharedTourSlug(null);
      return;
    }

    if (matchingTour.region && matchingTour.region !== activeRegion) {
      setActiveRegion(matchingTour.region);
    }

    if (rankTourByLocalBusinessQuery(matchingTour, searchQuery) <= 0) {
      setSearchQuery("");
    }

    setActiveSharedTourSlug(sharedTourSlug);

    if (shouldSkipSharedScrollRef.current === location.search) {
      const highlightTimer = window.setTimeout(() => {
        setActiveSharedTourSlug(null);
      }, 3000);

      return () => {
        window.clearTimeout(highlightTimer);
      };
    }

    const scrollTimer = window.setTimeout(() => {
      tourCardRefs.current[sharedTourSlug]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);

    const highlightTimer = window.setTimeout(() => {
      setActiveSharedTourSlug(null);
    }, 3000);

    return () => {
      window.clearTimeout(scrollTimer);
      window.clearTimeout(highlightTimer);
    };
  }, [allTours, location.search, activeRegion, searchQuery]);

  const featuredTrips = allTours.filter((trip) => trip.featured);

  const filteredTrips = filterAndRankToursByLocalBusinessQuery(allTours, searchQuery).filter(
    (trip) => activeRegion === "all" || trip.region === activeRegion,
  );

  const regions = [
    { id: "all", name: "All Packages" },
    { id: "North India", name: "North India" },
    { id: "South India", name: "South India" },
    { id: "East India", name: "East India" },
    { id: "West India", name: "West India" },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageDimension = { height: "15rem", width: "30rem" };
  const cardDimension = { height: "15rem" };

  const buildTourShareUrl = (trip: TourCardData) => {
    const shareUrl = new URL("/upcoming-plans", window.location.origin);
    shareUrl.searchParams.set("tour", getTourShareSlug(trip.title));
    return shareUrl.toString();
  };

  const handleShare = async (trip: TourCardData) => {
    const shareUrl = buildTourShareUrl(trip);
    const shareData = {
      title: `${trip.title} | Maa Aasho Devi Tours`,
      text: `View this tour package: ${trip.title}`,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareToast("Share link ready.");
        return;
      }

      await navigator.clipboard.writeText(shareUrl);
      setShareToast("Share link copied.");
    } catch (error) {
      if ((error as Error)?.name === "AbortError") {
        return;
      }

      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareToast("Share link copied.");
      } catch {
        setShareToast("Could not share automatically.");
      }
    }
  };

  const featuredTripSchemas = featuredTrips.slice(0, 6).map((trip) => ({
    "@type": "TouristTrip",
    name: trip.title,
    description:
      typeof trip.description === "string"
        ? trip.description.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
        : "Pilgrimage package from Bhopal",
    image: trip.image,
    touristType: "Pilgrimage travellers",
    itinerary: {
      "@type": "ItemList",
      itemListElement: (trip.locations ?? []).slice(0, 6).map((location, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: location,
      })),
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: typeof trip.price === "string" ? trip.price.replace(/[^\d.]/g, "") : "",
      availability: "https://schema.org/InStock",
      url: "https://maaaashodevidharmayatra.in/contact",
    },
  }));

  return (
    <PageTransition>
      <SEO
        title="Maa Aasho Devi Tours Packages | Religious Tour Package Bhopal"
        description="Browse upcoming packages from Maa Aasho Devi Tours, including Char Dham Yatra Bhopal departures, Kedarnath tour package Bhopal plans and family pilgrimage routes."
        path="/upcoming-plans"
        keywords={[
          "maa aasho devi tours",
          "maa aasho devi dharma yatra",
          "upcoming yatra plans from bhopal",
          ...getLocalBusinessSearchTerms([
            "tour agency bhopal",
            "religious tour packages from bhopal",
            "religious tour package bhopal",
            "char dham yatra bhopal",
            "char dham yatra package from bhopal",
            "kedarnath tour package bhopal",
            "book pilgrimage package bhopal",
          ]),
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Upcoming Religious Tour Packages from Bhopal",
            url: "https://maaaashodevidharmayatra.in/upcoming-plans",
            description:
              "Featured and upcoming pilgrimage departures from Bhopal, including Char Dham, Kedarnath, Ujjain, Nepal and other devotional routes.",
            isPartOf: {
              "@type": "WebSite",
              name: "Maa Aasho Devi Tours",
              url: "https://maaaashodevidharmayatra.in",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://maaaashodevidharmayatra.in/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Upcoming Plans",
                item: "https://maaaashodevidharmayatra.in/upcoming-plans",
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Featured pilgrimage packages from Bhopal",
            itemListElement: featuredTrips.slice(0, 6).map((trip, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: trip.title,
              url: "https://maaaashodevidharmayatra.in/upcoming-plans",
            })),
          },
          ...featuredTripSchemas.map((schema) => ({
            "@context": "https://schema.org",
            ...schema,
          })),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Which religious tour packages from Bhopal are available?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The page lists current pilgrimage departures such as Char Dham, Kedarnath, Ujjain, Nepal and other family-friendly spiritual journeys from Bhopal.",
                },
              },
              {
                "@type": "Question",
                name: "Can families request a custom pilgrimage package?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Travellers can contact Maa Aasho Devi Tours for a custom route, date, or family-oriented pilgrimage plan.",
                },
              },
            ],
          },
        ]}
      />
      <div className="min-h-screen bg-gray-50 pb-20 pt-5">
        <div className="container mx-auto px-1">
          {/* <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Upcoming <span className="text-primary">Yatras</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Plan your spiritual journey with our upcoming pilgrimage tours
            </motion.p>
          </div> */}

          {/* Featured Packages Section */}
          <section className="mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-2xl font-bold mb-8 mx-[1rem]"
            >
              Featured Packages
            </motion.h2>

            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-[1rem]">
                {featuredTrips.map((trip, order: number) => (
                  <AnimatedCard key={trip._id} delay={order * 0.1}>
                    <div
                      className="relative overflow-hidden"
                      style={cardDimension}
                    >
                      <img
                        src={trip.image}
                        alt={trip.title}
                        className="object-cover transition-transform duration-500 hover:scale-110"
                        style={imageDimension}
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="text-xl font-bold mb-2">
                        {trip.title.includes("Yatra") ? (
                          <>
                            {trip.title.replace(" Yatra", "")} <i>Yatra</i>
                          </>
                        ) : (
                          trip.title
                        )}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <MapPin size={14} className="text-primary mr-1" />
                        <span>{trip.state}</span>
                      </div>
                      <p
                        className="text-gray-600 mb-4 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: trip.description }}
                      ></p>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center">
                          <Clock size={14} className="text-primary mr-1" />
                          <span className="text-sm">{trip.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users size={14} className="text-primary mr-1" />
                          <span className="text-sm">{trip.groupSize}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar size={14} className="text-primary mr-1" />
                          <span className="text-sm">{trip.startDate}</span>
                        </div>
                        <div className="flex items-center font-bold text-primary">
                          {trip.price}
                        </div>
                      </div>

                      <Link
                        to={getPackagePathForTitle(trip.title) || "/contact"}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-full transition-all duration-300 block text-center"
                      >
                        {getPackagePathForTitle(trip.title) ? "Open Package Page" : "Book Now"}
                      </Link>
                      <button
                        type="button"
                        onClick={() => void handleShare(trip)}
                        className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                      >
                        <Share2 size={14} className="mr-2" />
                        Share This Package
                      </button>
                      {getGuideForTourTitle(trip.title) ? (
                        <Link
                          to={getGuideForTourTitle(trip.title)?.path || "/blog"}
                          className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          Read related guide <ArrowRight size={14} className="ml-1" />
                        </Link>
                      ) : null}
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            )}
          </section>

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="relative w-full md:w-80">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="flex overflow-x-auto space-x-2 w-full md:w-auto pb-2">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setActiveRegion(region.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeRegion === region.id
                        ? "bg-primary text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Package Listings Section */}
          <section>
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-[2rem]">
                {filteredTrips.map((trip, index) => (
                  <AnimatedCard key={trip.id} delay={index * 0.05}>
                    <div
                      ref={(node) => {
                        tourCardRefs.current[getTourShareSlug(trip.title)] = node;
                      }}
                      className={`rounded-3xl bg-white transition-all duration-500 ${
                        activeSharedTourSlug === getTourShareSlug(trip.title)
                          ? "ring-2 ring-primary ring-offset-4 ring-offset-gray-50 shadow-2xl"
                          : ""
                      }`}
                    >
                      <div
                        className="relative overflow-hidden"
                        style={cardDimension}
                      >
                        <img
                          src={trip.image}
                          alt={trip.title}
                          className="object-cover transition-transform duration-500 hover:scale-110"
                          style={imageDimension}
                        />
                        <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {trip.duration}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {trip.title.includes("Yatra") ? (
                            <>
                              {trip.title.replace(" Yatra", "")} <i>Yatra</i>
                            </>
                          ) : (
                            trip.title
                          )}
                        </h3>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <MapPin size={14} className="text-primary mr-1" />
                          <span>{trip.state}</span>
                        </div>
                        <p
                          className="text-gray-600 mb-4 line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: trip.description }}
                        ></p>

                        <div className="grid grid-cols-2 gap-2 mb-4">
                          <div className="flex items-center">
                            <Clock size={14} className="text-primary mr-1" />
                            <span className="text-sm">{trip.duration}</span>
                          </div>
                          {/* <div className="flex items-center">
                          <Users size={14} className="text-primary mr-1" />
                          <span className="text-sm">{trip.groupSize}</span>
                        </div> */}
                          <div className="flex items-center">
                            <Calendar size={14} className="text-primary mr-1" />
                            <span className="text-sm">{trip.startDate}</span>
                          </div>
                          <div className="flex items-center font-bold text-primary">
                            {trip.price}
                          </div>
                        </div>

                        <Link
                          to={getPackagePathForTitle(trip.title) || "/contact"}
                          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-full transition-all duration-300 block text-center"
                        >
                          {getPackagePathForTitle(trip.title) ? "Open Package Page" : "Book Now"}
                        </Link>
                        <button
                          type="button"
                          onClick={() => void handleShare(trip)}
                          className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
                        >
                          <Share2 size={14} className="mr-2" />
                          Share This Package
                        </button>
                        {getGuideForTourTitle(trip.title) ? (
                          <Link
                            to={getGuideForTourTitle(trip.title)?.path || "/blog"}
                            className="mt-3 inline-flex items-center text-sm font-medium text-primary hover:underline"
                          >
                            Read related guide <ArrowRight size={14} className="ml-1" />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            )}
          </section>

          <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">Popular Package Pages</h3>
              <p className="mt-2 max-w-2xl text-gray-600">
                These core package pages stay crawlable even before live
                departure data finishes loading, which makes your main
                pilgrimage offers easier to discover.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {packagePages.map((pkg) => (
                <Link
                  key={pkg.slug}
                  to={`/${pkg.slug}`}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <h4 className="font-semibold text-gray-900">{pkg.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{pkg.summary}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                    Open package page <ArrowRight size={14} className="ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-2xl font-bold">Plan With Destination Guides</h3>
                <p className="max-w-2xl text-gray-600">
                  Read route-specific blog posts before choosing your package so
                  families, elders, and first-time pilgrims know what to expect.
                </p>
              </div>
              <Link
                to="/blog"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Explore all yatra articles <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {planningGuides.map((guide) => (
                <Link
                  key={guide.path}
                  to={guide.path}
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <h4 className="font-semibold text-gray-900">{guide.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{guide.description}</p>
                </Link>
              ))}
            </div>
            <Link
              to="/sitemap"
              className="mt-6 inline-flex items-center text-primary font-medium hover:underline"
            >
              Browse the full HTML sitemap <ArrowRight size={16} className="ml-1" />
            </Link>
          </section>

          {/* Call to Action */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We offer customized pilgrimage packages tailored to your specific
              requirements. Contact us to create your perfect spiritual journey.
            </p>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              Request Custom Package <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
      {shareToast ? (
        <div className="fixed right-4 top-24 z-50">
          <div className="flex items-center gap-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-lg">
            <Check size={16} />
            <span>{shareToast}</span>
          </div>
        </div>
      ) : null}
    </PageTransition>
  );
};

export default UpcomingPlans;
