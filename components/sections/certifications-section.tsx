"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    icon: "☕",
    title: "Oracle Java SE 17 Developer Professional",
    issuer: "Udemy / Oracle (1Z0-829)",
    color: "#f89820",
  },
  {
    icon: "🐍",
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    color: "#3776AB",
  },
  {
    icon: "🏦",
    title: "IBSL Examination",
    issuer: "Institute of Bankers of Sri Lanka",
    color: "#0EA5E9",
  },
  {
    icon: "🎻",
    title: "Visharad Part 2 — Instrumental Violin",
    issuer: "Music Examination Board",
    color: "#F59E0B",
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 liquid-gradient font-sora">Credentials</h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A mix of technical certifications and a couple of things that surprised even me.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.04 }}
            >
              <Card className="glass-morphism border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                <CardContent className="p-6 flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: cert.color + "25", border: `1px solid ${cert.color}40` }}
                  >
                    {cert.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg leading-tight mb-1">{cert.title}</h3>
                    <p className="text-white/60 text-sm">{cert.issuer}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
