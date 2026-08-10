import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowRight, Calendar, CheckCircle2, MapPin, ShieldCheck, XCircle } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { companyProfile } from "../data/companyProfile";
import { getPackageBlogPost, getPackagePage } from "../data/packagePages";

interface PackagePageProps {
  packageSlug: string;
}

const PackagePage: React.FC<PackagePageProps> = ({ packageSlug }) => {
  const location = useLocation();
  const packageData = getPackagePage(packageSlug);

  if (!packageData) {
    return <Navigate to="/upcoming-plans" replace />;
  }

  const relatedGuide = getPackageBlogPost(packageData.blogSlug);

  return (
    <PageTransition>
      <SEO
        title={packageData.metaTitle}
        description={packageData.metaDescription}
        path={location.pathname}
        keywords={[
          packageData.title.toLowerCase(),
          "religious tour packages from bhopal",
          "tour operator in bhopal",
          "pilgrimage package from bhopal",
          "family pilgrimage tours",
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: packageData.title,
            description: packageData.metaDescription,
            touristType: "Pilgrimage travellers",
            itinerary: {
              "@type": "ItemList",
              itemListElement: packageData.routeHighlights.map((item, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: item,
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: packageData.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 rounded-3xl bg-white p-8 shadow-sm">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Package Page
              </p>
              <h1 className="text-4xl font-bold text-gray-900">{packageData.title}</h1>
              <p className="mt-4 max-w-3xl text-lg text-gray-600">{packageData.summary}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary/90"
                >
                  Enquire for This Package
                </Link>
                <Link
                  to="/upcoming-plans"
                  className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary/10"
                >
                  Compare Live Departures
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
            <div className="space-y-8">
              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">Upcoming Departure Windows</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {packageData.departureDates.map((date) => (
                    <div key={date} className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
                      <div className="flex items-center gap-2 text-primary">
                        <Calendar size={18} />
                        <span className="font-semibold">{date}</span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        Call or message the Bhopal team to confirm seat availability and trip pacing.
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">Route Highlights</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {packageData.routeHighlights.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-200 p-4">
                      <MapPin className="mt-0.5 text-primary" size={18} />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="grid gap-8 md:grid-cols-2">
                <div className="rounded-3xl bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900">Inclusions</h2>
                  <div className="mt-5 space-y-3">
                    {packageData.inclusions.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle2 className="mt-0.5 text-green-600" size={18} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900">Exclusions</h2>
                  <div className="mt-5 space-y-3">
                    {packageData.exclusions.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-gray-700">
                        <XCircle className="mt-0.5 text-rose-600" size={18} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-primary" size={22} />
                  <h2 className="text-2xl font-bold text-gray-900">Booking Trust Signals</h2>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {companyProfile.trustPoints.map((item) => (
                    <div key={item} className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-gray-700">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-primary/5 p-5">
                  <h3 className="font-semibold text-gray-900">Cancellation snapshot</h3>
                  <div className="mt-3 space-y-2 text-sm text-gray-700">
                    {companyProfile.cancellationSummary.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                  <Link to="/terms-of-service" className="mt-4 inline-flex items-center text-primary hover:underline">
                    Read full cancellation policy <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </section>

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">Package FAQs</h2>
                <div className="mt-6 space-y-4">
                  {packageData.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-gray-200 p-5">
                      <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                      <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Bhopal Support Team</h2>
                <p className="mt-3 text-gray-600">
                  {companyProfile.shortName} works from {companyProfile.address} with phone and email support for package questions, family preferences, and booking follow-up.
                </p>
                <div className="mt-5 space-y-3 text-sm text-gray-700">
                  <p><span className="font-semibold">Phone:</span> {companyProfile.phone}</p>
                  <p><span className="font-semibold">Email:</span> {companyProfile.email}</p>
                  <p><span className="font-semibold">Lead operator:</span> {companyProfile.team[0].name}</p>
                </div>
              </section>

              {relatedGuide ? (
                <section className="rounded-3xl bg-white p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900">Read the Planning Guide</h2>
                  <p className="mt-3 text-gray-600">{relatedGuide.excerpt}</p>
                  <Link
                    to={`/blog/${relatedGuide.slug}`}
                    className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
                  >
                    Open guide article <ArrowRight size={16} className="ml-1" />
                  </Link>
                </section>
              ) : null}

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Already Present on the Site</h2>
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <p>Reviews on the homepage</p>
                  <p>FAQ answers on the contact page</p>
                  <p>Team and office context on the about page</p>
                  <p>Full booking and cancellation terms on the terms page</p>
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PackagePage;
