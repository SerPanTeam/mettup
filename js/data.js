'use strict'

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
