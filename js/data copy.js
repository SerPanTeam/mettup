'use strict'
/* 

const eventsStore = [
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2024, 9, 23, 15),
        image:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
    },
    {
        title:
            "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
        description: "New York AI Users",
        date: new Date(2024, 9, 23, 11, 30),
        image:
            "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
    },
    {
        title: "Book 40+ Appointments Per Month Using AI and Automation",
        description: "New Jersey Business Network",
        date: new Date(2024, 9, 16, 14),
        image:
            "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        category: "Technology",
        distance: 10,
    },
    {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 9, 13, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 77,
        category: "Business",
        distance: 100,
    },
    {
        title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
        description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
        date: new Date(2024, 9, 14, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 140,
        category: "Social Activities",
        distance: 75,
    },
    {
        title: "All Nations - Manhattan Missions Church Bible Study",
        description: "Manhattan Bible Study Meetup Group",
        date: new Date(2024, 9, 14, 11),
        image:
            "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        category: "Health and Wellbeing",
        distance: 15,
    },
    {
        title: "Python Developers Meetup",
        description: "Meetup for Python developers in San Francisco",
        date: new Date(2024, 9, 15, 18),
        image:
            "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 120,
        category: "Technology",
        distance: 30,
    },
    {
        title: "Startup Pitch Night",
        description: "Event for aspiring entrepreneurs to pitch their startups",
        date: new Date(2024, 9, 20, 19),
        image:
            "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=870&auto=format&fit=crop",
        type: "offline",
        attendees: 200,
        category: "Business",
        distance: 40,
    },
    {
        title: "Yoga and Meditation Retreat",
        description: "A weekend of yoga, meditation, and relaxation",
        date: new Date(2024, 9, 18, 7),
        image:
            "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 50,
        category: "Health and Wellbeing",
        distance: 60,
    },
    {
        title: "Digital Marketing Conference",
        description: "Conference covering the latest trends in digital marketing",
        date: new Date(2024, 9, 22, 9),
        image:
            "https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&w=870&auto=format&fit=crop",
        type: "online",
        attendees: 300,
        category: "Business",
        distance: 0,
    },
    {
        title: "Environmental Sustainability Workshop",
        description: "Learn about sustainable practices for a better environment",
        date: new Date(2024, 9, 13, 14),
        image:
            "https://images.unsplash.com/photo-1515344905723-babc01aac23d?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 80,
        category: "Health and Wellbeing",
        distance: 90,
    },
    {
        title: "Virtual Reality Gaming Tournament",
        description: "Compete in the latest VR games and win prizes",
        date: new Date(2024, 9, 28, 17),
        image:
            "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 150,
        category: "Technology",
        distance: 20,
    },
    {
        title: "Photography Basics Workshop",
        description: "Learn the basics of photography with hands-on practice",
        date: new Date(2024, 9, 19, 10),
        image:
            "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 25,
        category: "Hobbies and Passions",
        distance: 45,
    },
    {
        title: "Art Therapy Workshop",
        description: "Use art as a way to heal and express yourself",
        date: new Date(2024, 9, 21, 15),
        image:
            "https://plus.unsplash.com/premium_photo-1704974610777-93090f8a2eb4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 70,
        category: "Health and Wellbeing",
        distance: 35,
    },
    {
        title: "Chess Tournament",
        description: "Compete against others in this regional chess tournament",
        date: new Date(2024, 9, 24, 10),
        image:
            "https://plus.unsplash.com/premium_photo-1673089624442-14bc846ded76?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 30,
        category: "Hobbies and Passions",
        distance: 10,
    },
    {
        title: "Online Coding Bootcamp",
        description: "Learn to code in just 12 weeks",
        date: new Date(2024, 9, 26, 11),
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 500,
        category: "Technology",
        distance: 0,
    },
    {
        title: "Public Speaking Workshop",
        description: "Overcome your fear of public speaking with this workshop",
        date: new Date(2024, 9, 27, 16),
        image:
            "https://plus.unsplash.com/premium_photo-1705267936187-aceda1a6c1a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 40,
        category: "Business",
        distance: 70,
    },
    {
        title: "Mountain Biking Adventure",
        description: "Explore beautiful trails and improve your biking skills",
        date: new Date(2024, 9, 25, 9),
        image:
            "https://plus.unsplash.com/premium_photo-1663100262530-7049b141cb38?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 60,
        category: "Hobbies and Passions",
        distance: 80,
    },
    {
        title: "Fitness Bootcamp",
        description: "Intensive fitness bootcamp to get in shape quickly",
        date: new Date(2024, 9, 29, 7),
        image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "offline",
        attendees: 50,
        category: "Health and Wellbeing",
        distance: 50,
    },
    {
        title: "Online Entrepreneurship Summit",
        description: "Learn from successful entrepreneurs and grow your business",
        date: new Date(2024, 9, 30, 13),
        image:
            "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        type: "online",
        attendees: 700,
        category: "Business",
        distance: 0,
    },
];
 */

