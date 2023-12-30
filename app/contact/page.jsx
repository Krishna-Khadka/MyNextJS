import React from 'react'
import ContactList from './ContactList'

const Contact = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Contacts</h2>
                    <p><small>Current Contacts</small></p>
                </div>
            </nav>

            <ContactList />
        </main>

    )
}

export default Contact