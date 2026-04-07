const phases = [
  {
    id: 'mvp',
    label: 'MVP',
    timeline: 'Months 1–4',
    status: 'live',
    color: 'var(--gold)',
    items: [
      'User auth + Steam integration',
      'Basic achievement tracker (Steam)',
      'Public hunter profile with stats',
      'Guide creation & viewing',
      'Basic backlog list',
    ],
  },
  {
    id: 'v1',
    label: 'V1',
    timeline: 'Months 5–8',
    status: 'building',
    color: 'var(--purple-light)',
    items: [
      'PSN + Xbox integration',
      'Community contribution system',
      'True Difficulty Score + Avg. Time',
      'Full social layer (follow, kudos, comments)',
      'Guide verification workflow',
      'Backlog planning mode',
    ],
  },
  {
    id: 'v2',
    label: 'V2',
    timeline: 'Months 9–14',
    status: 'planned',
    color: '#4ade80',
    items: [
      'Recommendation engine (rule-based)',
      'Global + per-game leaderboards',
      'Shareable milestone cards',
      'Session planner',
      'Mobile-optimized PWA',
    ],
  },
  {
    id: 'v3',
    label: 'V3',
    timeline: 'Months 15+',
    status: 'future',
    color: '#f472b6',
    items: [
      'ML-based recommendation engine',
      'Native iOS & Android apps',
      'Public API for developers',
      'Console companion app',
      'Live events & community challenges',
    ],
  },
]

const statusLabels: Record<string, string> = {
  live: '🟢 Live Now',
  building: '🔨 Building',
  planned: '📐 Planned',
  future: '🔭 Future',
}

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-28 overflow-hidden">
      <div
        className="orb orb-purple"
        style={{ width: '600px', height: '600px', bottom: '-200px', right: '-200px', opacity: 0.15 }}
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="badge badge-purple mb-4">Roadmap</span>
          <h2 className="section-title font-display mb-5">
            The path from <span className="text-gradient-gold">MVP to legend</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Here's exactly what we're building and when. No vague promises — just a clear
            game plan from a team that ships.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.id}
              id={`roadmap-${phase.id}`}
              className={`glass rounded-2xl p-6 border flex flex-col gap-4 transition-all duration-300 ${
                phase.status === 'live'
                  ? 'border-[var(--gold)] glow-gold'
                  : 'border-[var(--border-subtle)] card-hover'
              }`}
            >
              {/* Phase label */}
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className="font-display font-bold text-2xl"
                    style={{ color: phase.color }}
                  >
                    {phase.label}
                  </span>
                  <div className="text-xs text-[var(--text-muted)] mt-0.5">{phase.timeline}</div>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{
                    background: `${phase.color}20`,
                    color: phase.color,
                    border: `1px solid ${phase.color}40`,
                  }}
                >
                  {statusLabels[phase.status]}
                </span>
              </div>

              <div className="divider-gradient" />

              {/* Items */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span style={{ color: phase.color }} className="mt-0.5 flex-shrink-0">
                      {phase.status === 'live' ? '✓' : '○'}
                    </span>
                    <span
                      className={
                        phase.status === 'live'
                          ? 'text-[var(--text-secondary)]'
                          : 'text-[var(--text-muted)]'
                      }
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-[var(--text-secondary)] mb-5 text-sm">
            Want to shape the roadmap? Join early access and vote on upcoming features.
          </p>
          <a href="#waitlist" id="roadmap-cta" className="btn-primary">
            🎯 Join Early Access
          </a>
        </div>
      </div>
    </section>
  )
}
