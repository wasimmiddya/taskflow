import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export const AccomplishmentsSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column Text Content */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Data-Driven Accomplishments
            </h2>
            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-500">
              Detailed dashboards for project progress and developer accomplishment
              analysis. Identify bottlenecks, celebrate high velocity, and maintain a
              clear view of your team&apos;s throughput.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                    Velocity Tracking
                  </h4>
                  <p className="text-xs text-slate-500">
                    Monitor team output sprint over sprint.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-blue-600" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 sm:text-sm">
                    Bottleneck Identification
                  </h4>
                  <p className="text-xs text-slate-500">
                    Spot issues before they impact delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Productivity Score Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-900 sm:text-sm">
                Productivity Score
              </h3>
              <span className="rounded bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
                Last 30 Days
              </span>
            </div>

            {/* SVG Productivity Chart */}
            <div className="mt-8 pt-4">
              <div className="relative h-44 w-full">
                {/* Background grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between opacity-30">
                  <div className="w-full border-b border-dashed border-slate-200" />
                  <div className="w-full border-b border-dashed border-slate-200" />
                  <div className="w-full border-b border-dashed border-slate-200" />
                  <div className="w-full border-b border-dashed border-slate-200" />
                </div>

                {/* SVG Curve */}
                <svg
                  className="absolute inset-0 h-full w-full overflow-visible"
                  viewBox="0 0 500 150"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Fill area */}
                  <path
                    d="M 0 110 Q 80 80 150 100 T 300 40 T 500 20 L 500 150 L 0 150 Z"
                    fill="url(#chartGradient)"
                  />
                  {/* Stroke Line */}
                  <path
                    d="M 0 110 Q 80 80 150 100 T 300 40 T 500 20"
                    fill="none"
                    stroke="#2563eb"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  {/* Data Points */}
                  <circle cx="0" cy="110" r="4" fill="#2563eb" />
                  <circle cx="100" cy="85" r="4" fill="#2563eb" />
                  <circle cx="200" cy="95" r="4" fill="#2563eb" />
                  <circle cx="300" cy="40" r="4" fill="#2563eb" />
                  <circle cx="400" cy="35" r="4" fill="#2563eb" />
                  <circle cx="500" cy="20" r="4" fill="#2563eb" />
                </svg>
              </div>

              {/* X-Axis Labels */}
              <div className="mt-4 flex justify-between text-[10px] font-medium text-slate-400">
                <span>W1</span>
                <span>W2</span>
                <span>W3</span>
                <span>W4</span>
                <span>W5</span>
                <span>W6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
