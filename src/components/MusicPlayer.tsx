import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music2, Volume2, Gamepad2, Wind, Droplets, Brain, SkipForward, SkipBack, ListMusic } from 'lucide-react';

interface Track {
  id: string;
  title: string;
  artist: string;
  category: 'Lofi' | 'Game' | 'Ambient' | 'Synth';
}

const TRACKS: Track[] = [
  // LOFI
  { id: '1', title: 'Late Night Ramen', artist: 'Lofi Girl', category: 'Lofi' },
  { id: '2', title: 'Study Session Delta', artist: 'Chillhop', category: 'Lofi' },
  { id: '3', title: 'Cyberpunk Tokyo', artist: 'Synthwave Cat', category: 'Lofi' },
  { id: '4', title: 'Midnight Library', artist: 'Focus Flow', category: 'Lofi' },
  { id: '5', title: 'Rainy Window', artist: 'Coffee Shop Beats', category: 'Lofi' },
  { id: '6', title: 'Summer Ghost', artist: 'Nu-Jazz', category: 'Lofi' },
  { id: '7', title: 'Moonlight Walk', artist: 'Dreamy', category: 'Lofi' },
  { id: '8', title: 'Vintage Cassette', artist: 'Retro', category: 'Lofi' },
  { id: '9', title: 'Soul Meditation', artist: 'Zen', category: 'Lofi' },
  { id: '10', title: 'After Hours', artist: 'Smooth', category: 'Lofi' },
  
  // GAME / BGMI VIBES / COMPETITIVE
  { id: '11', title: 'Pochinki Drop', artist: 'Gaming Focus', category: 'Game' },
  { id: '12', title: 'Zone is Closing', artist: 'Adrenaline', category: 'Game' },
  { id: '13', title: 'Winner Chicken Dinner', artist: 'Victory Beats', category: 'Game' },
  { id: '14', title: 'Airdrop Hunter', artist: 'Tactical', category: 'Game' },
  { id: '15', title: 'Erangel Sunset', artist: 'Survivor', category: 'Game' },
  { id: '16', title: 'Squad Up', artist: 'Unity', category: 'Game' },
  { id: '17', title: 'Sniper Nest', artist: 'Stealth', category: 'Game' },
  { id: '18', title: 'Fast Drive', artist: 'Uaz Drifting', category: 'Game' },
  { id: '19', title: 'Looting Phase', artist: 'Progress', category: 'Game' },
  { id: '20', title: 'Last Circle', artist: 'Intensity', category: 'Game' },
  { id: '52', title: 'One Tap', artist: 'Esports', category: 'Game' },
  { id: '53', title: 'Frag Out', artist: 'Combat', category: 'Game' },
  { id: '54', title: 'Defuse Set', artist: 'Strategy', category: 'Game' },
  { id: '55', title: 'Rank Push', artist: 'Grind', category: 'Game' },

  // AMBIENT
  { id: '21', title: 'Deep Space', artist: 'NASA Sounds', category: 'Ambient' },
  { id: '22', title: 'Amazon Rain', artist: 'Nature', category: 'Ambient' },
  { id: '23', title: 'Tibetan Bowls', artist: 'Spirit', category: 'Ambient' },
  { id: '24', title: 'White Noise Pro', artist: 'Focus', category: 'Ambient' },
  { id: '25', title: 'Thunderstorm', artist: 'Atmosphere', category: 'Ambient' },
  { id: '26', title: 'Forest Stream', artist: 'Zen', category: 'Ambient' },
  { id: '27', title: 'Arctic Wind', artist: 'Chill', category: 'Ambient' },
  { id: '28', title: 'Underglow Water', artist: 'Ocean', category: 'Ambient' },
  { id: '29', title: 'Campfire Night', artist: 'Cozy', category: 'Ambient' },
  { id: '30', title: 'Library Silence', artist: 'Focus', category: 'Ambient' },
  { id: '56', title: 'Cafe Ambience', artist: 'Social', category: 'Ambient' },
  { id: '57', title: 'Heavy Rainfall', artist: 'Sleep', category: 'Ambient' },

  // SYNTH / TECH
  { id: '31', title: 'Neon Highway', artist: 'Outrun', category: 'Synth' },
  { id: '32', title: 'Binary Code', artist: 'Hacker Flow', category: 'Synth' },
  { id: '33', title: 'Digital Oracle', artist: 'Matrix', category: 'Synth' },
  { id: '34', title: 'Silicon Valley', artist: 'Startup', category: 'Synth' },
  { id: '35', title: 'Laser Focus', artist: 'Beams', category: 'Synth' },
  { id: '36', title: 'Cloud Data', artist: 'Network', category: 'Synth' },
  { id: '37', title: 'Circuit Board', artist: 'Logic', category: 'Synth' },
  { id: '38', title: 'Glitch in Matrix', artist: 'Abstract', category: 'Synth' },
  { id: '39', title: 'Virtual Reality', artist: 'Oasis', category: 'Synth' },
  { id: '40', title: 'AI Overlord', artist: 'Gemini', category: 'Synth' },
  { id: '58', title: 'Cyber City', artist: 'Future', category: 'Synth' },
  { id: '59', title: 'Data Stream', artist: 'Sync', category: 'Synth' },
  { id: '60', title: 'Quantum Flow', artist: 'Brainwave', category: 'Synth' },

  // MORE
  { id: '41', title: 'Study with Me', artist: 'Collab', category: 'Lofi' },
  { id: '42', title: 'Blue Screen', artist: 'Debug', category: 'Synth' },
  { id: '43', title: 'Mountain Peak', artist: 'Climb', category: 'Ambient' },
  { id: '44', title: 'Boss Fight', artist: 'Epic', category: 'Game' },
  { id: '45', title: 'Inventory Management', artist: 'Chill', category: 'Game' },
  { id: '46', title: 'Piano Lessons', artist: 'Classic', category: 'Lofi' },
  { id: '47', title: 'Coffee Run', artist: 'Morning', category: 'Lofi' },
  { id: '48', title: 'Deep Dive', artist: 'Sonar', category: 'Ambient' },
  { id: '49', title: 'Overclocked', artist: 'Speed', category: 'Synth' },
  { id: '50', title: 'End Game', artist: 'Finale', category: 'Game' },
  { id: '51', title: 'The Grind', artist: 'Eternal', category: 'Lofi' }
];

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [volume, setVolume] = useState(50);
  const [showPlaylist, setShowPlaylist] = useState(false);
  
  const currentTrack = TRACKS[currentTrackIndex];

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % TRACKS.length);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACKS.length) % TRACKS.length);
  };

  return (
    <div className="glass-dark p-6 flex flex-col items-stretch gap-6 border-lime-500/20 neon-glow-lime group relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-500/40 to-transparent shadow-[0_0_15px_#a2ff00]" />
      
      <div className="flex items-center space-x-5">
        <div className={`relative p-5 rounded-2xl bg-lime-500/10 text-lime-400 shadow-[0_0_20px_rgba(162,255,0,0.15)] ${isPlaying ? 'animate-pulse' : ''} transition-all duration-500`}>
          <div className="absolute inset-0 bg-lime-400/5 rounded-2xl blur-lg" />
          <div className="relative z-10">
            {currentTrack.category === 'Lofi' && <Music2 size={28} />}
            {currentTrack.category === 'Game' && <Gamepad2 size={28} />}
            {currentTrack.category === 'Ambient' && <Droplets size={28} />}
            {currentTrack.category === 'Synth' && <Brain size={28} />}
          </div>
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-[10px] font-black text-lime-400 uppercase tracking-[0.2em]">{currentTrack.category}</span>
            <div className={`w-1 h-1 rounded-full bg-lime-500 ${isPlaying ? 'animate-ping' : 'opacity-20'}`} />
          </div>
          <h4 className="text-base font-black text-white truncate uppercase tracking-tight leading-tight">{currentTrack.title}</h4>
          <p className="text-[11px] font-bold text-white/30 truncate uppercase tracking-widest mt-0.5">{currentTrack.artist}</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <button onClick={prevTrack} className="p-3 text-white/20 hover:text-white transition-all hover:bg-white/5 rounded-xl"><SkipBack size={22} /></button>
          <button 
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-lime-500 text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl shadow-lime-500/40 group/play"
          >
            {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
          </button>
          <button onClick={nextTrack} className="p-3 text-white/20 hover:text-white transition-all hover:bg-white/5 rounded-xl"><SkipForward size={22} /></button>
        </div>

        <div className="flex items-center space-x-4 flex-1">
          <Volume2 size={18} className="text-white/20" />
          <div className="relative flex-1 group/vol">
            <div className="absolute inset-y-0 left-0 bg-lime-500 rounded-full h-1 my-auto pointer-events-none transition-all shadow-[0_0_10px_#a2ff00]" style={{ width: `${volume}%` }} />
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={volume}
              onChange={(e) => setVolume(parseInt(e.target.value))}
              className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer relative z-10 accent-transparent"
            />
          </div>
        </div>

        <button 
          onClick={() => setShowPlaylist(!showPlaylist)}
          className={`p-4 rounded-xl transition-all ${showPlaylist ? 'bg-lime-500 text-black shadow-[0_0_15px_#a2ff00]' : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'}`}
        >
          <ListMusic size={22} />
        </button>
      </div>

      {showPlaylist && (
         <div className="absolute bottom-full left-0 right-0 mb-4 glass-dark max-h-72 overflow-y-auto p-5 neon-glow-lime space-y-2 scrollbar-thin scrollbar-thumb-lime-500/20 border border-lime-500/20 rounded-[24px]">
            <div className="flex items-center justify-between mb-4 px-2">
              <div className="text-[11px] font-black text-lime-400 uppercase tracking-[0.3em]">Master Playlist</div>
              <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">{TRACKS.length} AUDIO FILES</span>
            </div>
            {TRACKS.map((track, i) => (
              <button 
                key={track.id}
                onClick={() => { setCurrentTrackIndex(i); setShowPlaylist(false); setIsPlaying(true); }}
                className={`w-full text-left p-4 rounded-2xl flex items-center justify-between group/item transition-all ${currentTrackIndex === i ? 'bg-lime-500/20 text-lime-400 border border-lime-500/20' : 'hover:bg-white/5 text-white/30 border border-transparent'}`}
              >
                <div className="flex flex-col">
                  <span className="text-[11px] font-black uppercase tracking-tight">{track.title}</span>
                  <span className="text-[9px] font-bold opacity-40 uppercase mt-1 tracking-widest">{track.artist}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[8px] font-black opacity-20 uppercase tracking-widest border border-white/5 px-1.5 py-0.5 rounded-md">{track.category}</span>
                </div>
              </button>
            ))}
         </div>
      )}
    </div>
  );
}
