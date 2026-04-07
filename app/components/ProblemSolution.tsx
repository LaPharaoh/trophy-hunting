const problems = [
  {
    problem: 'Progress is fragmented across PlayStation, Xbox, and Steam',
    solution: "Universal dashboard syncs all platforms into one view — one place for every trophy and achievement you've ever earned.",
    icon: '🔗',
  },
  {
    problem: 'Completion strategies are scattered across Reddit, YouTube, and wikis',
    solution: 'Structured UGC guide system built for 100% hunters — step-by-step walkthroughs, missable warnings, and community-verified routes.',
    icon: '📖',
  },
  {
    problem: 'No social layer built specifically for completionists',
    solution: 'Kudos, leaderboards, bragging rights, and a community that actually understands the grind — not just casual gamers.',
    icon: '🤝',
  },
]

export default function ProblemSolution() {
  return (
    <section id="problem" className="relative py-28 overflow-hidden">
      {/* Subtle gradient divider at top */}
      <div className="divider-gradient mb-24" />

      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-purple mb-4">The Problem</span>
          <h2 className="section-title font-display mb-5">
            Trophy hunting is <span className="text-gradient-gold">broken</span>.{' '}
            <br className="hidden md:block" />
            We&apos;re fixing it.
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Three core problems that every completionist faces — and how AchievementForge solves each one.
          </p>
        </div>

        {/* Problem/Solution Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-6 card-hover border border-[var(--border-subtle)] flex flex-col gap-5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-[var(--purple-dim)]/30 flex items-center justify-center text-2xl">
                {item.icon}
              </div>

              {/* Problem */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-2">
                  ❌ Problem
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.problem}
                </p>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
              />

              {/* Solution */}
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[var(--gold)] mb-2">
                  ✅ Solution
                </div>
                <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-lg md:text-xl italic text-[var(--text-secondary)] max-w-2xl mx-auto">
            "Every feature should save the hunter time,{' '}
            <span className="text-[var(--gold)] not-italic font-semibold">validate their effort</span>,
            {' '}or connect them to a community that understands the grind."
          </blockquote>
          <p className="text-sm text-[var(--text-muted)] mt-3">— The AchievementForge Philosophy</p>
        </div>
      </div>
    </section>
  )
}
