import Link from "next/link";
import React, { useState } from "react";
import Navitems from "../components/Navitems";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((value ) =>!value)
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mx-auto py-4 c-space">
          <Link
            className="text-neutral-400 font-bold hover:text-white transition-colors"
            href={"/"}
          >
            Azlan
          </Link>
          <button onClick={toggleMenu}>
            <img src={ isOpen ? "assets/close.svg" :"assets/menu.svg"} alt="toggle" className="h-6 w-6" />
          </button>
          <nav>
            <Navitems/>
          </nav>
        </div>
      </div>f
    </header>
  );
}

export default Navbar;
