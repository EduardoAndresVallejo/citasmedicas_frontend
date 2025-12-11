import { useState, useRef, useEffect } from "react";
import { Send, X, MessageSquare, MessageSquareText } from "lucide-react";
import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { generateText } from "ai";

// Colores de marca
const brandColors = {
  "green-primary": "#10b981",
  "yellow-accent": "#f59e0b",
  "gray-base": "#f9fafb",
  "text-dark": "#1f2937",
};

// Burbuja flotante del chat
const ChatBubble = ({ onClick }) => (
  <div
    onClick={onClick}
    className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300 z-[100]"
    style={{ backgroundColor: brandColors["yellow-accent"] }}
  >
    <MessageSquare className="h-8 w-8 text-white" />
  </div>
);

// Componente de mensaje
const Message = ({ message }) => {
  const isUser = message.sender === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-xl shadow-md ${
          isUser
            ? "bg-green-600 text-white rounded-br-none"
            : "bg-gray-200 text-text-dark rounded-tl-none"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {message.text}
        </p>

        {!isUser && message.suggestions && (
          <div className="mt-2 text-xs text-gray-500 italic">
            Opciones: {message.suggestions.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
};

// Componente principal del Chat
const ChatIA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "¡Hola! Soy MateBot, tu asistente virtual del Hospital Central LifeMate. ¿En qué puedo ayudarte hoy?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Enviar mensaje
  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const openrouter = createOpenRouter({
        apiKey: import.meta.env.VITE_APIKEY_CHAT,
      });

      const result = await generateText({
        model: openrouter("openai/gpt-oss-20b:free"),
        prompt: input,
        system:
          "eres un doctor con 15 años de experiencia y solo das respuestas muy resumidas. si te pregunta tu nombre di que te llamas lifeMate",
      });

      const botReply = result.text;

      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        setIsTyping(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Hubo un error procesando tu solicitud. Intenta nuevamente.",
        },
      ]);
    }
  };

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="relative w-full h-full">
      {/* Botón burbuja */}
      <ChatBubble onClick={() => setIsOpen(!isOpen)} />

      {/* Ventana principal */}
      {isOpen && (
        <div
          className="fixed bottom-20 right-6 w-[90vw] max-w-sm h-[70vh] max-h-[500px] bg-white rounded-xl shadow-2xl flex flex-col transition-all duration-300 z-[100] border-2"
          style={{ borderColor: brandColors["green-primary"] }}
        >
          {/* HEADER */}
          <div
            className="flex items-center justify-between p-4 rounded-t-lg text-white shadow-md"
            style={{ backgroundColor: brandColors["green-primary"] }}
          >
            <div className="flex items-center">
              <MessageSquareText className="h-5 w-5 mr-2" />
              <span className="font-bold text-lg">MateBot Asistente</span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-green-700 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* MENSAJES */}
          <div className="flex-grow p-4 overflow-y-auto bg-gray-base custom-scrollbar">
            {messages.map((msg, i) => (
              <Message key={i} message={msg} />
            ))}

            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="max-w-xs px-4 py-3 rounded-xl bg-gray-300 text-gray-700">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-300"></div>
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce delay-500"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe tu mensaje..."
                className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <button
                onClick={handleSend}
                disabled={isTyping}
                className={`ml-2 p-3 rounded-full shadow-md transition duration-300 ${
                  input.trim() === ""
                    ? "bg-gray-400 cursor-not-allowed"
                    : "hover:scale-105 text-white"
                }`}
                style={{
                  backgroundColor:
                    input.trim() !== ""
                      ? brandColors["yellow-accent"]
                      : "#9ca3af",
                }}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SCROLLBAR CUSTOM */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: ${brandColors["green-primary"]};
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e5e7eb;
        }
      `}</style>
    </div>
  );
};

export default ChatIA;
