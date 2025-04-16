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
                    projectImg: "/images/g9.jpg",
                    projectTitle: "Exercise layout KFC",
                    projectSubTitle: "Only HTML",
                    projectContent: "One of the first exercises i was exposed to html",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi1/KFC"
                },
                {
                    projectImg: "/images/g8.jpg",
                    projectTitle: "Coffee & Tea",
                    projectSubTitle: "Only HTML",
                    projectContent: "An extremely simple exercise with only HTML",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi1/Extra/extra_coffee"
                },
                {
                    projectImg: "/images/g10.jpg",
                    projectTitle: "Camping",
                    projectSubTitle: "HTML with CSS style sheet",
                    projectContent: "Camping always makes us excited and full of energy.",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi23/Camping"
                },
                {
                    projectImg: "/images/g11.jpg",
                    projectTitle: "Anipad",
                    projectSubTitle: "HTML with CSS style sheet",
                    projectContent: "Pets are so cute and adorables",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi23/Extra/Anipat"
                },
                {
                    projectImg: "/images/g12.jpg",
                    projectTitle: "Petshop",
                    projectSubTitle: "HTML with CSS style sheet",
                    projectContent: "I like this simple but impressive interface so I cloned another pet project",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi23/Extra/PetShop"
                },
                {
                    projectImg: "/images/g13.jpg",
                    projectTitle: "Mastery",
                    projectSubTitle: "HTML with CSS style sheet",
                    projectContent: "Mastery is the first education and learning template I came across.",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi23/Mastery"
                },
                {
                    projectImg: "/images/g1.jpg",
                    projectTitle: "Capstone Diner",
                    projectSubTitle: "Website for Online Food Ordering",
                    projectContent: " Technologies: HTML, CSS, Bootstrap framework. This project demonstrates a fully responsive website for ordering food online, featuring an interactive menu and checkout system.",
                    projectLink: "http://capstone-diner-sigma.vercel.app/",
                    projectSource: "https://github.com/NQTuoG/Capstone_Diner"
                }
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
                },
                {
                    projectImg: "/images/g14.jpg",
                    projectTitle: "Meipaly",
                    projectSubTitle: "HTML, CSS and some rows JS code",
                    projectContent: "A template with the theme of website design, it started with the coutUp Js library to make the numbers more vivid.",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi456/Meipaly"
                },
                {
                    projectImg: "/images/g15.jpg",
                    projectTitle: "Samar",
                    projectSubTitle: "HTML, CSS and JS code",
                    projectContent: "More and more css lines, combined with Backtotop Js library, count up Js, flatIcon create a unique design and smooth css effects",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi456/Samar"
                }
                ,
                {
                    projectImg: "/images/g16.jpg",
                    projectTitle: "Portfolio",
                    projectSubTitle: "HTML, CSS and more JS code",
                    projectContent: "This is a project that I see has color coordination and has its own style, I chose it as a template to write my own portfolio page, but with more technology when developing.",
                    projectSource: "https://github.com/boithanh/BCS12_bak/tree/master/buoi78910/Portfolio"
                }
            ]
        },
        {
            tabProject: "ReactJS",
            project: [
                {
                    projectImg: "/images/g7.jpg",
                    projectTitle: "ReactJs Shoe Shop",
                    projectSubTitle: "Exercise on using API to create shoe list",
                    projectContent: "Technologies: React.js, scss. Call API to render list with Axios",
                    projectLink: "https://baitap-reactjs-buoi-4.vercel.app/",
                    projectSource: "https://github.com/boithanh/baitap-reactjs-buoi-4/tree/main"
                },
                {
                    projectImg: "/images/g6.jpg",
                    projectTitle: "ReactJs Glass",
                    projectSubTitle: "An exercise on trying on glasses on a mannequin",
                    projectContent: "Technologies: React.js, scss. Get familiar with state",
                    projectLink: "https://baitap-reactjs-glass.vercel.app",
                    projectSource: "https://github.com/boithanh/baitap-reactjs-buoi-2"
                },
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