import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Image as ImageIcon, Mic, X, Camera } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  image?: string;
}

export default function AIBuddy() {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'assistant', content: 'Yo! I\'m your Study Buddy Pro. Snap a photo of your homework or ask me anything. Let\'s crush this session!' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userMessage: Message = { 
      id: Date.now().toString(), 
      role: 'user', 
      content: input,
      image: selectedImage || undefined
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    const currentImage = selectedImage;
    clearImage();
    setIsLoading(true);

    try {
      let contents: any;
      
      if (currentImage) {
        contents = {
          parts: [
            { inlineData: { mimeType: "image/jpeg", data: currentImage.split(',')[1] } },
            { text: input || "Explain what's in this image and help me solve any problems shown." }
          ]
        };
      } else {
        contents = input;
      }

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: contents,
        config: {
          systemInstruction: "You are a cool, high-energy Study Buddy. You use teen slang, emojis, and provide super clear explanations. You help with homework, concepts, and focus tips."
        }
      });

      const assistantMessage: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: response.text || "I'm drawing a blank... try again?"
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('AI Error:', error);
      setMessages(prev => [...prev, { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: "Server's acting up. Check your API key or network!" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass-dark flex flex-col h-[600px] w-full overflow-hidden neon-glow-cyan border-cyan-500/20">
      <div className="p-4 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <Bot size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-wider">AI Buddy Pro</h3>
            <div className="flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
              <span className="text-[9px] text-cyan-400/60 uppercase font-black tracking-widest">Visual Mode Active</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
           <button className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-cyan-400 transition-colors"><Mic size={18} /></button>
           <Sparkles size={16} className="text-cyan-500" />
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-white/10">
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] space-y-2`}>
              {m.image && (
                <div className="relative group">
                   <img src={m.image} alt="Upload" className="w-48 h-48 object-cover rounded-2xl border border-white/10" />
                </div>
              )}
              <div className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                m.role === 'user' 
                  ? 'bg-cyan-600 text-white rounded-tr-none shadow-lg shadow-cyan-900/20' 
                  : 'bg-white/5 border border-white/10 text-white/90 rounded-tl-none font-medium'
              }`}>
                {m.content}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-black/20 border-t border-white/5 space-y-3">
        {selectedImage && (
          <div className="relative inline-block">
             <img src={selectedImage} className="w-16 h-16 rounded-xl object-cover border border-cyan-500/50" />
             <button onClick={clearImage} className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white shadow-lg"><X size={10} /></button>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex items-center space-x-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageSelect}
            accept="image/*"
            className="hidden"
          />
          <button 
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-3 bg-white/5 border border-white/10 rounded-xl text-white/40 hover:text-cyan-400 hover:bg-white/10 transition-all"
          >
            <Camera size={20} />
          </button>
          
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask question or upload Photo..."
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-xs font-bold text-white placeholder:text-white/20 focus:outline-none focus:border-cyan-500/50"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="p-4 bg-cyan-600 rounded-2xl text-white hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shadow-lg shadow-cyan-900/40"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
