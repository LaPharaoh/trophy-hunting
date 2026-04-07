'use client'

import { useState } from 'react'

const guideSteps = [
  {
    id: 1,
    title: 'Complete the Prologue',
    tag: 'Story',
    unlocked: true,
    trophy: null,
    note: 'Unmissable — plays automatically',
  },
  {
    id: 2,
    title: 'Earn "First Blood" Trophy',
    tag: 'Bronze',
    unlocked: true,
    trophy: { type: 'bronze', name: 'First Blood' },
    note: 'Kill your first enemy in Chapter 1',
  },
  {
    id: 3,
    title: 'Find the hidden collectible in the Ruins',
    tag: 'Missable ⚠️',
    unlocked: true,
    trophy: null,
    note: 'Behind the waterfall — easy to miss',
  },
  {
    id: 4,
    title: 'Earn "Scholar of the First Sin" Trophy',
    tag: 'Silver',
    unlocked: false,
    trophy: { type: 'silver', name: 'Scholar of the First Sin' },
    note: 'Collect all 12 lore tablets in Act 1',
  },
  {
    id: 5,
    title: 'Defeat the Warden Boss without taking damage',
    tag: 'Gold · Missable ⚠️',
    unlocked: false,
    trophy: { type: 'gold', name: 'Untouchable' },
    note: 'Only available on first encounter — no retry',
  },
  {
    id: 6,
    title: 'Complete Act 1 — The Sanctum',
    tag: 'Story',
    unlocked: false,
    trophy: null,
    note: 'Story progression',
  },
]

const trophyColors: Record<string, string> = {
  bronze: '#cd7f32',
  silver: '#c0c0c0',
  gold: '#ffd700',
  platinum: '#a78bfa',
}

