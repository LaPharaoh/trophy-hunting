'use client'

import { useState } from 'react'

export default function WaitlistCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <section id="waitlist" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="orb orb-gold"
        style={{ width: '600px', height: '600px', top: '-100px', left: '50%', transform: 'translateX(-50%)', opacity: 0.12 }}
      />
      <div
        className="orb orb-purple"
        style={{ width: '400px', height: '400px', bottom: '-150px', left: '20%', opacity: 0.15 }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="glass-gold rounded-3xl p-10 md:p-14 text-center border border-[var(--border-gold)]">
            {/* Trophy icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] flex items-center justify-center text-3xl animate-float">
              🏆
            </div>

            <h2 className="section-title font-display mb-4">
              Ready to <span className="text-gradient-gold">forge your legacy?</span>
            </h2>

            <p className="section-subtitle mb-8">
              Join 50,000+ trophy hunters on the waitlist. Early access members get Hunter Pro free
              for 3 months.
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  id="waitlist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3.5 rounded-xl bg-[var(--bg-base)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                />
                <button
                  id="waitlist-submit"
                  type="submit"
                  disabled={loading}
                  className="btn-primary whitespace-nowrap"
                >
                  {loading ? 'Joining...' : 'Join Waitlist →'}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center gap-3">
                <div className="text-5xl animate-float">🎉</div>
                <p className="text-[var(--gold)] font-semibold text-lg font-display">
                  You're on the list!
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  We'll email you when your early access is ready. Trophy hunting starts soon.
                </p>
              </div>
            )}

            {!submitted && (
              <p className="text-xs text-[var(--text-muted)] mt-4">
                No spam ever. Unsubscribe any time. We hate spam as much as we hate missable trophies.
              </p>
            )}

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-[var(--border-subtle)]">
              {[
                { icon: '🔒', label: 'Privacy First' },
                { icon: '🚀', label: 'Early Access' },
                { icon: '💜', label: 'Free Forever Tier' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-xs text-[var(--text-muted)] font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
