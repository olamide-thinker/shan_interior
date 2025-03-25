import Link from 'next/link'
import React from 'react'

export default function Nav() {
    return (
        <nav className="bg-[#605d56] rounded-full px-4 py-2 hidden md:block">
            <div className="flex text-white items-center gap-4 md:gap-6 text-sm md:text-base">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/3DProjects">3D Design Projects</Link>
                <Link href="interiorProjects">Interior Design Projects</Link>
            </div>
        </nav>

    )
}
