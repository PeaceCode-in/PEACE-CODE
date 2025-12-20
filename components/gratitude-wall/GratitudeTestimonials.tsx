"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote, Sparkles, Heart, Star, Leaf } from "lucide-react";

const BRAND_BLUE = "#1D2D50";

const testimonials = [
  {
    id: 1,
    quote:
      "Writing gratitudes daily completely shifted my perspective. I sleep better and stress less! The community here is so supportive and positive.",
    author: "Psychology Major",
    institution: "IIT Delhi",
    emoji: "🧠",
    featured: true,
  },
  {
    id: 2,
    quote:
      "The Karma Seeds gamification made me actually want to practice gratitude every day. Watching my tree grow is so satisfying!",
    author: "Engineering Student",
    institution: "BITS Pilani",
    emoji: "🌱",
  },
  {
    id: 3,
    quote:
      "Seeing others' gratitudes reminds me that I'm not alone. This community is beautiful and uplifting.",
    author: "Medical Student",
    institution: "AIIMS",
    emoji: "💙",
  },
  {
    id: 4,
    quote:
      "Started using this during my exam stress. Now it's part of my daily mental health routine!",
    author: "MBA Student",
    institution: "IIM Bangalore",
    emoji: "📚",
  },
  {
    id: 5,
    quote:
      "The anonymous posting feature lets me express myself freely. No judgments, just positivity.",
    author: "Law Student",
    institution: "NLU Delhi",
    emoji: "🔒",
  },
  {
    id: 6,
    quote:
      "I've made so many virtual friends here. We support each other through tough times.",
    author: "Design Student",
    institution: "NID Ahmedabad",
    emoji: "🤝",
  },
];

export function GratitudeTestimonials() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        background:
          "linear-gradient(180deg, rgba(240, 249, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 100%)",
      }}
    >
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-12">
        {/* Header */}
        <motion.div
          className="relative z-10 mx-auto max-w-xl space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-2"
            style={{
              background: `${BRAND_BLUE}08`,
              border: `1px solid ${BRAND_BLUE}15`,
            }}
          >
            <Heart className="w-4 h-4" style={{ color: BRAND_BLUE }} />
            <span className="text-sm font-medium" style={{ color: BRAND_BLUE }}>
              Community Stories
            </span>
          </motion.div>
          <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl text-gray-900">
            What Students Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from our anonymous gratitude garden community.
          </p>
        </motion.div>

        {/* Bento Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1 */}
          {/* Featured Card - spans 2 columns */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-xl border-[#E0F2FE] hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${BRAND_BLUE}10` }}
                  >
                    {testimonials[0].emoji}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="flex-1">
                  <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-6">
                    "{testimonials[0].quote}"
                  </p>
                  <footer className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" style={{ color: BRAND_BLUE }} />
                    <cite
                      className="text-sm font-semibold not-italic"
                      style={{ color: BRAND_BLUE }}
                    >
                      {testimonials[0].author}
                    </cite>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">
                      {testimonials[0].institution}
                    </span>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-xl border-[#E0F2FE] hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 h-full flex flex-col">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
                  style={{ background: `${BRAND_BLUE}10` }}
                >
                  {testimonials[1].emoji}
                </div>
                <blockquote className="flex-1 flex flex-col">
                  <p className="text-gray-800 leading-relaxed flex-1 mb-4">
                    "{testimonials[1].quote}"
                  </p>
                  <footer>
                    <cite
                      className="text-sm font-semibold not-italic block"
                      style={{ color: BRAND_BLUE }}
                    >
                      {testimonials[1].author}
                    </cite>
                    <span className="text-xs text-gray-500">
                      {testimonials[1].institution}
                    </span>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Row 2 */}
          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-xl border-[#E0F2FE] hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 h-full flex flex-col">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
                  style={{ background: `${BRAND_BLUE}10` }}
                >
                  {testimonials[2].emoji}
                </div>
                <blockquote className="flex-1 flex flex-col">
                  <p className="text-gray-800 leading-relaxed flex-1 mb-4">
                    "{testimonials[2].quote}"
                  </p>
                  <footer>
                    <cite
                      className="text-sm font-semibold not-italic block"
                      style={{ color: BRAND_BLUE }}
                    >
                      {testimonials[2].author}
                    </cite>
                    <span className="text-xs text-gray-500">
                      {testimonials[2].institution}
                    </span>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-xl border-[#E0F2FE] hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 h-full flex flex-col">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
                  style={{ background: `${BRAND_BLUE}10` }}
                >
                  {testimonials[3].emoji}
                </div>
                <blockquote className="flex-1 flex flex-col">
                  <p className="text-gray-800 leading-relaxed flex-1 mb-4">
                    "{testimonials[3].quote}"
                  </p>
                  <footer>
                    <cite
                      className="text-sm font-semibold not-italic block"
                      style={{ color: BRAND_BLUE }}
                    >
                      {testimonials[3].author}
                    </cite>
                    <span className="text-xs text-gray-500">
                      {testimonials[3].institution}
                    </span>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full bg-white/80 backdrop-blur-xl border-[#E0F2FE] hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="p-6 h-full flex flex-col">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4"
                  style={{ background: `${BRAND_BLUE}10` }}
                >
                  {testimonials[4].emoji}
                </div>
                <blockquote className="flex-1 flex flex-col">
                  <p className="text-gray-800 leading-relaxed flex-1 mb-4">
                    "{testimonials[4].quote}"
                  </p>
                  <footer>
                    <cite
                      className="text-sm font-semibold not-italic block"
                      style={{ color: BRAND_BLUE }}
                    >
                      {testimonials[4].author}
                    </cite>
                    <span className="text-xs text-gray-500">
                      {testimonials[4].institution}
                    </span>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: Leaf, value: "100%", label: "Anonymous" },
            { icon: Heart, value: "5,000+", label: "Students" },
            { icon: Star, value: "4.9★", label: "Rating" },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3 px-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: `${BRAND_BLUE}10` }}
              >
                <stat.icon className="w-5 h-5" style={{ color: BRAND_BLUE }} />
              </div>
              <div>
                <div className="text-lg font-bold" style={{ color: BRAND_BLUE }}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
