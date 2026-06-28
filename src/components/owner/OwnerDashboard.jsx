import React, { useState } from 'react';
import { ShieldCheck, Phone } from 'lucide-react';

export default function OwnerDashboard({ capacity, setCapacity, rate, setRate, isOwnerRegistered, setIsOwnerRegistered, jobAccepted, setJobAccepted, jobCompleted, setJobCompleted }) {
  const [lang, setLang] = useState('EN');

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {!isOwnerRegistered ? (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-md font-bold text-slate-900 flex items-center gap-2"><ShieldCheck className="text-indigo-600"/> Complete Mandatory Asset Onboarding</h3>[cite: 1]
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} placeholder="Enter Tonnage Structural Limits (Tons)" className="border p-3 rounded-xl w-full outline-none focus:border-indigo-500" />[cite: 1]
            <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Demanded Base Rate Per KM (INR)" className="border p-3 rounded-xl w-full outline-none focus:border-indigo-500" />[cite: 1]
          </div>
          <button onClick={() => setIsOwnerRegistered(true)} className="bg-indigo-600 text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-indigo-700 transition-colors">Submit Documentation & Boot GPS</button>[cite: 1]
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Active Job Block */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-amber-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-bold text-amber-900">Assigned Pipeline Active Request[cite: 1]</h3>
              <span className="bg-emerald-50 text-emerald-700 font-bold text-[10px] px-2 py-0.5 rounded">GPS STREAM ACTIVE[cite: 1]</span>
            </div>
            
            <div className="p-4 bg-slate-50 border rounded-xl space-y-3">
              <div className="flex justify-between text-xs font-bold">
                <span>Consignment Hub #9942</span>
                <span className="text-indigo-600">₹3,400 Est. Value</span>
              </div>
              
              {!jobAccepted && !jobCompleted && (
                <div className="flex gap-2">
                  <button onClick={() => setJobAccepted(true)} className="flex-1 bg-indigo-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-indigo-700">Accept Load Matrix</button>[cite: 1]
                  <button onClick={() => alert('Declined')} className="bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-xs">Deny</button>
                </div>
              )}
              
              {jobAccepted && !jobCompleted && (
                <div className="space-y-3 border-t pt-3">
                  <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5"><Phone size="{14}"/> Client Emergency Line: +91 99887 76655</p>[cite: 1]
                  <button onClick={() => setJobCompleted(true)} className="w-full bg-emerald-600 text-white py-2 rounded-lg text-xs font-bold hover:bg-emerald-700">Confirm Delivery Pipeline Settlement</button>[cite: 1]
                </div>
              )}
              {jobCompleted && <p className="text-xs text-center text-slate-400 font-medium">Order lifecycle executed cleanly.</p>}
            </div>
          </div>

          {/* Earnings / Analytics Panel */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-sm font-bold text-slate-800">Earnings Metric[cite: 1]</h4>
              <div className="space-y-3 text-xs">
                <div className="p-3 border rounded-xl bg-slate-50"><span>Weekly Earnings</span><strong className="block text-lg text-slate-800 mt-1">₹32,450[cite: 1]</strong></div>
                <div className="p-3 border rounded-xl bg-slate-50"><span>Monthly Accumulation Matrix</span><strong className="block text-lg text-indigo-600 mt-1">₹1,28,900[cite: 1]</strong></div>
              </div>
            </div>

            {/* Compliance Rules inside Dashboard */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-slate-800">Road Compliance Manual</h4>
                <select value={lang} onChange={(e) => setLang(e.target.value)} className="border rounded p-1 text-[11px] bg-white">
                  <option value="EN">EN</option>
                  <option value="HI">HI</option>
                </select>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                {lang === 'EN' 
                  ? "Section 113 Parameters: Never exceed maximum structural axle load limits assigned in your RC registration framework configuration." 
                  : "धारा 113 नियम: आरसी बुक में निर्धारित सीमा से अधिक माल वाहन में कभी न लोड करें।"
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}