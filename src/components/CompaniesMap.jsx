import React from 'react'
import { Globe2, Building2 } from 'lucide-react'

// Simple world map SVG dots as background with company cards overlay
export default function CompaniesMap() {
  const companies = [
    { name: 'Nordic Labs', region: 'Europe', lat: 59.9, lon: 10.7 },
    { name: 'Pacific Ventures', region: 'Asia', lat: 35.7, lon: 139.7 },
    { name: 'Andes Group', region: 'South America', lat: -34.6, lon: -58.4 },
    { name: 'Sahara Tech', region: 'Africa', lat: 30.0, lon: 31.2 },
  ]

  // Convert lat/lon to approximate x/y positions on a simple equirectangular SVG
  const toXY = (lat, lon) => {
    const x = ((lon + 180) / 360) * 100
    const y = ((90 - lat) / 180) * 100
    return { left: `${x}%`, top: `${y}%` }
  }

  return (
    <section id="companies" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Companies around the world</h2>
            <p className="mt-2 max-w-2xl text-slate-300">Explore partners and offices across regions with a live, interactive map.</p>
          </div>
          <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm md:inline-flex">
            <Globe2 className="h-4 w-4 text-cyan-300" /> Global coverage
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-0">
          {/* World map canvas */}
          <div className="relative h-[420px]">
            <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-full w-full">
              <defs>
                <radialGradient id="dot" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(34,211,238,0.7)" />
                  <stop offset="100%" stopColor="rgba(34,211,238,0)" />
                </radialGradient>
              </defs>
              {Array.from({ length: 600 }).map((_, i) => (
                <circle key={i} cx={Math.random() * 800} cy={Math.random() * 400} r={0.8} fill="url(#dot)" />
              ))}
            </svg>

            {/* Company pins */}
            {companies.map((c) => (
              <div key={c.name} className="absolute" style={toXY(c.lat, c.lon)}>
                <div className="-translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-2 rounded-lg bg-slate-900/80 px-3 py-2 text-xs backdrop-blur">
                    <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                    <span className="font-medium">{c.name}</span>
                    <span className="text-slate-400">• {c.region}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer ribbon */}
          <div className="flex items-center justify-between border-t border-white/10 p-4 text-sm text-slate-300">
            <div className="inline-flex items-center gap-2">
              <Building2 className="h-4 w-4 text-cyan-300" /> 120+ companies onboarded
            </div>
            <div>Updated daily</div>
          </div>
        </div>
      </div>
    </section>
  )
}