const eventsStore = [
    // Travel and Outdoor (New York, San Francisco, Chicago, Nashville, Miami)
    {
      title: "Central Park Hike",
      description: "Join us for a morning hike through Central Park.",
      date: new Date(2024, 10, 15, 8),
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
      date: new Date(2024, 10, 20, 18),
      image: "https://images.unsplash.com/photo-1524272332614-569f9a0e62eb?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 60,
      category: "Travel and Outdoor",
      distance: 20,
      city: "San Francisco"
    },
    {
      title: "Explore Navy Pier",
      description: "A fun day at Chicago's Navy Pier, exploring attractions and events.",
      date: new Date(2024, 10, 22, 11),
      image: "https://images.unsplash.com/photo-1599058917215-b388ccbc8e20?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 90,
      category: "Travel and Outdoor",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Bike Tour",
      description: "Cycle through the heart of Nashville and explore the city's landmarks.",
      date: new Date(2024, 10, 24, 9),
      image: "https://images.unsplash.com/photo-1507537656526-45b55e1a6166?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 50,
      category: "Travel and Outdoor",
      distance: 15,
      city: "Nashville"
    },
    {
      title: "Miami Beach Adventure",
      description: "Join us for a thrilling day of water sports at Miami Beach.",
      date: new Date(2024, 10, 27, 10),
      image: "https://images.unsplash.com/photo-1518623388869-b2b2d6f19a02?q=80&w=870&auto=format&fit=crop",
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
      date: new Date(2024, 10, 16, 19),
      image: "https://images.unsplash.com/photo-1603415526960-bb34ac2c58c4?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 100,
      category: "Social Activities",
      distance: 5,
      city: "New York"
    },
    {
      title: "San Francisco Tech Networking",
      description: "Network with like-minded tech enthusiasts and professionals.",
      date: new Date(2024, 10, 18, 18),
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 120,
      category: "Social Activities",
      distance: 10,
      city: "San Francisco"
    },
    {
      title: "Chicago Music Lovers Meetup",
      description: "Meet fellow music lovers at this casual meetup in Chicago.",
      date: new Date(2024, 10, 20, 17),
      image: "https://images.unsplash.com/photo-1485713811121-e1a8c95d0068?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 80,
      category: "Social Activities",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Community BBQ",
      description: "Join us for a community BBQ with great food and company.",
      date: new Date(2024, 10, 23, 12),
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 150,
      category: "Social Activities",
      distance: 10,
      city: "Nashville"
    },
    {
      title: "Miami Salsa Night",
      description: "Come dance the night away at Miami's hottest salsa club.",
      date: new Date(2024, 10, 25, 21),
      image: "https://images.unsplash.com/photo-1532510943802-48cb8ac9c36a?q=80&w=870&auto=format&fit=crop",
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
      date: new Date(2024, 10, 17, 14),
      image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 45,
      category: "Hobbies and Passions",
      distance: 5,
      city: "New York"
    },
    {
      title: "San Francisco Photography Walk",
      description: "Capture the beauty of San Francisco with other photography lovers.",
      date: new Date(2024, 10, 19, 16),
      image: "https://images.unsplash.com/photo-1500048993953-d57a96bbb1a1?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 35,
      category: "Hobbies and Passions",
      distance: 20,
      city: "San Francisco"
    },
    {
      title: "Chicago Craft Beer Tasting",
      description: "Explore Chicago's craft beer scene with like-minded enthusiasts.",
      date: new Date(2024, 10, 21, 18),
      image: "https://images.unsplash.com/photo-1506470650004-68286d82c1de?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 50,
      category: "Hobbies and Passions",
      distance: 10,
      city: "Chicago"
    },
    {
      title: "Nashville Writers' Circle",
      description: "Share your writing and get feedback from fellow writers.",
      date: new Date(2024, 10, 25, 19),
      image: "https://images.unsplash.com/photo-1495807007902-87040efb5e18?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 30,
      category: "Hobbies and Passions",
      distance: 5,
      city: "Nashville"
    },
    {
      title: "Miami Film Lovers Meetup",
      description: "Discuss your favorite films with fellow cinema enthusiasts.",
      date: new Date(2024, 10, 28, 15),
      image: "https://images.unsplash.com/photo-1504537461-3b7e46a00ef7?q=80&w=870&auto=format&fit=crop",
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
      date: new Date(2024, 10, 18, 7),
      image: "https://images.unsplash.com/photo-1493980626124-f07f5d3b45f7?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 150,
      category: "Sports and Fitness",
      distance: 15,
      city: "New York"
    },
    {
      title: "San Francisco Yoga in the Park",
      description: "Start your day with yoga in the beautiful Golden Gate Park.",
      date: new Date(2024, 10, 20, 8),
      image: "https://images.unsplash.com/photo-1532835774269-a2e204cbc04e?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 100,
      category: "Sports and Fitness",
      distance: 10,
      city: "San Francisco"
    },
    {
      title: "Chicago Indoor Climbing Meetup",
      description: "Join us for a fun day of indoor rock climbing.",
      date: new Date(2024, 10, 22, 9),
      image: "https://images.unsplash.com/photo-1599058917215-b388ccbc8e20?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 80,
      category: "Sports and Fitness",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Fitness Bootcamp",
      description: "Get fit with this intense outdoor bootcamp session.",
      date: new Date(2024, 10, 24, 7),
      image: "https://images.unsplash.com/photo-1533326039389-4f9a020a0ba6?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 120,
      category: "Sports and Fitness",
      distance: 10,
      city: "Nashville"
    },
    {
      title: "Miami Beach Volleyball Tournament",
      description: "Compete in Miami's annual beach volleyball tournament.",
      date: new Date(2024, 10, 26, 10),
      image: "https://images.unsplash.com/photo-1504022462188-2d5cd07b2bbf?q=80&w=870&auto=format&fit=crop",
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
      date: new Date(2024, 10, 23, 10),
      image: "https://images.unsplash.com/photo-1517732001923-0eec50d85b09?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 300,
      category: "Technology",
      distance: 5,
      city: "New York"
    },
    {
      title: "San Francisco Blockchain Meetup",
      description: "Explore the latest developments in blockchain technology.",
      date: new Date(2024, 10, 25, 16),
      image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 80,
      category: "Technology",
      distance: 15,
      city: "San Francisco"
    },
    {
      title: "Chicago Virtual Reality Workshop",
      description: "Dive into the world of VR with hands-on workshops.",
      date: new Date(2024, 10, 20, 13),
      image: "https://images.unsplash.com/photo-1531499765818-5a6e2a599b98?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 60,
      category: "Technology",
      distance: 10,
      city: "Chicago"
    },
    {
      title: "Nashville Software Engineering Summit",
      description: "Learn about software engineering trends and best practices.",
      date: new Date(2024, 10, 26, 9),
      image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 250,
      category: "Technology",
      distance: 20,
      city: "Nashville"
    },
    {
      title: "Miami Robotics and Automation Meetup",
      description: "Join us to discuss the latest in robotics and automation.",
      date: new Date(2024, 10, 28, 17),
      image: "https://images.unsplash.com/photo-1532601220324-a43df14dff3f?q=80&w=870&auto=format&fit=crop",
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
      date: new Date(2024, 10, 16, 11),
      image: "https://images.unsplash.com/photo-1543158181-72fd9c6b2ef8?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 50,
      category: "Art and Culture",
      distance: 10,
      city: "New York"
    },
    {
      title: "San Francisco Art & Wine Festival",
      description: "Enjoy art exhibitions and wine tastings in San Francisco.",
      date: new Date(2024, 10, 18, 12),
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 300,
      category: "Art and Culture",
      distance: 20,
      city: "San Francisco"
    },
    {
      title: "Chicago Classical Music Concert",
      description: "Experience the best classical music in Chicago's finest venues.",
      date: new Date(2024, 10, 23, 19),
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 200,
      category: "Art and Culture",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Art Fair",
      description: "Browse local artists' works at this year's art fair.",
      date: new Date(2024, 10, 21, 10),
      image: "https://images.unsplash.com/photo-1513290835460-8d3f64374b7e?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 150,
      category: "Art and Culture",
      distance: 15,
      city: "Nashville"
    },
    {
      title: "Miami Art Deco Tour",
      description: "Discover Miami's iconic art deco architecture.",
      date: new Date(2024, 10, 24, 16),
      image: "https://images.unsplash.com/photo-1504308802459-307a2748f7d7?q=80&w=870&auto=format&fit=crop",
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
      date: new Date(2024, 10, 17, 18),
      image: "https://images.unsplash.com/photo-1599795840146-896b398ac7b6?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 30,
      category: "Games",
      distance: 5,
      city: "New York"
    },
    {
      title: "San Francisco Esports Tournament",
      description: "Compete in the city's biggest esports event.",
      date: new Date(2024, 10, 22, 14),
      image: "https://images.unsplash.com/photo-1512602241256-3c6eb02b365b?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 200,
      category: "Games",
      distance: 20,
      city: "San Francisco"
    },
    {
      title: "Chicago Chess Club Meetup",
      description: "Join the Chicago Chess Club for weekly meetups and tournaments.",
      date: new Date(2024, 10, 19, 10),
      image: "https://images.unsplash.com/photo-1588460125017-5a5cf4a6dd2a?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 25,
      category: "Games",
      distance: 5,
      city: "Chicago"
    },
    {
      title: "Nashville Arcade Games Night",
      description: "Play your favorite retro arcade games in Nashville.",
      date: new Date(2024, 10, 26, 20),
      image: "https://images.unsplash.com/photo-1563786764251-37c0e3f6d8af?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 50,
      category: "Games",
      distance: 10,
      city: "Nashville"
    },
    {
      title: "Miami Video Game Meetup",
      description: "Join fellow gamers for a night of video game fun.",
      date: new Date(2024, 10, 29, 18),
      image: "https://images.unsplash.com/photo-1515859005217-8a1f03c3c9d8?q=80&w=870&auto=format&fit=crop",
      type: "offline",
      attendees: 100,
      category: "Games",
      distance: 15,
      city: "Miami"
    },
  ];
  