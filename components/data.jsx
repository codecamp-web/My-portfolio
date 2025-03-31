


export const navbarList = [
    {
        id: "about",
        number:"1. ",
        name : 'About ',
        path: '/about'
    },
    {   id: "experience",
        number:"2. ",
        name: 'Experience',
        path: '/experience'
    },
    {
        id: "works",
        number:"3. ",
        name: 'Works & Certifications',
        path: '/pricing'
    },
    {
        id: "contact",
        number:"4. ",
        name: "Contact",
        path: "/contact"
    }
]


export const workList = [
    {
        id: "tab1",
        name: "Okg Brand",
        description: "Front end developer",
        time: "Jan 2024 - Present",
        story:  [
            "Collaborating with back end developers in creating websites for users",
            "Architected and developed a fashion page enhancing models and members engagement",
            "Refined UX/UI strategies, ensuring an intutive and high performance application experience"
        ],
    },
    {
        id: "tab2",
        name: "Free Lance",
        description: "Front end developer.",
        time: "Feb 2022 - Nov 2023",
        story: [
            "Developed website projects and landing pages from zero to deployment",
            "Did final year school projects for students creating conference ticket interface and other demo website."
        ]
    },
    
    {
        id: "tab4",
        name: "NIIT",
        description: "Front end developer (intern) ",
        time:"Apr 2021 - October 2021 ",
        story:  [
            "Contributed to the development of a responsive company website",
            "Participating in weekly code reviews and pair programming sessions gaining proficiency in HTML, CSS and JavaScript and reducing code review time by 10%",
            "Assisted in the migration of a static site to a dynamic React application, improving site scalability and maintainability while learning best pratices in component based architecture",
        ],
        
    },
];


import udemy from "../images/udemy.jpg";
import niit from "../images/niit.jpg";
import fashion from "../images/fashion.png"

export const certifications = [
    {
        id: "1",
        note: [
            " Architected and developed a fashion page enhancing models and members engagement .",
            " Using React, Tailwind Css , Material ui, React router"
        ],
        image: fashion,
    },
    {
        id: "2",
        note: "I participated in an online learning program to further my knowledge and apply the latest web development skills.",
        image: udemy,
    },
    {
        id: "3",
        note: "I learned programming languages from tutors and built websites, taking them to deployment.",
        image: niit, 
    },
];
