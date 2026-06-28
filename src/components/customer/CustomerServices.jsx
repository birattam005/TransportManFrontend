import React from 'react';

export default function CustomerServices({ onSelectShortcut }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-md font-bold text-slate-900">Direct Fleet Pipeline Request[cite: 1]</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "Open Body 14-Ft Carrier", cap: "5.5 Tons", range: "16" },
          { name: "Container 20-Ft Liner", cap: "9.2 Tons", range: "28" }
        ].map((f, i) => (
          <div 
            key={i} 
            onClick={() => onSelectShortcut(f.name, f.range)} 
            className="p-4 border border-slate-100 bg-slate-50/50 rounded-xl cursor-pointer hover:border-indigo-500 hover:bg-indigo-50/10 transition-all flex justify-between items-center"
          >
            <div>
              <span className="text-xs font-bold text-slate-800 block">{f.name}[cite: 1]</span>
              <span className="text-[11px] text-slate-400">Max Capacity: {f.cap}[cite: 1]</span>
            </div>
            <span className="text-sm font-bold text-indigo-600">₹{f.range}/km[cite: 1]</span>
          </div>
        ))}
      </div>
    </div>
  );
}