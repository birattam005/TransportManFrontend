import React, { useState, useEffect } from 'react';
import { Truck, MapPin, Navigation } from 'lucide-react';

export default function CustomerHome({ isSubscribed, dropLocation, setDropLocation, routeMapped, setRouteMapped, selectedTruck, setSelectedTruck, bookingStatus, setBookingStatus }) {
  const [adsIndex, setAdsIndex] = useState(0);
  const advertisements = [
    "Heavy Duty Containers Available Pan-India[cite: 1]",
    "Chota Hathi Local Intra-City Transits starting @ ₹14/km[cite: 1]",
    "Interstate Delivery Fleet Management Framework Matrix"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAdsIndex((prev) => (prev + 1) % advertisements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Search and Maps Column */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white p-6 rounded-2xl shadow-md">
          <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Logistics Engine[cite: 1]</span>
          <h3 className="text-lg font-bold mt-1">{advertisements[adsIndex]}</h3>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h4 className="text-sm font-bold text-slate-800">Route Parameters</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 border p-2.5 rounded-lg bg-slate-50">
              <MapPin size={16} className="text-indigo-600" />
              <input type="text" value="Current Live Location (GPS Active)" className="w-full text-xs bg-transparent text-slate-500" disabled />
            </div>
            <div className="flex items-center gap-2 border p-2.5 rounded-lg">
              <Navigation size={16} className="text-rose-500" />
              <input type="text" value={dropLocation} onChange={(e) => setDropLocation(e.target.value)} placeholder="Enter Drop Destination (e.g., Mumbai Port)" className="w-full text-xs outline-none" />
            </div>
          </div>
          <button 
            onClick={() => dropLocation ? setRouteMapped(true) : alert("Please map destination properties")} 
            className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors"
          >
            Search Regional Availability Matrix[cite: 1]
          </button>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl h-48 p-4 text-center text-xs text-slate-500 flex flex-col justify-center shadow-inner">
          {routeMapped ? `📍 Active Path Balanced: Current Matrix Hub ➔ ${dropLocation}` : "Awaiting user map routing inputs..."}
        </div>
      </div>

      {/* Checkout and Invoicing Column */}
      <div className="space-y-6">
        {routeMapped && bookingStatus === 0 && (
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h4 className="text-sm font-bold text-slate-800">Available Fleets[cite: 1]</h4>
            {[
              { name: "Tata Ace Mini Truck", cap: "1.5 Tons", rate: 14 },
              { name: "Mahindra Bolero Pickup", cap: "3.2 Tons", rate: 18 }
            ].map((truck, idx) => (
              <div 
                key={idx} 
                onClick={() => setSelectedTruck(truck)} 
                className={`p-3 rounded-xl border-2 cursor-pointer flex justify-between items-center transition-all ${selectedTruck?.name === truck.name ? 'border-indigo-600 bg-indigo-50/40' : 'border-slate-100 bg-slate-50/50 hover:border-slate-200'}`}
              >
                <div>
                  <span className="text-xs font-bold text-slate-800 block">{truck.name}</span>
                  <span className="text-[10px] text-slate-500">Payload: {truck.cap}[cite: 1]</span>
                </div>
                <span className="text-xs font-bold text-indigo-600">₹{truck.rate}/km[cite: 1]</span>
              </div>
            ))}
          </div>
        )}

        {selectedTruck && bookingStatus === 0 && (
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-slate-800">Financial Ledger Balance</h4>
            <div className="text-xs text-slate-600 space-y-2 border-b pb-3">
              <div className="flex justify-between"><span>Base Route Fee:</span><span>₹{selectedTruck.rate * 100}</span></div>
              <div className="flex justify-between"><span>Convenience (15%):</span><span className={isSubscribed ? 'line-through text-slate-400' : ''}>₹{Math.round(selectedTruck.rate * 15)}</span></div>[cite: 1]
              <div className="flex justify-between"><span>GST Tariff Standard (18%):</span><span>₹{Math.round(selectedTruck.rate * 100 * 0.18)}</span></div>[cite: 1]
            </div>
            <button 
              onClick={() => { alert("Authorized Razorpay Integration Engine Mode[cite: 1]"); setBookingStatus(1); }} 
              className="w-full bg-emerald-600 text-white text-xs font-bold py-3 rounded-xl shadow-md hover:bg-emerald-700 transition-all"
            >
              Pay via Razorpay[cite: 1]
            </button>
          </div>
        )}

        {bookingStatus > 0 && (
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="text-sm font-bold text-slate-800">Live Pipeline Tracking[cite: 1]</h4>
              <button onClick={() => { setBookingStatus(0); setSelectedTruck(null); }} className="text-[10px] bg-rose-50 text-rose-600 px-2 py-0.5 rounded">Cancel[cite: 1]</button>
            </div>
            <div className="space-y-2">
              {['1. Vehicle Dispatched', '2. Payload Verified & Loaded[cite: 1]', '3. Cargo Arrived Destination[cite: 1]'].map((step, i) => (
                <div key={i} className={`p-2.5 rounded-lg border text-xs font-semibold ${bookingStatus === i + 1 ? 'bg-indigo-50 border-indigo-200 text-indigo-700' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>{step}</div>
              ))}
            </div>
            <button onClick={() => setBookingStatus(p => p < 3 ? p + 1 : 1)} className="w-full bg-slate-800 text-white text-xs py-2 rounded-lg">Advance Status Matrix</button>
          </div>
        )}
      </div>
    </div>
  );
}


