import React from 'react';

export default function StatusBar() {
  return (
    <div className="bg-indigo-600 text-white px-6 pt-3 pb-2 flex justify-between items-center text-xs z-50 sticky top-0">
      <span className="font-semibold">9:41</span>
      <div className="flex items-center gap-2">
        <span className="text-[10px] bg-indigo-500 px-1.5 py-0.2 rounded font-mono">GPS ACTIVE</span>
      </div>
    </div>
  );
}