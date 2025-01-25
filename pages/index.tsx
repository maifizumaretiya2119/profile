import Image from "next/image";
import { Inter } from "next/font/google";
import FullScreenModal from "../src/components/templates/FullScreenModal";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main>
            <section className="flex min-h-screen items-center justify-between container mx-auto relative 2xl:px-36 px-8">
                <div className="lg:w-1/2">
                    <div className="gradient-border w-fit rounded-full  p-4 lg:hidden relative highlight mb-10 mt-[120px]">
                        <Image
                            width={200}
                            height={200}
                            alt="Random Programmer Image"
                            className="rounded-full object-fill"
                            src="/profile-picture.jpg"
                        />
                    </div>
                    <h1 className="font-bold leading-loose text-white">
                        <span className="md:text-6xl text-4xl">
                            Hey there, I’m
                        </span>
                        <br />
                        <span className="bg-clip-text highlight md:text-6xl text-5xl">
                            Maifiz Umaretiya.
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mt-8">
                        As a software engineer with expertise in mobile development, I'm passionate about creating innovative, user-friendly products that blend cutting-edge technology with exceptional design. I thrive on learning new tools and frameworks to push the boundaries of what’s possible, constantly evolving to stay ahead in the tech world.
                    </p>
                </div>
                <div className="gradient-border p-4 hidden lg:block relative highlight rounded-xl">
                    <Image
                        width={400}
                        height={400}
                        alt="Random Programmer Image"
                        className="object-fill rounded-xl"
                        src="/profile-picture.jpg"
                    />
                </div>
            </section>
            <div className="absolute left-0 bottom-14 right-0 justify-between 2xl:px-36 px-8 animate-bounce text-sm text-coolGray-500 hidden lg:flex select-none">
                <div>
                    <div className="text-coolGray-400 transform rotate-90 -translate-x-1/3">
                        scroll down
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
                            className="inline-block ml-1"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
                <div>
                    <div className="text-coolGray-400 transform rotate-90 translate-x-1/3">
                        scroll down
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
                            className="inline-block ml-1"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
            <section className="flex px-8 text-coolGray-400 flex-col min-h-screen container mx-auto relative 2xl:px-36">
                <div>
                    <h2 className="text-4xl font-semibold mt-10 lg:mt-0">About Me</h2>
                    <section>
                        <p className="text-coolGray-400 mt-6 text-xl">
                            Hey! I’m Maifiz, a creative 24-year-old who loves
                            to code, build and deploy.
                        </p>
                        <div className="text-coolGray-400 text-xl">
                            <div className="mt-4 "></div>
                            <p className="mt-4 text-xl">
                                I thrive on challenging myself and constantly learning new technologies. Currently, I have experience developing mobile applications, with a focus on creating seamless user experiences. Right now, I'm working with Courseplay, building solutions that make a difference.
                            </p>
                            <p className="mt-4 text-xl">
                                In my free time, I dive into new tech stacks to sharpen my skills. One quote that motivates me when tackling new technologies is, <br />
                                <span className="text-green-400">
                                    "It seems difficult at first, but everything
                                    is difficult at first." - Miyamoto Musashi
                                    💡
                                </span>
                            </p>
                            <p className="mt-4 text-xl">
                                I completed my Masters in Computer Application
                                from{" "}
                                <a
                                    className="link text-blue-500"
                                    href="https://rku.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    RK University
                                </a>
                                . Most of the things I build or learn is still
                                driven by curiosity even today. My most recent
                                obsession has been building native mobile applicaitons and I’m always open
                                to talk about front-end development, user
                                interface design and open source!
                            </p>
                        </div>
                    </section>
                </div>
                <div className="mt-12">
                    <h2 className="text-4xl font-semibold">Experience</h2>
                    <section>
                        <ul className="space-y-6 mt-10 text-coolGray-500 pb-10">
                            <li className="flex items-center">
                                <div className="gatsby-image-wrapper gatsby-image-wrapper-constrained rounded flex-shrink-0 bg-white">
                                    <Image
                                        width={150}
                                        height={150}
                                        alt="courseplay-logo"
                                        src={"/Courseplay-Logo.png"}
                                    />
                                </div>
                                <div className="ml-4 sm:ml-6">
                                    <div className="text-gray-50 text-lg">
                                        Software Engineer{" "}
                                        <span className="text-green-400 whitespace-nowrap">
                                            @{" "}
                                            <a
                                                href="https://courseplay.co/"
                                                target="_blank"
                                                className="link"
                                                rel="noreferrer"
                                            >
                                                Pyther Innovation Pvt. Ltd.
                                            </a>
                                        </span>
                                    </div>
                                    <p className="text-sm font-semibold mt-1.5">
                                        July 2022 &nbsp;—&nbsp; Now
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
            </section>
        </main>
    );
}
