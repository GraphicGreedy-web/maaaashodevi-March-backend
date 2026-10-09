import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  HeartHandshake,
  IndianRupee,
  MapPin,
  Phone,
  Route,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { companyProfile } from "../data/companyProfile";
import {
  getLocalBusinessSearchTerms,
  getLocalBusinessServiceTypes,
} from "../utils/localBusinessSearch";

const destinationGroups = [
  {
    title: "Himalayan yatras",
    places: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath", "Haridwar", "Guptkashi"],
  },
  {
    title: "Central and North India",
    places: ["Ujjain", "Vrindavan", "Mathura", "Ayodhya", "Kashi Vishwanath", "Kainchi Dham"],
  },
  {
    title: "East, West, and South routes",
    places: ["Jagannath Puri", "Somnath", "Rameshwaram", "Madurai", "Tirupati Balaji"],
  },
  {
    title: "Nepal spiritual travel",
    places: ["Pashupatinath Temple", "Kathmandu", "Gorakhpur corridor", "Pokhara"],
  },
];

const seniorSupport = [
  "Families can discuss health, mobility, and pacing before booking.",
  "Shorter and easier routes such as Ujjain or Vrindavan can be recommended when needed.",
  "The team helps explain stay quality, transfer timing, and what support is available on demanding routes.",
  "Phone and WhatsApp support stays available for elders, first-time pilgrims, and group coordinators.",
];

