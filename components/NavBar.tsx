"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { FcLikePlaceholder } from "react-icons/fc";
import MobileNavMenu from "./MobileNavMenu";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log();
      
      if (window.scrollY > window.outerHeight / 2) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false);
      }
     
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed left-0 top-0 flex justify-center items-center p-4 w-full text-sm z-50  ${isScrolled ? ' backdrop-blur-lg bg-black/20 text-white' : ''}`}>
      <div className="flex justify-between items-center w-[95%] lg:w-[90%] 2xl:w-[2000px] transition-all duration-300">
        <span className="flex items-center text-xl md:text-3xl space-x-2">
          <span>GO</span> <p className="font-bold">FOOD</p>
        </span>
        <div className="flex items-center space-x-3 md:space-x-8">
          <Link href={"#"} className="hover:text-black/70 transition duration-200">Home</Link>
          <Link href={"#"} className="hover:text-black/70 transition duration-200">Groceries</Link>
          <Link href={"#"} className="hover:text-black/70 transition duration-200">Pages</Link>
        </div>
        <MobileNavMenu/>
        <div className="md:flex items-center justify-between space-x-4 text-white hidden">
          <Link href={"#"} className="flex items-center hover:text-white/70 transition duration-200">
            Connect with us{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <div className="flex space-x-2 justify-between items-center">
            <button className="p-3 backdrop-blur-lg bg-black/10 rounded-full hover:text-white/70 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button className="p-3 backdrop-blur-lg bg-black/10 rounded-full hover:text-white/70 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </button>
            <button className="p-3 backdrop-blur-lg bg-black/10 rounded-full hover:text-white/70 transition duration-200">
              <FcLikePlaceholder />
            </button>
            <button className="p-3 backdrop-blur-lg bg-black/10 rounded-full hover:text-white/70 transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
