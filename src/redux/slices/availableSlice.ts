import { createSlice } from '@reduxjs/toolkit'

type availableState = {
    title: string,
    content: string,
    available: {
        icon: string,
        subTitle: string,
        subContent: string
    }[]
}
const initialState: availableState = {
    title: "💼 Available for full-time opportunities",
    content: "I’m a passionate front-end developer who enjoys turning ideas into interactive experiences",
    available: [
        {
            icon: "fa-solid fa-gear",
            subTitle: "Technical Skills",
            subContent: "HTML, CSS, JavaScript/TypeScript, PHP, C++, React.js, Next.js, Tailwind, Bootstrap, Ant Design, Flowbite, Node.js, Laravel, PostgreSQL, MySQL, MariaDB, MongoDB"
        },
        {
            icon: "fa-solid fa-square-plus",
            subTitle: "Other Expanded Skills",
            subContent: "Responsive design, Postman (API Testing), Version Control with GIT (GitHub), Project Management with Jira, MS Planner."

        },
        {
            icon: "fa-solid fa-book",
            subTitle: "Soft Skills",
            subContent: "Communication, Teamwork, Problem-solving."
        }
    ]

}

const availableSlice = createSlice({
    name: "available",
    initialState,
    reducers: {}
});

export const { } = availableSlice.actions

export default availableSlice.reducer