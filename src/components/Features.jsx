import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Palette } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Cinematic UI',
    desc: 'Framer Motion animations inspired by Itachi\'s Genjutsu for smooth, story-like transitions.',
  },
  {
    icon: Zap,
    title: 'Blazing APIs',
    desc: 'Fast endpoints and realtime updates to keep your experiences lightning quick.',
  },
  {
    icon: Shield,
    title: 'Akatsuki-grade Security',
    desc: 'Hardened auth, rate limits, and observability baked in from day one.',
  },
  {
    icon: Palette,
    title: 'Theming Engine',
    desc: 'Red-on-black palette, clouds, and gradients you can customize per project.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-700/20 blur-3xl" />
        <div className="absolute bottom-0 right-20 h-72 w-72 rounded-full bg-rose-700/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Built for anime-grade products
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-b from-zinc-900 to-black p-6"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-rose-700 shadow-lg shadow-red-900/30">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{f.desc}</p>

              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