export default function LiveGuides() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const completed = guideSteps.filter((s) => s.unlocked).length
  const total = guideSteps.length
  const pct = Math.round((completed / total) * 100)

  return (
    <section id="live-guides" className="relative py-28 overflow-hidden">
      {/* Orbs */}
      <div
        className="orb orb-gold"
        style={{ width: '500px', height: '500px', top: '-100px', right: '-150px', opacity: 0.12 }}
      />
      <div
        className="orb orb-purple"
        style={{ width: '400px', height: '400px', bottom: '-100px', left: '-100px', opacity: 0.12 }}
      />
      <div className="divider-gradient mb-24" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <span className="badge badge-gold mb-5">
              <span className="animate-pulse-glow w-2 h-2 rounded-full bg-[var(--gold)]" />
              Exclusive Feature
            </span>
            <h2 className="section-title font-display mb-6">
              Guides that know{' '}
              <span className="text-gradient-gold">what you've already done.</span>
            </h2>
            <p className="section-subtitle mb-6">
              Every guide on AchievementForge is <strong>live</strong> — it syncs with your
              connected account and automatically crosses off steps and trophies you've
              already earned. No more losing your place. No more Ctrl+F.
            </p>

            <ul className="flex flex-col gap-4 mb-8">
              {[
                {
                  icon: '✓',
                  color: 'var(--gold)',
                  text: 'Completed steps are auto-greyed out from your trophy list',
                },
                {
                  icon: '⚠️',
                  color: '#f87171',
                  text: 'Missable trophies flagged in real-time as you approach them',
                },
                {
                  icon: '▶',
                  color: 'var(--purple-light)',
                  text: '"Resume" jumps you instantly to your next uncompleted step',
                },
                {
                  icon: '🔴',
                  color: '#f87171',
                  text: 'Unobtainable trophies (server shutdowns, delisted games) clearly flagged',
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
                    style={{ background: `${item.color}20`, color: item.color, border: `1px solid ${item.color}40` }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm text-[var(--text-secondary)]">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="#waitlist" id="live-guides-cta" className="btn-primary">
                Try Live Guides →
              </a>
              <a href="#features" className="btn-secondary">
                See All Features
              </a>
            </div>

            {/* vs PowerPyx callout */}
            <p className="mt-6 text-xs text-[var(--text-muted)] italic">
              Unlike PowerPyx or PSNProfiles guides — which are static pages — Live Guides
              are personalized to <em>your</em> save file. The industry&apos;s first.
            </p>
          </div>

          {/* Right — Interactive Guide Demo */}
          <div className="relative">
            <div className="glass-gold rounded-2xl border border-[var(--border-gold)] overflow-hidden">
              {/* Guide header */}
              <div className="bg-[var(--bg-card)] px-5 py-4 border-b border-[var(--border-subtle)] flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs text-[var(--text-muted)] mb-1">📖 Community Guide</div>
                  <div className="font-display font-bold text-[var(--text-primary)] text-sm">
                    Hollow Sanctum — 100% Completion Guide
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="badge badge-gold" style={{ fontSize: '10px', padding: '2px 8px' }}>
                      ✓ Verified
                    </span>
                    <span className="text-xs text-[var(--text-muted)]">Difficulty: 7/10 · ~45 hrs</span>
                  </div>
                </div>
                {/* Progress ring */}
                <div className="flex-shrink-0 text-center">
                  <div className="relative w-14 h-14">
                    <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                      <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                      <circle
                        cx="28" cy="28" r="22" fill="none"
                        stroke="var(--gold)" strokeWidth="4"
                        strokeDasharray={`${2 * Math.PI * 22}`}
                        strokeDashoffset={`${2 * Math.PI * 22 * (1 - pct / 100)}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold text-[var(--gold)]">{pct}%</span>
                    </div>
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-1">
                    {completed}/{total} steps
                  </div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1 bg-white/5">
                <div
                  className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--purple-light)] transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>

              {/* Live sync banner */}
              <div className="bg-[var(--gold)]/10 border-b border-[var(--gold)]/20 px-5 py-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse-glow flex-shrink-0" />
                <span className="text-xs text-[var(--gold)] font-medium">
                  Synced with your PSN account · Last updated 2 min ago
                </span>
              </div>

              {/* Guide steps */}
              <div className="divide-y divide-white/5 max-h-72 overflow-y-auto">
                {guideSteps.map((step) => (
                  <div
                    key={step.id}
                    className={`px-5 py-3.5 flex items-start gap-3 cursor-default transition-colors duration-150 ${
                      step.unlocked
                        ? 'opacity-50'
                        : hoveredStep === step.id
                        ? 'bg-white/4'
                        : ''
                    }`}
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Checkbox */}
                    <div
                      className={`w-4 h-4 rounded flex-shrink-0 mt-0.5 flex items-center justify-center border transition-all ${
                        step.unlocked
                          ? 'bg-[var(--gold)] border-[var(--gold)]'
                          : 'border-white/20'
                      }`}
                    >
                      {step.unlocked && (
                        <svg className="w-2.5 h-2.5 text-[#0a0a14]" fill="none" viewBox="0 0 10 10">
                          <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-sm font-medium ${
                            step.unlocked
                              ? 'text-[var(--text-muted)] line-through'
                              : 'text-[var(--text-primary)]'
                          }`}
                        >
                          {step.title}
                        </span>
                        {step.trophy && (
                          <span
                            className="text-xs px-1.5 py-0.5 rounded font-semibold"
                            style={{
                              background: `${trophyColors[step.trophy.type]}20`,
                              color: trophyColors[step.trophy.type],
                              border: `1px solid ${trophyColors[step.trophy.type]}40`,
                            }}
                          >
                            {step.trophy.type.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span
                          className={`text-xs ${
                            step.tag.includes('Missable')
                              ? 'text-red-400'
                              : 'text-[var(--text-muted)]'
                          }`}
                        >
                          {step.tag}
                        </span>
                        {!step.unlocked && (
                          <span className="text-[10px] text-[var(--text-muted)]">· {step.note}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume button */}
              <div className="px-5 py-3 bg-[var(--bg-card)] border-t border-[var(--border-subtle)]">
                <button
                  id="live-guides-resume"
                  className="w-full btn-primary py-2.5 text-sm justify-center"
                >
                  ▶ Resume — Jump to Step 4
                </button>
              </div>
            </div>

            {/* Glow under card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-[var(--gold)] opacity-10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
