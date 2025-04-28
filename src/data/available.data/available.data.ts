type availableState = {
    title: string,
    content: string,
    available: {
        icon: string,
        subTitle: string,
        subContent: string,
        devIcon?: string[],
    }[]
}

export const available = {
    title: "💼 Available for full-time opportunities",
    content: "I’m a passionate front-end developer who enjoys turning ideas into interactive experiences",
    available: [
        {
            icon: "fa-solid fa-gear",
            subTitle: "Technical Skills",
            subContent: "C++, Ant Design, Flowbite, MariaDB.",
            devIcon: [
                "JavaScript.svg",
                "HTML.svg",
                "CSS.svg",
                "Sass.svg",
                "React-Light.svg",
                "NextJS-Light.svg",
                "Bootstrap.svg",
                "TailwindCSS-Light.svg",
                "NodeJS-Light.svg",
                "Laravel-Light.svg",
                "PHP-Light.svg",
                "MongoDB.svg",
                "MySQL-Light.svg",
                "PostgreSQL-Light.svg",
                "Wordpress.svg",
                "Redux.svg"
            ]
        },
        {
            icon: "fa-solid fa-square-plus",
            subTitle: "Expanded Skills",
            subContent: "Responsive design, Project Management with Jira, MS Planner, Office, Technical support, Help Desk, testing app",
            devIcon: [
                "Git.svg",
                "Github-Light.svg",
                "Postman.svg",
                "Vite-Light.svg",
                "VSCode-Light.svg",
                "Windows-Light.svg",
                "Ubuntu-Light.svg",
                "Mint-Light.svg",
                "Powershell-Light.svg",
                "CodePen-Light.svg",
                "GitLab-Light.svg",
                "Gmail-Light.svg"
            ]

        },
        {
            icon: "fa-solid fa-book",
            subTitle: "Soft Skills",
            subContent: "Communication, Teamwork, Problem-solving."
        }
    ]

}