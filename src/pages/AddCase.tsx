import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddCase() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    title: '',
    status: 'Open',
    priority: 'medium',
    estimatedLoss: '',
    orgId: ''
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    await fetch('http://localhost:4000/api/cases', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input name="title" placeholder="Title" className="border p-2 w-full" onChange={handleChange} required />
      <select name="status" className="border p-2 w-full" onChange={handleChange}>
        <option value="Open">Open</option>
        <option value="Closed">Closed</option>
        <option value="Under Review">Under Review</option>
      </select>
      <select name="priority" className="border p-2 w-full" onChange={handleChange}>
        <option value="low">Low</option>
        <option value="medium" selected>Medium</option>
        <option value="high">High</option>
      </select>
      <input name="estimatedLoss" placeholder="Estimated Loss" className="border p-2 w-full" onChange={handleChange} />
      <input name="orgId" placeholder="Organization ID" className="border p-2 w-full" onChange={handleChange} required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Create Case</button>
    </form>
  )
}

export default AddCase