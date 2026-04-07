const features = [
  {
    id: 'tracker',
    icon: '🎯',
    title: 'Universal Achievement Tracker',
    badge: 'Core',
    badgeType: 'gold',
    description:
      'Aggregate all your trophies and achievements across PlayStation, Xbox, and Steam into a single, beautiful dashboard — with live sync.',
    bullets: [
      'Completion % synced live from each platform',
      'Rarity scores pulled from global unlock rates',
      'Community-aggregated time-to-complete data',
      'True Difficulty Score per game and achievement',
    ],
  },
  {
    id: 'profiles',
    icon: '👤',
    title: 'Hunter Profile & Showcase',
    badge: 'Identity',
    badgeType: 'purple',
    description:
      'Your public profile is your trophy room. Showcase your best platinums, rarest achievements, and hunter rank to the world.',
    bullets: [
      'Curated trophy showcase cabinet (up to 6 picks)',
      'Hunter Rank: Bronze Hunter → Platinum Legend',
      'Fastest completions board vs. site average',
      'Custom themes, banners, and layout modes',
    ],
  },
  {
    id: 'social',
    icon: '🏆',
    title: 'Social Layer & Leaderboards',
    badge: 'Community',
    badgeType: 'gold',
    description:
      'Built for bragging rights. Follow hunters, give Kudos, and compete on global, per-game, and friends-only leaderboards.',
    bullets: [
      'Follow system with a personalized unlock feed',
      'Kudos system (limited to keep them meaningful)',
      'Global, per-game, and friends leaderboards',
      'Shareable milestone cards for Twitter/Discord',
    ],
  },
  {
    id: 'guides',
    icon: '📚',
    title: 'Guides & Walkthroughs',
    badge: 'Knowledge',
    badgeType: 'purple',
    description:
      'Structured UGC guides purpose-built for 100% hunters. Not a generic wiki — every guide is optimized for the completionist path.',
    bullets: [
      'Prominent missable achievement warning blocks',
      'Step-by-step walkthroughs (not list-order)',
      'Community verification + fork/PR system',
      'Tags: #quick-platinum, #online-required, etc.',
    ],
  },
  {
    id: 'backlog',
    icon: '📋',
    title: 'Backlog & Planning Tool',
    badge: 'Planning',
    badgeType: 'gold',
    description:
      'A smart to-do list for completionists. Set a weekly time budget and let AchievementForge plan your path to 100%.',
    bullets: [
      'Time Budget Planner: "I have 6 hours this week"',
      'Session Planner: best next steps for tonight',
      'Streak protection for time-sensitive achievements',
      'Auto-populate from your synced library',
    ],
  },
  {
    id: 'recommendations',
    icon: '✨',
    title: 'Game Recommendation Engine',
    badge: 'Discovery',
    badgeType: 'purple',
    description:
      'Personalized game suggestions based on your history, preferred difficulty, platform, and how much time you have available.',
    bullets: [
      'Quick Win: games you can 100% in <5 hours',
      'Challenge Mode: above your usual difficulty',
      'Rarity Boost: <5% global unlock rate games',
      'Trending: what hunters are completing now',
    ],
  },
  {
    id: 'sessions',
    icon: '🎮',
    title: 'Gaming Sessions',
    badge: 'Multiplayer',
    badgeType: 'gold',
    description:
      'Organize and join cross-platform boosting sessions to earn online and co-op trophies. Find hunting partners across PSN, Xbox, and Steam — all in one place.',
    bullets: [
      'Schedule sessions by game, trophy, and region',
      'Cross-platform: PSN + Xbox + Steam in one lobby',
      'Auto-match with hunters at your completion stage',
      'Session history + verified completion confirmation',
    ],
  },
  {
    id: 'unobtainable',
    icon: '🔴',
    title: 'Unobtainable Trophy Registry',
    badge: 'Protection',
    badgeType: 'purple',
    description:
      'A crowd-sourced registry of every trophy that has been made impossible by server shutdowns, game delists, or patches — so you never waste time chasing the impossible.',
    bullets: [
      'Real-time server status for every online trophy',
      'Community-flagged unobtainable per game patch',
      '🔴 Badge on tracker for affected games',
      'Alerts when a game you own is at risk',
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28 overflow-hidden">
      {/* Orb decoration */}
      <div
        className="orb orb-purple"
        style={{ width: '500px', height: '500px', top: '50%', left: '-200px', opacity: 0.2 }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-gold mb-4">Features</span>
          <h2 className="section-title font-display mb-5">
            Everything a completionist{' '}
            <span className="text-gradient-gold">needs</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Eight interconnected features that work together to make you a more effective,
            efficient, and celebrated trophy hunter.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              id={`feature-${feature.id}`}
              className="glass rounded-2xl p-6 card-hover border border-[var(--border-subtle)] flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="text-3xl">{feature.icon}</div>
                <span
                  className={`badge ${feature.badgeType === 'gold' ? 'badge-gold' : 'badge-purple'}`}
                >
                  {feature.badge}
                </span>
              </div>

              {/* Title + Description */}
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2 font-display">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bullet Points */}
              <ul className="flex flex-col gap-2 mt-auto">
                {feature.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--gold)] mt-0.5 flex-shrink-0">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Community contributions footnote */}
        <div className="mt-12 glass-gold rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="text-4xl">🧠</div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display font-bold text-[var(--text-primary)] mb-1">
              Community Intelligence Layer
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Every user contribution — difficulty ratings, time estimates, tips, missable flags —
              makes the platform smarter for everyone. The True Difficulty Score and Average Completion
              Time are calculated from crowd-sourced, weighted data. Your data helps the next hunter.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a href="#waitlist" id="features-cta" className="btn-primary whitespace-nowrap">
              Join & Contribute →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
