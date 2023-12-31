import { notFound } from 'next/navigation'
import React from 'react'


export const dynamicParams = true
export async function generateStaticRendering() {
    //[{id: '1'},{id: '2'},...]
    const res = await fetch('http://localhost:4000/contacts')

    const contacts = await res.json()

    return contacts.map((item) => ({
        id: item.id
    }))
}

async function getContact(id) {
    const res = await fetch('http://localhost:4000/contacts/' + id, {
        next: {
            revalidate: 60
        }
    })

    if (!res.ok) {
        notFound()
    }

    return await res.json()
}

async function contactDetail({ params }) {
    const contact = await getContact(params.id)
    return (
        <main>
            <nav>
                <h2>Contact Detail</h2>
            </nav>
            <div className="card">
                <h2>{contact.title}</h2>
                <small>Created by {contact.user_email}</small>
                <p>{contact.body}</p>
                <div className={`pill ${contact.priority}`}>
                    {contact.priority} priority
                </div>
            </div>
        </main>
    )
}

export default contactDetail