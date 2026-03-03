import React, { useState, useEffect } from "react"
import LogoImage from "../assets/logo.png";
import { Sun, Moon } from "lucide-react"

export default function Navbar({ language, changeLanguage }) {
 const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [langOpen, setLangOpen] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setDarkMode(true)
    }
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    const isDark = document.documentElement.classList.contains("dark")
    localStorage.setItem("theme", isDark ? "dark" : "light")
    setDarkMode(isDark)
  }

  const handleLanguageChange = (lang) => {
    changeLanguage(lang)
    setLangOpen(false)
  }

  return (
    <nav className="top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-neutral-900/30 shadow-md z-50 dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="#" className="text-xl font-bold">
          <img src={LogoImage} alt="Logo" className="w-14 h-14 object-contain rounded-full bg-zinc-100 dark:bg-white" />
        </a>

        <div className="flex items-center gap-6 ml-auto">
          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-black dark:text-zinc-100">
            <a href="#hero" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#project" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 transition"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-zinc-800" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="px-3 py-1 text-sm border rounded-md dark:border-neutral-600"
              >
                {language?.toUpperCase()}
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 my-4 w-32 bg-white dark:bg-neutral-800 border dark:border-neutral-700 rounded-md shadow-md">
                  <button
                    onClick={() => handleLanguageChange("id")}
                    className="block w-full text-left px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                  >
                    🇮🇩 Indonesia
                  </button>

                  <button
                    onClick={() => handleLanguageChange("en")}
                    className="block w-full text-left px-3 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 cursor-pointer"
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>

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
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
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