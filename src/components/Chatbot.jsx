import { useState } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles } from "lucide-react";

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi! I'm Mehjabin's AI assistant. Ask me about her projects, experience, or skills!" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      const data = await response.json();
      setMessages((prev) => [...prev, { role: "ai", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", text: "I'm having a connection issue. Try again?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // FIXED: Added z-[9999] to ensure it is always on top
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[90vw] bg-card border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-in bg-white dark:bg-slate-900">
          <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <h3 className="font-semibold text-white">Mehjabin's AI</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-secondary/10">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                  msg.role === "user" 
                    ? "bg-primary text-white rounded-br-none" 
                    : "bg-slate-100 dark:bg-slate-800 text-foreground rounded-bl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && <Loader2 size={16} className="animate-spin text-primary ml-2" />}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-border bg-background flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-secondary/50 rounded-md px-3 py-2 text-sm outline-none border border-transparent focus:border-primary text-foreground"
            />
            <button type="submit" className="p-2 bg-primary text-white rounded-md">
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cosmic-button"
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </button>
    </div>
  );
};