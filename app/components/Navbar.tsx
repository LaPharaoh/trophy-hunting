'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-[var(--border-subtle)]'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" id="nav-logo">
            <div className="relative w-9 h-9">
              <Image
                src="/logo.png"
                alt="AchievementForge Logo"
                width={36}
                height={36}
                className="rounded-lg object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <span className="font-display font-bold text-lg tracking-tight">
              Achievement<span className="text-gradient-gold">Forge</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'Roadmap', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                id={`nav-${item.toLowerCase()}`}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#waitlist" id="nav-waitlist" className="btn-secondary text-sm py-2.5 px-5">
              Sign In
            </a>
            <a href="#waitlist" id="nav-cta" className="btn-primary text-sm py-2.5 px-5">
              Start Free →
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="nav-menu-toggle"
            className="md:hidden p-2 rounded-lg glass text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden glass rounded-xl mb-4 p-4 flex flex-col gap-3">
            {['Features', 'Pricing', 'Roadmap', 'Community'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="divider-gradient my-1" />
            <a href="#waitlist" className="btn-primary text-sm text-center" onClick={() => setMenuOpen(false)}>
              Start Free →
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
