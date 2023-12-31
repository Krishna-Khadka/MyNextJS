import React, { Suspense } from 'react'
import ContactList from './ContactList'
import Loading from '../loading'

const Contact = () => {
    return (
        <main>
            <nav>
                <div>
                    <h2>Contacts</h2>
                    <p><small>Current Contacts</small></p>
                </div>
            </nav>

            <Suspense fallback= {<Loading />}>
                <ContactList />
            </Suspense>

        </main>

    )
}

export default Contact