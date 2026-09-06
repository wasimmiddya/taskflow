import React from 'react'
import { Footprints, Bug, Kanban } from 'lucide-react'

export const FeatureCardsSection: React.FC = () => {
  const features = [
    {
      icon: Footprints,
      title: 'Sprint Tracking',
      description:
        'Manage day-to-day development activities with precision. Assign story points, set milestones, and monitor velocity without the clutter.',
    },
    {
      icon: Bug,
      title: 'Testing Workflows',
      description:
        'Track bug reports and testing status seamlessly. Link commits directly to issues and automate status updates based on CI/CD pipelines.',
    },
    {
      icon: Kanban,
      title: 'Kanban Boards',
      description:
        'Visualize project progress with highly customizable columns. Drag and drop functionality engineered for speed and reliability.',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Engineered for Technical Teams
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col rounded-xl border border-slate-200/80 bg-white p-6 shadow-xs transition hover:shadow-md"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
