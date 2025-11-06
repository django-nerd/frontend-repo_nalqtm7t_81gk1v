import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-10 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} Sharingan SaaS. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="GitHub" className="rounded p-2 hover:bg-zinc-800 hover:text-white">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Twitter" className="rounded p-2 hover:bg-zinc-800 hover:text-white">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" aria-label="Email" className="rounded p-2 hover:bg-zinc-800 hover:text-white">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
