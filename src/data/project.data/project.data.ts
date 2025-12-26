type stateType = {
  items: {
    tabProject: string;
    project: {
      projectImg: string;
      projectTitle: string;
      projectSubTitle: string;
      projectContent: string;
      projectLink?: string;
      projectSource?: string;
    }[];
  }[];
  currentTab: string;
};

export const items: stateType = {
  items: [
    {
      tabProject: "HTML + CSS",
      project: [
        {
          projectImg: "/images/g8.jpg",
          projectTitle: "Exercise Coffee & Tea",
          projectSubTitle: "Only HTML",
          projectContent: "An extremely simple exercise with only HTML",
          projectSource:
            "https://github.com/boithanh/BCS12_bak/tree/master/buoi1/Extra/extra_coffee",
        },
        {
          projectImg: "/images/g10.jpg",
          projectTitle: "Camping",
          projectSubTitle: "HTML with CSS style sheet",
          projectContent: "Camping always makes us excited and full of energy.",
          projectSource:
            "https://github.com/boithanh/BCS12_bak/tree/master/buoi23/Camping",
          projectLink: "https://camping-thanhbb.vercel.app/",
        },
        {
          projectImg: "/images/g11.jpg",
          projectTitle: "Anipad",
          projectSubTitle: "HTML with CSS style sheet",
          projectContent: "Pets are so cute and adorables",
          projectSource:
            "https://github.com/boithanh/BCS12_bak/tree/master/buoi23/Extra/Anipat",
          projectLink: "https://anipat-thanhbb.vercel.app/",
        },
        {
          projectImg: "/images/g12.jpg",
          projectTitle: "Petshop",
          projectSubTitle: "HTML with CSS style sheet",
          projectContent:
            "I like this simple but impressive interface so I cloned another pet project",
          projectSource:
            "https://github.com/boithanh/BCS12_bak/tree/master/buoi23/Extra/PetShop",
        },
        {
          projectImg: "/images/g13.jpg",
          projectTitle: "Mastery",
          projectSubTitle: "HTML with CSS style sheet",
          projectContent:
            "Mastery is the first education and learning template I came across.",
          projectSource:
            "https://github.com/boithanh/BCS12_bak/tree/master/buoi23/Mastery",
        },
        {
          projectImg: "/images/g14.jpg",
          projectTitle: "Meipaly",
          projectSubTitle: "HTML, CSS",
          projectContent:
            "A template with the theme of website design, it started with the coutUp Js library to make the numbers more vivid.",
          projectSource:
            "https://github.com/boithanh/BCS12_bak/tree/master/buoi456/Meipaly",
        },
        {
          projectImg: "/images/g15.jpg",
          projectTitle: "Samar",
          projectSubTitle: "HTML, CSS",
          projectContent:
            "More and more css lines, combined with Backtotop Js library, count up Js, flatIcon create a unique design and smooth css effects",
          projectSource:
            "https://github.com/boithanh/BCS12_bak/tree/master/buoi456/Samar",
        },
        {
          projectImg: "/images/g16.jpg",
          projectTitle: "Portfolio",
          projectSubTitle: "HTML, CSS",
          projectContent:
            "This is a project that I see has color coordination and has its own style, I chose it as a template to write my own portfolio page, but with more technology when developing.",
          projectSource:
            "https://github.com/boithanh/BCS12_bak/tree/master/buoi78910/Portfolio",
        },
        {
          projectImg: "/images/g1.jpg",
          projectTitle: "Capstone Diner",
          projectSubTitle: "Website for Online Food Ordering",
          projectContent:
            " Technologies: HTML, CSS, Bootstrap framework. This project demonstrates a fully responsive website for ordering food online, featuring an interactive menu and checkout system.",
          projectLink: "https://capstonediner-thanhbb.vercel.app/",
          projectSource: "https://github.com/boithanh/capstone-diner",
        },
      ],
    },
    {
      tabProject: "Javascript",
      project: [
        {
          projectImg: "/images/seo2.jpg",
          projectTitle: "Thạnh's ITSUPPORT Profile",
          projectSubTitle: "VanilaJs building with vite & taiwindCss",
          projectContent:
            "A clean and focused portfolio showcasing my journey and skills in IT Help Desk and technical support.",
          projectSource: "https://github.com/boithanh/portfolioItSupport.git",
          projectLink: "https://boithanh-itsupport.vercel.app/",
        },
        {
          projectImg: "/images/g17.jpg",
          projectTitle: "Exercise JS part 2",
          projectSubTitle: "Javascript is main language",
          projectContent:
            "Form exercises on calculating electricity bills, managing student admissions, calculating personal income tax, etc.",
          projectSource:
            "https://github.com/boithanh/baitap-js-buoi-5-banhboithanh-bcs12",
        },
        {
          projectImg: "/images/g18.jpg",
          projectTitle: "Exercise JS part 1",
          projectSubTitle: "Javascript is main language.",
          projectContent:
            "Form exercises on calculating employee salary, calculating average value, converting money, etc",
          projectSource:
            "https://github.com/boithanh/boithanh-baitap-js-buoi-2-3-banhboithanh-bcs12",
        },
        {
          projectImg: "/images/g19.jpg",
          projectTitle: "Exercise JS part 3",
          projectSubTitle: "Javascript is main language",
          projectContent:
            "Exercises on finding the last even number, finding the first prime number, swapping 2 numbers,etc",
          projectSource:
            "https://github.com/boithanh/baitap-js-buoi-7-8-banhboithanh-bcs12",
        },
        {
          projectImg: "/images/g21.jpg",
          projectTitle: "Exercise JS part 4",
          projectSubTitle: "Javascript is main language.",
          projectContent:
            "Exercises on employee management with operations on adding, deleting, editing employees and finding employees by code and name",
          projectSource:
            "https://github.com/boithanh/banhboithanh-bcs12-baitap-js-9-10",
        },
        {
          projectImg: "/images/g2.jpg",
          projectTitle: "Capstone Shoe",
          projectSubTitle: "E-Commerce Platform for Selling Shoes",
          projectContent:
            "Designed with Vanila js, Tailwind CSS with data response from restful API, this project showcases a clean, modern UI with user-friendly navigation, responsive layout, and an intuitive shopping experience.",
          projectLink: "https://capstoneshoe-thanhbb.vercel.app/",
          projectSource: "https://github.com/boithanh/Capstone-Shoe",
        },
      ],
    },
    {
      tabProject: "ReactJS",
      project: [
        {
          projectImg: "/images/g7.jpg",
          projectTitle: "ReactJs Shoe Shop",
          projectSubTitle: "Exercise on using API to create shoe list",
          projectContent:
            "Technologies: React.js, scss. Call API to render list with Axios",
          projectSource:
            "https://github.com/boithanh/baitap-reactjs-buoi-4/tree/main",
        },
        {
          projectImg: "/images/g6.jpg",
          projectTitle: "ReactJs Glass",
          projectSubTitle: "Trying many glass on modern app",
          projectContent:
            "Technologies: React.js, scss. Get familiar with state",
          projectLink: "https://baitap-reactjs-glass.vercel.app",
          projectSource: "https://github.com/boithanh/baitap-reactjs-buoi-2",
        },
        {
          projectImg: "/images/g20.jpg",
          projectTitle: "ReactJs Booking Ticket",
          projectSubTitle: "Application for booking ticket movie ",
          projectContent:
            "Technologies: React.js, Ant layout, taiwindCss, building source with vite framework. This app help booking, payment and cancellation of tickets if no longer needed",
          projectSource: "https://github.com/boithanh/baitap-reactjs-buoi-6",
        },
        {
          projectImg: "/images/g3.jpg",
          projectTitle: "Capstone Fiver Clone",
          projectSubTitle: "Freelance Marketplace for Hiring Services",
          projectContent:
            "Technologies: React.js, Tailwind CSS, building a platform similar to Fiverr for freelancers to offer services and clients to hire.",
          projectLink: "https://capstonefiver-thanhbb.vercel.app/",
          projectSource: "https://github.com/boithanh/capstone-fiverr",
        },
        {
          projectImg: "/images/g4.jpg",
          projectTitle: "Capstone Elearning",
          projectSubTitle: "A Polished UI for Online Learning",
          projectContent:
            "Built with React.js, Tailwind CSS, Ant design, this project features a visually appealing, organized interface, ensuring smooth user interaction for course browsing and content management.",
          projectLink: "https://capstone-elearning-thanhbb.vercel.app/",
          projectSource: "https://github.com/boithanh/Capstone-Elearning",
        },
      ],
    },
    {
      tabProject: "NextJs",
      project: [
        {
          projectImg: "/images/g5.jpg",
          projectTitle: "Bối Thạnh's Portfolio",
          projectSubTitle:
            "Showcasing My Skills with React.Js extend to Next.Js, TypeScript and UI/UX Web Design",
          projectContent:
            "A sleek and user-centric portfolio designed with React.js and Tailwind CSS. It highlights my work on modern web applications, including interactive UI components, responsive design, and seamless user experience. From creating intuitive interfaces to delivering functional features, this portfolio demonstrates my capabilities in front-end development",
          projectLink: "https://boithanh-dev.vercel.app/",
          projectSource: "https://github.com/boithanh/portfolio",
        },
      ],
    },
    {
      tabProject: "React Native",
      project: [
        {
          projectImg: "/images/pexels-iriser-1408221.jpg",
          projectTitle: "Review app",
          projectSubTitle: "Building with expo",
          projectContent: "My first React native project",
          projectLink:
            "https://drive.google.com/file/d/10jTHS1V7nkyJCz0bz9ewFB8hnzobnLs5/view?usp=sharing",
          projectSource: "https://github.com/boithanh/todoapp/tree/dev",
        },
      ],
    },
    {
      tabProject: "Full Stack",
      project: [
        {
          projectImg: "/images/g22.jpg",
          projectTitle: "Cinema's Essence",
          projectSubTitle: "VanilaJs, NodeJs, Express, MongoDB",
          projectContent:
            "A high-performance movie platform showcasing the seamless synergy between Vanilla JS and Node.js backend.",
          projectLink: "https://movie-project-ten-lyart.vercel.app/",
          projectSource: "https://github.com/boithanh/movieProject.git",
        },
      ],
    },
  ],

  currentTab: "HTML + CSS",
};
