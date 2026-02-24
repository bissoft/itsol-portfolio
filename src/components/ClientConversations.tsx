"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ItsolLogo from "@/assets/logo.webp";

import {
  ConversationsData,
  defaultConversationsData,
} from "@/lib/cms-defaults";

interface ClientConversationsProps {
  data?: ConversationsData;
  showHeading?: boolean;
  showViewAll?: boolean;
}

const ClientConversations = ({
  data,
  showHeading = true,
  showViewAll = true,
}: ClientConversationsProps) => {
  const { heading, conversations } = data || defaultConversationsData;
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [isBuffering, setIsBuffering] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = async (index: number, audioUrl: string) => {
    if (!audioRef.current) return;

    // Check if the URL is valid/exists
    if (!audioUrl || audioUrl.trim() === "") {
      console.error("Audio playback failed: URL is empty.");
      return;
    }

    if (playingIndex === index) {
      audioRef.current.pause();
      setPlayingIndex(null);
      setIsBuffering(false);
    } else {
      try {
        setIsBuffering(true);
        setPlayingIndex(index);

        // ALWAYS stop and update source if different
        if (audioRef.current.src !== audioUrl) {
          audioRef.current.pause();
          audioRef.current.src = audioUrl;
          audioRef.current.load();
        }

        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          await playPromise;
          // Note: isBuffering will also be set to false by onPlaying/onCanPlayThrough
        }
      } catch (error) {
        console.error("Manual playback trigger failed:", error);
        setPlayingIndex(null);
        setIsBuffering(false);
      }
    }
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={() => {
          setPlayingIndex(null);
          setIsBuffering(false);
        }}
        onCanPlay={() => setIsBuffering(false)}
        onCanPlayThrough={() => setIsBuffering(false)}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => setIsBuffering(false)}
        onPause={() => setIsBuffering(false)}
        onError={(e) => {
          const error = audioRef.current?.error;
          let errorMessage = "Unknown audio error";

          if (error) {
            switch (error.code) {
              case 1:
                errorMessage = "Fetching process aborted by user.";
                break;
              case 2:
                errorMessage = "Network error while downloading.";
                break;
              case 3:
                errorMessage =
                  "Decode error (corrupt file or unsupported format).";
                break;
              case 4:
                errorMessage = "Source not supported or URL invalid.";
                break;
            }
          }

          console.error(
            `Audio Error (${error?.code || "N/A"}): ${errorMessage}`,
            {
              url: audioRef.current?.src,
              error: error,
            },
          );

          setPlayingIndex(null);
          setIsBuffering(false);
        }}
        className="fixed bottom-0 left-0 w-0 h-0 opacity-0 pointer-events-none"
      />
      <div className="max-w-7xl mx-auto px-6">
        {(showHeading || showViewAll) && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            {showHeading && (
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
                >
                  {heading.split("\\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line.trim()}
                      {i !== heading.split("\\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </motion.h2>
                <div className="w-20 h-1 bg-blue-600 rounded-full"></div>
              </div>
            )}
            {showViewAll && (
              <Link
                href="/podcasts"
                className="hidden md:flex items-center px-6 py-3 border border-gray-200 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                View All Podcasts
              </Link>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conversations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-900 rounded-2xl overflow-hidden relative group cursor-pointer h-[400px] flex flex-col hover:shadow-2xl transition-shadow duration-300"
              onClick={() => togglePlay(index, item.audioUrl)}
            >
              {/* Card Header */}
              <div className="p-6 flex justify-between items-start z-10 relative">
                <div className="flex items-center gap-3">
                  {/* Partner Logo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.partnerLogo}
                    alt={item.partner}
                    className="h-6 w-auto brightness-0 invert"
                  />
                  <div className="h-4 w-[1px] bg-white/40"></div>

                  {/* Itsol Logo - Fixed import matches Navbar */}
                  <Image
                    src={ItsolLogo}
                    alt="Itsol"
                    className="h-6 w-auto brightness-0 invert object-contain"
                  />
                </div>
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-[10px] font-bold text-white uppercase tracking-wider">
                  Podcast
                </span>
              </div>

              {/* Speakers Visual */}
              <div className="absolute inset-x-0 bottom-0 h-4/5 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt="Speakers"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                />
              </div>

              {/* Content */}
              <div className="mt-auto p-6 z-20 relative">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 text-gray-900 shadow-lg transition-all duration-300 ${
                    playingIndex === index
                      ? "bg-blue-500 text-white scale-110"
                      : "bg-white group-hover:scale-110"
                  }`}
                >
                  {playingIndex === index ? (
                    isBuffering ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Pause size={26} fill="currentColor" />
                    )
                  ) : (
                    <Play size={26} fill="currentColor" className="ml-1" />
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>

                <div className="flex gap-2 text-blue-200 text-xs font-medium">
                  {item.speakers && item.speakers.length >= 2 ? (
                    <>
                      <span>{item.speakers[0].name}</span>
                      <span className="text-blue-400">|</span>
                      <span>{item.speakers[1].name}</span>
                    </>
                  ) : item.speakers && item.speakers.length === 1 ? (
                    <span>{item.speakers[0].name}</span>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/podcasts"
              className="inline-block px-6 py-3 border border-gray-200 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 w-full"
            >
              View All Podcasts
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientConversations;
