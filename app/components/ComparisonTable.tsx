const competitors = [
  {
    name: 'PSNProfiles',
    short: 'PSNP',
  },
  {
    name: 'TrueAchievements',
    short: 'TA/TT',
  },
  {
    name: 'PowerPyx',
    short: 'PPyx',
  },
]

type CellValue = boolean | 'partial'

interface Row {
  feature: string
  af: CellValue
  psnp: CellValue
  ta: CellValue
  ppyx: CellValue
  afNote: string | null
}

const rows: Row[] = [
  {
    feature: 'PlayStation tracking',
    af: true,
    psnp: true,
    ta: true,
    ppyx: false,
    afNote: null,
  },
  {
    feature: 'Xbox tracking',
    af: true,
    psnp: false,
    ta: true,
    ppyx: false,
    afNote: null,
  },
  {
    feature: 'Steam tracking',
    af: true,
    psnp: false,
    ta: 'partial',
    ppyx: false,
    afNote: null,
  },
  {
    feature: 'Single unified profile',
    af: true,
    psnp: false,
    ta: false,
    ppyx: false,
    afNote: 'All platforms, one identity',
  },
  {
    feature: 'Live Guides (synced to your save)',
    af: true,
    psnp: false,
    ta: false,
    ppyx: false,
    afNote: 'Industry first',
  },
  {
    feature: 'Structured trophy guides',
    af: true,
    psnp: true,
    ta: true,
    ppyx: true,
    afNote: null,
  },
  {
    feature: 'Guide verification system',
    af: true,
    psnp: 'partial',
    ta: 'partial',
    ppyx: false,
    afNote: null,
  },
  {
    feature: 'Multiplayer Gaming Sessions',
    af: true,
    psnp: true,
    ta: true,
    ppyx: false,
    afNote: 'Cross-platform boosting',
  },
  {
    feature: 'Unobtainable trophy registry',
    af: true,
    psnp: 'partial',
    ta: 'partial',
    ppyx: false,
    afNote: 'Real-time server status',
  },
  {
    feature: 'Backlog + time budget planner',
    af: true,
    psnp: false,
    ta: false,
    ppyx: false,
    afNote: null,
  },
  {
    feature: 'AI game recommendations',
    af: true,
    psnp: false,
    ta: false,
    ppyx: false,
    afNote: null,
  },
  {
    feature: 'Rarity-weighted leaderboards',
    af: true,
    psnp: 'partial',
    ta: true,
    ppyx: false,
    afNote: 'No shovelware inflation',
  },
  {
    feature: 'Modern mobile experience',
    af: true,
    psnp: false,
    ta: 'partial',
    ppyx: 'partial',
    afNote: null,
  },
]


function Cell({ value, note }: { value: CellValue; note?: string | null }) {
  if (value === true) {
    return (
      <td className="px-4 py-3.5 text-center">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[var(--gold)] font-bold text-base">✓</span>
          {note && (
            <span className="text-[9px] text-[var(--gold)] font-semibold uppercase tracking-wide leading-tight max-w-[80px] text-center">
              {note}
            </span>
          )}
        </div>
      </td>
    )
  }
  if (value === 'partial') {
    return (
      <td className="px-4 py-3.5 text-center">
        <span className="text-amber-400 text-sm">◑</span>
      </td>
    )
  }
  return (
    <td className="px-4 py-3.5 text-center">
      <span className="text-[var(--text-muted)] text-base">✕</span>
    </td>
  )
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="relative py-24 overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <span className="badge badge-purple mb-4">How We Stack Up</span>
          <h2 className="section-title font-display mb-5">
            Built for hunters.{' '}
            <span className="text-gradient-gold">Not just PlayStation fans.</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Every other platform is either siloed to one console or has no real product
            features — just static pages. AchievementForge is the only platform built
            for the modern multi-platform hunter.
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-[var(--border-subtle)]">
          <table className="w-full" aria-label="Feature comparison table">
            <thead>
              <tr className="bg-[var(--bg-card)] border-b border-[var(--border-subtle)]">
                <th className="text-left px-5 py-4 text-sm font-semibold text-[var(--text-secondary)] w-1/2">
                  Feature
                </th>
                {/* AchievementForge — highlighted */}
                <th className="px-4 py-4 text-center min-w-[110px]">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="px-3 py-1 rounded-lg bg-[var(--gold)]/15 border border-[var(--gold)]/30">
                      <span className="text-sm font-bold text-gradient-gold font-display">
                        AchievementForge
                      </span>
                    </div>
                    <span className="text-[10px] text-[var(--gold)] font-semibold uppercase tracking-widest">
                      Us
                    </span>
                  </div>
                </th>
                {competitors.map((c) => (
                  <th
                    key={c.name}
                    className="px-4 py-4 text-center min-w-[100px]"
                  >
                    <div className="text-sm font-semibold text-[var(--text-secondary)]">
                      {c.short}
                    </div>
                    <div className="text-[10px] text-[var(--text-muted)] mt-0.5 hidden md:block">
                      {c.name}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={`border-b border-[var(--border-subtle)] transition-colors hover:bg-white/[0.02] ${
                    i % 2 === 0 ? 'bg-[var(--bg-surface)]/40' : ''
                  }`}
                >
                  <td className="px-5 py-3.5 text-sm text-[var(--text-secondary)]">
                    {row.feature}
                  </td>
                  {/* AchievementForge column — highlighted */}
                  <td className="px-4 py-3.5 text-center bg-[var(--gold)]/[0.035]">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-[var(--gold)] font-bold text-base">
                        {row.af === true ? '✓' : row.af === 'partial' ? '◑' : '✕'}
                      </span>
                      {row.afNote && (
                        <span className="text-[9px] text-[var(--gold)] font-semibold uppercase tracking-wide leading-tight max-w-[80px] text-center">
                          {row.afNote}
                        </span>
                      )}
                    </div>
                  </td>
                  <Cell value={row.psnp} />
                  <Cell value={row.ta} />
                  <Cell value={row.ppyx} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-5 mt-5 text-xs text-[var(--text-muted)]">
          <span className="flex items-center gap-1.5">
            <span className="text-[var(--gold)]">✓</span> Full support
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-amber-400">◑</span> Partial support
          </span>
          <span className="flex items-center gap-1.5">
            <span>✕</span> Not available
          </span>
        </div>

        {/* CTA under table */}
        <div className="text-center mt-10">
          <a href="#waitlist" id="comparison-cta" className="btn-primary">
            🏆 Join AchievementForge Free
          </a>
        </div>
      </div>
    </section>
  )
}
