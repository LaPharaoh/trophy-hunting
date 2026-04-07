import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import CommunityStats from './components/CommunityStats'
import Pricing from './components/Pricing'
import Roadmap from './components/Roadmap'
import WaitlistCTA from './components/WaitlistCTA'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <CommunityStats />
        <Pricing />
        <Roadmap />
        <WaitlistCTA />
      </main>
      <Footer />
    </>
  )
}
