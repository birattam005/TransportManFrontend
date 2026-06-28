import React from 'react';
import { Truck, Crown, LogOut } from 'lucide-react';

export default function Navbar({ isLoggedIn, userType, isSubscribed, onSubscribe, onLogout }) {
  return (
    <header className="bg-indigo-600 text-white shadow-md z-50 sticky top-0">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-xl">
            <Truck size={22} className="text-white" />
          </div>
          <span className="font-extrabold tracking-tight text-lg">TransportMan</span>
        </div>
        
        {isLoggedIn && (
          <div className="flex items-center gap-4">
            {userType === 'customer' && !isSubscribed && (
              <button 
                onClick={onSubscribe} 
                className="hidden md:flex items-center gap-1.5 bg-amber-500 text-amber-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm hover:bg-amber-400 transition-all"
              >
                <Crown size={14} /> Get Premium (0% Fees)
              </button>
            )}
            <div className="hidden md:flex bg-indigo-700/50 px-3 py-1.5 rounded-lg text-xs font-semibold capitalize border border-indigo-500/30">
              Role: {userType}
            </div>
            <button 
              onClick={onLogout} 
              className="p-2 hover:bg-indigo-700 rounded-lg text-indigo-100 transition-colors" 
              title="Log Out"
            >
              <LogOut size={18} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}