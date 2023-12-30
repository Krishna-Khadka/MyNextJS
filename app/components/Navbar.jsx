import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav>
        <Link href="/">Dashboard</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/contact/about">About Us</Link>
      </nav>
  )
}

export default Navbar