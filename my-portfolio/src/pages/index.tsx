import Image from "next/image";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import the CSS

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <section className="text-gray-600">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="/avatar.jpg"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Le Hoang Kim Thanh
            </h1>
            <p className="mb-8 leading-relaxed">
              I am a Computer Science student with a strong passion for web
              development. I like to work in teams to solve problem. I'm
              constantly seeking new opportunities to expand my skills, tackle
              challenges, and stay at the forefront of technology. Don't
              hesitate to contact me!
            </p>
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Education
            </h1>
          </div>
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img
                  className="object-cover object-center rounded"
                  alt="VGU"
                  src="/vgu.jpg"
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Vietnamese-German University
                </h2>
                <p className="leading-relaxed">
                  Sep 2020 - Current
                  <br /> Bachelor of Applied Science - BASc, Computer Science
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img
                  className="object-cover object-center rounded"
                  alt="VGU"
                  src="/frankfurt.jpg"
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Frankfurt University of Applied Sciences
                </h2>
                <p className="leading-relaxed">Sep 2022 - Feb 2023</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img
                  className="object-cover object-center rounded"
                  alt="VGU"
                  src="/lhp.jpg"
                />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Le Hong Phong High School For The Gifted, HCMC, Vietnam
                </h2>
                <p className="leading-relaxed">Sep 2017 - May 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              My projects
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Take a closer look at some of my featured projects below to see
              how I've applied my skills to real-world challenges.
            </p>
          </div>
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">
                  Jun 2023 - Sep 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Hyperskill Antifraud System
                </h2>
                <p className="leading-relaxed">
                  I developed a RESTful web service using Spring Boot,
                  incorporating Spring Security for user roles and permissions
                  management, and utilized Spring Data JPA to interact with the
                  database efficiently.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Github
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="mt-1 text-gray-500 text-sm">
                  Jun 2023 - Jul 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  BMI Calculator
                </h2>
                <p className="leading-relaxed">
                  I constructed a responsive website using a mobile-first
                  workflow, integrated BMI (Body Mass Index) calculations in
                  both imperial and metric systems, and gained experience in
                  deploying the website to Vercel.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Github
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="text-sm text-gray-500">
                  Mar 2023 - May 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Course Management Website
                </h2>
                <p className="leading-relaxed">
                  I collaborated with a team of 8 to create a course management
                  CRUD app using JavaScript/TypeScript, Node.js, Express.js, and
                  React.js. I led the team in requirement analysis and
                  implementation planning, designed and developed the front-end
                  using the Tailwind and AntDesign frameworks, and created user
                  interfaces for desktop and mobile platforms using Figma.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Github
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="text-sm text-gray-500">
                  Nov 2022 - Feb 2023
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Nanu Game - Java Course Project
                </h2>
                <p className="leading-relaxed">
                  I worked in a team of 5 to develop a turn-based game
                  application with both online and offline modes using Java. We
                  designed the application interface using JavaFX, created
                  wireframes with Balsamiq to visualize the user interface
                  layout, and implemented the game's underlying structure,
                  managing interactions between screens to enhance the overall
                  user experience.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Github
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="text-sm text-gray-500">
                  Nov 2021 - Feb 2022
                </span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Tutor app
                </h2>
                <p className="leading-relaxed">
                  I worked in a team of 4 students to create a website that
                  connects volunteers with tutors across various subjects. Our
                  collaborative efforts included participating in weekly
                  meetings, brainstorming, task assignment, and backlog
                  creation. We utilized React and Bootstrap to develop a
                  responsive user interface that caters to both web and mobile
                  platforms.
                </p>
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Github
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            {/* GitHub Icon */}
            <span className="fa-stack fa-lg">
              <i className="fa-solid fa-fish"></i>
            </span>
            <span className="ml-3 text-xl">lhkthanh</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 mr-4">
            © 2023 Kim Thanh
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {/* Github Icon */}
            <a href="mailto:your.email@gmail.com" className="text-gray-500">
              <span className="fa-stack fa-lg">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-github fa-stack-1x fa-inverse"></i>
              </span>
            </a>

            {/* Gmail Icon */}
            <a href="mailto:your.email@gmail.com" className="text-gray-500">
              <span className="fa-stack fa-lg">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fas fa-envelope fa-stack-1x fa-inverse"></i>
              </span>
            </a>
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/yourprofile"
              className=" text-gray-500"
            >
              <span className="fa-stack fa-lg">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-linkedin-in fa-stack-1x fa-inverse"></i>
              </span>
            </a>
          </span>
        </div>
      </footer>
    </main>
  );
}
