import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function OwnerRegistration({ capacity, setCapacity, rate, setRate, onRegister }) {
  return (
    <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-3 shadow-sm">
      <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5"><ShieldCheck className="text-indigo-600" size={16} /> Operator Verification</h3>
      <div className="space-y-2 text-xs">
        <input type="file" className="w-full border p-1 rounded text-[11px]" />
        <div className="grid grid-cols-2 gap-2">
          <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Tons Limit" className="border p-2 rounded w-full" />
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Rate Per KM" className="border p-2 rounded w-full" />
        </div>
      </div>
      <button onClick={onRegister} className="w-full bg-indigo-600 text-white py-2 rounded-lg text-xs font-bold">
        Verify Assets & Stream GPS
      </button>
    </div>
  );
}