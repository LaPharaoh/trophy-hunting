const stats = [
  { value: '50K+', label: 'Trophy Hunters', icon: '👥' },
  { value: '2M+', label: 'Achievements Tracked', icon: '🎯' },
  { value: '18K+', label: 'Guides Written', icon: '📖' },
  { value: '847K+', label: 'Kudos Given', icon: '❤️' },
]

export default function CommunityStats() {
  return (
    <section id="community" className="relative py-20 overflow-hidden">
      <div className="divider-gradient mb-16" />

      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title font-display mb-3">
            A community built on{' '}
            <span className="text-gradient-gold">the grind</span>
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Join tens of thousands of completionists who are already tracking, sharing, and competing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 text-center card-hover border border-[var(--border-subtle)]"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="stat-number text-gradient-gold mb-1">{stat.value}</div>
              <div className="text-sm text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social proof strip */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['🟡', '🔵', '🟣', '🟢', '🔴'].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[var(--bg-base)] flex items-center justify-center text-xs"
                  style={{ background: 'var(--bg-card)' }}
                >
                  {color}
                </div>
              ))}
            </div>
            <span>Hunters online right now</span>
          </div>
          <div className="w-px h-4 bg-[var(--border-subtle)] hidden md:block" />
          <span>⭐ 4.9/5 average hunter rating</span>
          <div className="w-px h-4 bg-[var(--border-subtle)] hidden md:block" />
          <span>🏅 #1 Ranked Achievement Tracker</span>
        </div>
      </div>

      <div className="divider-gradient mt-16" />
    </section>
  )
}
