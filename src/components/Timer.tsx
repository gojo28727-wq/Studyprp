import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Brain, Coffee, Timer as TimerIcon, SkipForward, BarChart3, History, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';

type TimerMode = 'work' | 'short' | 'long';

interface Session {
  id: string;
  mode: TimerMode;
  duration: number;
  timestamp: number;
}

export default function Timer() {
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [showStats, setShowStats] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const config = {
    work: { label: 'Focus', time: 25 * 60, icon: Brain, color: 'text-cyan-400', bg: 'bg-cyan-500/10', neon: 'neon-glow-cyan' },
    short: { label: 'Short Break', time: 5 * 60, icon: Coffee, color: 'text-lime-400', bg: 'bg-lime-500/10', neon: 'neon-glow-lime' },
    long: { label: 'Long Break', time: 15 * 60, icon: TimerIcon, color: 'text-pink-400', bg: 'bg-pink-500/10', neon: 'neon-glow-pink' },
  };

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleComplete();
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isActive, timeLeft]);

  const handleComplete = () => {
    setIsActive(false);
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Add to history
    const newSession: Session = {
      id: Date.now().toString(),
      mode,
      duration: config[mode].time,
      timestamp: Date.now(),
    };
    setSessions(prev => [newSession, ...prev]);

    // TRIGGER SPARKLE EFFECT
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f2ff', '#ff00ea', '#a2ff00']
    });
  };

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => { setIsActive(false); setTimeLeft(config[mode].time); };
  const skipTimer = () => { handleComplete(); setTimeLeft(config[mode].time); };
  const switchMode = (newMode: TimerMode) => { setIsActive(false); setMode(newMode); setTimeLeft(config[newMode].time); };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const totalFocusedMinutes = Math.floor(sessions.filter(s => s.mode === 'work').reduce((acc, s) => acc + s.duration, 0) / 60);

  // Mock weekly data + current sessions
  const last7Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weeklyData = [120, 150, 80, 200, 180, 240, 300]; // in minutes

  return (
    <div className={`glass-dark w-full p-8 border-white/5 relative overflow-hidden group transition-all duration-700 ${config[mode].neon} ${mode === 'work' ? 'border-cyan-500/20' : mode === 'short' ? 'border-lime-500/20' : 'border-pink-500/20'}`}>
      <div className="absolute top-0 right-0 p-8 flex items-center space-x-4 z-20">
         <button onClick={() => setShowStats(!showStats)} className="p-3 rounded-xl bg-white/5 text-white/40 hover:text-white transition-all hover:bg-white/10 active:scale-95 shadow-xl">
            {showStats ? <TimerIcon size={20} /> : <BarChart3 size={20} />}
         </button>
      </div>

      <AnimatePresence mode="wait">
        {!showStats ? (
          <motion.div 
            key="timer" 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            className="flex flex-col items-center"
          >
            <div className="text-center mb-10 w-full">
              <div className="flex items-center justify-center space-x-4 mb-6">
                {(['work', 'short', 'long'] as const).map((m) => {
                  const Icon = config[m].icon;
                  return (
                    <button 
                      key={m} 
                      onClick={() => switchMode(m)}
                      className={`flex items-center space-x-2 px-4 py-2.5 rounded-full transition-all border ${mode === m ? `bg-white/10 ${config[m].color} border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]` : 'text-white/20 border-transparent hover:text-white/40'}`}
                    >
                      <Icon size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{config[m].label}</span>
                    </button>
                  );
                })}
              </div>
              <h1 className={`text-7xl font-black uppercase tracking-tighter transition-colors duration-500 ${config[mode].color} italic drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                {mode === 'work' ? 'FOCUS MODE' : mode === 'short' ? 'RECESS' : 'DEEP CHILL'}
              </h1>
            </div>

            <div className="relative mb-6 flex flex-col items-center w-full">
               <div className="text-[10px] font-black text-white/30 uppercase tracking-[0.5em] mb-10 border-b border-white/5 pb-2">Status: {isActive ? 'SYNC ACTIVE' : 'SYSTEM IDLE'}</div>
               
               <div className="relative">
                  <div className={`absolute inset-0 blur-3xl opacity-20 transition-colors duration-500 ${mode === 'work' ? 'bg-cyan-400' : mode === 'short' ? 'bg-lime-400' : 'bg-pink-400'}`} />
                  <div className="text-[140px] font-black tracking-tighter text-white tabular-nums leading-none drop-shadow-[0_0_40px_rgba(255,255,255,0.15)] relative z-10">
                    {formatTime(timeLeft)}
                  </div>
               </div>
               
               <div className={`text-[11px] font-black uppercase tracking-[0.8em] mt-10 transition-all duration-500 ${isActive ? 'opacity-0 scale-90' : 'opacity-40 scale-100 text-white animate-pulse'}`}>
                 Engage Systems?
               </div>
            </div>

            <div className="flex items-center space-x-12 mt-12">
              <button
                onClick={toggleTimer}
                className={`w-28 h-28 rounded-full flex items-center justify-center text-black shadow-2xl transition-all hover:scale-110 active:scale-95 outline-none border-0 ${mode === 'work' ? 'bg-cyan-400 shadow-cyan-500/50' : mode === 'short' ? 'bg-lime-400 shadow-lime-500/50' : 'bg-pink-400 shadow-pink-500/50'}`}
              >
                {isActive ? <Pause size={48} fill="currentColor" /> : <Play size={48} fill="currentColor" className="ml-1" />}
              </button>

              <button 
                onClick={skipTimer}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white/20 hover:text-white transition-all flex items-center group/skip active:scale-90"
                title="Skip"
              >
                <div className="flex flex-col items-end">
                   <span className="text-[9px] font-black tracking-widest uppercase mb-1 opacity-0 group-hover:opacity-40 transition-all">Next Objective</span>
                   <SkipForward size={24} />
                </div>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="stats" 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -10 }} 
            className="w-full space-y-8"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
               <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <BarChart3 size={20} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black uppercase tracking-[0.3em]">Session Intelligence</h2>
                    <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mt-1">Real-time focus monitoring</p>
                  </div>
               </div>
               <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-lime-500/10 border border-lime-500/20 text-[10px] font-black text-lime-400 uppercase tracking-[0.2em]">
                  <Zap size={12} className="fill-lime-400" />
                  <span>XP: {totalFocusedMinutes * 10}</span>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="glass-dark p-5 border-cyan-500/10 hover:border-cyan-500/30 transition-all">
                 <div className="text-[9px] font-black text-cyan-400/60 uppercase tracking-widest mb-2">Focus Time</div>
                 <div className="text-3xl font-black italic">{totalFocusedMinutes}<span className="text-xs ml-1 font-bold not-italic opacity-30">m</span></div>
              </div>
              <div className="glass-dark p-5 border-lime-500/10 hover:border-lime-500/30 transition-all">
                 <div className="text-[9px] font-black text-lime-400/60 uppercase tracking-widest mb-2">Recess</div>
                 <div className="text-3xl font-black italic">{Math.floor(sessions.filter(s => s.mode !== 'work').reduce((acc, s) => acc + s.duration, 0) / 60)}<span className="text-xs ml-1 font-bold not-italic opacity-30">m</span></div>
              </div>
              <div className="glass-dark p-5 border-pink-500/10 hover:border-pink-500/30 transition-all">
                 <div className="text-[9px] font-black text-pink-400/60 uppercase tracking-widest mb-2">Objectives</div>
                 <div className="text-3xl font-black italic">{sessions.length}</div>
              </div>
              <div className="glass-dark p-5 border-white/10 hover:border-white/30 transition-all">
                 <div className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-2">Efficiency</div>
                 <div className="text-3xl font-black italic">{sessions.length > 0 ? "92%" : "0%"}</div>
              </div>
            </div>

            {/* Weekly Progress Chart */}
            <div className="glass-dark p-6 border-white/5 space-y-6">
               <div className="flex items-center justify-between">
                  <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">Weekly Focus Record</h3>
                  <span className="text-[9px] font-black text-cyan-400 uppercase tracking-widest italic">Peak Performance</span>
               </div>
               <div className="flex items-end justify-between h-32 gap-2">
                  {last7Days.map((day, i) => {
                    const height = (weeklyData[i] / 300) * 100; // normalized to max 300 mins
                    return (
                      <div key={day} className="flex-1 flex flex-col items-center group relative">
                         <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all text-[8px] font-black bg-white/10 px-1.5 py-0.5 rounded text-white whitespace-nowrap">
                            {weeklyData[i]}m
                         </div>
                         <div 
                           className={`w-full rounded-t-lg transition-all duration-1000 bg-gradient-to-t ${i === 6 ? 'from-cyan-900 to-cyan-400' : 'from-white/[0.02] to-white/10 group-hover:to-white/20'}`} 
                           style={{ height: `${height}%` }} 
                         />
                         <span className={`text-[9px] font-black mt-3 uppercase tracking-tighter ${i === 6 ? 'text-cyan-400' : 'text-white/20'}`}>{day}</span>
                      </div>
                    );
                  })}
               </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-[10px] font-black text-white/20 uppercase tracking-widest px-1">
                 <History size={14} />
                 <span>Strategic Timeline</span>
              </div>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/5">
                {sessions.map(s => (
                  <div key={s.id} className="flex items-center justify-between p-4 glass-dark !rounded-2xl border-white/5 text-[11px] font-bold group hover:bg-white/[0.02] transition-colors">
                    <div className="flex items-center space-x-4">
                       <div className={`w-2.5 h-2.5 rounded-full shadow-[0_0_10px_currentColor] ${config[s.mode].color.replace('text-', 'text-')}`} style={{ color: 'current' }} />
                       <span className="uppercase tracking-widest opacity-60 italic">{config[s.mode].label} COMPLETED</span>
                    </div>
                    <div className="flex items-center space-x-6">
                       <span className="text-white/40">{Math.floor(s.duration / 60)}:00 PERIOD</span>
                       <span className="text-[10px] font-black text-white/20 italic">{new Date(s.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                ))}
                {sessions.length === 0 && (
                  <div className="text-center py-12 glass-dark !rounded-[32px] border-dashed border-white/5 border-2">
                    <div className="text-[10px] uppercase font-black text-white/5 tracking-[0.4em]">Historical record empty</div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
