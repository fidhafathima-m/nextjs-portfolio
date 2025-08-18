"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "React Commerce",
    desc: "Lorem ipsum dolor sit amet...",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Next.js Medium Blog",
    desc: "Lorem ipsum dolor sit amet...",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Vanilla Book App",
    desc: "Lorem ipsum dolor sit amet...",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Spotify Music App",
    desc: "Lorem ipsum dolor sit amet...",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${100 * (items.length - 1)}vw`]);

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
            <Image src="/scroll.svg" alt="Scroll" width={30} height={30} />
          </motion.div>
        </div>

        {/* Horizontal Scroll Section - Desktop */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div style={{ x }} className="flex h-full w-[400vw]">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white max-w-xl px-4">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-8xl">{item.title}</h1>
                  <div className="relative w-70 h-40 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p>{item.desc}</p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="bg-white text-black px-4 py-2 rounded w-fit">
                      See Demo
                    </button>
                  </Link>
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
              <Image src="/scroll.svg" alt="Scroll" width={28} height={28} className="sm:w-8 sm:h-8" />
            </motion.div>
          </div>
        </div>

        {/* Vertical Scroll Section - Mobile: NO GAP */}
        <div className="flex flex-col">
          {items.map((item) => (
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-b ${item.color} px-6`}
              key={item.id}
            >
              <div className="flex flex-col gap-4 text-white max-w-sm sm:max-w-md text-center">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">{item.title}</h1>
                <div className="relative w-full h-56 sm:h-64 md:h-72 mx-auto">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl opacity-95 font-medium">{item.desc}</p>
                <Link href={item.link} className="flex justify-center mt-2">
                  <button className="bg-white text-black px-10 py-4 sm:px-12 sm:py-5 rounded-full font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all duration-300 shadow-xl transform hover:scale-105">
                    See Demo
                  </button>
                </Link>
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
              <textPath xlinkHref="#circlePath" className="text-sm sm:text-lg md:text-xl lg:text-lg font-bold tracking-widest">
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