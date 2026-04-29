import { useState } from 'react';
import { STUDY_HACKS } from '../data/hacks';
import { Search, Shuffle, Filter, Lightbulb, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function StudyHacks() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string | null>(null);
  const [hacks, setHacks] = useState(STUDY_HACKS);

  const categories = Array.from(new Set(STUDY_HACKS.map(h => h.category)));

  const filteredHacks = hacks.filter(h => {
    const matchesSearch = h.title.toLowerCase().includes(search.toLowerCase()) || 
                         h.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter ? h.category === filter : true;
    return matchesSearch && matchesFilter;
  });

  const shuffleHacks = () => {
    setHacks([...hacks].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="w-full space-y-8 glass-dark p-6 border-pink-500/20 neon-glow-pink">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-pink-500/20 rounded-lg text-pink-400">
               <Lightbulb size={20} />
            </div>
            <h3 className="text-lg font-black text-white uppercase tracking-tighter">Study Hacks Pro</h3>
          </div>
          <p className="text-[10px] font-bold text-pink-400/40 uppercase tracking-[0.3em] ml-11">Learn faster. Grind harder.</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={16} />
            <input
              type="text"
              placeholder="Search 100+ hacks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-xs font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-pink-500/50"
            />
          </div>
          <button 
            onClick={shuffleHacks}
            className="p-4 bg-white/5 border border-white/10 rounded-2xl text-white/40 hover:text-pink-400 hover:bg-white/10 transition-all shadow-xl"
            title="Randomize"
          >
            <Shuffle size={20} />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-pink-500/10">
        <button
          onClick={() => setFilter(null)}
          className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
            filter === null 
              ? 'bg-pink-500 border-pink-500 text-black shadow-lg shadow-pink-500/30' 
              : 'bg-white/5 border-white/10 text-white/30 hover:border-white/20'
          }`}
        >
          All Hacks
        </button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest border whitespace-nowrap transition-all ${
              filter === cat 
                ? 'bg-pink-500 border-pink-500 text-black shadow-lg shadow-pink-500/30' 
                : 'bg-white/5 border-white/10 text-white/30 hover:border-white/20'
          }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[450px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-pink-500/20">
        <AnimatePresence mode="popLayout">
          {filteredHacks.map((hack, i) => (
            <motion.div
              layout
              key={hack.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: Math.min(i * 0.05, 0.5) }}
              className="glass-dark p-6 border border-white/5 hover:border-pink-500/30 transition-all group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-pink-400/60 bg-pink-500/5 px-2 py-1 rounded-lg border border-pink-500/10">
                  {hack.category}
                </span>
                <Sparkles size={12} className="text-pink-500/20 group-hover:text-pink-500 transition-colors" />
              </div>
              <h4 className="text-sm font-black text-white mb-3 group-hover:text-pink-400 transition-colors uppercase tracking-tight leading-snug">{hack.title}</h4>
              <p className="text-[11px] text-white/40 leading-relaxed font-medium">{hack.description}</p>
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredHacks.length === 0 && (
          <div className="col-span-full py-20 text-center space-y-4">
             <div className="text-[10px] font-black text-white/10 uppercase tracking-[0.5em]">No hacks found for "{search}"</div>
          </div>
        )}
      </div>
    </div>
  );
}
