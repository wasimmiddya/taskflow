import React from 'react'
import { Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-50/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-90 transition">
              <div className="flex size-7 items-center justify-center rounded-full bg-[#0F172A] text-[10px] font-extrabold tracking-tighter text-white">
                TF
              </div>
              <span className="text-base font-bold text-slate-900">TaskFlow</span>
            </Link>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Streamline your workflow with ease. The all-in-one platform for modern
              teams.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
              Product
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-500">
              <li>
                <a href="#features" className="hover:text-slate-900 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-slate-900 transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-slate-900 transition">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#changelog" className="hover:text-slate-900 transition">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
              Company
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-500">
              <li>
                <a href="#about" className="hover:text-slate-900 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-slate-900 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-slate-900 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-slate-900 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-wider text-slate-900 uppercase">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-xs text-slate-500">
              <li>
                <a href="#privacy" className="hover:text-slate-900 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-slate-900 transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-slate-900 transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 py-6 sm:flex-row">
          <p className="text-[11px] text-slate-400">
            &copy; 2024 TaskFlow Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="#twitter"
              className="hover:text-slate-600 transition"
              aria-label="Twitter / X"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="#linkedin"
              className="hover:text-slate-600 transition"
              aria-label="LinkedIn"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
              </svg>
            </a>
            <a
              href="#website"
              className="hover:text-slate-600 transition"
              aria-label="Website"
            >
              <Globe className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
