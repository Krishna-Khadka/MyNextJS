// server to client component
"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState('low')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const newcontact = {
      title, body, priority, user_email: `krish@gmail.com`
    }

    const res = await fetch(`http://localhost:4000/contacts`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newcontact)
    })

    // check the response status
    if (res.status === 201){
      router.refresh()
      router.push('/contact')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
      </label>
      <label>
        <span>Body:</span>
        <textarea
          onChange={(e) => setBody(e.target.value)}
          value={body}
          required
        />
      </label>
      <label>
        <span>Priority:</span>
        <select
          onChange={(e) => setPriority(e.target.value)}
          value={priority}
        >
          <option value='low'>Low Priority</option>
          <option value='medium'>Medium Priority</option>
          <option value='high'>High Priority</option>
        </select>
      </label>
      <button
      className="btn-primary"
      disabled={isLoading}
      >
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Contact</span>}
      </button>
    </form>
  )
}
