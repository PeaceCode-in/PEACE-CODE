"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  LayoutDashboard,
  MessageCircle,
  Calendar,
  FileText,
  Settings,
  LogOut,
  Heart,
  Brain,
  Wind,
  BookOpen,
  Timer,
  Plus,
  ChevronDown,
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  Info,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: "user" | "ai" | "counselor";
  text: string;
  time: string;
  status?: "sent" | "delivered" | "read";
}

export default function SupportChatPage() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("Student");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNav, setActiveNav] = useState("Support Chat");
  const [messageInput, setMessageInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "ai",
      text: "Hello! I'm here to support you. How are you feeling today?",
      time: "10:30 AM",
      status: "read",
    },
    {
      id: "2",
      sender: "user",
      text: "I've been feeling a bit anxious lately about my upcoming exams.",
      time: "10:32 AM",
      status: "read",
    },
    {
      id: "3",
      sender: "ai",
      text: "I understand exam stress can be overwhelming. It's completely normal to feel this way. Would you like to talk about what specifically is making you anxious?",
      time: "10:33 AM",
      status: "read",
    },
  ]);

  const supportOptions = [
    {
      icon: Brain,
      label: "AI Support",
      description: "Instant responses",
      active: true,
    },
    {
      icon: Phone,
      label: "Counselor",
      description: "Available 24/7",
      active: false,
    },
    {
      icon: Wind,
      label: "Quick Exercise",
      description: "Breathing guide",
      active: false,
    },
  ];

  useEffect(() => {
    const storedName = localStorage.getItem("peacecode_user_name");
    if (!storedName) {
      router.push("/auth/simple-login");
    } else {
      setUserName(storedName);
      setTimeout(() => setIsLoaded(true), 50);
    }
  }, [router]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    localStorage.removeItem("peacecode_user_name");
    router.push("/");
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;

    const newMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: messageInput,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "sent",
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: "Thank you for sharing that with me. Remember, it's okay to feel this way. Let's work through this together. Would you like to try a quick breathing exercise?",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        status: "read",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 2000);
  };

  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", badge: null },
    { icon: MessageCircle, label: "Support Chat", badge: "3" },
    { icon: Calendar, label: "Calendar", badge: null },
    { icon: FileText, label: "Journal", badge: null },
    { icon: BookOpen, label: "Resources", badge: null },
  ];


  return (
    <div className="min-h-screen bg-[#F5F6FA] flex">
      {/* Left Sidebar - 250px */}
      <aside
        className={cn(
          "w-[250px] bg-white border-r border-gray-100 flex flex-col h-screen sticky top-0 transition-all duration-300",
          isLoaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
        )}
      >
        {/* Logo */}
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#2943D6] flex items-center justify-center">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-gray-900">PeaceCode</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for people, document, goods..."
              className="pl-9 h-10 bg-gray-50 border-0 text-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-3 space-y-1">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                router.push(`/student/${item.label}`);
                setActiveNav(item.label);
              }}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                activeNav === item.label
                  ? "bg-[#2943D6]/5 text-[#2943D6]"
                  : "text-gray-600 hover:bg-gray-50"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  activeNav === item.label ? "text-[#2943D6]" : "text-gray-400"
                )}
              />
              <span>{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-[#FB2B76] text-white text-xs font-medium px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          ))}

          {/* Integrations Section */}
          
        </nav>

        {/* Bottom Section */}
        <div className="p-3 border-t border-gray-100">
          <button
            onClick={() => router.push("/settings")}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <Settings className="h-5 w-5 text-gray-400" />
            <span>Settings</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <LogOut className="h-5 w-5 text-gray-400" />
            <span>Log out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header
          className={cn(
            "h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-40 transition-all duration-300",
            isLoaded ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
          )}
        >
          <div className="flex items-center gap-4">
            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-[#8B5CD6] text-white">
                  AI
                </AvatarFallback>
              </Avatar>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#13CD3C] border-2 border-white rounded-full"></span>
            </div>
            <div>
              <h1 className="text-base font-semibold text-gray-900">
                AI Support Assistant
              </h1>
              <p className="text-sm text-[#13CD3C] flex items-center gap-1">
                <span className="w-2 h-2 bg-[#13CD3C] rounded-full"></span>
                Active now
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <Phone className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <Video className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
            >
              <Info className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Chat Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chat Messages Area */}
          <div className="flex-1 flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.sender === "user" ? "justify-end" : "justify-start"
                  )}
                >
                  {message.sender !== "user" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarFallback className="bg-[#8B5CD6] text-white text-xs">
                        AI
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-[70%] space-y-1",
                      message.sender === "user" ? "items-end" : "items-start"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-3",
                        message.sender === "user"
                          ? "bg-[#2943D6] text-white rounded-br-sm"
                          : "bg-white border border-gray-100 text-gray-900 rounded-bl-sm"
                      )}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <p
                      className={cn(
                        "text-xs text-gray-400 px-1",
                        message.sender === "user" ? "text-right" : "text-left"
                      )}
                    >
                      {message.time}
                    </p>
                  </div>
                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarFallback className="bg-[#2943D6] text-white text-xs">
                        {userName.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <Avatar className="h-8 w-8 mt-1">
                    <AvatarFallback className="bg-[#8B5CD6] text-white text-xs">
                      AI
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-3 border-t border-gray-100 bg-white">
              <div className="flex gap-2 mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  <Wind className="h-3 w-3 mr-1" />
                  Breathing Exercise
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  <Brain className="h-3 w-3 mr-1" />
                  Coping Strategies
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs text-gray-600 border-gray-200 hover:bg-gray-50 bg-transparent"
                >
                  <Phone className="h-3 w-3 mr-1" />
                  Talk to Counselor
                </Button>
              </div>

              {/* Message Input */}
              <div className="flex items-end gap-2">
                <div className="flex-1 bg-gray-50 rounded-2xl border border-gray-200 flex items-center px-4 py-2">
                  <Input
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                  />
                  <div className="flex items-center gap-1 ml-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-gray-600"
                    >
                      <Paperclip className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-gray-400 hover:text-gray-600"
                    >
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={handleSendMessage}
                  className="h-12 w-12 rounded-2xl bg-[#2943D6] hover:bg-[#1e35b0] text-white"
                  size="icon"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside
            className={cn(
              "w-80 bg-white border-l border-gray-100 p-6 space-y-6 transition-all duration-300",
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
            )}
          >
            {/* Support Options */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Support Options
              </h3>
              <div className="space-y-3">
                {supportOptions.map((option, index) => (
                  <Card
                    key={index}
                    className={cn(
                      "p-4 cursor-pointer transition-all border",
                      option.active
                        ? "bg-[#2943D6]/5 border-[#2943D6]"
                        : "bg-white border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg flex items-center justify-center",
                          option.active ? "bg-[#2943D6]" : "bg-gray-100"
                        )}
                      >
                        <option.icon
                          className={cn(
                            "h-5 w-5",
                            option.active ? "text-white" : "text-gray-600"
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {option.label}
                        </p>
                        <p className="text-xs text-gray-500">
                          {option.description}
                        </p>
                      </div>
                      {option.active && (
                        <Badge className="bg-[#13CD3C] text-white border-0 text-xs">
                          Active
                        </Badge>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Crisis Resources */}
            <Card className="p-4 bg-[#FFF4E5] border-[#FF9F43] border">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF9F43] flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">
                    Crisis Support
                  </h4>
                  <p className="text-xs text-gray-600">
                    24/7 emergency resources
                  </p>
                </div>
              </div>
              <Button
                className="w-full bg-[#FF9F43] hover:bg-[#e88f3a] text-white"
                size="sm"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Now
              </Button>
            </Card>

            {/* Recent Topics */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Recent Topics
              </h3>
              <div className="space-y-2">
                {[
                  "Stress Management",
                  "Sleep Issues",
                  "Time Management",
                  "Social Anxiety",
                ].map((topic, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Wellness Tips */}
            <Card className="p-4 bg-[#F0F8FF] border-[#2943D6]/20">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Daily Tip
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Take 5 minutes today to practice deep breathing. It can help
                reduce stress and improve focus.
              </p>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}
