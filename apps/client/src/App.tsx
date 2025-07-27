import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import CaseList from './pages/CaseList'
import AddCase from './pages/AddCase'
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react'
import { useUserSync } from './hooks/useUserSync'

function App() {
  useUserSync()

  return (
    <>
      <SignedOut>
        <div className="p-10 max-w-xl mx-auto">
          <SignIn />
        </div>
      </SignedOut>

      <SignedIn>
        <div className="p-6">
          <header className="mb-6 flex justify-between">
            <h1 className="text-2xl font-bold text-blue-700">Fraud SaaS</h1>
            <div className="flex gap-2">
              <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded">+ Add Case</Link>
              <UserButton />
            </div>
          </header>

          <Routes>
            <Route path="/" element={<CaseList />} />
            <Route path="/add" element={<AddCase />} />
          </Routes>
        </div>
      </SignedIn>
    </>
  )
}

export default App