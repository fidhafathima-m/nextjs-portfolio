"use client";
import Brain from "@/components/brain";
import {motion, useInView, useScroll} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const About = () => {

  const containerRef = useRef();
  const {scrollYProgress} = useScroll({container: containerRef})
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin: "100px"});
  const educationRef = useRef();
  const isEducationRefInView = useInView(educationRef, {margin: "100px"});

  return (
    <motion.div
      className="h-full"
      initial={{y: "-200vh"}}
      animate={{y: "0%"}}
      transition={{duration: 1}}
    >
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-24 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* biography */}
          <div className="flex flex-col gap-12 justify-center">
            {/* bio title */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* bio desc */}
            <p className="">Hi, I&apos;m a MERN stack developer with a strong passion for solving real-world problems through code. While I may not have years of industry experience, I&apos;ve been consistently practicing and building projects using MongoDB, Express.js, React, and Node.js. I believe the best way to learn is by doing, so I&apos;ve spent a lot of time creating web applications that address practical challenges, from small productivity tools to full-stack solutions.<br/><br/>

            I enjoy the entire process of development: planning, designing, coding, debugging, and seeing an idea come to life. My focus is on writing clean, efficient code and building responsive, user-friendly interfaces. I&apos;m always eager to improve my skills, collaborate with others, and take on new challenges that push me to grow as a developer.</p>
            {/* quote */}
            <span className="italic">
              I build to learn, and I learn to build better.
            </span>
            {/* sign */}
            <Image src="/sign.svg" alt="Sign" width={185} height={77} className="self-end"></Image>
            {/* scroll */}
            <motion.div 
                initial={{opacity: 0.2, y: 0}}
                animate={{opacity: 1, y: "10px"}}
                transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}>
                <Image src="/scroll.svg" alt="Scroll" width={30} height={30}></Image>
              </motion.div>
          </div>

          {/* skills */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skill title */}
            <motion.h1
              initial={{x:"-300px"}}
              animate={isSkillRefInView ? {x: 0} : {}}
              transition={{delay: 0.2}}
              className="font-bold text-2xl">SKILLS</motion.h1>
            {/* skill list */}
              <motion.div 
                initial={{x:"-300px"}}
                animate={isSkillRefInView ? {x: 0} : {}}
                className="flex gap-4 flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  TypeScript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Reactjs
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Nextjs
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Tailwind CSS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MongoDB
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Nodejs
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Expressjs
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Redux
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Framer Motion
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  HTML5
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MySQL
                </div>
              </motion.div>
              {/* scroll */}
              <motion.div 
                initial={{opacity: 0.2, y: 0}}
                animate={{opacity: 1, y: "10px"}}
                transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}>
                <Image src="/scroll.svg" alt="Scroll" width={30} height={30}></Image>
              </motion.div>
              
          </div>
          
          {/* education */}
          <div className="flex flex-col gap-12 justify-center pb-8 lg:pb-32" ref={educationRef}>
            {/* edu title */}
            <motion.h1 
              initial={{x:"-300px"}}
              animate={isEducationRefInView ? {x: 0} : {}}
              transition={{delay: 0.2}}
              className="font-bold text-2xl">EDUCATION</motion.h1>
            
            {/* Desktop Timeline */}
            <motion.div
              initial={{x:"-300px"}}
              animate={isEducationRefInView ? {x: 0} : {}}
              className="hidden lg:block">
              {/* exp list item 1 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  {/* job role */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    MERN Stack Developement
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    Learnt MongoDB, Express.js, React, and Node.js. Currently focusing on building real-world projects to strengthen practical skills and problem-solving.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Brototype</div>
                </div>

                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white left-1/2 -translate-x-1/2"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3"></div>
              </div>
              
              {/* exp list item 2 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3"></div>

                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3">
                  {/* job role */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Bachelor of Computer Application
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    Gained foundational knowledge in programming, databases, and computer systems. Built academic projects and explored web development basics.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2021 - 2024</div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Kannur University</div>
                </div>
              </div>
              
              {/* exp list item 3 */}
              <div className="flex justify-between h-48">
                {/* left */}
                <div className="w-1/3">
                  {/* job role */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Higher Secondary
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    Completed with a focus on Computer Applications, developing early interest in technology and logic-based problem-solving.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2019 - 2021</div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">GHSS, Kuthuparamba</div>
                </div>

                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* right */}
                <div className="w-1/3"></div>
              </div>
            </motion.div>

            {/* Mobile Timeline */}
            <motion.div
              initial={{x:"-300px"}}
              animate={isEducationRefInView ? {x: 0} : {}}
              className="lg:hidden">
              {/* exp list item 1 */}
              <div className="flex min-h-[220px] mb-8">
                {/* left - timeline */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-4"></div>
                  </div>
                </div>

                {/* right - content */}
                <div className="w-5/6 pl-4 flex flex-col">
                  {/* job role */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg mb-2">
                    MERN Stack Developement
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic flex-grow">
                    Learnt MongoDB, Express.js, React, and Node.js. Currently focusing on building real-world projects to strengthen practical skills and problem-solving.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2024 - Present</div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit ml-3 mb-4">Brototype</div>
                </div>
              </div>
              
              {/* exp list item 2 */}
              <div className="flex min-h-[220px] mb-8">
                {/* left - timeline */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-4"></div>
                  </div>
                </div>

                {/* right - content */}
                <div className="w-5/6 pl-4 flex flex-col">
                  {/* job role */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg mb-2">
                    Bachelor of Computer Application
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic flex-grow">
                    Gained foundational knowledge in programming, databases, and computer systems. Built academic projects and explored web development basics.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2021 - 2024</div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit ml-3 mb-4">Kannur University</div>
                </div>
              </div>
              
              {/* exp list item 3 */}
              <div className="flex min-h-[220px] mb-8">
                {/* left - timeline */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 top-4"></div>
                  </div>
                </div>

                {/* right - content */}
                <div className="w-5/6 pl-4 flex flex-col">
                  {/* job role */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-e-lg mb-2">
                    Higher Secondary
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic flex-grow">
                    Completed with a focus on Computer Applications, developing early interest in technology and logic-based problem-solving.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">2019 - 2021</div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit ml-3 mb-4">GHSS, Kuthuparamba</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* <div className="h-4 lg:h-screen"></div> */}
        </div>
        {/* svg */}
        <div className="hidden lg:block lg:w-1/3 xl:w-1/2 sticky top-0 z-30 h-screen">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  )
}

export default About