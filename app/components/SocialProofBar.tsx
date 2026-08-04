"use client";

import { useEffect, useState } from "react";

export default function SocialProofBar() {
  const [visible, setVisible] = useState(false);
  const [count] = useState(() => Math.floor(Math.random() * 8) + 12); // 12-19

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-16 lg:bottom-6 left-5 z-40 bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 max-w-xs"
      style={{
        animation: "slideInLeft 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <style>{`@keyframes slideInLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}`}</style>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-accent-light flex items-center justify-center shrink-0">
          <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
        </div>
        <div>
          <p className="text-xs font-bold text-navy">{count} drukarni już się zapisało</p>
          <p className="text-[10px] text-gray-400">na prezentację CF375 Xpro</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="absolute top-1.5 right-2 text-gray-300 hover:text-gray-500 text-lg leading-none cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
