"use client";

import Image from "next/image";

export default function MachineCard({
  src,
  alt,
  tag,
  title,
  desc,
}: {
  src: string;
  alt: string;
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-default"
      style={{
        transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 12px 32px -8px rgba(31,53,106,0.15)";
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1)";
      }}
    >
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-4"
          style={{ transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </div>
      <div className="p-5">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">{tag}</p>
        <h3 className="text-base font-extrabold text-navy mt-1 mb-1.5">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
