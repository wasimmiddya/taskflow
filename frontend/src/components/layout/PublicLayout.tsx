import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../common/Navbar'
import { Footer } from '../common/Footer'
import { AuthSection } from '@/pages/landing/components/AuthSection'

export const PublicLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-slate-900 selection:bg-slate-200">
      <Navbar>
        <AuthSection/>
      </Navbar>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default PublicLayout
