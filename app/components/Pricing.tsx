const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for casual collectors who want to start tracking.',
    badge: null,
    features: [
      '2 platform syncs (PSN + Steam or Xbox)',
      'Basic achievement tracker',
      'Public hunter profile',
      'Full guide access (read-only)',
      'Basic backlog list',
      'Community leaderboards',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'secondary',
  },
  {
    id: 'pro',
    name: 'Hunter Pro',
    price: '$5',
    period: 'per month',
    description: 'For serious completionists who want every edge.',
    badge: 'Most Popular',
    features: [
      'All 3 platforms (PSN + Xbox + Steam)',
      'Advanced backlog planning tools',
      'Time budget & session planner',
      'Full guide creation + co-authoring',
      'Full social layer — comments, kudos',
      'Ad-free experience',
      'Priority community support',
    ],
    cta: 'Start Hunter Pro',
    ctaStyle: 'primary',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '$10',
    period: 'per month',
    description: 'For the top 1% of hunters who demand the best.',
    badge: null,
    features: [
      'Everything in Hunter Pro',
      'Priority platform sync (near real-time)',
      'Custom profile themes & backgrounds',
      'Early access to new features',
      'Elite badge on profile & leaderboards',
      'Direct line to dev team for feedback',
    ],
    cta: 'Go Elite',
    ctaStyle: 'secondary',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div
        className="orb orb-gold"
        style={{ width: '500px', height: '500px', top: '-100px', right: '-200px', opacity: 0.15 }}
      />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <span className="badge badge-gold mb-4">Pricing</span>
          <h2 className="section-title font-display mb-5">
            Simple, transparent{' '}
            <span className="text-gradient-gold">pricing</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            No pay-to-win. No ranking manipulation. Every tier earns their place through
            actual achievement data.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              id={`pricing-${plan.id}`}
              className={`rounded-2xl p-7 flex flex-col gap-6 border transition-all duration-300 ${
                plan.badge
                  ? 'pricing-featured border-[var(--purple)] scale-[1.02] shadow-2xl'
                  : 'glass border-[var(--border-subtle)] card-hover'
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="-mt-1">
                  <span className="badge badge-purple">{plan.badge}</span>
                </div>
              )}

              {/* Plan header */}
              <div>
                <div className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-bold text-4xl text-gradient-gold">
                    {plan.price}
                  </span>
                  <span className="text-sm text-[var(--text-muted)]">{plan.period}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{plan.description}</p>
              </div>

              {/* Divider */}
              <div className="divider-gradient" />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-[var(--gold)] mt-0.5 flex-shrink-0 font-bold">✓</span>
                    <span className="text-[var(--text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#waitlist"
                id={`pricing-cta-${plan.id}`}
                className={plan.ctaStyle === 'primary' ? 'btn-primary text-center justify-center' : 'btn-secondary text-center justify-center'}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-[var(--text-muted)] mt-8">
          💳 No credit card required to start · Cancel anytime · 7-day money-back guarantee
        </p>
      </div>
    </section>
  )
}
