import React from 'react'
import { Calendar, SlidersHorizontal, Plus, MessageSquare, CheckSquare } from 'lucide-react'

export const SprintBoardPreview: React.FC = () => {
  return (
    <section className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-16">
      {/* Board Outer Container */}
      <div className="rounded-2xl border border-slate-200/80 bg-white p-4 sm:p-6 shadow-xl shadow-slate-200/50">
        {/* Board Top Header */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <h3 className="text-sm font-bold text-slate-900 sm:text-base">
              Sprint 42
            </h3>
            <div className="flex items-center gap-1.5 text-xs text-slate-400">
              <Calendar className="size-3.5" />
              <span>Oct 12 - Oct 28</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex size-7 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 transition">
              <SlidersHorizontal className="size-3.5" />
            </button>
            <button className="flex size-7 items-center justify-center rounded-md bg-[#0F172A] text-white hover:bg-slate-800 transition">
              <Plus className="size-4" />
            </button>
          </div>
        </div>

        {/* Board Columns Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Column 1: To Do */}
          <div className="rounded-xl bg-slate-100/70 p-3">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>To Do</span>
              <span className="flex size-5 items-center justify-center rounded bg-slate-200/80 text-[11px] text-slate-600">
                3
              </span>
            </div>

            {/* Task Card */}
            <div className="rounded-lg border border-slate-200/70 bg-white p-3.5 shadow-xs">
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                  Frontend
                </span>
              </div>
              <h4 className="mt-2 text-xs font-bold text-slate-800 leading-snug">
                Implement robust error handling for API calls
              </h4>
              <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-2.5">
                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                  <CheckSquare className="size-3" />
                  <span>1/3</span>
                </div>
                <div className="size-5 rounded-full border border-slate-200 bg-slate-200" />
              </div>
            </div>
          </div>

          {/* Column 2: In Progress */}
          <div className="rounded-xl bg-slate-100/70 p-3">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>In Progress</span>
              <span className="flex size-5 items-center justify-center rounded bg-slate-200/80 text-[11px] text-slate-600">
                1
              </span>
            </div>

            {/* Task Card */}
            <div className="rounded-lg border border-slate-200/70 bg-white p-3.5 shadow-xs">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-blue-600">
                  Backend
                </span>
                <span className="rounded bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-500">
                  High Priority
                </span>
              </div>
              <h4 className="mt-2 text-xs font-bold text-slate-800 leading-snug">
                Optimize database queries for dashboard view
              </h4>
              <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-2.5">
                <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                  <MessageSquare className="size-3" />
                  <span>4</span>
                </div>
                <div className="flex size-5 items-center justify-center rounded-full bg-[#1E3A8A] text-[9px] font-bold text-white">
                  JD
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: In Review */}
          <div className="rounded-xl bg-slate-100/70 p-3">
            <div className="mb-3 flex items-center justify-between text-xs font-semibold text-slate-600">
              <span>In Review</span>
              <span className="flex size-5 items-center justify-center rounded bg-slate-200/80 text-[11px] text-slate-600">
                2
              </span>
            </div>

            {/* Task Card */}
            <div className="rounded-lg border border-slate-200/70 bg-white p-3.5 shadow-xs">
              <div className="flex items-center gap-1.5">
                <span className="rounded bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                  Design
                </span>
              </div>
              <h4 className="mt-2 text-xs font-bold text-slate-800 leading-snug">
                Update component library colors
              </h4>
              <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-2.5">
                <div className="text-[11px] text-slate-400" />
                <div className="size-5 rounded-full border border-slate-200 bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
