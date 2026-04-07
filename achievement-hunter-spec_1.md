# 🏆 AchievementForge — Product Specification

> *The definitive platform for trophy hunters, completionists, and achievement chasers.*

---

## Table of Contents

1. [Vision & Overview](#1-vision--overview)
2. [Target Audience](#2-target-audience)
3. [Core Feature Set](#3-core-feature-set)
   - 3.1 [Universal Achievement Tracker](#31-universal-achievement-tracker)
   - 3.2 [User Profiles](#32-user-profiles)
   - 3.3 [Social Layer](#33-social-layer)
   - 3.4 [Guides & Walkthroughs](#34-guides--walkthroughs)
   - 3.5 [Backlog & Planning Tool](#35-backlog--planning-tool)
   - 3.6 [Game Recommendations Engine](#36-game-recommendations-engine)
   - 3.7 [Community Contributions & Aggregated Data](#37-community-contributions--aggregated-data)
4. [Data Models](#4-data-models)
5. [Platform Integrations](#5-platform-integrations)
6. [Tech Stack Recommendations](#6-tech-stack-recommendations)
7. [Monetization Considerations](#7-monetization-considerations)
8. [Roadmap (MVP → V2 → V3)](#8-roadmap-mvp--v2--v3)

---

## 1. Vision & Overview

**AchievementForge** is a cross-platform achievement and trophy hunting hub that unifies progress tracking, community, planning, and knowledge-sharing in one place. It solves three key problems that completionists face today:

| Problem | How We Solve It |
|---|---|
| Progress is siloed across PlayStation, Xbox, and Steam | Universal tracker that syncs all platforms into one dashboard |
| Optimal completion strategies are scattered across Reddit, YouTube, and wikis | Structured UGC guide system built for 100% hunters |
| No social layer built specifically for completionists | Kudos, bragging rights, and a community of hunters |

**Core philosophy:** Every feature should save the hunter time, validate their effort, or connect them to a community that understands the grind.

---

## 2. Target Audience

### Primary
- **Completionists** — Players who aim to 100% every game they start.
- **Trophy Hunters** — PlayStation-native audience familiar with Gold/Silver/Bronze/Platinum structure.
- **Achievement Hunters** — Xbox and Steam players chasing Gamerscore and completion percentages.

### Secondary
- **Casual collectors** — Players who want to track progress without committing to 100%.
- **Speedrunners** — Overlap with fastest-completion leaderboards.
- **Guide writers** — Community contributors who want a platform for their knowledge.

---

## 3. Core Feature Set

---

### 3.1 Universal Achievement Tracker

The backbone of the platform. Aggregates a user's achievement/trophy data across all linked platforms into a unified dashboard.

#### Linked Platforms
- **PlayStation Network** — Via PSN API (trophies: Bronze, Silver, Gold, Platinum)
- **Xbox Live** — Via Xbox Live API (Gamerscore, achievements)
- **Steam** — Via Steam Web API (achievements, global unlock rates)

#### Per-Game View

Each game in the tracker displays:

| Field | Description |
|---|---|
| **Completion %** | Achieved / Total, synced live from the platform |
| **Rarity Score** | Pulled from platform unlock rates (e.g., only 0.3% of players have this) |
| **Time to Complete** | Community-aggregated average (see §3.7), broken down by category: Main Story / Full Completion |
| **Difficulty Rating** | Community True Difficulty Score (see §3.7) |
| **Missing Achievements** | List of locked achievements with toggle for "hide missables" |
| **Platform Badge** | Visual indicator of which platform the game is tracked from |

#### Global Dashboard

- Combined completion stats across all platforms
- Total playtime (where available via APIs)
- Platform-by-platform breakdown
- All-time rarest achievement earned
- Streak tracker: consecutive days with at least one unlock

#### Sync Behavior
- Auto-sync on login
- Manual "Force Sync" button per platform
- Sync timestamp displayed per game
- Webhook/polling support for near-real-time updates where APIs allow

---

### 3.2 User Profiles

Each user gets a fully customizable public profile page that serves as their trophy showcase and social identity.

#### Profile Sections

**Header Card**
- Username, avatar, banner image
- Tagline / hunter motto (max 120 characters)
- Hunter Rank (e.g., Bronze Hunter → Platinum Legend) based on total completions + rarity score
- Join date, total games completed, rarest trophy earned

**Showcase Cabinet**
- User-curated display of up to 6 trophies/achievements
- Drag-and-drop reordering
- Each showcase item shows: game art, achievement name, unlock date, rarity %
- Option to pin "Platinum Wall" — all earned platinums displayed as a grid

**Fastest Completions Board**
- User's personal fastest 100% completions, ranked by time
- Compared against site-wide average (e.g., "47% faster than average")
- Filterable by platform

**Stats Panel**
- Total achievements / trophies unlocked
- All-time completion rate %
- Rarest achievement (global unlock %)
- Current completion streak
- Platforms connected

**Activity Feed**
- Recent unlocks, guide contributions, kudos given/received
- Filterable by type

#### Customization Options
- Profile theme (color palette)
- Background: solid, gradient, or custom image upload
- Layout choice: minimal / showcase / stats-heavy
- Badge display toggle (earned site badges and milestones)

---

### 3.3 Social Layer

Built for bragging rights and community. Every interaction is designed to celebrate achievement, not just consume content.

#### Following System
- Follow other hunters
- Personalized feed: recent unlocks, guides published, milestones hit by followed users
- "Hunters like you" discovery (similar completion histories)

#### Kudos / Respect System
- Give **Kudos** to any trophy unlock, guide, or profile milestone
- Kudos are limited (e.g., 10/day for free users) to keep them meaningful
- Kudos aggregated into a user's **Reputation Score**
- Top kudos recipients surfaced on leaderboards

#### Comments
- Comment on individual achievement unlocks ("That final boss is brutal — congrats")
- Comment threads on guides (threaded replies, upvotes)
- Comment on milestones (e.g., a user earns their 100th Platinum)
- Moderation: report, hide, mute

#### Leaderboards
- **Global:** Top completionists by total completions, rarity score, Gamerscore, or Kudos
- **Per-Game:** Who completed it fastest, who has the rarest achievement
- **Friends:** Filter any leaderboard to just followed users
- **Platform-Specific:** PSN-only, Xbox-only, Steam-only views
- **Weekly Spotlight:** Most unlocks in the last 7 days

#### Milestones & Badges
- Auto-awarded site badges for: first Platinum, 10th completion, rarest 1% achievement unlocked, guide published, etc.
- Milestone notifications sent to followers' feeds
- Shareable milestone cards (image format, optimized for Twitter/X and Discord)

---

### 3.4 Guides & Walkthroughs

A structured, UGC-powered knowledge base purpose-built for 100% completion. Not a general wiki — every guide is optimized for the completionist path.

#### Guide Structure

Each guide is tied to a specific game and follows a standardized format:

```
Guide: [Game Title] — 100% Completion Guide
Author: [Username]  |  Last Updated: [Date]  |  Version: [e.g., 1.2]
Estimated Time: [Pulled from community data]
Difficulty: [True Difficulty Score]
Platforms Covered: [PS5 / Xbox / Steam]
```

**Sections within a guide:**

1. **Overview** — Quick summary, recommended playthrough order, missable count
2. **Missable Achievements Warning Block** — Prominently displayed, color-coded red. Lists every missable with the point of no return.
3. **Step-by-Step Walkthrough** — Ordered by recommended completion sequence, not achievement list order
4. **Trophy/Achievement Breakdown** — Each achievement with: description, method, difficulty tag, estimated time, tips
5. **Tips & Tricks** — Community-contributed quick tips (separate from the main walkthrough)
6. **Video Embeds** — Optional YouTube embeds per section or achievement
7. **Changelog** — Version history for guide updates

#### Guide Discovery
- Search by game title, platform, genre
- Filter by: Verified (community-approved), Recently Updated, Fastest Route, Highest Rated
- Tag system: `#missable-heavy`, `#grind-required`, `#online-required`, `#difficulty-spike`, `#quick-platinum`

#### Guide Contribution Flow
1. User creates a new guide or claims an unclaimed game
2. Draft mode — only visible to author
3. Submit for community review
4. Community votes guide as **Verified** after a threshold of upvotes + accuracy reports
5. **Verified badge** displayed on guide and author profile

#### Guide Ownership & Collaboration
- Single author with option to invite co-authors
- Fork system: any user can fork a guide, make edits, and submit as an update suggestion
- Author approves/rejects suggested edits (similar to GitHub PR model)

---

### 3.5 Backlog & Planning Tool

A smart to-do list for completionists. Tracks the games you *want* to 100% and helps you plan when and how.

#### Backlog List

Each entry in the backlog includes:

| Field | Description |
|---|---|
| **Game** | Title, cover art, platform |
| **Status** | Backlog / In Progress / Completed / Abandoned |
| **Priority** | User-set: High / Medium / Low |
| **Est. Time to Complete** | Pulled from community data (see §3.7) |
| **Difficulty** | True Difficulty Score |
| **% Complete** | Live-synced from tracker (if game is in library) |
| **Notes** | Private user notes |
| **Guide Available?** | Badge if a guide exists on the platform |

#### Planning Mode

- **Time Budget Planner:** User sets a weekly hours budget → system recommends which backlog games to tackle based on ETA and priority
- **Session Planner:** "I have 2 hours tonight" → recommends next steps for in-progress games based on guide milestones
- **Streak Protection:** Notifies user if an in-progress game has time-sensitive achievements (e.g., online servers closing, seasonal content)

#### Sorting & Filtering
- Sort by: Priority, Est. Time (shortest first), Difficulty (easiest first), Recently Added
- Filter by: Platform, Genre, Has Guide, Multiplayer Required, Online Trophies

#### Import
- Auto-populate backlog from synced library (games started but not finished = auto-suggest to backlog)
- Manual search + add

---

### 3.6 Game Recommendations Engine

Suggests games for users to 100% next, based on their history, habits, and preferences.

#### Recommendation Logic

The engine factors in:

| Signal | Weight |
|---|---|
| Genres of completed games | High |
| Average difficulty of completed games | High |
| Preferred platform | High |
| Completion speed (do they rush or take their time?) | Medium |
| Rarity preference (do they chase rare trophies?) | Medium |
| Time available (from planning tool) | Medium |
| Community trending completions | Low |

#### Recommendation Cards

Each recommended game shows:
- Title, cover art, platform
- Why it's recommended: e.g., *"You 100%'d 4 Soulslike games — this fits your difficulty range"*
- True Difficulty Score + Avg. Completion Time
- Rarity potential (does it have rare achievements?)
- One-click "Add to Backlog"

#### Recommendation Modes

- **For You** — Personalized feed, updated weekly
- **Quick Win** — Games you can likely 100% in under 5 hours based on your pace
- **Challenge Mode** — Games slightly above your usual difficulty range
- **Rarity Boost** — Games with achievements under 5% global unlock rate
- **Trending** — What the community is completing right now

---

### 3.7 Community Contributions & Aggregated Data

The crowdsourced intelligence layer. Every user's data makes the platform smarter for everyone.

#### What Users Can Submit

| Contribution Type | Description |
|---|---|
| **Difficulty Rating** | 1–10 scale for the game overall, and optionally per-achievement |
| **Time Estimate** | Hours to complete: Main Story / Full 100% / Specific achievement |
| **Tips** | Short-form tips (max 500 chars) attached to a specific achievement |
| **Missable Flag** | Flag an achievement as missable + describe the point of no return |
| **Online Status** | Flag if online servers are still active / shut down |

#### Aggregation Model

Raw submissions are processed into platform-wide scores:

**True Difficulty Score**
```
Weighted median of all difficulty submissions
Outliers (top/bottom 5%) trimmed
Weighted by submitter reputation score
Updated in real-time as new submissions arrive
Displayed as: X.X / 10 with submission count
```

**Average Completion Time**
```
Separate averages for: Story / Full 100% / Speedrun
Submissions tagged by platform (times may vary)
Outliers removed (statistical noise reduction)
Displayed as: "~X hours" with confidence indicator
```

**Achievement-Level Difficulty**
```
Per-achievement difficulty rating
Aggregated from individual submissions
Surfaced in the tracker and guide sections
```

#### Contribution Incentives
- Contribution XP added to reputation score
- "Top Contributor" badge for users in the top 10% of submissions
- Verified Contributor status unlocked at contribution thresholds
- Weekly highlight: "Most Helpful Tip of the Week"

#### Data Quality Controls
- Minimum 5 submissions before a score is displayed publicly
- Flagging system for suspected bad-faith submissions (e.g., troll ratings)
- High-reputation users' submissions weighted more heavily
- Moderators can invalidate outlier submissions

---

## 4. Data Models

### User
```
id, username, email, avatar_url, banner_url, tagline,
hunter_rank, reputation_score, kudos_given, kudos_received,
platforms: [PSN, Xbox, Steam] (linked accounts),
created_at, last_active
```

### Game
```
id, title, platform[], genre[], cover_art_url,
true_difficulty_score, avg_completion_time_full,
avg_completion_time_story, total_achievements,
has_online_trophies, online_servers_active,
submission_count, last_updated
```

### Achievement
```
id, game_id, title, description, platform,
global_unlock_rate, is_missable, point_of_no_return,
difficulty_score, avg_time_to_unlock,
tips: [tip_id], type: [Bronze/Silver/Gold/Platinum/Standard]
```

### UserAchievement
```
id, user_id, achievement_id, unlocked_at,
time_to_unlock (from game start), platform
```

### Guide
```
id, game_id, author_id, co_authors[],
title, status: [draft/published/verified],
version, platforms_covered, estimated_time,
missable_count, created_at, updated_at,
kudos_count, view_count
```

### BacklogEntry
```
id, user_id, game_id, status, priority,
user_notes, added_at, target_date
```

### Contribution
```
id, user_id, game_id, achievement_id (optional),
type: [difficulty/time/tip/missable_flag/online_status],
value, detail_text, created_at, flagged, weight_modifier
```

---

## 5. Platform Integrations

| Platform | API | Data Available | Auth Method |
|---|---|---|---|
| PlayStation Network | PSN API (unofficial + PSAPI) | Trophies, timestamps, rarity | PSN OAuth |
| Xbox Live | Xbox Live REST API | Gamerscore, achievements, timestamps | Microsoft OAuth |
| Steam | Steam Web API | Achievements, global unlock %, playtime | Steam OpenID |

> ⚠️ **Note:** PSN does not have an official public API. Initial integration may rely on community-maintained libraries (e.g., `psn-api` npm package). Plan for API instability and rate limits across all platforms.

---

## 6. Tech Stack Recommendations

### Frontend
- **Framework:** Next.js (React) — SSR for SEO on guide pages, CSR for dashboard
- **Styling:** Tailwind CSS + custom design tokens
- **State Management:** Zustand or TanStack Query for server state
- **Real-time:** Socket.io or Supabase Realtime for live feed + sync notifications

### Backend
- **API:** Node.js + Fastify or Go for high-performance endpoints
- **Database:** PostgreSQL (relational core) + Redis (caching, leaderboards, sessions)
- **Search:** Meilisearch or Algolia for guide/game search
- **Queue:** BullMQ for async platform sync jobs

### Infrastructure
- **Hosting:** Vercel (frontend) + Railway or Render (backend)
- **CDN:** Cloudflare for static assets and game cover art caching
- **Auth:** Auth.js (NextAuth) with OAuth providers
- **Storage:** S3-compatible storage for user avatars, guide images

### Recommendation Engine
- Start with rule-based scoring (MVP)
- Graduate to collaborative filtering model (V2) using Python + scikit-learn or a hosted recommendation API

---

## 7. Monetization Considerations

| Tier | Price | Features |
|---|---|---|
| **Free** | $0 | 2 platform syncs, basic tracker, public profile, guide access |
| **Hunter Pro** | ~$5/mo | All 3 platforms, advanced planning tools, full backlog features, ad-free |
| **Elite** | ~$10/mo | Everything in Pro + priority sync, custom profile themes, early access to new features |

- **No pay-to-win on leaderboards** — all ranking is based on actual achievement data
- Potential for affiliate links on game recommendations (direct to PSN Store, Xbox Store, Steam)

---

## 8. Roadmap (MVP → V2 → V3)

### MVP (Months 1–4)
- [ ] User auth + Steam integration (easiest API to start)
- [ ] Basic achievement tracker (Steam only)
- [ ] Public profile with completion stats
- [ ] Guide creation + viewing (no UGC workflow yet)
- [ ] Basic backlog list (manual, no time estimates)

### V1 (Months 5–8)
- [ ] PSN + Xbox integration
- [ ] Community contribution system (difficulty, time, tips)
- [ ] True Difficulty Score + Avg. Completion Time calculated
- [ ] Social layer: follow, kudos, comment
- [ ] Guide verification workflow
- [ ] Backlog planning mode with time budgeting

### V2 (Months 9–14)
- [ ] Recommendation engine (rule-based)
- [ ] Leaderboards (global + per-game + friends)
- [ ] Milestone shareable cards
- [ ] Session planner
- [ ] Mobile-optimized PWA

### V3 (Months 15+)
- [ ] ML-based recommendation engine
- [ ] Native mobile apps (iOS/Android)
- [ ] API for third-party developers
- [ ] Console-side companion app exploration
- [ ] Live events / community challenges (e.g., "100% this game before the servers close")

---

*Document version: 1.0 | Status: Pre-development spec | Last updated: April 2026*
