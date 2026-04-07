"use client";

import { useState, useEffect } from "react";
import { 
  Trophy, LayoutDashboard, User, Users, ListTodo, BookOpen, 
  RotateCw, Edit, Flame, Sparkles, MessageCircle, Plus, Check,
  AlertTriangle, Play, Settings
} from "lucide-react";

// --- Components ---

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const tabs = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'profile', icon: User, label: 'My Profile' },
    { id: 'social', icon: Users, label: 'Social Feed' },
    { id: 'backlog', icon: ListTodo, label: 'Backlog Planner' },
    { id: 'guides', icon: BookOpen, label: 'Smart Guides' },
  ];

  return (
    <div className="w-64 bg-panel border-r border-[#333] p-6 flex flex-col fixed h-screen">
      <div className="text-xl font-bold text-foreground mb-10 flex items-center gap-3 tracking-wide">
        <Trophy className="text-brand w-7 h-7" />
        AchievementForge
      </div>
      <div className="flex flex-col gap-2 flex-1">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <div 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer px-4 py-3 rounded-lg transition-all flex items-center gap-4 text-sm font-medium
                ${isActive 
                  ? 'bg-brand/15 text-brand border-l-4 border-brand' 
                  : 'text-gray-400 hover:bg-panel-hover hover:text-foreground border-l-4 border-transparent'
                }`}
            >
              <Icon className="w-5 h-5" />
              {tab.label}
              {tab.id === 'guides' && <Sparkles className="w-3 h-3 text-gold ml-auto" />}
            </div>
          );
        })}
      </div>
      
      <div className="mt-auto px-4 py-3 text-sm font-medium text-gray-500 hover:text-white cursor-pointer flex items-center gap-4">
        <Settings className="w-5 h-5" />
        Settings
      </div>
    </div>
  );
};

// --- Views ---

const DashboardView = () => {
  const [games, setGames] = useState([
    { id: 1, title: 'Elden Ring', platform: 'Steam', complete: 85, rarity: 4.2 },
    { id: 2, title: 'Ghost of Tsushima', platform: 'PSN', complete: 100, rarity: 12.1 },
    { id: 3, title: 'Halo Infinite', platform: 'Xbox', complete: 45, rarity: 1.5 }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setGames(prev => prev.map(g => (g.id === 1 && g.complete < 100) ? { ...g, complete: g.complete + 1 } : g));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6 pb-5 border-b border-[#333]">
        <h1 className="text-3xl font-bold">Universal Dashboard</h1>
        <div className="flex items-center gap-4 px-4 py-2 bg-panel rounded-full border border-[#333]">
          <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center font-bold text-xs">JD</div>
          <span className="text-sm flex items-center gap-2 text-gray-300">
            Syncing Live... <RotateCw className="w-3 h-3 text-brand animate-spin" />
          </span>
        </div>
      </div>

      {/* NEW: Missables Dashboard Alert */}
      <div className="bg-red-950/30 border border-red-900 rounded-2xl p-5 mb-8 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
        <div>
          <h3 className="text-red-400 font-bold mb-1">Missable Trophy Alert: Elden Ring</h3>
          <p className="text-red-200/70 text-sm">You are approaching the <span className="font-semibold text-white">"Forge of the Giants"</span> point-of-no-return. You have 2 missable armaments left to collect in Leyndell before proceeding.</p>
          <button className="mt-3 text-xs bg-red-900/50 hover:bg-red-800 text-red-200 px-3 py-1.5 rounded-lg font-medium transition cursor-pointer">
            View Smart Guide Checklist
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {games.map(game => (
          <div key={game.id} className="bg-panel rounded-2xl p-6 border border-[#333] hover:-translate-y-1 hover:border-brand-light transition-all shadow-lg hover:shadow-brand/10">
            <div className="flex justify-between items-start mb-5">
              <h2 className="text-lg font-semibold m-0">{game.title}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border
                ${game.platform === 'PSN' ? 'bg-blue-900/30 text-blue-400 border-blue-800' : ''}
                ${game.platform === 'Xbox' ? 'bg-green-900/30 text-green-400 border-green-800' : ''}
                ${game.platform === 'Steam' ? 'bg-gray-800 text-gray-300 border-gray-600' : ''}
              `}>
                {game.platform}
              </span>
            </div>
            
            <div className="mt-5">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Completion</span>
                <span className={`font-bold ${game.complete === 100 ? 'text-gold' : 'text-foreground'}`}>
                  {game.complete}%
                </span>
              </div>
              <div className="w-full bg-[#333] rounded-full h-2 mt-3 mb-2 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-1000 ease-in-out ${game.complete === 100 ? 'bg-gold' : 'bg-brand'}`} 
                  style={{ width: `${game.complete}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-xs text-gray-400 mt-4">
                <span>Rarest Trophy</span>
                <span>Top {game.rarity}% global</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProfileView = () => (
  <div className="animate-in slide-in-from-bottom-4 duration-500">
    <div className="flex justify-between items-center mb-10 pb-5 border-b border-[#333]">
      <h1 className="text-3xl font-bold">Hunter Profile</h1>
      <button className="bg-brand hover:bg-brand-light text-white px-5 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition cursor-pointer">
        <Edit className="w-4 h-4" /> Edit Profile
      </button>
    </div>

    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 space-y-6">
        <div className="bg-panel rounded-2xl p-10 text-center border border-[#333] shadow-lg">
          <div className="w-24 h-24 rounded-full bg-brand flex items-center justify-center font-bold text-3xl mx-auto mb-4 relative">
            JD
            {/* NEW: Multi-platform badges overlapping the avatar explicitly showing merged identity */}
            <div className="absolute -bottom-2 -right-3 flex items-center gap-1 bg-black p-1.5 rounded-full border border-[#333]">
               <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">P</div>
               <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-[10px] font-bold">X</div>
               <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-[10px] font-bold">S</div>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-1">JohnTheHunter</h2>
          <p className="text-gray-400 italic text-sm mb-4">"Grinding until the platinum pops."</p>
          <div className="flex justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-gold to-bronze text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Platinum Legend</span>
            <span className="bg-white/10 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide">Universal Cross-Player</span>
          </div>
        </div>

        <div className="bg-panel rounded-2xl p-6 border border-[#333]">
          <h3 className="border-b border-[#333] pb-3 mb-4 font-semibold text-lg">Live Stats</h3>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between text-gray-400"><span>Total Unlocks</span> <strong className="text-white">4,209</strong></div>
            <div className="flex justify-between text-gray-400"><span>Completion Rate</span> <strong className="text-white">92.4%</strong></div>
            <div className="flex justify-between text-gray-400"><span>Current Streak</span> <strong className="text-white flex items-center gap-1">14 Days <Flame className="w-4 h-4 text-orange-500" /></strong></div>
            <div className="flex justify-between text-gray-400"><span>Reputation Score</span> <strong className="text-white">1,840 Kudos</strong></div>
          </div>
        </div>
      </div>

      <div className="flex-[2] space-y-6">
        <div className="bg-panel rounded-2xl p-6 border border-[#333]">
          <h3 className="font-semibold text-lg mb-5">Cross-Platform Trophy Showcase</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white/5 border border-[#333] rounded-xl p-5 text-center flex flex-col items-center relative overflow-hidden group hover:border-brand transition">
                <div className="absolute top-0 right-0 bg-[#222] text-[9px] px-2 py-1 rounded-bl-lg font-bold text-gray-400">
                  {i === 1 ? 'PSN' : (i === 2 ? 'STEAM' : 'XBOX')}
                </div>
                <Trophy className={`w-10 h-10 mb-3 ${i===1 ? 'text-platinum' : (i===2 ? 'text-gold' : 'text-silver')}`} />
                <div className="font-bold text-sm mb-1">Boss Defeated {i}</div>
                <div className="text-xs text-gray-400">0.1% Rarity</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// NEW: Smart Guides Interactive Component
const SmartGuideView = () => {
  // Mock smart-guide state (automatically checking off what we've earned)
  const [guideData, setGuideData] = useState([
    { id: 1, title: '"Defeat the First Boss"', description: 'Unmissable. Awarded for finishing the tutorial area.', unlocked: true, missable: false },
    { id: 2, title: '"Secret Collector"', description: 'Find all 5 hidden statuettes before leaving the starting zone.', unlocked: false, missable: true },
    { id: 3, title: '"Speed Demon"', description: 'Finish the opening section in under 5 minutes.', unlocked: false, missable: false }
  ]);

  const toggleMockProgress = (id: number) => {
    setGuideData(prev => prev.map(item => item.id === id ? { ...item, unlocked: !item.unlocked } : item));
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-8 pb-5 border-b border-[#333]">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <BookOpen className="text-brand" /> Smart UGC Guides
          </h1>
          <p className="text-gray-400 mt-2 text-sm">Guides automatically sync with your account progress across platforms.</p>
        </div>
        <button className="bg-[#222] border border-[#444] hover:bg-[#333] text-white px-5 py-2 rounded-lg font-medium text-sm flex items-center gap-2 transition cursor-pointer">
          <Edit className="w-4 h-4" /> Publish Guide
        </button>
      </div>

      <div className="bg-panel rounded-2xl border border-[#333] shadow-xl overflow-hidden p-8 relative">
        <div className="absolute top-0 right-0 bg-brand text-white px-4 py-1 rounded-bl-2xl font-bold text-xs uppercase tracking-widest shadow-md">
          Live Synced <Sparkles className="w-3 h-3 inline ml-1" />
        </div>

        <div className="flex items-start gap-6 border-b border-[#333] pb-6 mb-6">
          <div className="w-24 h-32 bg-[#111] border border-[#222] rounded flex items-center justify-center font-bold text-[#444] shadow-md">
            COVER ART
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Example Game 100% Roadmap</h2>
            <div className="flex gap-3 text-xs mb-4">
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full font-medium">Difficulty: 4/10</span>
              <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full font-medium">Time: ~25 Hours</span>
              <span className="bg-blue-900/30 text-blue-400 border border-blue-800 px-3 py-1 rounded-full font-medium">PS5 Validated</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
              Welcome to the interactive roadmap. Since your PSN account is linked, we have automatically greyed out the requirements you've already completed. You have exactly 2 left in this section.
            </p>
          </div>
        </div>

        <h3 className="font-bold text-lg mb-4 text-brand-light">Phase 1: Tutorial Zone</h3>
        <div className="space-y-4">
          {guideData.map(step => (
            <div 
              key={step.id} 
              onClick={() => toggleMockProgress(step.id)}
              className={`p-4 rounded-xl border flex gap-4 cursor-pointer transition-all ${
                step.unlocked 
                  ? 'bg-green-900/10 border-green-900/30 opacity-60' 
                  : 'bg-white/5 border-[#444] hover:bg-white/10'
              }`}
            >
              <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center border flex-shrink-0 ${
                step.unlocked ? 'bg-green-600 border-green-500' : 'bg-[#111] border-[#555]'
              }`}>
                {step.unlocked && <Check className="w-4 h-4 text-white" />}
              </div>
              <div>
                <h4 className={`font-bold flex items-center gap-2 ${step.unlocked ? 'text-green-500 line-through' : 'text-white'}`}>
                  {step.title}
                  {step.missable && !step.unlocked && <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold not-italic no-underline ml-2">Missable</span>}
                </h4>
                <p className={`text-sm mt-1 ${step.unlocked ? 'text-gray-500 line-through' : 'text-gray-300'}`}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 ml-64 p-10 overflow-y-auto">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'profile' && <ProfileView />}
        {activeTab === 'social' && <div className="text-2xl font-bold animate-in fade-in">Social Feed (Coming Soon)</div>}
        {activeTab === 'backlog' && <div className="text-2xl font-bold animate-in fade-in">Backlog Planner (Coming Soon)</div>}
        {activeTab === 'guides' && <SmartGuideView />}
      </main>
    </div>
  );
}
