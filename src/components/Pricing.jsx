import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Genin',
    price: 'Free',
    features: ['Unlimited previews', 'Community themes', 'Basic analytics'],
    highlighted: false,
  },
  {
    name: 'Chunin',
    price: '$12/mo',
    features: ['Custom domains', 'Priority builds', 'Team collaboration'],
    highlighted: true,
  },
  {
    name: 'Akatsuki',
    price: '$39/mo',
    features: ['Edge functions', 'Realtime metrics', 'White‑labeling'],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-red-600/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-rose-700/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center text-3xl font-bold md:text-4xl"
        >
          Choose your path
        </motion.h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className={`relative rounded-2xl border p-6 ${
                tier.highlighted
                  ? 'border-red-500/40 bg-gradient-to-b from-zinc-900 to-black'
                  : 'border-red-500/20 bg-black'
              }`}
            >
              {tier.highlighted && (
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-red-500/10 to-transparent" />
              )}
              <div className="relative">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-2 text-3xl font-bold">{tier.price}</p>
                <ul className="mt-6 space-y-2 text-sm text-zinc-300">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-red-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-red-600 to-rose-700 px-4 py-2 font-medium text-white shadow-lg shadow-red-900/30 transition hover:from-red-500 hover:to-rose-600"
                >
                  Start now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
