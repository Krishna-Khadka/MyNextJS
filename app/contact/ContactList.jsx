import React from 'react'


//fetch the data
async function getContact() {
    const res = await fetch('http://localhost:4000/contacts',{
        next: {
            revalidate: 0
        }
    });
    return await res.json();
}
async function ContactList() {

    const contact = await getContact()

    return (
        <>
            {contact.map((item) => (
                <div key={item.id} className='card my-5'>
                    <h3>{item.title}</h3>
                    <p>{item.body.slice(0,200)}...</p>
                    <div className={`pill ${item.priority}`}>
                        {item.priority} priority
                    </div>
                </div>
            ))}
            {contact.length === 0 && (
                <p className='text-center'>No Contacts available !!</p>
            )}
        </>
    )
}

export default ContactList