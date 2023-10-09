"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
// import { singIn, singOut, useSession, getProviders } from "next-auth/react";

import { FaBars } from "react-icons/fa";
import NavbarResponsive from "./NavbarResponsive";
import SignInModal from "./SignInModal";

const Navbar = () => {
  const [dropdown, setDropDown] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const { data: session } = useSession();

  // toggle function for Find Cats
  const toggleDropDown = () => {
    setDropDown(!dropdown);
  };

  // toggle function for navbar responsive
  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  // toggle Function for Modal
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleSignOut = () => {};

  const navItems = ["Find Cats", "Benefits", "FAQ", "About Us"];

  return (
    <div className="flex  w-full justify-between items-center bg-[#FFFFFF] sticky top-0 z-30 2xl:px-[140px] xl:px-[105px] lg:px-[93.33px] md:px-[30px] px-[22px] cursor-pointer">
      <div className="flex items-center space-x-4 md:space-x-3 lg:space-x-8">
        <div>
          <button onClick={toggleNavbar} className="lg:hidden theme-1">
            <FaBars />
          </button>
        </div>
        <div className="flex items-center ">
          <Image src="/CatsIcon.png" alt="CatsIcon" width={75} height={25} />
          <h1 className="theme-1 text-2xl">
            Cats<span className="theme-2">Con</span>
          </h1>
        </div>
        <div className="hidden lg:flex space-x-2 md:space-x-4 lg:space-x-8 text-xl ">
          {navItems.map((item, idx) => (
            <ul key={idx}>
              <li className="hover:text-[#04aeee]">{item}</li>
            </ul>
          ))}
        </div>
      </div>
      <div className="flex  justify-end">
        <Image
          src="/NotificationIcon.png"
          alt="Bell Icon"
          width={52}
          height={52}
        />
        {session ? (
          <div className="flex gap-3 md:gap-5 items-center">
            <p className="text-lg">{session.user.name}</p>
            <button
              type="button"
              onClick={() => signOut()}
              className="btn-primary border-l-2 pl-2"
            >
              Sign Out
            </button>
            {/* <Link href="/profile">
              <Image
                src="/Portrait_Placeholder.png"
                alt="profile pic"
                width={37}
                height={37}
                className="rounded-full"
              />
            </Link> */}
          </div>
        ) : (
          <>
            <div className="flex gap-3 md:gap-5 items-center">
              <button
                onClick={toggleModal}
                className="btn-primary border-l-2 pl-2"
              >
                Sign In
              </button>
            </div>
          </>
        )}
      </div>

      {/* Responsive Navbar Section , might move to a new component */}
      {navbar && (
        <NavbarResponsive navItems={navItems} toggleNavbar={toggleNavbar} />
      )}

      {/* Modal Section for sign In purpose */}
      {modalOpen && (
        <div className=" absolute left-0 top-0 z-40">
          <SignInModal modalOpen={modalOpen} toggleModal={toggleModal} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
