import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      {/* image container */}
      <div className="flex-1 lg:h-full lg:w-1/2 relative">
        <Image src='/hero.png' alt='Hero image' fill className="object-contain"/>
      </div>
      {/* text container */}
      <div className="flex-1 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center lg:items-start">
        <h1 className="text-4xl font-bold">Full Stack Developer</h1>
        <p className="">I am a passionate web developer and computer programmer with expertise in creating modern, responsive, and user-friendly websites and applications. With a strong foundation in both frontend and backend technologies, I strive to deliver high-quality solutions that meet client needs.</p>
      
        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my Works</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;