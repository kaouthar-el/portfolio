import React, { useState } from "react";
import axios from "axios";
import { Bot, X, Send } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Bonjour! Posez-moi une question sur Kawtar." },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    try {
      // الاتصال بالـ backend
      const res = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });

      const botMessage = res.data.reply || "🤖 Je n'ai pas compris votre question.";
      setMessages([...newMessages, { sender: "bot", text: botMessage }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "bot", text: "⚠️ Erreur de connexion au serveur." },
      ]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-96 bg-gray-900 text-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in border border-pink-900">
          <div className="p-4 bg-gradient-to-r from-pink-600 to-pink-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6" />
              <span className="font-bold text-lg">Assistant Virtuel</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-gray-950">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-br-sm"
                      : "bg-gray-800 text-gray-100 rounded-bl-sm border border-gray-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-800 bg-gray-900 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Tapez votre message..."
              className="flex-1 p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-600 border border-gray-700"
            />
            <button
              onClick={sendMessage}
              className="bg-gradient-to-br from-pink-600 to-pink-700 px-4 py-3 rounded-xl hover:from-pink-500 hover:to-pink-600 transition-all flex items-center gap-2 shadow-lg"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-pink-600 to-pink-800 hover:from-pink-500 hover:to-pink-700 text-white rounded-full p-5 shadow-2xl transition-all hover:scale-110 group"
        >
          <Bot className="w-7 h-7 group-hover:animate-pulse" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
