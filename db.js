import mongoose from 'mongoose'
import { tour } from "./models/Model.js"
const upcomingTrips = [
    {
        order: 1,
        title: "CharDham Yatra",
        image:
            "https://sanjeevnitoday.com/wp-content/uploads/2024/05/Char-Dham-Yatra-Tour-Package.jpg",
        startDate: "20 April - 2 May, 2026 & 15 May - 27 May",
        endDate: "May 27, 2025",
        duration: "10 Night - 11 Days",
        price: 34999,
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
        order: 2,
        title: "CharDham Yatra",
        image:
            "https://sanjeevnitoday.com/wp-content/uploads/2024/05/Char-Dham-Yatra-Tour-Package.jpg",
        startDate: "1 - 13 June | 17 - 29 June, 2026",
        endDate: "May 27, 2025",
        duration: "10 Night - 11 Days",
        price: 34999,
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
        order: 3,
        title: "Dakshin Yatra | Jagannath Puri",
        image:
            "https://www.poojn.in/wp-content/uploads/2025/02/Kalyana-Venkateswara-Temple-Srinivasa-Mangapuram-Your-Complete-Guide.jpeg.jpg",
        startDate: "1 - 11 July 2026",
        duration: "8 Night - 9 Days",
        price: 39999,
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
        order: 4,
        title: "Braj Yatra",
        image:
            "https://3.bp.blogspot.com/-Ncy2FYL5BgU/UBfCjjWnmsI/AAAAAAAAAp8/bv70wDLPSok/s1600/Shriji+Temple+-Laadli+Sarkar+Mahal-+Radha+Rani+Mandir1st.JPG",
        startDate: "25 Feb - 1 March 2026",
        endDate: "September 9, 2025",
        duration: "4 Nights - 5 Days",
        price: 14999,
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
        order: 5,
        title: "Ujjain Mahakaleshwar",
        image:
            "https://media.easemytrip.com/media/Blog/India/638791301081070175/638791301081070175odQaJ5.png",
        startDate: "1 Feb 2026",
        endDate: "December 9, 2025",
        duration: "1 Days",
        price: 999,
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
        order: 6,
        title: "Nepal",
        image:
            "https://www.thestatesman.com/wp-content/uploads/2023/06/ajeet-manandhar-WUxvx42rHrk-unsplash.jpg",
        startDate: "1 Aug - 11 Aug 2026",
        endDate: "December 9, 2025",
        duration: "10 Nights 11 Days",
        price: 34999,
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
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // await tour.deleteMany({})
        // for (const trip of upcomingTrips) {
        //     const newTour = await tour.create({
        //         order: trip.order,
        //         title: trip.title,
        //         image: trip.image,
        //         startDate: trip.startDate,
        //         endDate: trip.endDate,
        //         duration: trip.duration,
        //         price: trip.price,
        //         locations: trip.locations,
        //         region: trip.region,
        //         state: trip.state,
        //         availableSeats: trip.availableSeats,
        //         featured: trip.featured,
        //         description: trip.description,
        //         popular: false
        //     });
        //     console.log("new tour: ", newTour)
        // }
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('Error: ', error.message);
        process.exit(1);
    }
};