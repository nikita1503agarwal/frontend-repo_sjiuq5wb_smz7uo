import React from 'react'
import Spline from '@splinetool/react-spline'
import { Menu, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient Overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>

      {/* Navigation + Content */}
      <div className="relative z-10">
        {/* Nav */}
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/30" />
            <span className="text-lg font-semibold tracking-tight">GlobeWorks</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#services" className="text-sm text-slate-200 hover:text-white">Services</a>
            <a href="#tasks" className="text-sm text-slate-200 hover:text-white">Tasks</a>
            <a href="#blog" className="text-sm text-slate-200 hover:text-white">Travel Blog</a>
            <a href="#companies" className="text-sm text-slate-200 hover:text-white">Companies</a>
          </div>

          <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm text-white backdrop-blur hover:bg-white/15 md:hidden">
            <Menu className="h-4 w-4" />
            Menu
          </button>
        </nav>

        {/* Hero copy */}
        <div className="mx-auto flex max-w-7xl flex-col items-start px-6 pb-24 pt-10 md:pt-24">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
            Technology • Education • Environment
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            A global platform to manage services, tasks, and stories across the world
          </h1>
          <p className="mt-4 max-w-2xl text-base text-slate-200 md:text-lg">
            Build, collaborate, and explore. From company operations to on-the-ground travel insights, everything connects on an interactive 3D canvas.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#services" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm font-medium text-slate-950 transition hover:from-cyan-300 hover:to-blue-500">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#blog" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10">
              Explore Travel Blog
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
