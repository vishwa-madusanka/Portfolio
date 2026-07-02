"use client"
import { motion } from "framer-motion"
import InteractiveTimeline from "@/components/interactive-timeline"
import LiveGitHubWidget from "@/components/widgets/live-github-widget"
import CurrentlyLearningWidget from "@/components/widgets/currently-learning-widget"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">Who I Am</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            I'm Vishwa — a software engineering student from Bandarawela, Sri Lanka.
            I spend most of my time building things with Spring Boot, React, and Docker,
            usually breaking them first and fixing them later. Outside of code, I'm a
            Visharad-qualified violinist and I've passed the IBSL banking exam,
            which I find equally useful and random.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">My Journey</h3>
          <InteractiveTimeline />
        </motion.div>

        {/* Dynamic Widgets */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <LiveGitHubWidget />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <CurrentlyLearningWidget />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
