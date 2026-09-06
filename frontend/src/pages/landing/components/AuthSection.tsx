import React from 'react'
import { Link } from 'react-router-dom'

export const AuthSection: React.FC = () => {
    return <>
        <Link
            to="/auth/login"
            className="rounded-full border border-slate-200/90 px-4.5 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
          >
            Login
          </Link>
          <Link
            to="/auth/signup"
            className="rounded-full bg-[#0F172A] px-4.5 py-1.5 text-sm font-medium text-white transition hover:bg-slate-800 shadow-sm"
          >
            Signup
          </Link>
    </>
}