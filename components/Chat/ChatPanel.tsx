"use client";

import { useState } from "react";
import { Button } from "@/components/UI/button";
import { Textarea } from "@/components/UI/textarea";
import ChatMessage from "./ChatMessage";

import { useBuilderStore } from "@/store/builderStore";

export default function ChatPanel() {
  const setWebsite = useBuilderStore((state) => state.setWebsite);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      message: "👋 Hi! Describe the website you want to build.",
    },
  ]);

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    const userPrompt = prompt;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        message: userPrompt,
      },
    ]);

    setPrompt("");
    setLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: userPrompt,
        }),
      });

      const data = await response.json();

      if (data.website) {
        setWebsite(data.website);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message: "✅ Website Generated Successfully!",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          message: "❌ Failed to generate website.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="flex h-full flex-col bg-zinc-950 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        🤖 AI Assistant
      </h2>

      <div className="mb-6 flex-1 overflow-auto">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            role={msg.role as "user" | "assistant"}
            message={msg.message}
          />
        ))}
      </div>

      <Textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your website..."
      />

      <Button
        onClick={handleSend}
        disabled={loading}
        className="mt-4"
      >
        {loading ? "Generating..." : "Generate Website"}
      </Button>
    </div>
  );
}