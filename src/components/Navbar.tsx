"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { PiPottedPlant } from "react-icons/pi";

const links = [
  { id: 1, link: "quien-soy" },
  { id: 2, link: "galería" },
  { id: 3, link: "contacto" }
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
    <nav className="sticky top-0 w-full h-20 px-4 bg-green-600 text-white flex justify-between items-center z-50">
      <h1 className="text-lg md:text-3xl font-bold flex gap-2 items-center">
        <PiPottedPlant color="brown" size={30} />
        <Link title="Colgantes Mónica" href="/">Colgantes Mónica</Link>
      </h1>

      {/* Menú de escritorio */}
      <ul className="hidden md:flex space-x-6">
        {links.map(({ id, link }) => (
          <li key={id} className="capitalize font-bold text-white hover:text-green-700 transition">
            <Link href={`/#${link}`}>{link.replace('-', ' ')}</Link>
          </li>
        ))}
      </ul>

      {/* Botón de menú móvil */}
      <button className="md:hidden z-10 cursor-pointer" onClick={() => setNav(prev=> !prev)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {/* Menú móvil */}
      {nav && (
        <ul className="absolute top-0 left-0 w-full h-screen bg-green-600 flex flex-col justify-center items-center space-y-6 text-2xl">
          {links.map(({ id, link }) => (
            <li key={id} className="capitalize text-white hover:text-green-700 transition">
              <Link href={`/#${link}`} onClick={() => setNav(false)}>
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