const photoGallery = [
  {
    src: companyProfile.officePhotos[0],
    alt: "Maa Aasho Devi Dharma Yatra office in Lal Ghati, Bhopal",
    caption: "Office and in-person coordination point in Lal Ghati, Bhopal",
  },
  {
    src: companyProfile.officePhotos[1],
    alt: "Neha Gupta of Maa Aasho Devi Dharma Yatra",
    caption: "Neha Gupta, who handles tour planning and family coordination",
  },
  {
    src: "https://media-hosting.imagekit.io//144c053bdc654a5d/Yamunotri.jpg?Expires=1835977054&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZZopTDRbGMGrQFM8vwPoUNmZGkSQpg5FEcUoZ1iaXqLJuDihvpvLZAYhtLpJNv4yZi72ht-H8hlCyFUpDlZbztQGQM9HP3347482vx1Kn-8RGa4KAVPXTKosClhI2YgJL5aIfWZca3SCz3-Jbev9yW41aW3MWe5o1h8zXbahXEk2XJl3HSfllLqYugMtxDTBWvdnHFTGXSNvPclrbRn~68l~P8cmog8XYl0XbZLttgyuTd1dqYq-NFZ8O9LuU5J7VjuTB48OROoVGyEiGFGShx2YGwRaEp2cZFRy1icHsmiv8M~fIHkEtIpXcHui8p2K5ymdMmUMjXyl-3LaLE5DrQ__",
    alt: "Yamunotri yatra photo",
    caption: "Yamunotri route photo from the gallery",
  },
  {
    src: "https://media-hosting.imagekit.io//1bc79a4cc40a4ec3/IMG-20250306-WA0033.jpg?Expires=1835970401&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fhpvS1ovC5JnDLYYxTaaEB2aUGhvI7~y-hCs1R~C1cz3DOlLAWXeshxqzs2HuQZnQs0aZrblYqX2CbIcBJdGWbKhL1lvIC1F~yVlaMBJm1qSvAg7MDqNZ6E9jXVEqgFUUWu7ihdEw1Fl6HQ8DXpRV4dHdakbfHSq~SPiGzKX6peQxQdLXFFzVJy0yMD5Gol13WrZmvuUs~ezJyFmNq0q5A9mIWimQ9sD9wHItrFUQMopQKZDg2dfH4bLiyVNddnD7~cIm8lNxFpbJm53xTvu12MoDv0ovtaznvxVBBJxE2-AOrjBERB2Ii~SnLiFDfcOeyM8kkuCy10g3uknbtXXpA__",
    alt: "Nepal yatra photo at Lumbini",
    caption: "Nepal journey photo near Lumbini from the gallery",
  },
];

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const operator = companyProfile.team[0];

  return (
    <PageTransition>
      <SEO
        title="About Maa Aasho Devi Tours | Tour Agency in Bhopal"
        description="Learn when Maa Aasho Devi Tours started, where the office is in Bhopal, who runs the tours, which yatras have been completed, how booking works, and how senior pilgrims are supported."
        path="/about"
        keywords={[
          "maa aasho devi tours",
          "maa aasho devi dharma yatra",
          "about maa aasho devi tours",
          ...getLocalBusinessSearchTerms([
            "tour agency bhopal",
            "lal ghati bhopal travel agency",
            "religious tour package bhopal",
            "char dham yatra bhopal",
            "kedarnath tour package bhopal",
          ]),
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Maa Aasho Devi Tours",
            url: "https://maaaashodevidharmayatra.in/about",
            description:
              "About page for Maa Aasho Devi Tours, a Bhopal-based pilgrimage travel agency.",
          },
          {
            "@context": "https://schema.org",
            "@type": ["TravelAgency", "LocalBusiness"],
            name: "Maa Aasho Devi Dharma Yatra",
            foundingDate: companyProfile.foundedYear,
            telephone: companyProfile.phone,
            email: companyProfile.email,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Om Shiva Nagar, Lal Ghati",
              addressLocality: "Bhopal",
              addressRegion: "Madhya Pradesh",
              addressCountry: "IN",
            },
            employee: {
              "@type": "Person",
              name: operator.name,
              jobTitle: operator.role,
            },
            serviceType: getLocalBusinessServiceTypes(),
            knowsAbout: getLocalBusinessSearchTerms([
              "lal ghati bhopal travel agency",
              "maa aasho devi tours",
            ]),
          },
        ]}
      />

      <div className="min-h-screen bg-gray-50 py-20">
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                  Bhopal-based pilgrimage planning
                </p>
                <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                  Clear facts about <span className="text-primary">Maa Aasho Devi Tours</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  Maa Aasho Devi Dharma Yatra was founded in {companyProfile.foundedYear}. The office is based in{" "}
                  {companyProfile.address}. Tours are coordinated by {operator.name}, who handles enquiries, planning,
                  departures, and family support from the first call through post-trip follow-up.
                </p>
                <p className="mt-4 text-gray-600">
                  The company focuses on pilgrimage routes from Bhopal, including {companyProfile.routeCoverage.join(", ")}.
                  The site also publishes office details, package guidance, and booking terms so travellers can judge fit
                  before they enquire.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="rounded-full bg-primary px-7 py-3 font-medium text-white transition-all duration-300 hover:bg-primary/90"
                  >
                    Contact the Team
                  </Link>
                  <Link
                    to="/upcoming-plans"
                    className="rounded-full border border-primary px-7 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary/5"
                  >
                    View Upcoming Tours
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <img
                  src={companyProfile.officePhotos[0]}
                  alt="Maa Aasho Devi Dharma Yatra office"
                  className="h-full w-full rounded-3xl object-cover shadow-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-5 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-3 text-gray-900">
                    <MapPin className="text-primary" size={20} />
                    <p className="font-semibold">Office locality: Lal Ghati, Bhopal</p>
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-gray-700">
                    <CalendarDays className="text-primary" size={20} />
                    <p>Founded in {companyProfile.foundedYear}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            >
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <UserRound className="mb-4 text-primary" size={28} />
                <h2 className="text-lg font-semibold text-gray-900">Who runs the tours</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {operator.name} works as {operator.role.toLowerCase()} and manages planning, departures, and family
                  coordination.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <MapPin className="mb-4 text-primary" size={28} />
                <h2 className="text-lg font-semibold text-gray-900">Office locality</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  The local office address listed across the site is Om Shiva Nagar, Lal Ghati, Bhopal, Madhya Pradesh.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <Phone className="mb-4 text-primary" size={28} />
                <h2 className="text-lg font-semibold text-gray-900">How booking starts</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Families can book by phone, WhatsApp, or the contact page and discuss route, dates, and comfort needs
                  first.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <HeartHandshake className="mb-4 text-primary" size={28} />
                <h2 className="text-lg font-semibold text-gray-900">Support for seniors</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  The team gives route guidance, timing clarity, and family support for elders and first-time pilgrims.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-900">What the company has completed</h2>
                <p className="mt-4 text-gray-600">{companyProfile.departureProofSummary}</p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {companyProfile.departureProof.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-3xl font-bold text-primary">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <Route className="text-primary" size={24} />
                  <h2 className="text-3xl font-bold text-gray-900">Real destinations on the site</h2>
                </div>
                <div className="mt-8 space-y-6">
                  {destinationGroups.map((group) => (
                    <div key={group.title} className="rounded-2xl bg-gray-50 p-5">
                      <h3 className="font-semibold text-gray-900">{group.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{group.places.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-primary" size={24} />
                  <h2 className="text-3xl font-bold text-gray-900">How booking works</h2>
                </div>
                <div className="mt-8 space-y-4">
                  {companyProfile.bookingJourney.map((step, index) => (
                    <div key={step} className="flex gap-4 rounded-2xl bg-gray-50 p-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-6 text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm leading-6 text-gray-500">
                  Cancellation terms, refund timing, and the booking amount of {companyProfile.bookingDeposit} are also
                  published on the Terms of Service and Contact pages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
              <div className="flex items-center gap-3">
                <IndianRupee className="text-primary" size={24} />
                <h2 className="text-3xl font-bold text-gray-900">What value and pricing usually depend on</h2>
              </div>
              <p className="mt-4 max-w-3xl text-gray-600">
                People comparing tour operators often want a realistic idea of what changes price and value. These points
                keep that explanation practical without making fixed-price claims that may not match every route.
              </p>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {companyProfile.pricingGuidance.map((point) => (
                  <div key={point} className="rounded-2xl bg-gray-50 p-5">
                    <p className="text-sm leading-6 text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-900">How seniors and families are supported</h2>
                <p className="mt-4 text-gray-600">
                  Senior-friendly planning is already a recurring promise across the package pages and contact content.
                  The support language below is based on those existing pages.
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {seniorSupport.map((point) => (
                  <div key={point} className="rounded-2xl bg-amber-50 p-5">
                    <p className="text-sm leading-6 text-gray-700">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-10">
              <div className="flex items-center gap-3">
                <Camera className="text-primary" size={24} />
                <h2 className="text-3xl font-bold text-gray-900">Real photos already used by the business</h2>
              </div>
              <p className="mt-4 max-w-3xl text-gray-600">
                These images come from the company's existing office and gallery content, not generic stock placeholders.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {photoGallery.map((photo) => (
                  <figure key={photo.src} className="overflow-hidden rounded-3xl bg-gray-50">
                    <img src={photo.src} alt={photo.alt} className="h-72 w-full object-cover" />
                    <figcaption className="p-4 text-sm leading-6 text-gray-600">{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <Link
                to="/gallery"
                className="mt-8 inline-flex items-center font-medium text-primary hover:underline"
              >
                View the full gallery <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[2rem] bg-gradient-to-r from-primary to-secondary p-10 text-center text-white md:p-14"
            >
              <h2 className="text-3xl font-bold md:text-4xl">Need help choosing the right yatra?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
                Contact the Lal Ghati team to compare routes, ask about senior comfort, and confirm the next departure
                from Bhopal.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="rounded-full bg-white px-8 py-3 font-medium text-primary transition-all duration-300 hover:bg-white/90"
                >
                  Contact Us
                </Link>
                <Link
                  to="/upcoming-plans"
                  className="rounded-full border border-white px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-white/10"
                >
                  Browse Packages
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;
