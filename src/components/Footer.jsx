import React, { useState } from "react"
import LogoImage from "../assets/logo.png";

export default function Footer() {
    const [open, setOpen] = useState(false)

    return (
        <div className="mt-28 w-full mx-auto py-4 px-20 flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700">
                <a href="#" className="text-xl font-bold text-zinc-100">
                <img src={LogoImage} alt="Logo" className="w-14 h-14 object-contain rounded-full bg-zinc-100 dark:bg-white" />
            </a>
            <div className="flex gap-7 font-bold">
                <a href="#hero" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#project" className="nav-link">Project</a>
            </div>
            <div className="flex items-center gap-3">
                <a href="https://github.com/dhrmputra" className="nav-link" target="_blank" rel="noopener noreferrer" >
                    <i className="ri-github-fill ri-2x"></i>
                </a>
                <a href="https://instagram.com/dhrmputra" className="nav-link" target="_blank" rel="noopener noreferrer" >
                    <i className="ri-instagram-fill ri-2x"></i>
                </a>
                <a href="https://linkedin.com/in/dhrmputra" className="nav-link" target="_blank" rel="noopener noreferrer" >
                    <i className="ri-linkedin-fill ri-2x"></i>
                </a>
                <a href="https://wa.me/628993102710" className="nav-link" target="_blank" rel="noopener noreferrer">
                    <i className="ri-whatsapp-fill ri-2x"></i>
                </a>
            </div>
        </div>
    )
}




