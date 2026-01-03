"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-red-300",
    title: "LocalFix",
    desc: "An on-demand home services platform that connects customers with skilled technicians for various home repair and maintenance services. Book services, track orders in real-time, chat with technicians, and get your home issues fixed conveniently.",
    img: "https://images.pexels.com/photos/9242887/pexels-photo-9242887.jpeg",
    link: "https://www.localfix.store",
    gitLink: "https://github.com/fidhafathima-m/LocalFix",
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "Art Mart",
    desc: "An E-commerce website build to sell art supplies using HTML, Bootstrap, Node.js, Express.js and MongoDB.",
    img: "https://images.pexels.com/photos/1264940/pexels-photo-1264940.jpeg?_gl=1*hr6mvm*_ga*MjEyNTkwMjM0NS4xNzU1NDk4OTIw*_ga_8JE65Q40S6*czE3NTU0OTg5MjAkbzEkZzEkdDE3NTU0OTkwNDYkajYwJGwwJGgw",
    link: "https://www.art-mart.shop/",
    gitLink: "https://github.com/fidhafathima-m/Art-Mart",
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "To-Do List",
    desc: "A simple to-do list where users can add, edit, delete and rearrange to-dos. Developed using React.",
    img: "https://images.pexels.com/photos/8850706/pexels-photo-8850706.jpeg?_gl=1*wdaqtf*_ga*MjEyNTkwMjM0NS4xNzU1NDk4OTIw*_ga_8JE65Q40S6*czE3NTU0OTg5MjAkbzEkZzEkdDE3NTU1MDAzNDYkajIyJGwwJGgw",
    link: "https://todo-app-fidha.netlify.app/",
    gitLink: "https://github.com/fidhafathima-m/to-do-app-react",
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "OLX Clone",
    desc: "A full-featured OLX Clone built using the MERN Stack (MongoDB, Express, React, Node.js) and Context API for state management.",
    img: "https://images.pexels.com/photos/5076525/pexels-photo-5076525.jpeg?_gl=1*bll1ud*_ga*MjEyNTkwMjM0NS4xNzU1NDk4OTIw*_ga_8JE65Q40S6*czE3NTU0OTg5MjAkbzEkZzEkdDE3NTU1MDA4ODIkajU5JGwwJGgw",
    link: "https://fi-olx-clone.netlify.app/",
    gitLink: "https://github.com/fidhafathima-m/olx-axions",
  },
  {
    id: 5,
    color: "from-purple-300 to-red-300",
    title: "Netflix Clone",
    desc: "A responsive movie browsing web app built with React, allowing users to explore, watch trailers, and manage a personalized watchlist. Features secure authentication, dynamic routing, and data from the TMDB API.",
    img: "https://images.pexels.com/photos/5082561/pexels-photo-5082561.jpeg?_gl=1*32hmib*_ga*MjEyNTkwMjM0NS4xNzU1NDk4OTIw*_ga_8JE65Q40S6*czE3NTU0OTg5MjAkbzEkZzEkdDE3NTU1MDA5OTkkajUkbDAkaDA.",
    link: "https://f-netfliks-clone.netlify.app/",
    gitLink: "https://github.com/fidhafathima-m/netflix-react",
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${100 * (items.length - 1)}vw`]
  );

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Desktop Version - UNCHANGED */}
      <div className="hidden lg:block h-[600vh]" ref={ref}>
        {/* Intro Section - Desktop */}
        <div className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-20 items-center justify-center text-6xl text-center">
          My Works
          <motion.div
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Image
              src="/scroll.svg"
              alt="Scroll"
              width={30}
              height={30}
              unoptimized
            />
          </motion.div>
        </div>

        {/* Horizontal Scroll Section - Desktop */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x,  width: `${(items.length) * 100}vw` }} className="flex h-full">
            <div className="py-20 w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white max-w-xl px-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ">
                    {item.title}
                  </h1>
                  <div className="relative w-60 h-36 sm:w-72 sm:h-48 md:w-80 md:h-56 lg:w-96 lg:h-64">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                      unoptimized
                    />
                  </div>
                  <p>{item.desc}</p>
                  <div className="flex justify-end gap-4">
                    <Link href={item.link}>
                      <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-200">
                        See Demo
                      </button>
                    </Link>
                    <Link href={item.gitLink}>
                      <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-100 transition-colors duration-200">
                        See Code
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile/Tablet Version - FIXED WHITE SPACE ISSUE */}
      <div className="lg:hidden">
        {/* Intro Section - Mobile: FIXED HEIGHT */}
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none whitespace-nowrap">
              My Works
            </h1>
            <motion.div
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "8px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            >
              <Image
                src="/scroll.svg"
                alt="Scroll"
                width={28}
                height={28}
                className="sm:w-8 sm:h-8"
                unoptimized
              />
            </motion.div>
          </div>
        </div>

        {/* Vertical Scroll Section - Mobile */}
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-b ${item.color} px-6`}
              key={item.id}
            >
              <div className="flex flex-col gap-4 text-white max-w-sm sm:max-w-md w-full">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-center">
                  {item.title}
                </h1>
                <div className="relative w-full h-56 sm:h-64 md:h-72 mx-auto">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    unoptimized
                  />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl opacity-95 font-medium text-center">
                  {item.desc}
                </p>

                {/* Button container - aligned to right */}
                <div className="flex justify-end gap-3 mt-4">
                  {" "}
                  {/* Changed to flex-end and added gap */}
                  <Link href={item.link} className="flex">
                    <button className="bg-white text-black px-6 py-3 sm:px-12 sm:py-5 rounded-full font-bold text-sm sm:text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105">
                      Demo
                    </button>
                  </Link>
                  <Link href={item.gitLink} className="flex">
                    <button className="bg-white text-black px-6 py-3 sm:px-12 sm:py-5 rounded-full font-bold text-sm sm:text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105">
                      Code
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Section - Mobile Optimized */}
      <div className="w-screen h-screen flex flex-col gap-6 lg:gap-12 items-center justify-center text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-8xl leading-tight font-black">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80 xl:w-[420px] xl:h-[420px] 2xl:w-[500px] 2xl:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath
                xlinkHref="#circlePath"
                className="text-sm sm:text-lg md:text-xl lg:text-lg font-bold tracking-widest"
              >
                •MernStackDeveloper•ComProgrammer•MernStackDeveloper•ComProgrammer•
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-base sm:text-lg md:text-xl lg:text-lg font-bold hover:bg-gray-800 transition-all duration-300 shadow-xl transform hover:scale-110"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
