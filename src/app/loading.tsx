import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin shadow-lg" />
        <span className="text-lg font-semibold text-sky-400 tracking-widest animate-pulse">Loading...</span>
      </div>
    </div>
  );
} 