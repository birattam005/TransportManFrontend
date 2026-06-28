import React, { useState } from 'react';
import { Truck } from 'lucide-react';

export default function Login({ userType, setUserType, onLoginSuccess }) {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-xl space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
          <Truck className="text-white" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-slate-900">LogiTruck India</h2>
        <p className="text-xs text-slate-500 font-medium">Transport Act Protocol Framework</p>
      </div>

      <div className="flex bg-slate-100 p-1 rounded-xl">
        <button 
          onClick={() => setUserType('customer')} 
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${userType === 'customer' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600'}`}
        >
          Customer Gateway
        </button>
        <button 
          onClick={() => setUserType('owner')} 
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${userType === 'owner' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-600'}`}
        >
          Vehicle Owner Hub
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold text-slate-700 uppercase mb-1">Registered Email Address</label>
          <input type="email" placeholder="fleetmaster@domain.in" className="w-full p-2.5 border border-slate-200 rounded-lg text-xs outline-none focus:border-indigo-500" />
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <input type="text" placeholder="Email OTP" className="w-full p-2.5 border border-slate-200 rounded-lg text-xs text-center" />
          <input type="text" placeholder="2FA OTP" className="w-full p-2.5 border border-slate-200 rounded-lg text-xs text-center" />
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input 
            type="checkbox" 
            id="compliance" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)} 
            className="mt-0.5 accent-indigo-600" 
          />
          <label htmlFor="compliance" className="text-[10px] text-slate-500 leading-tight">
            I verify and accept terms matching the Indian Transport Act framework legislation.
          </label>
        </div>

        <button 
          onClick={() => termsAccepted ? onLoginSuccess() : alert("Please accept compliance framework stipulations.")} 
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-xs shadow-md hover:bg-indigo-700 transition-all"
        >
          Verify & Login
        </button>
      </div>
    </div>
  );
}