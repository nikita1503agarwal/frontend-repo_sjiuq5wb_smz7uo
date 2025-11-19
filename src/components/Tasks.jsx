import React from 'react'
import { CheckCircle2, Clock, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Tasks completed', value: '128k', icon: CheckCircle2 },
  { label: 'Avg. turnaround', value: '3.2h', icon: Clock },
  { label: 'Productivity lift', value: '+37%', icon: TrendingUp },
]

export default function Tasks() {
  return (
    <section id="tasks" className="relative w-full bg-slate-960 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Orchestrate tasks with clarity</h2>
            <p className="mt-3 text-slate-300">Create workflows, automate handoffs, and visualize progress in real time across your global teams.</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 inline-flex rounded-lg bg-white/10 p-2 text-cyan-300">
                    <s.icon className="h-4 w-4" />
                  </div>
                  <div className="text-2xl font-semibold">{s.value}</div>
                  <div className="text-xs text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-4">
            <div className="absolute inset-0 bg-[radial-gradient(1000px_400px_at_80%_0%,rgba(6,182,212,0.15),transparent)]" />
            <div className="relative grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-slate-900/60 p-4">
                  <div className="h-3 w-2/3 rounded bg-white/10" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-white/5" />
                  <div className="mt-6 h-6 w-16 rounded bg-cyan-500/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
