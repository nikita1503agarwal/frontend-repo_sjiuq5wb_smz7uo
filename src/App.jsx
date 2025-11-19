import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Tasks from './components/Tasks'
import TravelBlog from './components/TravelBlog'
import CompaniesMap from './components/CompaniesMap'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <Services />
      <Tasks />
      <TravelBlog />
      <CompaniesMap />

      <footer className="border-t border-white/10 bg-slate-950/80 p-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} GlobeWorks — Built for a connected world
      </footer>
    </div>
  )
}

export default App
