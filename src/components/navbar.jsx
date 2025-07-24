"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Navlink from "./navLink";
import { motion } from "framer-motion";

const links = [
    {url: '/', title: 'Home'},
    {url: '/about', title: 'About'},
    {url: '/portfolio', title: 'Portfolio'},
    {url: '/contact', title: 'Contact'},
  ]

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  const centerVariants = {
    closed: {
      opacity: 1
    },
    opened: {
      opacity: 0
    }
  }
  const bottomVariants = {
    closed: {
      rotate: 0
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    }
  }
  const listVariants = {
    closed: {
      x: '100vw'
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      }
    }
  }
  const listItemVarients = {
    closed: {
      x: -10,
      opacity: 0
    },
    opened: {
      x: 0,
      opacity: 1
    }
  }

  return (
    <div className="h-full w-full flex items-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 justify-between">
  {/* Logo on the left */}
  <div className="flex-shrink-0">
    <Link href='/' className="bg-black text-white rounded p-2 text-sm font-extrabold">
      F F
    </Link>
  </div>

  {/* Nav links in the center (only on md and above) */}
  <div className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
    {links.map(link => (
      <Navlink link={link} key={link.title} />
    ))}
  </div>

  {/* Social icons on the right (only on md and above) */}
  <div className="hidden md:flex gap-4">
    <Link href='https://github.com/fidhafathima-m'>
      <Image src="/github.png" alt="github" width={24} height={24} />
    </Link>
    <Link href='https://www.linkedin.com/in/fidha-fathima-963782205/'>
      <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
    </Link>
    <Link href='https://www.instagram.com/_fidha.m/'>
      <Image src="/instagram.png" alt="instagram" width={24} height={24} />
    </Link>
    <Link href='https://in.pinterest.com/fidhumusthafa/'>
      <Image src="/pinterest.png" alt="pinterest" width={24} height={24} />
    </Link>
  </div>

  {/* Responsive hamburger menu on small screens */}
  <div className="md:hidden">
    <button
      className="w-10 h-8 flex flex-col justify-between z-50 relative"
      onClick={() => setOpen((prev) => !prev)}
    >
      <motion.div 
        variants={topVariants} 
        animate={open ? 'opened': 'closed'} 
        className="w-10 h-1 bg-black rounded origin-left">
      </motion.div>
      <motion.div 
        variants={centerVariants} 
        animate={open ? 'opened': 'closed'} 
        className="w-10 h-1 bg-black rounded">
      </motion.div>
      <motion.div 
        variants={bottomVariants} 
        animate={open ? 'opened': 'closed'} 
        className="w-10 h-1 bg-black rounded origin-left">
      </motion.div>
    </button>

    {open && (
      <motion.div variants={listVariants} initial='closed' animate='opened' className="fixed top-0 left-0 w-screen h-screen bg-black/60 backdrop-blur-md text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
        {links.map((link) => (
          <motion.div variants={listItemVarients} key={link.title}>
            <Link href={link.url} >
              {link.title}
            </Link>
          </motion.div>
          
        ))}
      </motion.div>
    )}
  </div>
</div>

  )
}

export default Navbar