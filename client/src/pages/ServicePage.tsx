import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck, Users } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { companyProfile } from "../data/companyProfile";
import { getServicePackages, getServicePage } from "../data/servicePages";
import {
  getLocalBusinessSearchTerms,
  getLocalBusinessServiceTypes,
} from "../utils/localBusinessSearch";

interface ServicePageProps {
  serviceSlug: string;
}

const ServicePage: React.FC<ServicePageProps> = ({ serviceSlug }) => {
  const location = useLocation();
  const serviceData = getServicePage(serviceSlug);

  if (!serviceData) {
    return <Navigate to="/contact" replace />;
  }

  const relatedPackages = getServicePackages(serviceData.relatedPackageSlugs);

  return (
    <PageTransition>
      <SEO
        title={serviceData.metaTitle}
        description={serviceData.metaDescription}
        path={location.pathname}
        keywords={[
          ...getLocalBusinessSearchTerms([
            serviceData.title.toLowerCase(),
            ...serviceData.serviceHighlights,
            ...serviceData.coveragePoints,
            "tour operator in bhopal",
            "travel agency in bhopal",
            "religious tour packages from bhopal",
            "family pilgrimage tours",
          ]),
        ]}
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: companyProfile.shortName,
            description: serviceData.metaDescription,
            areaServed: ["Bhopal", "Madhya Pradesh", "India"],
            address: {
              "@type": "PostalAddress",
              streetAddress: companyProfile.address,
              addressLocality: companyProfile.city,
              addressRegion: companyProfile.region,
              addressCountry: "IN",
            },
            telephone: companyProfile.phone,
            email: companyProfile.email,
            url: `https://maaaashodevidharmayatra.in${location.pathname}`,
            serviceType: getLocalBusinessServiceTypes([serviceData.title]),
            knowsAbout: getLocalBusinessSearchTerms([
              serviceData.title,
              ...serviceData.coveragePoints,
              ...serviceData.idealFor,
            ]),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: serviceData.faqs.map((faq) => ({
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
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Bhopal Service Page
              </p>
              <h1 className="text-4xl font-bold text-gray-900">{serviceData.title}</h1>
              <p className="mt-4 max-w-3xl text-lg text-gray-600">{serviceData.summary}</p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
                {serviceData.intro}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-full bg-primary px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-primary/90"
                >
                  Talk to the Bhopal Team
                </Link>
                <Link
                  to="/upcoming-plans"
                  className="rounded-full border border-primary px-6 py-3 font-medium text-primary transition-all duration-300 hover:bg-primary/10"
                >
                  Compare Packages
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.7fr_1fr]">
            <div className="space-y-8">
              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">What This Page Covers</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {serviceData.serviceHighlights.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5"
                    >
                      <ShieldCheck className="mt-1 text-primary" size={18} />
                      <p className="text-sm leading-6 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">Bhopal Intent Coverage</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {serviceData.coveragePoints.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-gray-200 p-5 text-sm leading-6 text-gray-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">Who Usually Lands Here</h2>
                <div className="mt-6 space-y-4">
                  {serviceData.idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Users className="mt-1 text-primary" size={18} />
                      <p className="text-sm leading-6 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900">Questions Travellers Ask</h2>
                <div className="mt-6 space-y-4">
                  {serviceData.faqs.map((faq) => (
                    <div key={faq.question} className="rounded-2xl border border-gray-200 p-5">
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                      <p className="mt-2 text-sm leading-6 text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Local Trust Signals</h2>
                <div className="mt-5 space-y-4">
                  {companyProfile.trustPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 text-primary" size={18} />
                      <p className="text-sm leading-6 text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Bhopal Office Support</h2>
                <div className="mt-5 flex items-start gap-3">
                  <MapPin className="mt-1 text-primary" size={18} />
                  <p className="text-sm leading-6 text-gray-700">
                    {companyProfile.shortName} operates from {companyProfile.address} with phone
                    and email support for families comparing routes, dates, and package fit.
                  </p>
                </div>
              </section>

              <section className="rounded-3xl bg-white p-8 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Related Packages</h2>
                <div className="mt-5 space-y-4">
                  {relatedPackages.map((pkg) => (
                    <Link
                      key={pkg.slug}
                      to={`/${pkg.slug}`}
                      className="flex items-start justify-between gap-3 rounded-2xl border border-gray-200 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5"
                    >
                      <div>
                        <h3 className="font-semibold text-gray-900">{pkg.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-gray-600">{pkg.summary}</p>
                      </div>
                      <ArrowRight className="mt-1 text-primary" size={18} />
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ServicePage;
