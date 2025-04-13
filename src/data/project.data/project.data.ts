type stateType = {
    items: {
        tabProject: string
        project:
        {
            projectImg: string
            projectTitle: string
            projectSubTitle: string
            projectContent: string,
            projectLink?: string,
            projectSource?: string
        }[],
    }[],
    currentTab: string
}

export const items: stateType = {
    items: [
        {
            tabProject: "HTML + CSS",
            project: [
                {
                    projectImg: "/images/g1.jpg",
                    projectTitle: "Capstone Diner",
                    projectSubTitle: "Website for Online Food Ordering",
                    projectContent: " Technologies: HTML, CSS, Bootstrap framework. This project demonstrates a fully responsive website for ordering food online, featuring an interactive menu and checkout system.",
                    projectLink: "http://capstone-diner-sigma.vercel.app/",
                    projectSource: "https://github.com/NQTuoG/Capstone_Diner"
                },
            ]
        },
        {
            tabProject: "Javascript",
            project: [
                {
                    projectImg: "/images/g2.jpg",
                    projectTitle: "Capstone Shoe",
                    projectSubTitle: "E-Commerce Platform for Selling Shoes",
                    projectContent: "Designed with Vanila js, Tailwind CSS with data response from restful API, this project showcases a clean, modern UI with user-friendly navigation, responsive layout, and an intuitive shopping experience.",
                    projectLink: "https://capstone-shoe-ochre.vercel.app/",
                    projectSource: "https://github.com/boithanh/Capstone-Shoe"
                }
            ]
        },
        {
            tabProject: "ReactJS",
            project: [
                {
                    projectImg: "/images/g3.jpg",
                    projectTitle: "Capstone Fiver Clone",
                    projectSubTitle: "Freelance Marketplace for Hiring Services",
                    projectContent: "Technologies: React.js, Tailwind CSS, building a platform similar to Fiverr for freelancers to offer services and clients to hire.",
                    projectLink: "https://react-fiverr-two.vercel.app/",
                    projectSource: "https://github.com/Torungu/react-fiverr"
                },
                {
                    projectImg: "/images/g4.jpg",
                    projectTitle: "Capstone Elearning",
                    projectSubTitle: "A Polished UI for Online Learning",
                    projectContent: "Built with React.js, Tailwind CSS, Ant design, this project features a visually appealing, organized interface, ensuring smooth user interaction for course browsing and content management.",
                    projectLink: "https://capstone-elearning-henna.vercel.app/",
                    projectSource: "https://github.com/boithanh/Capstone-Elearning"
                },
            ]
        },
        {
            tabProject: "NextJs",
            project: [
                {
                    projectImg: "/images/g5.jpg",
                    projectTitle: "Bối Thạnh's Portfolio",
                    projectSubTitle: "Showcasing My Skills with React.Js extend to Next.Js, TypeScript and UI/UX Web Design",
                    projectContent: "A sleek and user-centric portfolio designed with React.js and Tailwind CSS. It highlights my work on modern web applications, including interactive UI components, responsive design, and seamless user experience. From creating intuitive interfaces to delivering functional features, this portfolio demonstrates my capabilities in front-end development",
                    projectLink: "https://boithanh-dev.vercel.app/",
                    projectSource: "https://github.com/boithanh/portfolio"
                }
            ]
        }
    ],
    currentTab: "HTML + CSS"
}