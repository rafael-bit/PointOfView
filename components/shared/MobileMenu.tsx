"use client";

import { useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { FaSquareXTwitter, FaSquareInstagram, FaSquareWhatsapp } from "react-icons/fa6";
import Button from "../ui/Button";
import Link from "next/link";
import useMenuActive from "@/hooks/useMenuActive";
import { User } from "@prisma/client";
import { signOut } from "next-auth/react";
import SideBar from "./SideBar";
import clsx from "clsx";

interface MobileMenuProps {
  user: User;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ user }) => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobileMenu]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="cursor-pointer" onClick={mobileMenuHandler}>
        {openMobileMenu ? <CgClose size={25} /> : <CiMenuBurger size={25} />}
      </div>

      {openMobileMenu && (
        <div onClick={() => setOpenMobileMenu(false)} className="fixed w-full h-screen top-0 left-0 bg-black/25 z-10">
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute h-screen left-0 top-0 w-full bg-white z-10 border-r overflow-y-auto flex flex-col"
          >
            <div className={clsx("flex flex-col left-0 top-0 w-full bg-white z-10", isScrolling ? "" : "fixed")}>
            <button onClick={() => setOpenMobileMenu(false)} className="absolute top-5 right-5 text-tertiary">
              <CgClose size={25} />
            </button>

            <div className="border-b py-5 text-center shadow-md">
              <Link href="/">
                <h1 className="text-3xl font-extrabold text-secondary">Point of View</h1>
              </Link>
            </div>
            </div>
            <SideBar />

            <div className="flex text-secondary flex-1 justify-center gap-20 pb-5">
              <FaSquareWhatsapp size={40}/>
              <FaSquareInstagram size={40}/>
              <FaSquareXTwitter size={40}/>
            </div>
            {!user && (
              <div className="flex gap-5 flex-1 flex-col py-5">
                <Button text="Log In" onClick={() => null} aria="Log in button" />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
