import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const PrivacyPolicy: React.FC = () => {
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
              <b>Privacy Policy</b>
            </h1>
            <p className="text-gray-600 mb-8">Last Updated: 8 March 2025</p>

            <div className="prose prose-lg max-w-none">
              <p>
                <h2 className="mb-1">
                  <b>1. Welcome to a Secure and Hassle-Free Experience</b>
                </h2>
                <p className="mb-3">
                  {' '}
                  At Maa Aasho Devi Dharma Yatra, your privacy isn't just
                  a policy—it's our commitment. We prioritize protecting your
                  personal data while ensuring a smooth and secure journey. This
                  Privacy Policy explains how we collect, use, and safeguard
                  your information.
                </p>
              </p>

              <h2>
                <p className="mb-1"><b>2. Transparent & Consent-Based Data Collection </b></p>
              </h2><p className="mb-3">
                We only collect essential details such as your name, contact information, and identity proof—with your explicit consent. This data is exclusively used for booking and operational purposes, ensuring a stress-free experience.</p>
              <p className="mb-1"><b>3. Zero-Compromise on Data Security & Privacy</b></p>
              <p className="mb-3"> 
              Your personal data stays private, encrypted, and secure. We never share your details with third-party vendors or external entities without your direct approval.
                </p>
              <h2 className="mb-1"><b>4. Your Memories, Your Choice</b></h2>
              <p className="mb-3">
              We may use images or testimonials from your journey for promotional content to inspire future travelers. If you’d prefer not to be featured, simply inform us in writing before your trip ends.
              </p>

              <h2 className="mb-1"><b> 5. Stay in the Loop—On Your Terms</b></h2>
              <p className="mb-3">
              We love sharing exclusive deals, special offers, and updates with our travelers. Want fewer updates? No problem—opt out anytime by contacting us directly.
              </p>
              

              <h2 className="mb-1"><b>6. Bulletproof Security & Trusted Access</b></h2>
              <p className="mb-3">
              We implement state-of-the-art security measures to protect your personal information. Only our authorized operational team can access your data—strictly for essential travel management purposes.
              </p>

              <h2 className="mb-1"><b>7. Exclusive Content Ownership & Protection</b></h2>
              <p className="mb-3">
              All media, photographs, and content related to Maa Aasho Devi Dharma Yatra are our intellectual property. Want to use any of our content? Just reach out for prior written permission.
              </p>

              <h2 className="mb-1"><b>8. Always Evolving—Stay Updated</b></h2>
              <p className="mb-3">
              We periodically update our Privacy Policy to align with industry best practices and evolving security standards. The latest version will always be available on our website. By continuing to use our services, you agree to the most recent terms.
              </p>

              <h2 className="mb-1"><b>9. Photography and Media:</b></h2>
              <p className="mb-3">
              Maa Aasgodevi Dharnma Yatra has all the rights to use any photographs or any testimonials of clients taken during the tour for promotional purposes only, If client have any issue for using of their photographs or videos, they have to notify us in writing before the end of the tour.

              </p>

              <h2 className="mb-1"><b>10. Got Questions? We’re Here to Help!</b></h2>
              <p className="mb-3">
              For any privacy-related inquiries, concerns, or requests, feel free to contact us at 'maaaashodevidharmayatra@gmail.com'. Your privacy, your control! 🚀

              </p>
              <p>
               <b> Maa Aasho Devi Dharma <i>Yatra</i>
                <br />
                Om Shiva Nagar, Lal Ghati, Bhopal (MP), India
                <br />
                Email: maaaashodevidharmayatra@gmail.com
                <br />
                Phone: +91 9131714171</b></p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;
