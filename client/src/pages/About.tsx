import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Award, Clock, MapPin, Heart, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const teamMembers = [
    {
      name: "Neha Gupta",
      position: "Tour Operator",
      image:
        "https://media-hosting.imagekit.io//4390027224a24a12/photo_6226378170655948932_y.jpg?Expires=1836092040&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=dNICFOmQaROgcFKtIiHlCWPfLjtaYkGX53wqxFfcoC0WWKPPp-YZxXe5rxoBXzrmdL9wa1Tc3vxsQH82DJWINBm54Lpdg9KPAbip2x3s2r07INakuVilfJEvAhWyeiFH1WwX~j~TmGqG2F~00eSIoeJ75JFL7871d-ubch7yIZr8VqnoTdKY70VPov3wAEKeJ3xtB7iR~9s4Ae4Y8TLFP5YiMAOhRwUZrTmDFNymS6jf9BDOOxMRhJVi0pZoRVvudo09PX~9IcTVRASHH9LK1aTjDgaeQ7htPQMDu4p1TSp6FN~NeclkpRtavpkflHLyh0Q6rhCx8MLXaetO5~VIow__",
      bio: "Neha ensures that every pilgrim's needs are met with warmth and efficiency, from the first inquiry to post-tour follow-up.",
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Foundation",
      description:
        "Maaa Aasho Devi Dharma Yatra was established with a mission to provide authentic <b>spiritual experiences</b>.",
    },
    {
      year: "2019",
      title: "Expansion",
      description:
        "We embarked on a transformative journey to better serve pilgrims across <b>North India</b>.",
    },
    {
      year: "2024",
      title: "Expansion to South",
      description:
        '"Expanded to long-distance pilgrimages, serving devotees across <b>South India</b> with devotion.',
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="text-primary">Maa Aasho Devi</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connecting devotees with sacred destinations since 2014
                </p>
                <p className="text-gray-600 mb-6">
                  Our spiritual journey began in 2014 with our first pilgrimage
                  to Vrindavan, the sacred land of Lord Krishna. Since then, we
                  have successfully conducted hundreds of yatras across India
                  and Nepal, helping devotees connect with their faith through
                  well-organized and spiritually enriching tours. Over the
                  years, we have completed 10 Char Dham Yatra ,Kedarnath,
                  Badrinath, Gangotri, and Yamunotri , along20 Vrindavan Yatras,
                  where devotees immerse themselves in the divine energy of
                  Krishna’s birthplace. Our 10 Dakshina Yatras till
                  nowRameshwaram, Madurai, and Tirupati ..
                </p>
                <p className="text-gray-600 mb-8">
                  Beyond India, we have led 5 Nepal Yatras, including visits to
                  the Pashupatinath Temple in Kathmandu10 Somnath-Gujarat Yatras
                  have brought devotees closer to the legendary Somnath
                  Jyotirlinga , while **5 Jagannath5 Jagannath Yatra have given
                  pilgrims the chance to seek divine blessings at the Jagannath
                  Temple in Puri. Among our most cherished pilgrimages is the
                  Ujjain Mahakal Yatra , cond25 times, allowing devotees to
                  experience the sacred Bhasma Aarti at Mahakaleshwar
                  Jyotirlinga . With over aMaa Aashadevi Dharm Yatra
                  ensurecomfortable travel, authentic spiritual experiences, and
                  well-planned itineraries, making every journey a
                  transformative and soul-enriching experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/upcoming-plans"
                    className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-full transition-all duration-300"
                  >
                    View Our Tours
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://media-hosting.imagekit.io//fe46cbe443f14dc8/1678951721583.jpg?Expires=1835989014&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j-9kzbMgh3wCq-bKkDy4dC8668zGGrIhgbEPQ6-Z~3FnZaFq6nfT8UpGe0bnH7TENeQAxe6pE2pd~JSQNY9ykHPoNa~D4efpARIwj9KId9NmTSY-xe6NsC5Q8mnpaHngy76pyP15whCtoHvuyL1K~IAw2ZYlJIu8eRCVp69oEX81Ja83HgJRVLpzZQ3yUz0JXJtqKeQ-NpAeWvRAch6Ri3JiGd54QKx8VQhc82xjooF0xQfuU0af2~YozIKIpP83jFgZRK1VRPkj-Q~YgoPTW6Jwwy~nPW0CYsKhiFcOUrUcuwRtoqrpen01yZs62h0vjcZjN9V-pOus4XPANjQsYA__"
                  alt="Spiritual Journey"
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <div className="flex items-center mb-3 text-primary">
                    <Award size={24} className="mr-2" />
                    <span className="text-xl font-bold">10+ Years</span>
                  </div>
                  <p className="text-gray-700">
                    One decades of experience creating meaningful spiritual
                    journeys across India
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">600+</div>
                <div className="text-gray-600">Happy Pilgrims</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">55+</div>
                <div className="text-gray-600">Sacred Destinations</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="order-2 lg:order-1"
              >
                <img
                  src="https://media-hosting.imagekit.io//fe46cbe443f14dc8/1678951721583.jpg?Expires=1835989014&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j-9kzbMgh3wCq-bKkDy4dC8668zGGrIhgbEPQ6-Z~3FnZaFq6nfT8UpGe0bnH7TENeQAxe6pE2pd~JSQNY9ykHPoNa~D4efpARIwj9KId9NmTSY-xe6NsC5Q8mnpaHngy76pyP15whCtoHvuyL1K~IAw2ZYlJIu8eRCVp69oEX81Ja83HgJRVLpzZQ3yUz0JXJtqKeQ-NpAeWvRAch6Ri3JiGd54QKx8VQhc82xjooF0xQfuU0af2~YozIKIpP83jFgZRK1VRPkj-Q~YgoPTW6Jwwy~nPW0CYsKhiFcOUrUcuwRtoqrpen01yZs62h0vjcZjN9V-pOus4XPANjQsYA__"
                  alt="Our Mission"
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl font-bold mb-6">
                  Our Mission & Vision
                </h2>
                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-700">
                    Our mission is to make spiritual journeys accessible to
                    everyone, regardless of their financial situation. Today,
                    many tour agencies charge high prices, making it difficult
                    for people to fulfill their pilgrimage dreams. We are
                    committed to providing <b> budget-friendly</b> pilgrimage
                    tours, ensuring that no devotee is deprived of a sacred
                    yatra due to financial constraints.
                  </p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Our Vision
                  </h3>
                  <p className="text-gray-700">
                    We envision a world where spiritual yatra are not limited by
                    financial constraints. Our goal is to make pilgrimage tours
                    inclusive, allowing every devotee to experience the divine
                    energy of sacred places. By offering <b>affordable</b> and
                    well-organized yatras, we ensure that faith remains a yatra,
                    not a privilege. Through our commitment to accessibility, we
                    strive to bring people closer to their spiritual
                    aspirations, creating a community where devotion knows no
                    boundaries.
                  </p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Our Values
                  </h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <Heart
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        <b>Affordability and Accessibility</b> Ensuring that
                        every devotee, regardless of financial status, can
                        embark on a spiritual yatra.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Heart
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        {" "}
                        <b>Comfort and Safety</b> From transportation to
                        accommodation, we prioritize safety, hygiene, and
                        convenience for all travelers, including the elderly.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Heart
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        Commitment to pilgrim safety, comfort, and satisfaction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Heart
                        size={18}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>
                        Integrity and transparency in all our operations
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What sets <b>Maa Aasho Devi Dharma Yatra</b> apart from other
                travel agencies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard delay={0.1}>
                <div className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Guides</h3>
                  <p className="text-gray-600">
                    We provide pilgrims with essential <b>knowledge</b> about
                    the significance of each sacred destination.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Hassle-Free Experience
                  </h3>
                  <p className="text-gray-600">
                    We handle all aspects of your journey, from transportation
                    and accommodation to special darshan arrangements and
                    religious ceremonies.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Comprehensive Coverage
                  </h3>
                  <p className="text-gray-600">
                    From the <b>Himalayan temples to South Indian shrines</b>,
                    we cover all major pilgrimage destinations across India.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The dedicated professionals who make your spiritual journey
                memorable
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedCard key={member.id} delay={index * 99999}>
                  <div className="relative overflow-hidden rounded-t-xl h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">
                      {member.position}
                    </p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The milestones that have shaped Maa Asho Devi Dharam Yatra
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="w-1/2 px-4"></div>
                    <div className="z-10 flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    <div className="w-1/2 px-4">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-primary mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What Our Pilgrims Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from those who have experienced spiritual transformation
                through our guided tours
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard delay={0.1}>
                <div className="p-6">
                  <div className="flex mb-4">
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "A <b>budget-friendly</b> yet high-quality pilgrimage. Every
                    detail was taken care of with great dedication."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                      RS
                    </div>
                    <div>
                      <h4 className="font-semibold">Minal</h4>
                      <p className="text-gray-600 text-sm">Bhopal</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="p-6">
                  <div className="flex mb-4">
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Thank you for making my <b>dream pilgrimage</b> come true!
                    Everything was beyond expectations."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                      PP
                    </div>
                    <div>
                      <h4 className="font-semibold">Priya Patel</h4>
                      <p className="text-gray-600 text-sm">Mumbai</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="p-6">
                  <div className="flex mb-4">
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg
                      className="w-5 h-5 text-yellow-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Felt like traveling with family! The team ensured a{" "}
                    <b>smooth and comfortable journey</b> throughout."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                      AS
                    </div>
                    <div>
                      <h4 className="font-semibold">Amit Singh</h4>
                      <p className="text-gray-600 text-sm">Jaipur</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 md:p-16 text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Begin Your Spiritual Journey?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join us for a transformative experience that will nourish your
                soul and create memories to last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-primary hover:bg-white/90 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Contact Us
                </Link>
                <Link
                  to="/upcoming-plans"
                  className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border border-white"
                >
                  View Upcoming Tours
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
