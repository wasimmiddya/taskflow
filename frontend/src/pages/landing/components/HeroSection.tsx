import React from 'react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-100/50 via-slate-50/40 to-white pt-16 pb-12 text-center md:pt-24 md:pb-16">
      {/* Background Subtle Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
        <div className="h-[300px] w-[600px] bg-gradient-to-tr from-purple-300 to-indigo-300 rounded-full" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl md:leading-[1.12]">
          Built for Developers, <br />
          Engineered for Flow.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg leading-relaxed">
          Manage development progress, testing status, and daily sprints in one
          unified, high-clarity interface designed to eliminate distractions.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="rounded-full bg-[#0F172A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900">
            Start for Free
          </button>
          <button className="rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-900">
            View Documentation
          </button>
        </div>
      </div>
    </section>
  )
}
