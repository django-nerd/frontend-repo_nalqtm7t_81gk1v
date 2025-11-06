import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6YJv1nVbWcv16O3V/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-red-600/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-700/20 blur-3xl" />
        <div className="absolute top-1/3 left-0 h-72 w-72 rounded-full bg-red-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-black/50 px-4 py-2 text-sm text-red-200 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-red-400" />
          <span>Itachi-themed Anime SaaS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="bg-gradient-to-b from-red-200 via-white to-red-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl"
        >
          Sharingan-grade experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mx-auto mt-5 max-w-2xl text-zinc-300"
        >
          Build, host, and scale your anime apps with an Akatsuki aesthetic. Lightning-fast APIs, cinematic UIs, and battle-tested reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-700 px-6 py-3 font-medium text-white shadow-lg shadow-red-900/30 transition hover:from-red-500 hover:to-rose-600"
          >
            Get started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg border border-red-500/30 bg-black/50 px-6 py-3 font-medium text-zinc-200 backdrop-blur transition hover:border-red-500/60 hover:text-white"
          >
            Explore features
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="pointer-events-none mt-20 grid grid-cols-3 gap-6 opacity-80 sm:grid-cols-6"
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-2 w-full rounded-full bg-gradient-to-r from-red-600/60 via-rose-500/40 to-red-600/60"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
