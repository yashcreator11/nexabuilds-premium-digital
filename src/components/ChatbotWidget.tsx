import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, PhoneCall, ChevronRight, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickActions?: { label: string; action: () => void; isPrimary?: boolean }[];
}

const FAQ_PRESETS = [
  {
    id: 'sprint',
    question: 'How does Pay-Per-Sprint work?',
    keywords: ['sprint', 'pay', 'payment', 'milestone', 'deposit', 'risk'],
    answer:
      'We work in 1–2 week sprints with clear deliverables. You only pay milestone-by-milestone after you test and approve the working demo on staging. Zero risky upfront lumpsums.',
    actionLabel: 'View Sprint Details',
    anchor: '#how-we-work',
  },
  {
    id: 'team',
    question: 'Who will work on my project?',
    keywords: ['team', 'who', 'developer', 'figma', 'security', 'tester', 'qa', 'designer', 'backend', 'devops', 'cloud', 'roles', 'squad'],
    answer:
      'Every project gets a complete multidisciplinary engineering squad: UI/UX Figma Designer, Frontend Developer, Backend & API Engineer, DevOps & Cloud Architect, Cybersecurity Specialist, and QA Tester. No solo freelancers or account managers.',
    actionLabel: 'Meet All 6 Roles',
    anchor: '#about',
  },
  {
    id: 'timeline',
    question: 'How fast can we launch an MVP?',
    keywords: ['timeline', 'time', 'fast', 'speed', 'mvp', 'weeks', 'days', 'launch', 'deadline'],
    answer:
      'Most MVPs launch in 3 to 4 weeks across 2 focused sprints. We prioritize high-impact core features first so you can get real user feedback and start generating revenue immediately.',
    actionLabel: 'See 4-Step Process',
    anchor: '#how-we-work',
  },
  {
    id: 'pricing',
    question: 'What are your rates and pricing?',
    keywords: ['price', 'pricing', 'cost', 'rates', 'budget', 'quote', 'how much', 'hourly', '450', 'rate', 'charge', 'fee'],
    answer:
      'Our rates are 100% transparent, starting at min ₹450/hour per developer (approx. $5.50/hr). A 1-week sprint (40 hrs) starts from ₹18,000 / dev, and a 2-week sprint (80 hrs) from ₹36,000 / dev. You get full timesheet tracking and only pay milestone-by-milestone after approving live staging demos.',
    actionLabel: 'Get a Free Quote',
    anchor: '#contact',
  },
  {
    id: 'ownership',
    question: 'Do I own 100% of the code & IP?',
    keywords: ['code', 'ip', 'ownership', 'repo', 'github', 'rights', 'lock-in', 'license'],
    answer:
      'Yes, 100%. All intellectual property, GitHub repositories, design tokens, and cloud infrastructure belong entirely to you from day one. Zero vendor lock-in.',
  },
  {
    id: 'projects',
    question: 'What projects have you delivered?',
    keywords: ['project', 'projects', 'work', 'delivered', 'portfolio', 'case study', 'biometric', 'localnest', 'experience'],
    answer:
      'We recently delivered a 24/7 Pan-India Multi-Branch Biometric & Geofenced Mobile QR Attendance System for an enterprise running two continuous shifts, and LocalNest, a two-sided marketplace platform built for a growing startup with complete identity protection.',
    actionLabel: 'View Delivered Projects',
    anchor: '#portfolio',
  },
  {
    id: 'security',
    question: 'How do you handle security & compliance?',
    keywords: ['security', 'compliance', 'cyber', 'auth', 'owasp', 'safe', 'data'],
    answer:
      'Our dedicated Cybersecurity Specialist reviews authentication, implements role-based access control (RBAC), audits data encryption at rest and in transit, and ensures OWASP compliance.',
  },
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [faqOffset, setFaqOffset] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Hi there! 👋 I'm Yash. Ask me anything about our rates (starting at min ₹450/hour), pay-per-sprint model, full 6-role squad, or delivered projects!",
      time: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen, isTyping]);

  const handleFAQClick = (faq: typeof FAQ_PRESETS[0]) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: faq.question,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: faq.answer,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickActions: [
          ...(faq.anchor
            ? [
                {
                  label: faq.actionLabel || 'Learn More',
                  action: () => {
                    setIsOpen(false);
                    const el = document.querySelector(faq.anchor!);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  },
                },
              ]
            : []),
          {
            label: 'Chat on WhatsApp',
            isPrimary: true,
            action: () => {
              window.open('https://wa.me/919619036483?text=Hi%20AgileSquad%20team,%20I%20have%20a%20question%20about%20a%20project', '_blank');
            },
          },
        ],
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 450);
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = input.trim().toLowerCase();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Rule-based keyword engine
    setTimeout(() => {
      setIsTyping(false);
      const matched = FAQ_PRESETS.find((faq) =>
        faq.keywords.some((kw) => query.includes(kw))
      );

      let replyText = '';
      const actions: Message['quickActions'] = [];

      if (matched) {
        replyText = matched.answer;
        if (matched.anchor) {
          actions.push({
            label: matched.actionLabel || 'View Section',
            action: () => {
              setIsOpen(false);
              const el = document.querySelector(matched.anchor!);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            },
          });
        }
      } else if (query.includes('hi') || query.includes('hello') || query.includes('hey')) {
        replyText = "Hello! Looking to build software, an MVP, or an automation pipeline? Choose a quick question below or ask me directly!";
      } else {
        replyText =
          "Thanks for asking! Our engineering team can give you exact specifics for your custom project. Would you like to connect directly on WhatsApp or drop a project quote?";
        actions.push({
          label: 'Chat Directly on WhatsApp',
          isPrimary: true,
          action: () => {
            window.open('https://wa.me/919619036483?text=Hi%20AgileSquad,%20I%20would%20like%20to%20discuss%20a%20project', '_blank');
          },
        });
        actions.push({
          label: 'Request a Free Quote',
          action: () => {
            setIsOpen(false);
            const el = document.querySelector('#contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        });
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: replyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickActions: actions.length > 0 ? actions : undefined,
      };

      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  const handleReset = () => {
    setMessages([
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: "Conversation reset. Feel free to ask another question or tap one of the common topics below!",
        time: 'Just now',
      },
    ]);
  };

  const visibleFaqs = [
    FAQ_PRESETS[faqOffset % FAQ_PRESETS.length],
    FAQ_PRESETS[(faqOffset + 1) % FAQ_PRESETS.length],
    FAQ_PRESETS[(faqOffset + 2) % FAQ_PRESETS.length],
    FAQ_PRESETS[(faqOffset + 3) % FAQ_PRESETS.length],
  ];

  return (
    <>
      {/* Floating Launcher Button - Red-Orange Pill on Desktop, Circular Chat Icon on Mobile */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center w-12 h-12 sm:w-auto sm:h-auto sm:px-5 sm:py-3 rounded-full bg-[#F04424] text-white font-semibold text-xs sm:text-sm shadow-[0_8px_25px_rgba(240,68,36,0.4)] hover:bg-[#d6391b] transition-all duration-200 border border-white/20 select-none"
        aria-label="Ask Yash"
        title="Ask Yash"
      >
        <div className="relative flex items-center justify-center">
          <MessageSquare className="w-5 h-5 sm:w-4 sm:h-4" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping" />
        </div>
        <span className="hidden sm:inline ml-2 font-bold tracking-wide">Ask Yash</span>
      </motion.button>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-18 sm:bottom-20 right-3 sm:right-6 left-3 sm:left-auto z-50 w-auto sm:w-[410px] max-w-[calc(100vw-1.5rem)] h-[520px] sm:h-[550px] max-h-[82vh] bg-background border border-border/80 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="px-5 py-4 bg-card dark:bg-[#140F0D] border-b border-border flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F04424] flex items-center justify-center text-white shadow-[0_0_12px_rgba(240,68,36,0.5)]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-foreground">Yash</span>
                    <span className="text-[10px] font-semibold text-[#F04424] bg-[#F04424]/10 border border-[#F04424]/20 px-2 py-0.5 rounded-full">
                      Agile Lead
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-[11px] text-muted-foreground font-medium">Sprint estimates, team roles & instant answers</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={handleReset}
                  title="Reset conversation"
                  className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/25 dark:bg-muted/20">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      m.sender === 'user'
                        ? 'bg-[#F04424] text-white rounded-br-none shadow-sm font-medium'
                        : 'bg-card border border-border text-foreground rounded-bl-none shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>

                  {m.quickActions && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {m.quickActions.map((qa, i) => (
                        <button
                          key={i}
                          onClick={qa.action}
                          className={`text-[11px] font-semibold px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ${
                            qa.isPrimary
                              ? 'bg-[#F04424] text-white hover:bg-[#d6391b] shadow-sm'
                              : 'bg-card text-foreground hover:bg-muted border border-border shadow-sm'
                          }`}
                        >
                          {qa.label} <ChevronRight className="w-3 h-3" />
                        </button>
                      ))}
                    </div>
                  )}

                  <span className="text-[9px] text-muted-foreground/80 mt-1 px-1 font-medium">{m.time}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 bg-card border border-border px-3 py-2 rounded-2xl rounded-bl-none w-fit shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F04424] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F04424] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F04424] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions (2x2 Grid - No Ugly Scrollbars) */}
            <div className="p-3 bg-card dark:bg-[#140F0D] border-t border-border">
              <div className="flex items-center justify-between mb-2 px-0.5">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F04424]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Suggested Questions
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {showSuggestions && (
                    <button
                      type="button"
                      onClick={() => setFaqOffset((prev) => (prev + 2) % FAQ_PRESETS.length)}
                      className="text-[10px] font-medium text-muted-foreground hover:text-[#F04424] flex items-center gap-1 px-1.5 py-0.5 rounded-md hover:bg-muted transition-colors"
                      title="Show different questions"
                    >
                      <RefreshCw className="w-2.5 h-2.5" />
                      <span>More</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowSuggestions(!showSuggestions)}
                    className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted transition-colors"
                    title={showSuggestions ? 'Collapse questions' : 'Show questions'}
                    aria-label="Toggle suggestions"
                  >
                    {showSuggestions ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronUp className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {showSuggestions && (
                <div className="grid grid-cols-2 gap-2">
                  {visibleFaqs.map((faq) => (
                    <button
                      key={faq.id}
                      type="button"
                      onClick={() => handleFAQClick(faq)}
                      className="group text-left p-2.5 rounded-xl bg-muted/40 hover:bg-[#F04424]/10 hover:border-[#F04424]/40 border border-border text-foreground transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-sm"
                    >
                      <div className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F04424] mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-[11px] font-medium leading-snug line-clamp-2 text-foreground/90 group-hover:text-[#F04424] transition-colors">
                          {faq.question}
                        </span>
                      </div>
                      <span className="text-[9px] text-muted-foreground group-hover:text-[#F04424] flex items-center gap-0.5 pl-3 mt-1.5 font-semibold transition-colors">
                        Ask <ChevronRight className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-card border-t border-border flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about sprints, team, rates..."
                className="flex-1 bg-background border border-border rounded-full px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#F04424] transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-8 h-8 rounded-full bg-[#F04424] text-white flex items-center justify-center hover:bg-[#d6391b] transition-all disabled:opacity-40 disabled:hover:bg-[#F04424] shrink-0 shadow-sm"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
