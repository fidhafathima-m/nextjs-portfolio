"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
    {url: '/', title: 'Home'},
    {url: '/about', title: 'About'},
    {url: '/portfolio', title: 'Portfolio'},
    {url: '/contact', title: 'Contact'},
  ]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      <div className="hidden md:flex gap-4">
        {links.map(link => (
          <Link href={link.url} key={link.title}>{link.title}</Link>
        ))}
      </div>
      {/* logo */}
      <div className="md:hidden lg:flex">
        <Link href='/' className="bg-black text-white rounded p-2 text-sm font-extrabold">
          F F
        </Link>
      </div>
      <div className="hidden md:flex gap-4">
        <Link href='https://github.com/fidhafathima-m'>
          <Image src="/github.png" alt="github" width={24} height={24}/>
        </Link>
        <Link href='https://www.linkedin.com/in/fidha-fathima-963782205/'>
          <Image src="/linkedin.png" alt="" width={24} height={24}/>
        </Link>
        <Link href='https://www.instagram.com/_fidha.m/'>
          <Image src="/instagram.png" alt="" width={24} height={24}/>
        </Link>
        <Link href='https://in.pinterest.com/fidhumusthafa/'>
          <Image src="/pinterest.png" alt="" width={24} height={24}/>
        </Link>
      </div>
      {/* responsive menu */}
      <div className="md:hidden">
        <button className=" w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen(prev => !prev)}>
          <div className="w-10 h-1 bg-slate-400 rounded"></div>
          <div className="w-10 h-1 bg-slate-400 rounded"></div>
          <div className="w-10 h-1 bg-slate-400 rounded"></div>
        </button>
        {/* menu list */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
        {links.map(link => (
          <Link href={link.url} key={link.title}>{link.title}</Link>
        ))}
      </div>
        )}
      
      </div>
      
    </div>
  )
}

export default Navbar