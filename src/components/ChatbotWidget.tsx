import { useEffect, useMemo, useRef, useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

interface ChatMessage {
  id: number;
  author: 'user' | 'bot';
  text: string;
}

const buildBotReply = (input: string) => {
  const message = input.toLowerCase();
  if (message.includes('project')) {
    return "I can walk you through featured projects, tech stacks, and case studies. Which project caught your eye?";
  }
  if (message.includes('contact') || message.includes('email')) {
    return 'You can reach Gabe via the contact page. Want me to open it or draft a note?';
  }
  if (message.includes('about') || message.includes('bio')) {
    return "Gabe is a full-stack developer focused on delightful web experiences. Want a quick timeline or skills list?";
  }
  if (message.includes('tech') || message.includes('stack')) {
    return 'The stack highlights Next.js, TypeScript, Tailwind CSS, and modern UI tooling. Need specifics?';
  }
  return "Thanks for the note! I can answer questions about Gabe's work, services, or availability.";
};

const ChatbotWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      author: 'bot',
      text: "Hi! I'm the AI assistant. Ask me about projects, skills, or how to get in touch.",
    },
  ]);
  const [input, setInput] = useState('');
  const [nextId, setNextId] = useState(2);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const suggestions = useMemo(
    () => ['Show me projects', "What's the tech stack?", 'How do I contact Gabe?'],
    [],
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }
    const userMessage: ChatMessage = { id: nextId, author: 'user', text: trimmed };
    const botMessage: ChatMessage = {
      id: nextId + 1,
      author: 'bot',
      text: buildBotReply(trimmed),
    };
    setMessages((prev) => [...prev, userMessage, botMessage]);
    setNextId((prev) => prev + 2);
    setInput('');
  };

  const handleSuggestion = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open ? (
        <div className="w-[320px] sm:w-[360px] rounded-2xl border border-white/40 bg-white/90 dark:bg-gray-900/90 shadow-xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-gray-200/70 dark:border-gray-700/70 px-4 py-3">
            <div>
              <p className="text-sm font-semibold">AI Chat Assistant</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Ask about projects, skills, or availability</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-gray-600 hover:bg-gray-200/70 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={scrollRef} className="max-h-[320px] space-y-3 overflow-y-auto px-4 py-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.author === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    message.author === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200/70 dark:border-gray-700/70 px-4 py-3">
            <div className="flex flex-wrap gap-2 pb-3">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  type="button"
                  onClick={() => handleSuggestion(suggestion)}
                  className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600 hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:text-gray-300"
                >
                  {suggestion}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSend();
                  }
                }}
                placeholder="Type your message..."
                aria-describedby="chatbot-submit-helper"
                className="flex-1 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none dark:border-gray-700 dark:bg-gray-900"
              />
              <button
                type="button"
                onClick={handleSend}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-500"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p
              id="chatbot-submit-helper"
              className="mt-2 text-xs text-gray-500 dark:text-gray-400"
            >
              Press Enter to send, or use the send button.
            </p>
          </div>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500"
      >
        <MessageCircle className="h-5 w-5" />
        Chat with AI
      </button>
    </div>
  );
};

export default ChatbotWidget;
