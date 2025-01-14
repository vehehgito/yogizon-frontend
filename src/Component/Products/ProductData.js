const courses = [
    {
        id: 0,
        title: "Yoga Foundation Course for Yoga Protocol Instructor",
        badgeDesc: "Everyone",
        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYXxlbnwwfDB8MHx8fDA%3D",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹100",
        link: "#",
        linkDesc: "Learn More",
        duration: "30 Days"
    },
    {
        id: 1,
        title: "Yoga Foundation Course for Yoga Wellness Instructor",
        badgeDesc: "Intermediate",
        image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvZ2F8ZW58MHwwfDB8fHww",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹20",
        link: "#",
        linkDesc: "Learn More",
        duration: "90 Days"
    },
    {
        id: 2,
        title: "Yoga Shikshak Prashikshan Course",
        badgeDesc: "Intermediate",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlvZ2F8ZW58MHwwfDB8fHww",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹160",
        link: "#",
        linkDesc: "Learn More",
        duration: "300 Days"
    },
    {
        id: 3,
        title: "Work-Life Balance and Mental Health",
        badgeDesc: "Beginner",
        image: "https://plus.unsplash.com/premium_photo-1683133269843-09a177048cef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHlvZ2F8ZW58MHwwfDB8fHww",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "Free",
        link: "#",
        linkDesc: "Learn More",
        duration: "4 Weeks"
    },
    {
        id: 4,
        title: "Healthy Eating for a Healthy Weight",
        badgeDesc: "Intermediate",
        image: "https://images.unsplash.com/photo-1616699002805-0741e1e4a9c5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHlvZ2F8ZW58MHwwfDB8fHww",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹110",
        link: "#",
        linkDesc: "Learn More",
        duration: "10 Weeks"
    },
    {
        id: 5,
        title: "Yoga Course for Intermediate",
        badgeDesc: "Everyone",
        image: "https://images.unsplash.com/photo-1624704200567-760cf26ae848?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHlvZ2F8ZW58MHwwfDB8fHww",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "Free",
        link: "#",
        linkDesc: "Learn More",
        duration: "10 Weeks"
    },
    {
        id: 6,
        title: "10 Steps to Awaken Femininity",
        badgeDesc: "Beginner",
        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYXxlbnwwfDB8MHx8fDA%3D",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹45",
        link: "#",
        linkDesc: "Learn More",
        duration: "10 Weeks"
    },
    {
        id: 7,
        title: "Financial Independence: 10 Steps",
        badgeDesc: "Beginner",
        image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvZ2F8ZW58MHwwfDB8fHww",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹210",
        link: "#",
        linkDesc: "Learn More",
        duration: "9 Weeks"
    },
    {
        id: 8,
        title: "Woman who Invites Magic in Her Life",
        badgeDesc: "Intermediate",
        image: "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW9nYXxlbnwwfDB8MHx8fDA%3D",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹145",
        link: "#",
        linkDesc: "Learn More",
        duration: "6 Weeks"
    },
    {
        id: 9,
        title: "How to Awaken Your Femininity",
        badgeDesc: "3 Weeks",
        image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYXxlbnwwfDB8MHx8fDA%3D",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹189",
        link: "#",
        linkDesc: "Learn More",
        duration: "3 Weeks"
    },
    {
        id: 10,
        title: "Yoga and Pilates Course for Any Level",
        badgeDesc: "Beginner",
        image: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHlvZ2F8ZW58MHwwfDB8fHww",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "Free",
        link: "#",
        linkDesc: "Learn More",
        duration: "7 Weeks"
    },
    {
        id: 11,
        title: "Market & Run Your Own Successful Business",
        badgeDesc: "Everyone",
        image: "https://plus.unsplash.com/premium_photo-1661777196224-bfda51e61cfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8eW9nYXxlbnwwfDB8MHx8fDA%3D",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        price: "₹125",
        link: "#",
        linkDesc: "Learn More",
        duration: "10 Weeks"
    },
]

export default courses;