import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CaseList() {
  const [cases, setCases] = useState<any[]>([])

  useEffect(() => {
    fetch('http://localhost:4000/api/cases')
      .then(res => res.json())
      .then(setCases)
  }, [])

  return (
    <ul className="space-y-3">
      {cases.map(c => (
        <li key={c.id} className="border p-4 rounded">
          <h3 className="font-semibold">{c.title}</h3>
          <p>Status: {c.status}</p>
          <p>Priority: {c.priority}</p>
          <p>Org: {c.organization?.name}</p>
        </li>
      ))}
    </ul>
  )
}

export default CaseList