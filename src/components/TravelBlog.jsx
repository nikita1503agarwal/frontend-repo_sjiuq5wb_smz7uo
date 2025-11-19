import React from 'react'
import { ArrowRight, MapPinned } from 'lucide-react'

const posts = [
  { id: 1, title: 'Cycling through Kyoto', excerpt: 'Hidden alleys, tea houses, and sunrise temples.', location: 'Japan', tag: 'Asia' },
  { id: 2, title: 'Patagonia on foot', excerpt: 'Wind-swept valleys and glaciers that roar.', location: 'Argentina', tag: 'South America' },
  { id: 3, title: 'Coastal trains of Portugal', excerpt: 'Sunlit cliffs, tiles, and the Atlantic breeze.', location: 'Portugal', tag: 'Europe' },
]

export default function TravelBlog() {
  return (
    <section id="blog" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Travel blog</h2>
            <p className="mt-2 text-slate-300">Stories from the road written by our community worldwide.</p>
          </div>
          <a href="#" className="hidden items-center gap-2 text-sm text-cyan-300 hover:text-cyan-200 md:inline-flex">
            View all
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="h-40 bg-gradient-to-br from-cyan-600/30 to-blue-700/30" />
              <div className="space-y-2 p-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  <MapPinned className="h-3.5 w-3.5" />
                  {p.location} • {p.tag}
                </span>
                <h3 className="text-lg font-semibold group-hover:text-cyan-300">{p.title}</h3>
                <p className="text-sm text-slate-300">{p.excerpt}</p>
                <button className="mt-4 text-sm text-cyan-300 hover:text-cyan-200">Read story</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
