"use client";
import Link from "next/link";
import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { MdMenu } from "react-icons/md";

export default function MobileNavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="relative block md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        <MdMenu />
      </button>
      {isOpen && (
        <div className="md:hidden absolute right-5 top-16 rounded-lg border-[0.5px] border-black p-5 flex flex-col justify-center space-y-3 bg-white/70">
          <Link
            href={"#"}
            className="flex items-center hover:text-white/70 transition duration-200"
          >
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
          <button className="flex items-center space-x-2 p-3 backdrop-blur-lg bg-black/10 rounded-full hover:text-white/70 transition duration-200">
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
            <p>Search</p>
          </button>
          <button className="flex items-center space-x-2 p-3 backdrop-blur-lg bg-black/10 rounded-full hover:text-white/70 transition duration-200">
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
            <p>Profile</p>
          </button>
          <button className="flex items-center space-x-2 p-3 backdrop-blur-lg bg-black/10 rounded-full hover:text-white/70 transition duration-200">
            <FcLikePlaceholder />
            <p>Like</p>
          </button>
          <button className="flex items-center space-x-2 p-3 backdrop-blur-lg bg-black/10 rounded-full hover:text-white/70 transition duration-200">
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
            <p>Cart</p>
          </button>
        </div>
      )}
    </>
  );
}
