"use client";

import { useState } from "react";
import { navLinks } from "../constants";
import { close, menu } from "@/public/assets";
import Image from "next/image";

export default function MobileNav() {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("");

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <Image
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle(!toggle)}
      />

      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } p-6 bg-neutral-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-secondary"
              }`}
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
              }}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
