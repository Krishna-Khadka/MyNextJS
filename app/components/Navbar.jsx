import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from './logo.png'

function Navbar() {
    return (
        <nav>
            <Image 
            src={Logo}
            alt="Navbar Logo"
            width={80}
            placeholder="blur"
            quality={100}
            />
            <Link href="/">Dashboard</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/contact/about">About Us</Link>
        </nav>
    )
}

export default Navbar