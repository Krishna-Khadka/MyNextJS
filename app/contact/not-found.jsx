import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center'>
        <h2 className="text-3xl">There was a problem.</h2>
        <p>We couldnt find the contact you were looking for.</p>
        <p>Go back to all <Link href="/contact">Contacts</Link></p>
    </main>
  )
}
