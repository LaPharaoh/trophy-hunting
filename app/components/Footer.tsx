export default function Footer() {
  const year = new Date().getFullYear()

  const links = {
    Product: ['Features', 'Pricing', 'Roadmap', 'Changelog'],
    Community: ['Leaderboards', 'Guides', 'Discord', 'Twitter / X'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  }

  return (
    <footer className="relative border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]">
      <div className="section-container py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dim)] flex items-center justify-center">
                <span className="text-[#0a0a14] text-base">🏆</span>
              </div>
              <span className="font-display font-bold text-[var(--text-primary)]">
                Achievement<span className="text-gradient-gold">Forge</span>
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-xs">
              The definitive platform for trophy hunters, completionists, and achievement chasers.
            </p>
            {/* Platform badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['🎮 PSN', '🟢 Xbox', '🖥️ Steam'].map((p) => (
                <span key={p} className="text-xs px-2 py-1 rounded-md bg-white/5 text-[var(--text-muted)] border border-white/5">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:text-[var(--gold)] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="divider-gradient mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <span>
            © {year} AchievementForge. All rights reserved. Built for completionists.
          </span>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <span className="text-red-400">❤️</span>
            <span>and far too many gaming sessions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
