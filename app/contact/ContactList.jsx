import Link from 'next/link';
import React from 'react'


//install server
// sudo npm  install json-server -g

//run server
// json-server --watch --port 4000 ./data/db.json

//fetch the data
async function getContacts() {
    // imitate delay
    await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:4000/contacts', {
        next: {
            revalidate: 0
        }
    });
    return await res.json();
}
async function ContactList() {

    const contact = await getContacts()

    return (
        <>
            {contact.map((item) => (
                <div key={item.id} className='card my-5'>
                    <Link href={`/contact/${item.id}`}>
                        <h3>{item.title}</h3>
                        <p>{item.body.slice(0, 200)}...</p>
                        <div className={`pill ${item.priority}`}>
                            {item.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {contact.length === 0 && (
                <p className='text-center'>No Contacts available !!</p>
            )}
        </>
    )
}

export default ContactList