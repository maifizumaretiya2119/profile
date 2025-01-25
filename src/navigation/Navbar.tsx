import Link from "next/link";
import { useState, useEffect } from "react";
import FullScreenModal from "../components/templates/FullScreenModal";

const Navbar = () => {
    // State to track whether the user has scrolled
    const [scrolled, setScrolled] = useState(false);
    const [activePage, setActivePage] = useState("");
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    // Function to handle scroll events
    const handleScroll = () => {
        if (window.scrollY > 0) {
            // User has scrolled
            setScrolled(true);
        } else {
            // User is at the top of the page
            setScrolled(false);
        }
    };

    // Attach scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const href = window.location.pathname;
        if (href == "/") {
            setActivePage("rootPage");
        } else if (href == "/projects") {
            setActivePage("projectPage");
        } else if (href == "/contact") {
            setActivePage("contactPage");
        } else if (href == "/resume") {
            setActivePage("resumePage");
        }
    });

    const toggleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    };

    return (
        <>
            <FullScreenModal isOpen={isNavbarOpen} onClose={toggleNavbar} />
            <div
                className={`dark fixed top-0 left-0 right-0 z-30 lg:block transform transition pt-4 border-gray-800 backdrop-filter ${scrolled
                    ? "bg-opacity-80 border-b -translate-y-4 backdrop-blur-md backdrop-saturate-150"
                    : ""
                    }`}
            >
                <nav className="dark bg-transparent overflow-auto py-4">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center hidden md:flex">
                            <span
                                className={`md:dark:hover:text-blue-500 uppercase self-center text-2xl font-semibold whitespace-nowrap 
                            ${activePage === "rootPage"
                                        ? "dark:text-blue-500"
                                        : "highlight bg-clip-text"
                                    }`}
                                style={{ fontSize: "1.5rem" }}
                            >
                                Maifiz Umaretiya
                            </span>
                        </a>
                        <button
                            onClick={toggleNavbar}
                            data-toggle="navbar-default"
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-default"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                        <div
                            className="uppercase hidden w-full md:block md:w-auto"
                            id="navbar-default"
                        >
                            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
                                <li>
                                    <Link
                                        href="/projects"
                                        className={`block py-2 pl-3 pr-4 text-coolGray-400 bg-blue-700 md:dark:hover:text-blue-500 rounded md:bg-transparent md:text-blue-700 md:p-0  ${activePage === "projectPage"
                                            ? "dark:text-blue-500"
                                            : "dark:text-coolGray-400"
                                            }`}
                                        aria-current="page"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                                         md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                                          dark:hover:text-coolGray-400 md:dark:hover:bg-transparent
                                          ${activePage === "contactPage"
                                                ? "dark:text-blue-500"
                                                : "dark:text-coolGray-400"
                                            }`}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/resume"
                                        className={`block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                                         md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700
                                          dark:hover:text-coolGray-400 md:dark:hover:bg-transparent
                                          ${activePage === "resumePage"
                                                ? "dark:text-blue-500"
                                                : "dark:text-coolGray-400"
                                            }`}
                                    >
                                        Resume
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://github.com/maifizumaretiya2119"
                                        className="py-5  text-coolGray-400 hover:text-gray-50 transition-colors"
                                        aria-label="GitHub Profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
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
                                        >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link
                                        href="https://twitter.com/abhishekpowade"
                                        className="py-5 text-coolGray-400 hover:text-sky-400 transition-colors"
                                        aria-label="Twitter Profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
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
                                        >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </Link>
                                </li> */}
                                <li>
                                    <Link
                                        href="https://www.linkedin.com/in/maifiz-umaretiya-4a11171bb/"
                                        className="py-5 text-coolGray-400 hover:text-blue-500 transition-colors"
                                        aria-label="LinkedIn Profile"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
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
                                        >
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="mailto:abhishekpowade@gmail.com"
                                        className="py-5 text-coolGray-400 hover:text-red-500 transition-colors"
                                        aria-label="E-mail"
                                        target="_blank"
                                    >
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
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
