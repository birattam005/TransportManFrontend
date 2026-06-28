import React from 'react';
import { Truck, Wallet, Layers } from 'lucide-react';

export default function BottomMobileNav({ activeTab, setActiveTab, userType }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-16 grid grid-cols-3 items-center text-center shadow-[0_-4px_12px_rgba(0,0,0,0.04)] z-50">
      <button 
        onClick={() => setActiveTab(1)} 
        className={`flex flex-col items-center justify-center h-full transition-colors ${activeTab === 1 ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}
      >
        <Truck size={18} />
        <span className="text-[10px] mt-0.5">Home</span>
      </button>
      
      <button 
        onClick={() => setActiveTab(2)} 
        className={`flex flex-col items-center justify-center h-full transition-colors ${activeTab === 2 ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}
      >
        <Wallet size={18} />
        <span className="text-[10px] mt-0.5">{userType === 'customer' ? 'Ledger' : 'Income'}</span>
      </button>
      
      <button 
        onClick={() => setActiveTab(3)} 
        className={`flex flex-col items-center justify-center h-full transition-colors ${activeTab === 3 ? 'text-indigo-600 font-bold' : 'text-slate-400'}`}
      >
        <Layers size={18} />
        <span className="text-[10px] mt-0.5">{userType === 'customer' ? 'Fleets' : 'Safety'}</span>
      </button>
    </nav>
  );
}