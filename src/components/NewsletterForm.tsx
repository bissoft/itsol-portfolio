"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { Send, Loader2 } from "lucide-react";

interface NewsletterFormProps {
  source?: string;
}

const NewsletterForm = ({ source = "podcast_page" }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        toast.error(data.error || "Failed to subscribe.");
      }
    } catch (error) {
      console.error("Newsletter form error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
    >
      <div className="flex-grow">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-900 shadow-sm"
          required
          disabled={loading}
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
      >
        {loading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <span>Subscribe</span>
            <Send className="w-4 h-4 ml-2" />
          </>
        )}
      </button>
    </form>
  );
};

export default NewsletterForm;
