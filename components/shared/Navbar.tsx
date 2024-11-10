"use client";

import Link from "next/link";
import Button from "../ui/Button";
import { IoIosSearch } from "react-icons/io";
import { LuClock4 } from "react-icons/lu";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface NavbarProps {
  user: User;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  const router = useRouter();

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
    <nav
      className={clsx(
        "py-4 w-full z-30",
        isScrolling
          ? "fixed top-0 bg-white shadow-lg z-30"
          : "relative"
      )}
    >
      <div
        className={clsx(
          "w-full flex items-center justify-between flex-row-reverse  md:flex-row border-b border-gray-100",
          isScrolling && "pb-0 border-none",
          !isScrolling && "pb-5"
        )}
      >

        <ul className="flex md:flex-1 items-center md:justify-evenly">
          <div className="flex flex-col items-center justify-center hover:bg-gray-100 rounded-full">
            <MobileMenu user={user} />
            <p className={clsx("transition-all duration-500 ease-in-out text-sm", isScrolling && "hidden")}>Explorer</p>
          </div>
          <div className={clsx("flex flex-col items-start max-md:hidden cursor-pointer hover:bg-gray-100 rounded-full", !isScrolling && "h-10")}>
            <IoIosSearch size={30} href="/search" />
          </div>
          <div className="flex flex-col items-center justify-center max-md:hidden cursor-pointer hover:bg-gray-100 rounded-full">
            <LuClock4 size={25} />
            <p className={clsx("transition-all duration-500 ease-in-out text-sm", isScrolling && "hidden")}>Last</p>
          </div>
        </ul>

        <div className="flex">
          <Link href={"/"}>
            <h1
              className={clsx(
                "font-extrabold text-secondary transition-all duration-500 ease-in-out",
                isScrolling ? "text-4xl" : "text-5xl"
              )}
            >
              Point of View
            </h1>
          </Link>
        </div>

        {!user && (
          <div className="flex gap-5 flex-1 items-center justify-evenly">
            <div className="">
              <Link href="/subscription" className="font-bold py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-800 duration-300 text-white">
                Subscription
              </Link>
            </div>
            <div className="max-md:hidden">
              <Button
                text="Log In"
                onClick={() => router.push("/access")}
                aria="Log in button"
              />
            </div>
          </div>
        )}

        {user && (
          <div className="flex gap-5 items-center flex-1 justify-evenly max-md:hidden">
            <div className="">
              <Link href="/subscription" className="font-bold py-2 px-4 rounded-lg bg-gray-900 hover:bg-gray-800 duration-300 text-white">
                Subscription
              </Link>
            </div>
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setOpenUserMenu(!openUserMenu)}>
              <h1 className="lg:block hidden">{user.name}</h1>
              <Image
                src={user.image as string}
                width={50}
                height={50}
                className="rounded-full border-4 border-primary"
                alt={`Image of ${user.name}`}
              />
            </div>
          </div>
        )}

        {openUserMenu && (
          <ul className="z-20 absolute right-12 top-[70px] w-48 bg-white shadow-md rounded-md p-4">
            {user.column && (
              <>
                <Link
                  href="/userposts"
                  onClick={() => setOpenUserMenu(false)}
                >
                  <li>My Post</li>
                </Link>
                <Link
                  href="/create"
                  onClick={() => setOpenUserMenu(false)}
                >
                  <li>Create a post</li>
                </Link>
              </>

            )}

            <li
              className="cursor-pointer"
              onClick={() => signOut()}
            >
              Sign out
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
