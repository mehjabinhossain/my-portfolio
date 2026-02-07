import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Initial greeting message
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! I'm Mehjabin's AI assistant. Ask me about her projects, experience, or skills!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  // Auto-scroll to the bottom whenever messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Add User Message to UI immediately
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // Development mode: Use mock response
      if (import.meta.env.DEV) {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const mockReply =
          "Hi! I'm working in development mode. To get real responses, deploy to Vercel with your OpenAI API key set in environment variables.";
        setMessages((prev) => [...prev, { role: "ai", text: mockReply }]);
      } else {
        // 2. Call the Vercel Backend API (production)
        const apiPath = `${import.meta.env.BASE_URL}api/ask`;
        const response = await fetch(apiPath, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMsg.text }),
        });

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();

        // 3. Add AI Response to UI
        setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
      // Fallback error message for the user
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "I'm having trouble connecting to the server right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* Root Container with Forced ID for CSS Visibility */
    <div id="chatbot-root" className="chatbot-container">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[90vw] bg-white dark:bg-slate-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in ring-1 ring-black/5">
          
          {/* Header */}
          <div className="bg-indigo-600 p-4 flex justify-between items-center text-white shadow-md">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 rounded-lg">
                <Sparkles size={18} className="text-white" />
              </div>
              <h3 className="font-bold tracking-wide">AI Assistant</h3>
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
            className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-slate-800 scroll-smooth"
          >
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm shadow-sm leading-relaxed ${
                  msg.role === "user" 
                    ? "bg-indigo-600 text-white rounded-br-none" 
                    : "bg-white dark:bg-slate-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-600 rounded-bl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Loading Indicator (Visible while waiting for Gemini) */}
            {isLoading && (
              <div className="flex justify-start animate-pulse">
                <div className="bg-white dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-2xl px-4 py-2.5 flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-indigo-600" />
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form 
            onSubmit={handleSend} 
            className="p-3 border-t border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex gap-2 items-center"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-gray-100 dark:bg-slate-800 rounded-xl px-4 py-2.5 text-sm outline-none border border-transparent focus:border-indigo-500 transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg active:scale-95"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button (The Icon) */}
      <div className="relative group">
        <div className="absolute inset-0 bg-indigo-500/40 rounded-full blur-xl group-hover:bg-indigo-500/60 transition-all duration-500" />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative h-16 w-16 rounded-full bg-indigo-600 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-90 z-50 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
          
          {/* Notification Dot */}
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
};