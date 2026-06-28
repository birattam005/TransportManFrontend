import React from 'react';

export default function CustomerAccount() {
  return (
    <div className="max-w-2xl bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-md font-bold text-slate-900">Historical Logistics Ledger</h3>
      <div className="p-4 border rounded-xl flex justify-between items-center bg-slate-50">
        <div className="text-xs">
          <span className="font-bold block text-slate-800">Transaction ID: #LT-55421</span>
          <span className="text-slate-400">Noida Hub ➔ Chennai Central Port[cite: 1]</span>
        </div>
        <span className="text-sm font-bold text-emerald-600">₹6,400[cite: 1]</span>
      </div>
    </div>
  );
}