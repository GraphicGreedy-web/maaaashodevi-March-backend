import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const TermsOfService: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-8">Last Updated: 09 March 2025</p>
            <div className="prose prose-lg max-w-none">
              <p className="mb-3">
                Welcome to Maa Asho Devi Dharam Yatra. These Terms of Service
                ("Terms") govern your use of our website and services. By
                accessing or using our website, you agree to be bound by these
                Terms. If you do not agree with any part of these Terms, please
                do not use our services.
              </p>
              <p>
                <h2 className="mb-1">
                  <b>1. Eligibility & Acceptance of Terms</b>
                </h2>
                <p className="mb-3">
                  {' '}
                  You must be at least 18 years old to book a yatra with us.
                  Minors must be accompanied by an adult. By using our services,
                  you confirm that you accept these Terms and agree to comply
                  with them.
                </p>
              </p>
              <h2>
                <p className="mb-1">
                  <b>2. Booking & Payment Policy</b>
                </p>
              </h2>
              <p className="mb-3">
                To secure your spot, you must provide accurate details and make
                the required payment as specified. We accept payments via cash
                and UPI for a smooth booking experience.
              </p>
              <p className="mb-1">
                <b>3. Cancellation & Refund Policy</b>
              </p>
              <p className="mb-3">
                1. If the client cancels the booking 25 days or more before the
                departure date, a 25% cancellation fee of the total tour cost
                will be deducted from the refund.
              </p>
              <p>
                2. If the client cancels the booking between 7-25 days before
                the departure date, a 50% cancellation fee of the total tour
                cost will be deducted from the refund.
              </p>
              <p>
                3. If the client cancels the booking within 0-7 days before the
                departure date, a 100% cancellation fee of the total tour cost
                will be deducted, and no refund will be issued.
              </p>
              <p>
                4. If activities or tours are canceled due to unforeseen
                circumstances such as government policies or extreme weather
                conditions, no refunds will be issued, but alternate options may
                be provided.
              </p>
              <p>
                5. If tickets are already booked, 60% of the amount will be
                refunded.
              </p>
              <p>
                6. Refunds will be processed within 15-25 days after
                cancellation{' '}
              </p>
              <h2 className="mb-1">
                <b>4. Code of Conduct</b>
              </h2>
              <p className="mb-3">
                <p>1. Respect fellow travelers, staff, and religious sites.</p>
                <p>2. Follow all safety and operational instructions.</p>
                <p>
                  3. Any behavior deemed disruptive, illegal, or offensive may
                  result in immediate removal from the yatra without a refund.
                </p>
              </p>
              <h2 className="mb-1">
                <b> 5.Liability & Disclaimer</b>
              </h2>
              <p className="mb-3">
                <p>
                  1. We are not responsible for personal injuries, lost
                  belongings, delays, or any unforeseen incidents during the
                  yatra.
                </p>
                <p>
                  2. Participants are responsible for their own travel insurance
                  and medical needs.
                </p>
                <p>
                  3. We act as facilitators and are not liable for any issues
                  arising from third-party service providers (e.g., transport,
                  accommodation).
                </p>
              </p>
              <h2 className="mb-1">
                <b>6. Privacy & Data Usage</b>
              </h2>
              <p className="mb-3">
                <p>
                  1. Your personal data is collected only for booking and
                  operational purposes, as outlined in our Privacy Policy.
                </p>
                <p>
                  2. We do not share your details without your explicit consent.
                </p>
              </p>
              <h2 className="mb-1">
                <b>7. Exclusive Content Ownership & Protection</b>
              </h2>
              <p className="mb-3">
                <p>
                  1. We reserve the right to modify the itinerary, pricing, or
                  services due to operational needs or force majeure events.
                </p>
                <p>
                  2. These Terms may be updated from time to time. Continued use
                  of our services implies acceptance of any revised Terms.
                </p>
              </p>
              <h2 className="mb-1">
                <b>8. Governing Law & Dispute Resolution</b>
              </h2>
              <p className="mb-3">
                1. These Terms are governed by the laws of Bhartiya Koom.
                <p>
                  2. Any disputes will be resolved through negotiation first. If
                  unresolved, they will be subject to the exclusive jurisdiction
                  of Bhopal High Court.
                </p>
              </p>
              <h2 className="mb-1">
                <b>9.Contact Us</b>
              </h2>
              <p className="mb-3">
                For any inquiries or concerns, contact us at
                Maaaashodevidharmayatra@gmail.com and +91 9131714171.
              </p>
              <h2 className="mb-1">
                <b>10. Got Questions? We’re Here to Help!</b>
              </h2>
              <p className="mb-3">
                For any privacy-related inquiries, concerns, or requests, feel
                free to contact us at 'maaaashodevidharmayatra@gmail.com'.
              </p>
              <p className="mb-3">
                <b>
                  {' '}
                  Maa Aasho Devi Dharma <i>Yatra</i>
                  <br />
                  Om Shiva Nagar, Lal Ghati, Bhopal (MP), India
                  <br />
                  Email: maaaashodevidharmayatra@gmail.com
                  <br />
                  Phone: +91 9131714171
                </b>
              </p>
              <ul>
                <p>
                  <li>
                    Respect local customs, traditions, and religious practices
                  </li>
                  <li>Dress modestly as required at religious sites</li>
                  <li>
                    Follow instructions from tour guides and local authorities
                  </li>
                  <li>
                    Not engage in any illegal, disruptive, or offensive behavior
                  </li>
                </p>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsOfService;
