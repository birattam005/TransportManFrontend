import React from 'react';
import { Phone } from 'lucide-react';

export default function OwnerHome({ jobAccepted, setJobAccepted, jobCompleted, setJobCompleted }) {
  return (
    <div className="space-y-3">
      <div className="bg-emerald-50 text-emerald-800 text-[11px] p-2 rounded-md font-medium">
        🟢 Device GPS Coordinates Interfaced Live
      </div>

      <div className="bg-white p-3 rounded-xl border border-amber-300 space-y-3 shadow-sm">
        <div className="flex justify-between text-xs font-bold">
          <span className="text-amber-800">UPCOMING TRANSPORT JOB</span>
          <span className="text-indigo-600">₹3,400 Est.</span>
        </div>

        {!jobAccepted && !jobCompleted && (
          <div className="flex gap-2">
            <button onClick={() => setJobAccepted(true)} className="flex-1 bg-indigo-600 text-white py-2 rounded text-xs font-bold">Accept</button>
            <button onClick={() => alert('Denied')} className="bg-slate-200 px-3 py-2 rounded text-xs">Deny</button>
          </div>
        )}

        {jobAccepted && !jobCompleted && (
          <div className="space-y-2 text-xs border-t pt-2">
            <p className="text-emerald-700 font-bold flex items-center gap-1"><Phone size={12} /> Client Line: +91 99887 76655</p>
            <button onClick={() => setJobCompleted(true)} className="w-full bg-emerald-600 text-white py-2 rounded font-bold">Confirm Delivery Complete</button>
          </div>
        )}

        {jobCompleted && <p className="text-xs text-center text-slate-400">Order processing complete.</p>}
      </div>
    </div>
  );
}