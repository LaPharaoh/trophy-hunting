export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="stars-bg" />
      <div
        className="orb orb-purple"
        style={{
          width: '600px',
          height: '600px',
          top: '-200px',
          right: '-200px',
        }}
      />
      <div
        className="orb orb-gold"
        style={{
          width: '400px',
          height: '400px',
          bottom: '0px',
          left: '-150px',
        }}
      />

      <div className="section-container relative z-10 py-24 text-center">
        {/* Eyebrow badge */}
        <div className="flex justify-center mb-6">
          <span className="badge badge-gold animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse-glow" />
            Now in Early Access — Join 50,000+ Hunters
          </span>
        </div>

        {/* Headline */}
        <h1
          className="section-title font-display mb-6 animate-fade-up"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          Hunt Every Trophy.{' '}
          <br />
          <span className="text-gradient-gold">Forge Your Legacy.</span>
        </h1>

        {/* Subheading */}
        <p
          className="section-subtitle max-w-2xl mx-auto mb-10 animate-fade-up"
          style={{ animationDelay: '0.35s', opacity: 0 }}
        >
          The definitive cross-platform achievement hub for completionists. Track PlayStation,
          Xbox, and Steam progress in one place — with guides, leaderboards, and a community
          that understands the grind.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-up"
          style={{ animationDelay: '0.5s', opacity: 0 }}
        >
          <a href="#waitlist" id="hero-cta-primary" className="btn-primary text-base px-8 py-4">
            🏆 Start Hunting Free
          </a>
          <a href="#features" id="hero-cta-secondary" className="btn-secondary text-base px-8 py-4">
            See Features →
          </a>
        </div>

        {/* Platform row */}
        <div
          className="flex flex-wrap items-center justify-center gap-3 mb-20 animate-fade-up"
          style={{ animationDelay: '0.65s', opacity: 0 }}
        >
          <span className="text-sm text-[var(--text-muted)] mr-2">Syncs with:</span>
          <PlatformPill icon="psn" label="PlayStation" />
          <PlatformPill icon="xbox" label="Xbox Live" />
          <PlatformPill icon="steam" label="Steam" />
        </div>

        {/* Dashboard preview */}
        <div
          className="relative max-w-5xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <div className="glass-gold rounded-2xl p-1 glow-purple">
            <div className="bg-[var(--bg-card)] rounded-xl overflow-hidden">
              <DashboardPreview />
            </div>
          </div>
          {/* Reflection blur underneath */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[var(--purple)] opacity-15 blur-3xl rounded-full" />
        </div>
      </div>
    </section>
  )
}

function PlatformPill({ icon, label }: { icon: string; label: string }) {
  const icons: Record<string, string> = {
    psn: '🎮',
    xbox: '🟢',
    steam: '🖥️',
  }
  return (
    <span className="platform-badge">
      <span>{icons[icon]}</span>
      {label}
    </span>
  )
}

function DashboardPreview() {
  return (
    <div className="p-6 text-left">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--purple)] flex items-center justify-center text-white font-bold text-sm">
            VX
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--text-primary)]">VelvetXeno</div>
            <div className="text-xs text-[var(--text-muted)]">🥇 Platinum Legend · 847 completions</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="badge badge-gold">Rank #12 Global</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Trophies', value: '14,287', color: 'var(--gold)' },
          { label: 'Platinums', value: '847', color: 'var(--purple-light)' },
          { label: 'Completion', value: '94.3%', color: '#4ade80' },
          { label: 'Rarity Score', value: '9.2/10', color: '#f472b6' },
        ].map((stat) => (
          <div key={stat.label} className="glass rounded-xl p-4 text-center">
            <div className="text-xl font-bold font-display" style={{ color: stat.color }}>
              {stat.value}
            </div>
            <div className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Recent games */}
      <div className="grid md:grid-cols-3 gap-3">
        {[
          { name: 'Elden Ring', platform: 'PSN', pct: 100, color: '#fbbf24' },
          { name: 'God of War Ragnarök', platform: 'PSN', pct: 78, color: '#7c3aed' },
          { name: 'Baldur\'s Gate 3', platform: 'Steam', pct: 45, color: '#4ade80' },
        ].map((game) => (
          <div key={game.name} className="glass rounded-xl p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-sm font-semibold text-[var(--text-primary)] leading-tight">{game.name}</div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">{game.platform}</div>
              </div>
              {game.pct === 100 && (
                <span className="text-[var(--gold)] text-lg">🏆</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${game.pct}%`, background: game.color }}
                />
              </div>
              <span className="text-xs font-bold" style={{ color: game.color }}>
                {game.pct}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
