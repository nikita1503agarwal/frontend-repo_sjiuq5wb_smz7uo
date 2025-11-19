import React from 'react'
import { Wrench, Layers, Shield, Sparkles } from 'lucide-react'

const features = [
  { icon: Wrench, title: 'Managed Services', desc: 'Deploy, monitor, and optimize global operations with automated workflows.' },
  { icon: Layers, title: 'Task Orchestration', desc: 'Assign, track, and complete work with real-time updates and SLA insights.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Role-based access, audit trails, and compliance across regions.' },
  { icon: Sparkles, title: 'AI Assistance', desc: 'Smart suggestions to route requests, summarize tasks, and discover trends.' },
]

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Services that scale with you</h2>
        <p className="mt-3 max-w-2xl text-slate-300">Everything you need to run a modern platform across teams and continents.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-cyan-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
