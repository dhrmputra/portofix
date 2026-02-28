import React, { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="top-0 left-0 w-full z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="text-xl font-bold text-zinc-100">
          My<span className="text-emerald-500">Portfolio</span>
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 font-bold">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#project" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-[2px] bg-zinc-100 transition ${open && "rotate-45 translate-y-[6px]"}`} />
          <span className={`w-6 h-[2px] bg-zinc-100 transition ${open && "opacity-0"}`} />
          <span className={`w-6 h-[2px] bg-zinc-100 transition ${open && "-rotate-45 -translate-y-[6px]"}`} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 pb-6 font-bold">
          <a onClick={() => setOpen(false)} href="#hero" className="mobile-link">Home</a>
          <a onClick={() => setOpen(false)} href="#about" className="mobile-link">About</a>
          <a onClick={() => setOpen(false)} href="#projects" className="mobile-link">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact" className="mobile-link">Contact</a>
        </nav>
      </div>
    </nav>
  )
}