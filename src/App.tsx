import { useState, useEffect } from 'react';
import { 
  Flame, 
  Target, 
  Clock, 
  Calendar, 
  Plus, 
  CheckCircle2, 
  Circle,
  LayoutGrid,
  Library,
  MessageSquare,
  Music2,
  ListTodo,
  TrendingUp,
  Award,
  Zap,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Timer from './components/Timer';
import MusicPlayer from './components/MusicPlayer';
import AIBuddy from './components/AIBuddy';
import StudyHacks from './components/StudyHacks';

interface Task {
  id: string;
  text: string;
  completed: boolean;
  priority: 'High' | 'Med' | 'Low';
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', text: 'Physics Chapter 4 Review', completed: false, priority: 'High' },
    { id: '2', text: 'Maths Worksheet 12', completed: true, priority: 'Med' }
  ]);
  const [newTaskText, setNewTaskText] = useState('');
  const [activeTab, setActiveTab] = useState<'timer' | 'chat' | 'hacks' | 'tasks'>('timer');
  const [streak, setStreak] = useState(8);
  const [showMusic, setShowMusic] = useState(false);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskText.trim()) return;
    setTasks([{
      id: Date.now().toString(),
      text: newTaskText,
      completed: false,
      priority: 'Med'
    }, ...tasks]);
    setNewTaskText('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden font-sans pb-32">
      <div className="atmosphere" />
      
      {/* Header Bar */}
      <nav className="fixed top-0 left-0 right-0 h-20 bg-black/60 backdrop-blur-xl border-b border-white/5 z-50 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center space-x-4 group cursor-pointer">
          <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform">
            <Clock size={22} className="text-black" />
          </div>
          <div>
            <h1 className="text-lg font-black tracking-tighter leading-none uppercase italic">STUDY BUDDY <span className="text-cyan-400 not-italic">PRO</span></h1>
            <p className="text-[9px] text-white/30 font-black uppercase tracking-[0.4em] mt-1.5 flex items-center">
              <Zap size={10} className="mr-1 text-lime-400" />
              Overclock your focus
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 neon-glow-lime border-lime-500/20">
            <Flame size={14} className="text-lime-400 fill-lime-400" />
            <span className="text-[10px] font-black tracking-widest uppercase">{streak} DAY STREAK</span>
          </div>
          <button 
            onClick={() => setShowMusic(!showMusic)}
            className={`p-2 rounded-xl border transition-all ${showMusic ? 'bg-lime-500 text-black border-lime-500 shadow-[0_0_15px_#a2ff00]' : 'bg-white/5 border-white/10 text-white/40'}`}
          >
            <Music2 size={20} />
          </button>
          <div className="flex items-center space-x-3">
             <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer">
                <Award size={18} />
             </div>
             <div className="w-10 h-10 rounded-full border-2 border-cyan-500/30 p-0.5">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky`} className="w-full h-full rounded-full bg-white/10" alt="Avatar" />
             </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 px-4 max-w-2xl mx-auto space-y-12">
        
        {/* Timer Section */}
        <section id="timer-view">
           <Timer />
        </section>

        {/* Pro Statistics Dashboard */}
        <section className="space-y-6">
          <div className="flex items-center justify-between px-2">
             <div className="flex items-center space-x-3">
                <TrendingUp size={18} className="text-lime-400" />
                <h3 className="text-xs font-black tracking-[0.2em] uppercase text-white/60">Live Analytics</h3>
             </div>
             <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
               Daily Efficiency: <span className="text-lime-400 ml-1">94%</span>
             </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
             <div className="glass-dark p-6 border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
               <div className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em] mb-4">Missions</div>
               <div className="text-2xl font-black italic">{completedCount} <span className="text-white/20 text-xs ml-1 uppercase not-italic">/ {tasks.length}</span></div>
             </div>
             <div className="glass-dark p-6 border-cyan-500/20 bg-cyan-500/[0.03] neon-glow-cyan">
               <div className="text-[9px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4">Focus XP</div>
               <div className="text-2xl font-black italic">1,420</div>
             </div>
             <div className="glass-dark p-6 border-pink-500/20 bg-pink-500/[0.03] neon-glow-pink">
               <div className="text-[9px] font-black text-pink-400 uppercase tracking-[0.3em] mb-4">Rank</div>
               <div className="text-2xl font-black italic">ELITE</div>
             </div>
          </div>
        </section>

        {/* Dynamic Content Switching */}
        <section className="space-y-6 pt-12 border-t border-white/5">
           <AnimatePresence mode="wait">
             {activeTab === 'chat' && (
               <motion.div key="chat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                 <AIBuddy />
               </motion.div>
             )}
             {activeTab === 'hacks' && (
               <motion.div key="hacks" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                 <StudyHacks />
               </motion.div>
             )}
             {activeTab === 'tasks' && (
               <motion.div key="tasks" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="glass-dark p-8 border-lime-500/20 neon-glow-lime">
                 <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-lg font-black uppercase tracking-tighter text-white">Execution Board</h2>
                      <p className="text-[10px] font-bold text-lime-400/40 uppercase tracking-widest mt-1">Strategic Mission Logging</p>
                    </div>
                    <div className="p-3 bg-lime-500/20 rounded-xl text-lime-400">
                       <ListTodo size={20} />
                    </div>
                 </div>

                 <form onSubmit={addTask} className="mb-8 flex gap-3">
                    <div className="relative flex-1">
                      <input 
                        type="text" 
                        value={newTaskText}
                        onChange={(e) => setNewTaskText(e.target.value)}
                        placeholder="Deploy new mission..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs font-bold text-white placeholder:text-white/10 focus:outline-none focus:border-lime-500/50 pr-12"
                      />
                    </div>
                    <button type="submit" className="w-14 h-14 bg-lime-500 rounded-2xl text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl shadow-lime-600/30">
                       <Plus size={24} strokeWidth={3} />
                    </button>
                 </form>

                 <div className="space-y-4">
                   {tasks.map(task => (
                     <motion.div 
                        key={task.id} 
                        layout
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center justify-between p-5 glass-dark !rounded-[24px] border border-white/5 hover:border-lime-500/30 group transition-all"
                     >
                       <div className="flex items-center space-x-5 cursor-pointer flex-1" onClick={() => toggleTask(task.id)}>
                         <div className="relative">
                           {task.completed ? (
                             <CheckCircle2 className="text-lime-400" size={26} />
                           ) : (
                             <Circle className="text-white/10 group-hover:text-lime-400/30" size={26} />
                           )}
                           {task.priority === 'High' && !task.completed && (
                             <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black" />
                           )}
                         </div>
                         <div className="flex flex-col">
                            <span className={`text-sm font-black tracking-tight uppercase ${task.completed ? 'line-through text-white/20' : 'text-white/90'}`}>{task.text}</span>
                            <div className="flex items-center space-x-2 mt-1">
                               <span className={`text-[8px] font-black uppercase tracking-widest ${task.priority === 'High' ? 'text-red-500' : 'text-white/20'}`}>{task.priority} Priority</span>
                               <span className="text-[8px] font-black uppercase text-white/10 tracking-widest">• Mission ID: {task.id.slice(-4)}</span>
                            </div>
                         </div>
                       </div>
                       <button onClick={() => deleteTask(task.id)} className="p-2 text-white/10 hover:text-red-500 transition-all">
                          <Trash2 size={18} />
                       </button>
                     </motion.div>
                   ))}
                   {tasks.length === 0 && (
                      <div className="text-center py-20 border-2 border-dashed border-white/5 rounded-[32px]">
                         <div className="text-[10px] uppercase font-black text-white/10 tracking-[0.5em]">No Missions Transmitted.</div>
                      </div>
                   )}
                 </div>
               </motion.div>
             )}
             {activeTab === 'timer' && (
               <motion.div key="timer-placeholder" className="py-20 text-center">
                  <p className="text-[10px] font-black text-white/10 uppercase tracking-[0.6em]">Scroll up to access the control center</p>
               </motion.div>
             )}
           </AnimatePresence>
        </section>
      </main>

      {/* Floating Elements */}
      <AnimatePresence>
        {showMusic && (
          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 0.9 }} 
            animate={{ opacity: 1, x: 0, scale: 1 }} 
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="fixed bottom-32 right-6 left-6 md:left-auto md:w-96 z-40"
          >
            <div className="relative">
               <MusicPlayer />
               <button 
                  onClick={() => setShowMusic(false)}
                  className="absolute -top-3 -right-3 w-8 h-8 bg-black rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white"
               >
                 <Plus size={16} className="rotate-45" />
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Floating Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-black/80 backdrop-blur-3xl rounded-full p-2.5 flex items-center space-x-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 px-6">
          {[
            { id: 'timer', icon: LayoutGrid, color: 'text-cyan-400', label: 'HUB' },
            { id: 'tasks', icon: ListTodo, color: 'text-lime-400', label: 'TASKS' },
            { id: 'chat', icon: MessageSquare, color: 'text-cyan-400', label: 'AI' },
            { id: 'hacks', icon: Library, color: 'text-pink-400', label: 'HACKS' }
          ].map(tab => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)} 
              className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-full transition-all relative group ${
                activeTab === tab.id ? `${tab.color} bg-white/10` : 'text-white/20 hover:text-white/40'
              }`}
            >
              <tab.icon size={22} className="relative z-10" />
              {activeTab === tab.id && (
                <motion.div layoutId="nav-glow" className={`absolute inset-0 rounded-full bg-current opacity-10 blur-md`} />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
