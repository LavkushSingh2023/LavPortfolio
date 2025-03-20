export const projectsCaseStydy = [
  {
    id: 0,
    title: "DevMate",
    overview:
      "DevMate is a full-stack developer collaboration platform designed to connect developers, facilitate networking, and enable real-time communication. The platform allows users to find other developers, send connection requests, chat in real-time, and share insights through posts.",
    problem:
      "Developers often struggle to find like-minded peers for collaboration, mentorship, or networking. Existing platforms either lack real-time communication features or have complicated onboarding processes. DevMate aims to bridge this gap by providing a seamless experience for developers to connect, collaborate, and grow together.",
    solution:
      "DevMate offers an intuitive interface with essential networking features, including user authentication, search functionality, real-time messaging, and post-sharing. The platform is designed to be lightweight, scalable, and easy to use.",
    techStack: [
      "Frontend: React (Vite), Tailwind CSS & DaisyUI, React Router",
      "Backend: Node.js & Express.js, MongoDB, JWT",
      "Deployment: Vercel (Frontend), Render (Backend)",
    ],
    features: [
      "User Authentication (Signup, Login, Logout, Profile Update)",
      "Secure JWT-based communication",
      "Search Developers by Name",
      "Send, Accept, Reject Connection Requests",
      "Real-time Chat with Connections (WebSockets)",
      "Post Updates & Share Insights",
      "Collaborate & Clear Doubts with Other Developers",
    ],
    challenges: [
      "Used JWT tokens and bcrypt for secure authentication.",
      "Integrated WebSockets (Socket.io) for real-time chat.",
      "Optimized database queries with MongoDB indexes and implemented lazy loading.",
    ],
    impact:
      "Successfully deployed with a seamless UI/UX experience. Enables developers to network and collaborate effectively. Improved expertise in full-stack development and real-time features.",
    future:
      "Implement video calling, add AI-based recommendations, and improve mobile responsiveness.",
    liveUrl: "https://dev-mate-frontend-ten.vercel.app",
    github: "https://github.com/LavkushSingh2023/devMate-backend",
  },
  {
  id: 1,
  title: "Airbnb-like Website",
  overview:
    "Airbnb-like Website is a full-stack web application built using Node.js, Express, and MongoDB that enables users to search for and book property listings. The application offers a modern, responsive design and seamless UX for both hosts and guests.",
  problem:
    "Users needed an intuitive platform to easily find and book accommodations, while property owners required a straightforward interface to list and manage their properties. Existing solutions were often too complex or lacked essential functionality.",
  solution:
    "The application features secure user authentication, dynamic property listings, robust search functionality, and a comprehensive booking system. It also includes image upload capabilities to ensure a visually engaging and responsive design.",
  techStack: [
    "Frontend: React, Tailwind CSS",
    "Backend: Node.js, Express.js",
    "Database: MongoDB"
  ],
  features: [
    "User Authentication",
    "Dynamic Property Listings",
    "Robust Search Functionality",
    "Comprehensive Booking System",
    "Responsive Design",
    "Image Upload Capabilities"
  ],
  challenges: [
    "Implementing secure and efficient user authentication",
    "Developing a reliable booking system",
    "Handling image uploads and maintaining responsiveness across devices"
  ],
  impact:
    "Successfully deployed with positive user feedback. The platform streamlined the booking process, enhanced user engagement, and provided a smooth experience for both hosts and guests.",
  future:
    "Plan to integrate user reviews, advanced search filters, and payment gateway integration to further improve the platform and enhance user satisfaction.",
  liveUrl: "https://airbnbclone-zzvm.onrender.com",
  github: "https://github.com/LavkushSingh2023/Airbnb"
},
{
  id: 2,
  title: "HealthyBites",
  overview:
    "HealthyBites is a responsive food delivery web application designed to streamline the ordering process. It features an intuitive interface and dynamic content updates powered by the Swiggy API.",
  problem:
    "Customers often struggle with slow loading times and outdated menus in food delivery apps. HealthyBites addresses these challenges by providing real-time menu updates and an optimized browsing experience.",
  solution:
    "Built using React, Parcel, and Redux, the application implements robust features such as restaurant search, real-time menu display, and cart functionality. These work together to deliver a seamless ordering experience.",
  techStack: [
    "Frontend: React, Parcel",
    "State Management: Redux",
    "API Integration: Swiggy API"
  ],
  features: [
    "Responsive Design",
    "Restaurant Search",
    "Real-Time Menu Display",
    "Cart Functionality",
    "Performance Optimization"
  ],
  challenges: [
    "Integrating and managing real-time data from the Swiggy API",
    "Ensuring optimal performance under high traffic",
    "Maintaining a smooth and user-friendly interface"
  ],
  impact:
    "HealthyBites significantly improved the food ordering experience, boosting user engagement and overall customer satisfaction.",
  future:
    "Future enhancements include payment integration, customer reviews, and personalized recommendations to further elevate the user experience.",
  liveUrl: "https://healthy-bites-nine.vercel.app",
  github: "https://github.com/LavkushSingh2023/HealthyBites"
}
];
