
import React from 'react'

async function getContact(id) {
    const res = await fetch('http://localhost:4000/contacts/' + id, {
        next: {
            revalidate: 60
        }
    })
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