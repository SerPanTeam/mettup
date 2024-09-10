const eventsStore = [
    // Travel and Outdoor (New York, San Francisco, Chicago, Nashville, Miami)
    {
      title: "Central Park Hike",
      description: "Join us for a morning hike through Central Park.",
      date: new Date(2024, 9, 15, 8), // октябрь
      image: "/assets/images/events/1.jpg",
      type: "offline",
      attendees: 120,
      category: "Travel and Outdoor",
      distance: 10,
      city: "New York"
    },
    {
      title: "Golden Gate Sunset Walk",
      description: "Experience the beauty of the Golden Gate Bridge at sunset.",
      date: new Date(2024, 9, 20, 18), // октябрь
      image: "/assets/images/events/2.jpg",
      type: "offline",
      attendees: 60,
      category: "Travel and Outdoor",
      distance: 20,
      city: "San Francisco"
    },
    {
      title: "Explore Navy Pier",
      description: "A fun day at Chicago's Navy Pier, exploring attractions and events.",
      date: new Date(2024, 9, 22, 11), // октябрь
      image: "/assets/images/events/3.jpg",
      type: "offline",
      attendees: 90,
      category: "Travel and Outdoor",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Bike Tour",
      description: "Cycle through the heart of Nashville and explore the city's landmarks.",
      date: new Date(2024, 9, 24, 9), // октябрь
      image: "/assets/images/events/4.jpg",
      type: "offline",
      attendees: 50,
      category: "Travel and Outdoor",
      distance: 15,
      city: "Nashville"
    },
    {
      title: "Miami Beach Adventure",
      description: "Join us for a thrilling day of water sports at Miami Beach.",
      date: new Date(2024, 9, 27, 10), // октябрь
      image: "/assets/images/events/5.jpg",
      type: "offline",
      attendees: 80,
      category: "Travel and Outdoor",
      distance: 25,
      city: "Miami"
    },
    
    // Social Activities
    {
      title: "New York Singles Meet",
      description: "Meet new people and expand your social circle at this fun event.",
      date: new Date(2024, 9, 16, 19), // октябрь
      image: "/assets/images/events/6.jpg",
      type: "offline",
      attendees: 100,
      category: "Social Activities",
      distance: 5,
      city: "New York"
    },
    {
      title: "San Francisco Tech Networking",
      description: "Network with like-minded tech enthusiasts and professionals.",
      date: new Date(2024, 9, 18, 18), // октябрь
      image: "/assets/images/events/7.jpg",
      type: "offline",
      attendees: 120,
      category: "Social Activities",
      distance: 10,
      city: "San Francisco"
    },
    {
      title: "Chicago Music Lovers Meetup",
      description: "Meet fellow music lovers at this casual meetup in Chicago.",
      date: new Date(2024, 9, 20, 17), // октябрь
      image: "/assets/images/events/8.jpg",
      type: "offline",
      attendees: 80,
      category: "Social Activities",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Community BBQ",
      description: "Join us for a community BBQ with great food and company.",
      date: new Date(2024, 9, 23, 12), // октябрь
      image: "/assets/images/events/9.jpg",
      type: "offline",
      attendees: 150,
      category: "Social Activities",
      distance: 10,
      city: "Nashville"
    },
    {
      title: "Miami Salsa Night",
      description: "Come dance the night away at Miami's hottest salsa club.",
      date: new Date(2024, 9, 25, 21), // октябрь
      image: "/assets/images/events/10.jpg",
      type: "offline",
      attendees: 70,
      category: "Social Activities",
      distance: 15,
      city: "Miami"
    },
    
    // Hobbies and Passions
    {
      title: "New York Art Enthusiasts",
      description: "Join fellow art lovers for discussions and gallery tours.",
      date: new Date(2024, 9, 17, 14), // октябрь
      image: "/assets/images/events/11.jpg",
      type: "offline",
      attendees: 45,
      category: "Hobbies and Passions",
      distance: 5,
      city: "New York"
    },
    {
      title: "San Francisco Photography Walk",
      description: "Capture the beauty of San Francisco with other photography lovers.",
      date: new Date(2024, 9, 19, 16), // октябрь
      image: "/assets/images/events/12.jpg",
      type: "offline",
      attendees: 35,
      category: "Hobbies and Passions",
      distance: 20,
      city: "San Francisco"
    },
    {
      title: "Chicago Craft Beer Tasting",
      description: "Explore Chicago's craft beer scene with like-minded enthusiasts.",
      date: new Date(2024, 9, 21, 18), // октябрь
      image: "/assets/images/events/13.jpg",
      type: "offline",
      attendees: 50,
      category: "Hobbies and Passions",
      distance: 10,
      city: "Chicago"
    },
    {
      title: "Nashville Writers' Circle",
      description: "Share your writing and get feedback from fellow writers.",
      date: new Date(2024, 9, 25, 19), // октябрь
      image: "/assets/images/events/14.jpg",
      type: "offline",
      attendees: 30,
      category: "Hobbies and Passions",
      distance: 5,
      city: "Nashville"
    },
    {
      title: "Miami Film Lovers Meetup",
      description: "Discuss your favorite films with fellow cinema enthusiasts.",
      date: new Date(2024, 9, 28, 15), // октябрь
      image: "/assets/images/events/15.jpg",
      type: "offline",
      attendees: 40,
      category: "Hobbies and Passions",
      distance: 20,
      city: "Miami"
    },
    
    // Sports and Fitness
    {
      title: "New York Marathon Training",
      description: "Prepare for the marathon with expert guidance.",
      date: new Date(2024, 9, 18, 7), // октябрь
      image: "/assets/images/events/16.jpg",
      type: "offline",
      attendees: 150,
      category: "Sports and Fitness",
      distance: 15,
      city: "New York"
    },
    {
      title: "San Francisco Yoga in the Park",
      description: "Start your day with yoga in the beautiful Golden Gate Park.",
      date: new Date(2024, 9, 20, 8), // октябрь
      image: "/assets/images/events/17.jpg",
      type: "offline",
      attendees: 100,
      category: "Sports and Fitness",
      distance: 10,
      city: "San Francisco"
    },
    {
      title: "Chicago Indoor Climbing Meetup",
      description: "Join us for a fun day of indoor rock climbing.",
      date: new Date(2024, 9, 22, 9), // октябрь
      image: "/assets/images/events/18.jpg",
      type: "offline",
      attendees: 80,
      category: "Sports and Fitness",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Fitness Bootcamp",
      description: "Get fit with this intense outdoor bootcamp session.",
      date: new Date(2024, 9, 24, 7), // октябрь
      image: "/assets/images/events/19.jpg",
      type: "offline",
      attendees: 120,
      category: "Sports and Fitness",
      distance: 10,
      city: "Nashville"
    },
    {
      title: "Miami Beach Volleyball Tournament",
      description: "Compete in Miami's annual beach volleyball tournament.",
      date: new Date(2024, 9, 26, 10), // октябрь
      image: "/assets/images/events/20.jpg",
      type: "offline",
      attendees: 200,
      category: "Sports and Fitness",
      distance: 15,
      city: "Miami"
    },
    
    // Technology
    {
      title: "NYC AI and Machine Learning Conference",
      description: "Stay ahead of the curve in AI and machine learning technologies.",
      date: new Date(2024, 9, 23, 10), // октябрь
      image: "/assets/images/events/21.jpg",
      type: "offline",
      attendees: 300,
      category: "Technology",
      distance: 5,
      city: "New York"
    },
    {
      title: "San Francisco Blockchain Meetup",
      description: "Explore the latest developments in blockchain technology.",
      date: new Date(2024, 9, 25, 16), // октябрь
      image: "/assets/images/events/22.jpg",
      type: "offline",
      attendees: 80,
      category: "Technology",
      distance: 15,
      city: "San Francisco"
    },
    {
      title: "Chicago Virtual Reality Workshop",
      description: "Dive into the world of VR with hands-on workshops.",
      date: new Date(2024, 9, 20, 13), // октябрь
      image: "/assets/images/events/23.jpg",
      type: "offline",
      attendees: 60,
      category: "Technology",
      distance: 10,
      city: "Chicago"
    },
    {
      title: "Nashville Software Engineering Summit",
      description: "Learn about software engineering trends and best practices.",
      date: new Date(2024, 9, 26, 9), // октябрь
      image: "/assets/images/events/24.jpg",
      type: "offline",
      attendees: 250,
      category: "Technology",
      distance: 20,
      city: "Nashville"
    },
    {
      title: "Miami Robotics and Automation Meetup",
      description: "Join us to discuss the latest in robotics and automation.",
      date: new Date(2024, 9, 28, 17), // октябрь
      image: "/assets/images/events/25.jpg",
      type: "offline",
      attendees: 100,
      category: "Technology",
      distance: 15,
      city: "Miami"
    },
  
    // Art and Culture (category added based on the instruction)
    {
      title: "NYC Modern Art Gallery Tour",
      description: "Explore the latest exhibitions in modern art in New York.",
      date: new Date(2024, 9, 16, 11), // октябрь
      image: "/assets/images/events/26.jpg",
      type: "offline",
      attendees: 50,
      category: "Art and Culture",
      distance: 10,
      city: "New York"
    },
    {
      title: "San Francisco Art & Wine Festival",
      description: "Enjoy art exhibitions and wine tastings in San Francisco.",
      date: new Date(2024, 9, 18, 12), // октябрь
      image: "/assets/images/events/27.jpg",
      type: "offline",
      attendees: 300,
      category: "Art and Culture",
      distance: 20,
      city: "San Francisco"
    },
    {
      title: "Chicago Classical Music Concert",
      description: "Experience the best classical music in Chicago's finest venues.",
      date: new Date(2024, 9, 23, 19), // октябрь
      image: "/assets/images/events/28.jpg",
      type: "offline",
      attendees: 200,
      category: "Art and Culture",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Art Fair",
      description: "Browse local artists' works at this year's art fair.",
      date: new Date(2024, 9, 21, 10), // октябрь
      image: "/assets/images/events/29.jpg",
      type: "offline",
      attendees: 150,
      category: "Art and Culture",
      distance: 15,
      city: "Nashville"
    },
    {
      title: "Miami Art Deco Tour",
      description: "Discover Miami's iconic art deco architecture.",
      date: new Date(2024, 9, 24, 16), // октябрь
      image: "/assets/images/events/30.jpg",
      type: "offline",
      attendees: 90,
      category: "Art and Culture",
      distance: 10,
      city: "Miami"
    },
  
    // Games (added based on instruction)
    {
      title: "New York Board Game Night",
      description: "Play your favorite board games with new friends.",
      date: new Date(2024, 9, 17, 18), // октябрь
      image: "/assets/images/events/31.jpg",
      type: "offline",
      attendees: 30,
      category: "Games",
      distance: 5,
      city: "New York"
    },
    {
      title: "San Francisco Esports Tournament",
      description: "Compete in the city's biggest esports event.",
      date: new Date(2024, 9, 22, 14), // октябрь
      image: "/assets/images/events/32.jpg",
      type: "offline",
      attendees: 200,
      category: "Games",
      distance: 20,
      city: "San Francisco"
    },
    {
      title: "Chicago Chess Club Meetup",
      description: "Join the Chicago Chess Club for weekly meetups and tournaments.",
      date: new Date(2024, 9, 19, 10), // октябрь
      image: "/assets/images/events/33.jpg",
      type: "offline",
      attendees: 25,
      category: "Games",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Arcade Games Night",
      description: "Play your favorite retro arcade games in Nashville.",
      date: new Date(2024, 9, 26, 20), // октябрь
      image: "/assets/images/events/34.jpg",
      type: "offline",
      attendees: 50,
      category: "Games",
      distance: 10,
      city: "Nashville"
    },
    {
      title: "Miami Video Game Meetup",
      description: "Join fellow gamers for a night of video game fun.",
      date: new Date(2024, 9, 29, 18), // октябрь
      image: "/assets/images/events/35.jpg",
      type: "offline",
      attendees: 100,
      category: "Games",
      distance: 15,
      city: "Miami"
    },
  
    // Добавленные онлайн события
    {
      title: "Online Cooking Class",
      description: "Learn to cook delicious meals from home with our online chef.",
      date: new Date(2024, 10, 12, 18), // октябрь
      image: "/assets/images/events/36.jpg",
      type: "online",
      attendees: 150,
      category: "Hobbies and Passions",
      distance: 0,
      city: "Online"
    },
    {
      title: "AI in Healthcare Webinar",
      description: "Discover how AI is transforming the healthcare industry.",
      date: new Date(2024, 10, 13, 14), // октябрь
      image: "/assets/images/events/37.jpg",
      type: "online",
      attendees: 300,
      category: "Technology",
      distance: 0,
      city: "Online"
    },
    {
      title: "Virtual Art Exhibition",
      description: "Explore the world of digital art in this virtual exhibition.",
      date: new Date(2024, 10, 14, 10), // октябрь
      image: "/assets/images/events/38.jpg",
      type: "online",
      attendees: 200,
      category: "Art and Culture",
      distance: 0,
      city: "Online"
    },
    {
      title: "Python Programming Bootcamp",
      description: "Master Python programming with this intensive bootcamp.",
      date: new Date(2024, 10, 18, 9), // октябрь
      image: "/assets/images/events/39.jpg",
      type: "online",
      attendees: 500,
      category: "Technology",
      distance: 0,
      city: "Online"
    },
    {
      title: "Online Book Club Meeting",
      description: "Join us for an online discussion of the latest bestsellers.",
      date: new Date(2024, 10, 20, 19), // октябрь
      image: "/assets/images/events/40.jpg",
      type: "online",
      attendees: 80,
      category: "Hobbies and Passions",
      distance: 0,
      city: "Online"
    },
    {
      title: "Virtual Yoga Class",
      description: "Practice yoga from the comfort of your home with our expert instructor.",
      date: new Date(2024, 10, 22, 7), // октябрь
      image: "/assets/images/events/41.jpg",
      type: "online",
      attendees: 100,
      category: "Sports and Fitness",
      distance: 0,
      city: "Online"
    },
    {
      title: "Digital Marketing Strategies Webinar",
      description: "Learn the latest digital marketing strategies from experts.",
      date: new Date(2024, 10, 24, 15), // октябрь
      image: "/assets/images/events/42.jpg",
      type: "online",
      attendees: 200,
      category: "Business",
      distance: 0,
      city: "Online"
    },
    {
      title: "Remote Team Collaboration Workshop",
      description: "Master the art of remote collaboration with this interactive workshop.",
      date: new Date(2024, 10, 26, 12), // октябрь
      image: "/assets/images/events/43.jpg",
      type: "online",
      attendees: 150,
      category: "Business",
      distance: 0,
      city: "Online"
    }
  ];
  