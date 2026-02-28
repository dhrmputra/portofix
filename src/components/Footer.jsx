import React, { useState } from "react"

export default function Footer() {
    const [open, setOpen] = useState(false)

    return (
        <div className="mt-28 py-4 flex md:flex-row flex-col justify-between items-center gap-6 md:gap-0">
            <a href="#" className="text-xl font-bold text-zinc-100">
                My<span className="text-emerald-500">Portfolio</span>
            </a>
            <div className="flex gap-7">
                <a href="#home" className="nav-link">Home</a>
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




