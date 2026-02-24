import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Send, X, Bot, User } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "Hi there! How can I help you today?", 
      sender: "bot",
      timestamp: new Date()
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { 
      text: input, 
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponses = [
        "I'm a demo bot, but I'd love to help!",
        "That's an interesting question!",
        "Let me check that for you...",
        "I'm still learning, but I'll do my best!",
        "Thanks for your message! How can I assist you further?"
      ];
      const botMessage = { 
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200 + Math.random() * 1800);
  };

  const formatTime = (date) =>
    date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <>
      {/* Floating Chat Button */}
  <motion.button
  onClick={toggleChat}
  className="fixed z-[2000] rounded-full shadow-lg p-3 cursor-pointer"
  style={{
    bottom: "calc(24px + env(safe-area-inset-bottom))", // ✅ safe area compatible
    right: "20px",
  }}
  initial={{ scale: 0 }}
  animate={{
    scale: 1,
    rotate: isOpen ? 180 : 0,
    backgroundColor: isOpen ? "#ef4444" : "#3b82f6",
  }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 20 }}
  aria-label={isOpen ? "Close chat" : "Open chat"}
>
  {isOpen ? (
    <X className="w-6 h-6 text-white" />
  ) : (
    <MessageSquare className="w-6 h-6 text-white" />
  )}
</motion.button>


      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed w-80 h-96 flex flex-col rounded-xl shadow-2xl overflow-hidden bg-white z-[1999]" // ✅ slightly below button
      style={{
        right: "20px",
        bottom: "calc(90px + env(safe-area-inset-bottom))", // ✅ lifted higher than button safely
        maxWidth: "90vw", // ✅ fits small screens
      }}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Bot className="w-5 h-5" />
                <h3 className="font-semibold text-lg">AI Assistant</h3>
              </div>
              <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white/80 hover:text-white"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`max-w-xs rounded-2xl p-3 ${msg.sender === "user" 
                    ? "bg-blue-600 text-white rounded-br-none shadow-md" 
                    : "bg-white text-gray-800 shadow border border-gray-200 rounded-bl-none"}`}
                  >
                    <div className="flex items-center mb-1 space-x-1">
                      {msg.sender === "user" ? (
                        <User className="w-4 h-4 opacity-80" />
                      ) : (
                        <Bot className="w-4 h-4 opacity-80" />
                      )}
                      <span className="text-xs opacity-70 select-none">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-white text-gray-800 shadow border border-gray-200 rounded-2xl rounded-bl-none p-3 flex items-center space-x-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-300 bg-white p-3">
              <div className="flex items-center space-x-2">
                <motion.input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-full py-3 px-4 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  whileFocus={{ scale: 1.01 }}
                  aria-label="Message input"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!input.trim()}
                  className={`flex items-center justify-center bg-blue-600 text-white p-3 rounded-full shadow-md transition 
                    ${!input.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700 active:scale-95"}`}
                  whileHover={input.trim() ? { scale: 1.05 } : {}}
                  whileTap={input.trim() ? { scale: 0.95 } : {}}
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
