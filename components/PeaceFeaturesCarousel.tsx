"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

const data = [
  {
    category: "AI Companion",
    title: "24/7 Chatbot Support",
    src: "/bot.jpg",
  },
  {
    category: "Counseling",
    title: "Licensed Therapists On-Demand",
    src: "/professional-counselor-therapy-session-mental-heal.jpg",
  },
  {
    category: "Community",
    title: "Find Your Supportive Tribe",
    src: "/diverse-group-students-supporting-each-other-commu.jpg",
  },
  {
    category: "Screening",
    title: "Self-Assess Your Well-Being",
    src: "/mental-health-2019924.jpg",
  },
  {
    category: "Focus",
    title: "Stay Productive with Pomodoro",
    src: "/focused-study-environment-productivity-timer-ambie.jpg",
  },
  {
    category: "Breathing",
    title: "Calm Your Mind in Minutes",
    src: "/serene-meditation-breathing-exercise-calm-blue-atm.jpg",
  },
  {
    category: "Gratitude",
    title: "Share Positivity & Hope",
    src: "/community-gratitude-wall-positive-messages-hope-in.jpg",
  },
  {
    category: "Journal",
    title: "Reflect with Our Digital Diary",
    src: "/peaceful-writing-desk-with-journal-soft-lighting-m.jpg",
  },
  {
    category: "Resources",
    title: "Articles, Videos & Guides",
    src: "/digital-library-mental-health-resources-books-know.jpg",
  },
  {
    category: "Wellness Challenges",
    title: "Build Healthy Habits Together",
    src: "/wellness-challenge-community-motivation-healthy-ha.jpg",
  },
  {
    category: "Language Support",
    title: "10+ Regional Languages",
    src: "/placeholder.jpg",
  },
  {
    category: "Crisis Help",
    title: "Instant Helpline Connections",
    src: "/placeholder-user.jpg",
  },
];

export default function PeaceFeaturesCarousel({ className }: { className?: string }) {
  const cards = data.map((card, index) => <Card key={index} card={card} index={index} />);
  return (
    <section className={className}>
      <div className="w-full py-24 bg-gradient-to-b from-white to-sky-50">
        <h2 className="max-w-7xl px-4 mx-auto mb-12 text-3xl sm:text-5xl font-black text-neutral-800 dark:text-neutral-100">
          Explore Peace Code Features
        </h2>
        <Carousel items={cards} />
      </div>
    </section>
  );
}

