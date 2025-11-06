import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-red-500/20 bg-black/60 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-red-600 to-rose-700 shadow-lg shadow-red-900/30">
            <Star className="h-4 w-4 text-white" />
          </div>
          <span className="bg-gradient-to-r from-red-200 via-white to-red-300 bg-clip-text text-lg font-bold tracking-tight text-transparent">
            Sharingan SaaS
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Docs</a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="rounded-md border border-red-500/30 px-4 py-2 text-sm text-zinc-200 transition hover:border-red-500/60 hover:text-white"
          >
            Sign in
          </a>
          <motion.a
            whileTap={{ scale: 0.98 }}
            href="#pricing"
            className="rounded-md bg-gradient-to-r from-red-600 to-rose-700 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-red-900/30 transition hover:from-red-500 hover:to-rose-600"
          >
            Start free
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
