"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function Header() {
  const [isHamburger, setIsHamburger] = useState(false);
  const [isSettingOpen, SetIsSettingOpen] = useState(true);
  const pathname = usePathname();

  const toggleModal = () => SetIsSettingOpen(!isSettingOpen);

  const hamburHandler = () => {
    setIsHamburger(!isHamburger);
  };
  const toggleMenu = () => {
    setIsHamburger(false);
  };
  return (
    <header className="flex items-center justify-between px-6 sm:px-10 py-6 sm:py-10 sm:border">
      <div className="flex flex-col md:flex-row md:items-center w-full gap-5 sm:gap-10">
        {/* HAMBURGER */}
        <div className={`md:hidden flex items-center justify-between z-20 `}>
          <button
            className="flex flex-col justify-between w-6 h-[18px] focus:outline-none"
            onClick={hamburHandler}
          >
            <span
              className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
                isHamburger ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-[3px] w-[50%] bg-black transition-opacity duration-300 ease-in-out ${
                isHamburger ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-[3px] w-full bg-black transition-transform duration-300 ease-in-out ${
                isHamburger ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
          <Link href={"/user-profile"}>
            <Image
              src={"/images/Profil.png"}
              alt="Profile Image"
              width={30}
              height={30}
              className={`rounded-full ${
                pathname === "/category" ? "block" : "hidden"
              }`}
            />
          </Link>
        </div>

        {/* MORENT HEAD */}
        <div className="flex items-center justify-between gap-10">
          <h1 className="text-[#3563E9] text-[24px] sm:text-[32px] font-bold">
            MORENT
          </h1>
          <Link href={"/user-profile"}>
            <Image
              src={"/images/Profil.png"}
              alt="Profile Image"
              width={40}
              height={40}
              className={`rounded-full block md:hidden ${
                pathname === "/category" ? " hidden" : " "
              }`}
            />
          </Link>
        </div>
        <div className="hidden xl:flex items-center justify-between w-[492px] h-[44px] rounded-[70px] px-4 border">
          <div className="flex items-center gap-3">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search something here"
              className="w-full outline-none"
            />
          </div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 6.5H16"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6.5H2"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
              stroke="#596780"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 17.5H18"
              stroke="#596780"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
            <path
              d="M8 17.5H2"
              stroke="#596780"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
            <path
              d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
              stroke="#596780"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
            />
          </svg>
        </div>

        {/* FOR SMALL SCREEN */}
        <div className="md:hidden flex items-center gap-5   ">
          <div className="flex items-center gap-3 rounded-md border px-4 h-[44px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search something here"
              className="w-full outline-none"
            />
          </div>
          <div className="flex items-center  rounded-md border px-4 h-[44px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.5H16"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="M6 6.5H2"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="M22 17.5H18"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="M8 17.5H2"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
              <path
                d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
              />
            </svg>
          </div>
        </div>
        {/* MENUDIV */}
        <nav
          className={`md:space-x-6 font-semibold text-base z-40 bg-white ${
            isHamburger
              ? "flex flex-col right-0 top-0 h-screen w-52 py-20 px-5 absolute space-y-5 border bg-white"
              : "lg:flex hidden"
          }`}
        >
          <Link
            href="/"
            onClick={toggleMenu}
            className={`hover:text-black hover:underline underline-offset-4 ${
              pathname === "/" ? "text-black underline" : ""
            } ${isHamburger ? "border-b-2" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/category"
            onClick={toggleMenu}
            className={`hover:text-black hover:underline underline-offset-4 ${
              pathname === "/contact" ? "text-black underline" : " "
            } ${isHamburger ? "border-b-2" : ""}`}
          >
            Category
          </Link>
          <Link
            href="/dashboard"
            onClick={toggleMenu}
            className={`hover:text-black hover:underline underline-offset-4 ${
              pathname === "/about" ? "text-black underline" : " "
            } ${isHamburger ? "border-b-2" : ""}`}
          >
            Dashboard
          </Link>
          <Link
            href="/payment"
            onClick={toggleMenu}
            className={`hover:text-black hover:underline underline-offset-4 ${
              pathname === "/signup" ? "text-black underline" : " "
            } ${isHamburger ? "border-b-2" : ""}`}
          >
            Payment
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-5 ">
        <div
          className={`items-center  ${isHamburger ? "flex gap-3 right-5 top-[40%] absolute z-50" : "hidden gap-5 lg:flex"}`}
        >
          <Link href={"/wishlist"}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleMenu}
            >
              <path
                d="M26.44 13.0996C24.63 13.0996 23.01 13.9796 22 15.3296C20.99 13.9796 19.37 13.0996 17.56 13.0996C14.49 13.0996 12 15.5996 12 18.6896C12 19.8796 12.19 20.9796 12.52 21.9996C14.1 26.9996 18.97 29.9896 21.38 30.8096C21.72 30.9296 22.28 30.9296 22.62 30.8096C25.03 29.9896 29.9 26.9996 31.48 21.9996C31.81 20.9796 32 19.8796 32 18.6896C32 15.5996 29.51 13.0996 26.44 13.0996Z"
                fill="#596780"
              />
              <rect
                opacity="0.8"
                x="0.5"
                y="0.5"
                width="43"
                height="43"
                rx="21.5"
                stroke="#C3D4E9"
                strokeOpacity="0.4"
              />
            </svg>
          </Link>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleMenu}
          >
            <path
              d="M29.3399 24.49L28.3399 22.83C28.1299 22.46 27.9399 21.76 27.9399 21.35V18.82C27.9399 16.47 26.5599 14.44 24.5699 13.49C24.0499 12.57 23.0899 12 21.9899 12C20.8999 12 19.9199 12.59 19.3999 13.52C17.4499 14.49 16.0999 16.5 16.0999 18.82V21.35C16.0999 21.76 15.9099 22.46 15.6999 22.82L14.6899 24.49C14.2899 25.16 14.1999 25.9 14.4499 26.58C14.6899 27.25 15.2599 27.77 15.9999 28.02C17.9399 28.68 19.9799 29 22.0199 29C24.0599 29 26.0999 28.68 28.0399 28.03C28.7399 27.8 29.2799 27.27 29.5399 26.58C29.7999 25.89 29.7299 25.13 29.3399 24.49Z"
              fill="#596780"
            />
            <path
              d="M24.8297 30.01C24.4097 31.17 23.2997 32 21.9997 32C21.2097 32 20.4297 31.68 19.8797 31.11C19.5597 30.81 19.3197 30.41 19.1797 30C19.3097 30.02 19.4397 30.03 19.5797 30.05C19.8097 30.08 20.0497 30.11 20.2897 30.13C20.8597 30.18 21.4397 30.21 22.0197 30.21C22.5897 30.21 23.1597 30.18 23.7197 30.13C23.9297 30.11 24.1397 30.1 24.3397 30.07C24.4997 30.05 24.6597 30.03 24.8297 30.01Z"
              fill="#596780"
            />
            <rect
              opacity="0.8"
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#C3D4E9"
              strokeOpacity="0.4"
            />
            <circle cx="36.5" cy="7.5" r="5.5" fill="#FF4423" />
          </svg>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleModal}
          >
            <path
              d="M30.1 19.2204C28.29 19.2204 27.55 17.9404 28.45 16.3704C28.97 15.4604 28.66 14.3004 27.75 13.7804L26.02 12.7904C25.23 12.3204 24.21 12.6004 23.74 13.3904L23.63 13.5804C22.73 15.1504 21.25 15.1504 20.34 13.5804L20.23 13.3904C19.78 12.6004 18.76 12.3204 17.97 12.7904L16.24 13.7804C15.33 14.3004 15.02 15.4704 15.54 16.3804C16.45 17.9404 15.71 19.2204 13.9 19.2204C12.86 19.2204 12 20.0704 12 21.1204V22.8804C12 23.9204 12.85 24.7804 13.9 24.7804C15.71 24.7804 16.45 26.0604 15.54 27.6304C15.02 28.5404 15.33 29.7004 16.24 30.2204L17.97 31.2104C18.76 31.6804 19.78 31.4004 20.25 30.6104L20.36 30.4204C21.26 28.8504 22.74 28.8504 23.65 30.4204L23.76 30.6104C24.23 31.4004 25.25 31.6804 26.04 31.2104L27.77 30.2204C28.68 29.7004 28.99 28.5304 28.47 27.6304C27.56 26.0604 28.3 24.7804 30.11 24.7804C31.15 24.7804 32.01 23.9304 32.01 22.8804V21.1204C32 20.0804 31.15 19.2204 30.1 19.2204ZM22 25.2504C20.21 25.2504 18.75 23.7904 18.75 22.0004C18.75 20.2104 20.21 18.7504 22 18.7504C23.79 18.7504 25.25 20.2104 25.25 22.0004C25.25 23.7904 23.79 25.2504 22 25.2504Z"
              fill="#596780"
            />
            <rect
              opacity="0.8"
              x="0.5"
              y="0.5"
              width="43"
              height="43"
              rx="21.5"
              stroke="#C3D4E9"
              strokeOpacity="0.4"
            />
          </svg>
          
        </div>
        <Link href={"/user-profile"}>
          <Image
            src={"/images/Profil.png"}
            alt="Profile Image"
            width={80}
            height={40}
            className="rounded-full hidden md:flex"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;