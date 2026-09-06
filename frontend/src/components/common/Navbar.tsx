import React from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

interface NavOptions {
  children: React.ReactNode;
}

export const Navbar: React.FC<NavOptions> = ({ children }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-sm shrink-0">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition">
          <div className="flex size-8 items-center justify-center rounded-full bg-[#0F172A] text-xs font-extrabold tracking-tighter text-white shadow-sm">
            TF
          </div>
          <span className="text-lg font-bold tracking-tight text-slate-900">
            TaskFlow
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden flex-1 justify-center px-6 md:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border border-slate-200 bg-slate-50/50 py-1.5 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none transition focus:border-slate-300 focus:bg-white focus:ring-2 focus:ring-slate-100"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {children}
        </div>
      </div>
    </header>
  )
}
