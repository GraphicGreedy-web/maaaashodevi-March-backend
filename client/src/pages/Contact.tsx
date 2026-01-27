import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  ArrowRight,
  MessageSquare,
  Users,
  Calendar,
  CheckCircle,
} from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'Email',
    subject: '',
    tour: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const GOOGLE_SHEET_URL =
    'https://script.google.com/macros/s/AKfycbwbXCw8NTa2YZzAC0Ez_nKy9a8Wt6I8riqdFhfTrbPmms-4aFv-yXWxyKf8l15bMFL0OQ/exec'; // Paste your URL here

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!GOOGLE_SHEET_URL) {
      alert('');
      return;
    }

    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: '',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); // Read JSON response
      console.log('Success:', result);

      setSubmitted(true);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form.');
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        contactMethod: 'Email',
        subject: '',
        tour: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Hero Section with Contact Us Title */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Contact <span className="text-[#ff6b6b]">Us</span>
              </h1>
              <p className="text-xl text-gray-600 mb-20">
                We're here to help you plan your spiritual journey. Reach out to
                us with any questions or to book a tour.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center space-x-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-120">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                      Contact <span className="text-[#000000]">Form</span>
                    </h1>

                    <a
                      href="https://forms.gle/M13mFhbbfsNqJrpf6"
                      className="bg-[#ff6b6b] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff5b5b] transition duration-300 flex items-center"
                    >
                      <p className="align-centre">
                        CLICK HERE --{' '}
                        <span className="text-[#000000]">
                          https://forms.gle/M13mFhbbfsNqJrpf6{' '}
                        </span>
                      </p>
                      <button></button>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid-cols-1 lg:grid-cols-2 gap-120">
              {/* Contact Information */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-[#ff6b6b] to-[#ff8e8e] rounded-2xl p-8 text-white shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="text-white/90 mb-10">
                  We would love to hear from you. Our team of experts is always
                  ready to assist you with your spiritual journey needs and help
                  you plan a memorable pilgrimage.
                </p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-white/90">
                        Om Shiva Nagar, Lal Ghati, Bhopal (MP)1
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Number</h3>
                      <p className="text-white/90">+91 9131714171</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Address</h3>
                      <p className="text-white/90">
                        Maaaashodevidharmayatra@gmail.com
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-white/90">
                        Monday - Saturday: 9:00 AM - 9:00 PM
                      </p>
                      <p className="text-white/90">Sunday: OFF</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-12"
                >
                  <h3 className="font-semibold text-lg mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/p/1HG3z2Q8AX/"
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition duration-300"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://wa.me/message/AGFJTGPLJOE7N1"
                      className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition duration-300"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.091.548 4.048 1.507 5.744L.048 23.872l6.273-1.644A11.93 11.93 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.69 16.365c-.243.684-1.205 1.333-1.655 1.41-.432.074-.99.106-1.611-.102-.372-.117-.852-.277-1.467-.547-2.587-1.109-4.273-3.71-4.403-3.875-.13-.165-1.055-1.4-1.055-2.678 0-1.28.666-1.908.904-2.164.243-.256.53-.32.706-.32h.51c.16 0 .384-.038.596.457.228.523.78 1.81.848 1.94.064.128.106.277.021.448-.085.17-.128.277-.256.426-.133.16-.27.355-.385.476-.128.128-.262.27-.112.53.149.256.665 1.097 1.426 1.774.981.872 1.81 1.146 2.069 1.28.256.128.426.106.586-.064.16-.17.677-.79.857-1.066.181-.277.363-.235.607-.149.242.085 1.556.735 1.825.87.267.128.448.192.512.298.064.107.064.642-.18 1.326z" />
                      </svg>
                    </a>
                    {/* <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a> */}
                    {/* <a 
                    </a> */}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              {/* <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                id="contact-form"
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Your Name <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email Address{' '}
                          <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <label
                          htmlFor="contactMethod"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Preferred Contact Method
                        </label>
                        <select
                          id="contactMethod"
                          name="contactMethod"
                          value={formData.contactMethod}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                        >
                          <option value="Phone">Phone</option>
                          <option value="WhatsApp">WhatsApp</option>
                        </select>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Subject <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                          placeholder="Enter subject"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        <label
                          htmlFor="tour"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Interested in Tour
                        </label>
                        <select
                          id="tour"
                          name="tour"
                          value={formData.tour}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                        >
                          <option value="">Select a tour (optional)</option>
                          <option value="Char Dham Yatra">
                            Char Dham Yatra
                          </option>
                          <option value="Vaishno Devi & Amarnath">
                            Vaishno Devi & Amarnath
                          </option>
                          <option value="Kashi Vishwanath">
                            Kashi Vishwanath
                          </option>
                          <option value="Tirupati Balaji">
                            Tirupati Balaji
                          </option>
                          <option value="Custom Tour">Custom Tour</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Your Message <span className="text-[#ff6b6b]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                        placeholder="Enter your message here..."
                      ></textarea>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="flex items-center"
                    >
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-[#ff6b6b] focus:ring-[#ff6b6b] border-gray-300 rounded"
                      />
                      <label
                        htmlFor="privacy"
                        className="ml-2 block text-sm text-gray-700"
                      >
                        I agree to the{' '}
                        <a
                          href="/privacy-policy"
                          className="text-[#ff6b6b] hover:underline"
                        >
                          privacy policy
                        </a>{' '}
                        and consent to being contacted.
                      </label>
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white py-3 px-6 rounded-lg font-medium hover:from-[#ff5b5b] hover:to-[#ff7e7e] transition duration-300 flex items-center justify-center"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </motion.button>
                  </form> */}
              {/* )}
              </motion.div> */}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="locations" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Locations
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit us at one of our office locations or schedule a virtual
                meeting from anywhere in India.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-lg"
            >
              {/* This would be replaced with an actual map component in a real application */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white p-6 rounded-lg shadow-lg max-w-md"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Headquarters
                    </h3>
                    <p className="text-gray-600 mb-4">
                      lal Ghati, Bhopal (MP) India{' '}
                    </p>
                    <a
                      href="#"
                      className="text-[#ff6b6b] font-medium hover:underline flex items-center"
                    >
                      Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff6b6b] transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Delhi</h3>
                <p className="text-gray-600 mb-1">123 Spiritual Avenue</p>
                <p className="text-gray-600 mb-3">Delhi, India - 110001</p>
                <p className="text-gray-600 mb-1">+91 98765 43210</p>
                <p className="text-gray-600">delhi@maaashodevi.com</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff6b6b] transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Varanasi</h3>
                <p className="text-gray-600 mb-1">456 Ganga Ghat Road</p>
                <p className="text-gray-600 mb-3">Varanasi, UP - 221001</p>
                <p className="text-gray-600 mb-1">+91 98765 43211</p>
                <p className="text-gray-600">varanasi@maaashodevi.com</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff6b6b] transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Haridwar</h3>
                <p className="text-gray-600 mb-1">789 Har Ki Pauri</p>
                <p className="text-gray-600 mb-3">Haridwar, UK - 249401</p>
                <p className="text-gray-600 mb-1">+91 98765 43212</p>
                <p className="text-gray-600">haridwar@maaashodevi.com</p>
              </motion.div>
            </div> */}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to providing exceptional service and delivering
                spiritual experiences that exceed your expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-[#ff6b6b]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-[#ff6b6b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Affordable Packages
                </h3>
                <p className="text-gray-600">
                  We are committed to offering affordable premium services and
                  top-tier facilities on a budget, ensuring that financial
                  constraints never hinder access to quality services. Our
                  cost-effective solutions make accessible excellence a reality
                  for everyone.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-[#ff6b6b]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#ff6b6b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Expert Guides
                </h3>
                <p className="text-gray-600">
                  Our team consists of knowledgeable guides with deep
                  understanding of religious traditions and sacred sites across
                  India.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-[#ff6b6b]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#ff6b6b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Customized Tours
                </h3>
                <p className="text-gray-600">
                  We create personalized pilgrimage experiences tailored to your
                  spiritual needs, preferences, and schedule.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our spiritual tours and
                how we can help you plan your pilgrimage.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What type of delicious and affordable food options can we
                    get?
                  </h3>
                  <p className="text-gray-600">
                    We offer the option to customize your meal, where a group
                    can decide on a common meal, including sabji, roti, and
                    rice, ensuring a personalized and budget-friendly dining
                    experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How large are your tour groups?
                  </h3>
                  <p className="text-gray-600">
                    Our standard tour groups typically range from 15 to 30
                    people, ensuring the perfect balance between personal
                    attention and group camaraderie. For those seeking a more
                    intimate and exclusive experience, we also offer private
                    tours for families and smaller groups (6 to 8 people)
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    What is included in your tour packages?
                  </h3>
                  <p className="text-gray-600">
                    We provide comprehensive travel services, including
                    comfortable accommodation, hassle-free transportation, and
                    delicious meals, ensuring a seamless and enjoyable travel
                    experience
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How do I book a tour with you?
                  </h3>
                  <p className="text-gray-600">
                    Booking is simple! Contact us via phone, WhatsApp, or our
                    website to reserve your spot. A ₹3000 deposit secures your
                    booking, with the remaining balance payable on the tour day
                    for a hassle-free experience
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    How can I get more information about the tour journey?
                  </h3>
                  <p className="text-gray-600">
                    You may call us for complete details about the tour journey,
                    including essential information about the itinerary,
                    additional requirements for specific destinations, and any
                    extra costs involved.
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center mt-10"
              >
                <p className="text-gray-600 mb-4">
                  Don't see your question here?
                </p>
                <a
                  href="#contact-form"
                  className="inline-flex items-center text-[#ff6b6b] font-medium hover:underline"
                >
                  Contact us via mobile or WhatsApp for quick and easy bookings.
                  We're here to assist you!{' '}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Begin Your Spiritual Journey?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Take the first step towards a transformative spiritual
                experience. Contact us today to plan your sacred pilgrimage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href=" /upcoming-plans"
                  className="bg-white text-[#ff6b6b] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
                >
                  Get Started
                </a>
                <a
                  href="tel:+91 9131714171"
                  className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition duration-300"
                >
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
