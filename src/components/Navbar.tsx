"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiPottedPlant } from "react-icons/pi";

const links = [
  { id: 1, link: "inicio" },
  { id: 2, link: "quien-soy" },
  { id: 3, link: "galería" },
  { id: 4, link: "contacto" }
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 w-full h-20 px-4 bg-green-700 flex justify-between items-center z-50">
      <h1 className="group text-lg md:text-3xl font-bold flex gap-2 items-center">
        <PiPottedPlant 
          className="fill-orange-400 group-hover:fill-orange-950" 
          size={30} 
        />
        <Link title="Colgantes Mónica" className="text-orange-950 group-hover:text-orange-400" href="/">Colgantes Mónica</Link>
      </h1>

      {/* Menú de escritorio */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li key={id} className="capitalize font-bold text-orange-400 hover:text-orange-950 transition">
            <Link href={link === "inicio" ? "/" : `/#${link}`}>{link.replace('-', ' ')}</Link>
          </li>
        ))}
      </ul>

      {/* Botón de menú móvil */}
      <button className="md:hidden z-10 cursor-pointer transition" aria-label="Menú" aria-expanded={nav ? "true" : "false"} onClick={() => setNav(prev=> !prev)}>
        {nav ? <FaTimes size={30} className="fill-orange-400" /> : <FaBars size={30} className="fill-orange-400" />}
      </button>

      {/* Menú móvil */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-green-700 flex flex-col justify-center items-center space-y-6 text-2xl">
          {links.map(({ id, link }) => (
            <li key={id} className="capitalize text-orange-400 hover:text-orange-950 transition">
              <Link href={link === "inicio" ? "/" : `/#${link}`} onClick={() => setNav(false)}>
                {link.replace('-', ' ')}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
