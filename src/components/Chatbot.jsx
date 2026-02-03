import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! I'm Mehjabin's AI assistant. Ask me about her projects, experience, or skills!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg.text }),
      });

      if (!response.ok) throw new Error("API Connection Failed");

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "I'm having a connection issue. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* Root container: Pinned to the front layer with z-[9999] */
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      
      {/* Chat Window Container */}
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[90vw] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in ring-1 ring-white/10">
          
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground shadow-md">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <Sparkles size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-white tracking-wide">AI Assistant</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={22} />
            </button>
          </div>

          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="h-80 overflow-y-auto p-4 space-y-4 bg-background/50 backdrop-blur-md scroll-smooth"
          >
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-primary text-white rounded-br-none" 
                    : "bg-secondary text-foreground border border-border rounded-bl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-secondary border border-border rounded-2xl px-4 py-2.5 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-primary" />
                  <span className="text-xs font-medium text-muted-foreground">Generating response...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form 
            onSubmit={handleSend} 
            className="p-3 border-t border-border bg-card flex gap-2 items-center"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-secondary/50 rounded-xl px-4 py-2.5 text-sm outline-none border border-transparent focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground/60"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-primary text-white rounded-xl hover:opacity-90 disabled:opacity-50 transition-all shadow-lg active:scale-95"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Action Button (FAB) */}
      <div className="relative group">
        {/* Ambient Glow effect around the button */}
        <div className="absolute inset-0 bg-primary/40 rounded-full blur-xl group-hover:bg-primary/60 transition-all duration-500" />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative h-16 w-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 cosmic-button z-10 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
          
          {/* Notification Badge (only shows when closed) */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-purple-500"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};