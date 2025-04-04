import { meetingSchema } from "@/types/schema";

export const events = [
  {
    id: 1,
    name: "Artisan Coffee Tasting",
    date: new Date(2025, 10, 15, 18, 0), // November 15, 2025, 6:00 PM
    cost: 25,
    description:
      "Join us for an evening exploring single-origin coffees from Ethiopia, Colombia, and Sumatra. Learn tasting techniques from our master barista.",
    fullDescription:
      "Immerse yourself in the world of specialty coffee at our Artisan Coffee Tasting event.\n Over two hours, you'll sample six exceptional single-origin coffees while learning professional cupping techniques. Our master barista will guide you through identifying flavor notes, understanding processing methods, and appreciating regional characteristics. Perfect for both coffee novices and connoisseurs looking to expand their palate. Includes a take-home tasting journal and 10% discount on featured beans.",
    place: "The Roasted Bean, 123 Brew Street",
    duration: "2 hours",
    capacity: 15,
    organizer: "The Roasted Bean Specialty Coffee",
    requirements: "No prior experience needed",
    img: "/event3.webp",
    highlights: [
      "Sample 6 premium single-origin coffees",
      "Learn professional cupping techniques",
      "Meet local coffee enthusiasts",
      "Take-home tasting journal included",
    ],
  },
  {
    id: 2,
    name: "Coffee Farmers Meetup",
    date: new Date(2025, 11, 5, 16, 30), // December 5, 2025, 4:30 PM
    cost: 0,
    description:
      "Yearly meetup with local coffee enthusiasts. This month we're hosting a Q&A with sustainable coffee farmers from Guatemala.",
    fullDescription:
      "Our annual Coffee Farmers Meetup brings together the local coffee community with the people who grow our favorite beans. This special edition features a panel discussion with three generations of coffee farmers from Guatemala's Huehuetenango region. Learn about sustainable farming practices, climate challenges, and fair trade economics directly from the producers. Includes live Q&A, coffee samples from their farms, and networking with local roasters and baristas. Free to attend with complimentary light refreshments.",
    place: "Community Coffee Hub, 789 Fair Trade Lane",
    duration: "3 hours",
    capacity: 50,
    organizer: "Local Coffee Collective",
    requirements: "Open to all coffee lovers",
    img: "/event1.webp",
    highlights: [
      "Direct from farm to cup stories",
      "Panel discussion with Q&A",
      "Network with local coffee professionals",
      "Free samples of Guatemalan coffee",
    ],
  },
  {
    id: 3,
    name: "Latte Art Workshop",
    date: new Date(2025, 10, 22, 14, 0), // November 22, 2025, 2:00 PM
    cost: 35,
    description:
      "Master the art of milk steaming and pouring beautiful designs. Perfect for home baristas looking to up their coffee presentation game.",
    fullDescription:
      "Elevate your home barista skills with our intensive 3-hour Latte Art Workshop. Led by regional latte art champion Jamie Chen, you'll learn proper milk steaming techniques, pouring fundamentals, and how to create basic to intermediate designs including hearts, rosettas, and tulips. Each participant gets hands-on practice with professional equipment, personalized feedback, and a comprehensive guidebook. Includes all materials, complimentary drinks, and a certificate of completion. Limited to 8 participants for optimal learning.",
    place: "Steam & Cream Cafe, 456 Froth Avenue",
    duration: "3 hours",
    capacity: 8,
    organizer: "Steam & Cream Cafe",
    requirements: "Basic espresso knowledge helpful but not required",
    img: "/event1.jpg",
    highlights: [
      "Hands-on instruction from a latte art champion",
      "Professional equipment provided",
      "Take-home guidebook and resources",
      "Certificate of completion",
      "Complimentary drinks throughout",
    ],
  },
].map((event) => {
  try {
    return meetingSchema.parse(event);
  } catch (error) {
    console.error("Invalid event data:", error);
    throw new Error(`Event validation failed for ${event.name}`);
  }
});
