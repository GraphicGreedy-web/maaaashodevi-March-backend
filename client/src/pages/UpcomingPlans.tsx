import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Search,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import AnimatedCard from "../components/AnimatedCard";

const UpcomingPlans: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeRegion, setActiveRegion] = useState("all");

  const upcomingTrips = [
    {
      id: 1,
      title: "CharDham Yatra",
      image:
        "https://sanjeevnitoday.com/wp-content/uploads/2024/05/Char-Dham-Yatra-Tour-Package.jpg",
      startDate: "20 April - 2 May, 2026 & 15 May - 27 May",
      endDate: "May 27, 2025",
      duration: "10 Night - 11 Days",
      price: "₹34,999",
      locations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
      region: "North India",
      state: "Uttarakhand",
      //groupSize: '30-50 People',
      availableSeats: 15,
      featured: true,
      description:
        "Sacred CharDham: Yamunotri, Gangotri, Kedarnath, Badrinath.",
    },
    {
      id: 2,
      title: "CharDham Yatra",
      image:
        "https://sanjeevnitoday.com/wp-content/uploads/2024/05/Char-Dham-Yatra-Tour-Package.jpg",
      startDate: "1 - 13 June | 17 - 29 June, 2026",
      endDate: "May 27, 2025",
      duration: "10 Night - 11 Days",
      price: "₹34,999",
      locations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
      region: "North India",
      state: "Uttarakhand",
      //groupSize: '30-50 People',
      availableSeats: 15,
      featured: true,
      description:
        "Sacred CharDham: Yamunotri, Gangotri, Kedarnath, Badrinath.",
    },
    {
      id: 3,
      title: "Dakshin Yatra | Jagannath Puri",
      image:
        "https://www.poojn.in/wp-content/uploads/2025/02/Kalyana-Venkateswara-Temple-Srinivasa-Mangapuram-Your-Complete-Guide.jpeg.jpg",
      startDate: "1 - 11 July 2026",
      duration: "8 Night - 9 Days",
      price: "39,999",
      locations: ["Katra", "Pahalgam", "Amarnath Cave"],
      region: "South India",
      state: "Tamil Nadu",
      //groupSize: '15-20 People',
      availableSeats: 12,
      featured: true,
      description:
        "Seek blessings at the holy shrines of Mata Vaishno Devi and the sacred Amarnath Cave in one journey.",
    },
    {
      id: 4,
      title: "Braj Yatra",
      image:
        "https://3.bp.blogspot.com/-Ncy2FYL5BgU/UBfCjjWnmsI/AAAAAAAAAp8/bv70wDLPSok/s1600/Shriji+Temple+-Laadli+Sarkar+Mahal-+Radha+Rani+Mandir1st.JPG",
      startDate: "25 Feb - 1 March 2026",
      endDate: "September 9, 2025",
      duration: "4 Nights - 5 Days",
      price: "₹14,999",
      locations: ["Puri", "Konark", "Bhubaneswar"],
      region: "North India",
      state: "Uttar Pradesh",
      //groupSize: '15-20 People',
      availableSeats: 20,
      featured: true,
      description:
        "Explore the sacred Braj Temple in Vrindavan and the architectural marvel of Bihari Lal Temple.",
    },

    {
      id: 5,
      title: "Ujjain Mahakaleshwar",
      image:
        "https://media.easemytrip.com/media/Blog/India/638791301081070175/638791301081070175odQaJ5.png",
      startDate: "1 Feb 2026",
      endDate: "December 9, 2025",
      duration: "1 Days",
      price: "₹999",
      locations: ["Ujjain", "Omkareshwar", "Indore"],
      region: "Central India",
      state: "Madhya Pradesh",
      groupSize: "15-20 People",
      availableSeats: 20,
      featured: false,
      description:
        "Experience the divine presence at the Mahakaleshwar Jyotirlinga in Ujjain and participate in the famous Bhasma Aarti.",
    },
    {
      id: 6,
      title: "Nepal",
      image:
        "https://www.thestatesman.com/wp-content/uploads/2023/06/ajeet-manandhar-WUxvx42rHrk-unsplash.jpg",
      startDate: "1 Aug - 11 Aug 2026",
      endDate: "December 9, 2025",
      duration: "10 Nights 11 Days",
      price: "₹34,999",
      locations: ["Ujjain", "Omkareshwar", "Indore"],
      region: "North India",
      state: "Nepal",
      groupSize: "15-20 People",
      availableSeats: 20,
      featured: false,
      description:
        "Experience the divine presence at the Mahakaleshwar Jyotirlinga in Ujjain and participate in the famous Bhasma Aarti.",
    },
  ];

  const featuredTrips = upcomingTrips.filter((trip) => trip.featured);

  const filteredTrips = upcomingTrips.filter((trip) => {
    const matchesSearch =
      trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trip.locations.some((loc) =>
        loc.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      trip.state.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion =
      activeRegion === "all" || trip.region === activeRegion;
    return matchesSearch && matchesRegion;
  });

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

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
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
          </div>

          {/* Featured Packages Section */}
          <section className="mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-2xl font-bold mb-8"
            >
              Featured Packages
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredTrips.map((trip, index) => (
                <AnimatedCard key={trip.id} delay={index * 0.1}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
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
                      to="/contact"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-full transition-all duration-300 block text-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrips.map((trip, index) => (
                <AnimatedCard key={trip.id} delay={index * 0.05}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
                      to="/contact"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2 rounded-full transition-all duration-300 block text-center"
                    >
                      Book Now
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {filteredTrips.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-2">
                  No packages found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
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
    </PageTransition>
  );
};

export default UpcomingPlans;
