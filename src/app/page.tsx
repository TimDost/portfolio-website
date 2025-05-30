"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
        >
          <div className="text-center space-y-8">
            {/* Logo and headline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="w-24 h-24 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 p-1"
                >
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                    <span className="text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                      TD
                    </span>
                  </div>
                </motion.div>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 mb-4">
                TIMDOST.COM
              </h1>
              <p className="text-xl text-blue-200">
                Creative Developer & Human Being
              </p>
            </motion.div>

            {/* Coming soon section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-purple-300">
                Portfolio Coming Soon
              </h2>
              <div className="w-full max-w-md mx-auto h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="h-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"
                />
              </div>
              <p className="text-lg text-blue-200">
                Frontend / Software / App Development
              </p>
            </motion.div>

            {/* Brief description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="max-w-2xl mx-auto my-8"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                In the meantime, feel free to look around. I&apos;m working on
                something simple but meaningful to share my journey in web
                development.
              </p>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center space-x-8 mt-12"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/yourusername",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/yourusername",
                  label: "LinkedIn",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/yourusername",
                  label: "Twitter",
                },
                { icon: Mail, href: "mailto:your@email.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Tim Dost
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
