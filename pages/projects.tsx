import React from "react";

const projectsData = [
    {
        "date": "Jan 19, 2025",
        "title": "EdTech Mobile App",
        "description": "EdTech Mobile Application is a comprehensive learning platform where users can view courses, take quizzes, and track their progress. Built using React Native, this app integrates various libraries to provide a seamless learning experience with interactive features for both students and instructors.",
        "technologies": ["React Native", "React Navigation", "Redux", "Firebase", "SQLite", "Quiz Integration", "Course Management"],
        // "demoLink": "URL_TO_DEMO",
        // "githubLink": "URL_TO_GITHUB"
    },
    {
        "date": "Dec 19, 2024",
        "title": "Food Court",
        "description": "FoodCourt is an Android-based food ordering app that streamlines the process of purchasing food. Users can browse the menu, add items to their cart, and place orders seamlessly. The app also allows customers to edit or remove items before checkout. Designed for convenience, FoodCourt offers a user-friendly interface, making it easy to satisfy cravings with just a few taps.",
        "technologies": ["Android", "Kotlin","HTML","CSS"],
        // "demoLink": "https://www.linkedin.com/posts/abhishekpowade_quizgenie-edtech-ai-activity-7278190806614634496-gMyZ?utm_source=share&utm_medium=member_desktop",
        // "githubLink": "https://github.com/pipgainer/ai-test-engine"
    },
    {
        "date": "March 21, 2024",
        "title": "Personal Portfolio",
        "description": "A professional portfolio webpage built using Next.js that showcases all the projects you’ve created, along with your work experience, skills, and other relevant details. This dynamic site allows you to present your technical expertise, projects, and accomplishments in an organized and visually appealing way.",
        "technologies": ["Next.js", "React", "Tailwind CSS", "Node.js", "JavaScript", "MongoDB"],
        // "liveLink": "https://profile-pipgainer.vercel.app/",
        // "githubLink": "https://github.com/maifizumaretiya2119/profile"
    },
];

const ProjectCard = ({ date, title, description, demoLink, technologies, liveLink, githubLink }: any) => {


    return (
        <div className="flex pointer-events-auto">
            <div
                className={`text-coolGray-400 bg-zinc-900 p-6 rounded-lg w-full flex flex-col transform transition
                    lg:hover:scale-105 hover:opacity-100 lg:hover:shadow-2xl border-2 border-transparent hover:border-blue-500`}>
                <section className="flex justify-between">
                    <span className="text-coolGray-500">{date}</span>
                </section>
                <h3 className="text-3xl font-semibold mt-8">{title}</h3>
                <p className="text-coolGray-400 mt-4 mb-8">{description}</p>
                <ul className="flex flex-wrap mt-auto mb-6 text-coolGray-500 text-sm font-semibold leading-6">
                    {technologies.map((tech: any, index: any) => (
                        <li key={index}>
                            {tech}
                            {index < technologies.length - 1 && <span>&nbsp;•&nbsp;</span>}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between text-green-400">
                    {(liveLink || demoLink) ? <a href={liveLink ?? demoLink} target="_blank" className="link" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline-block mr-1.5 -mt-1"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 1 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        {demoLink ? "Demo" : "Live"}
                    </a> : <div></div>}
                    {githubLink ? <a href={githubLink} target="_blank" className="link" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="inline-block mr-1.5 -mt-1"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 1 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Github
                    </a> : <div></div>}
                </div>
            </div>
        </div>
        // </div>

    )
};

const Projects = () => {
    return (
        <>
            <section className="container mx-auto px-8 2xl:px-36 text-center pt-32">
                <h1 className="text-3xl sm:text-5xl font-bold text-white">All my <span className="highlight bg-clip-text">Projects</span></h1>
                <p className="text-coolGray-400 font-semibold mt-8 text-lg">
                    All the things I built till date, some of them being improved even today!
                </p>
            </section>
            <section className="container mx-auto px-8 pb-14 py-4 2xl:px-36">
                <div className="grid gap-6 group grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-3 pointer-events-none">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
