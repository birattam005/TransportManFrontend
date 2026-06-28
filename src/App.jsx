import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import BottomMobileNav from './components/common/BottomMobileNav';
import Login from './components/auth/Login';

// Layout Viewports
import CustomerHome from './components/customer/CustomerHome';
import CustomerAccount from './components/customer/CustomerAccount';
import CustomerServices from './components/customer/CustomerServices';
import OwnerDashboard from './components/owner/OwnerDashboard';

export default function App() {
  const [userType, setUserType] = useState('customer');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Shared System Registries
  const [dropLocation, setDropLocation] = useState('');
  const [routeMapped, setRouteMapped] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [bookingStatus, setBookingStatus] = useState(0);

  const [ownerCapacity, setOwnerCapacity] = useState('');
  const [ownerRate, setOwnerRate] = useState('');
  const [isOwnerRegistered, setIsOwnerRegistered] = useState(false);
  const [jobAccepted, setJobAccepted] = useState(false);
  const [jobCompleted, setJobCompleted] = useState(false);

  const handleShortcutService = (name, rate) => {
    setActiveTab(1);
    setDropLocation("National Transit Gateway Hub");
    setRouteMapped(true);
    setSelectedTruck({ name, rate: parseInt(rate) });
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col text-slate-800 antialiased font-sans">
      
      {/* Top Header Row Layout */}
      <Navbar 
        isLoggedIn={isLoggedIn} 
        isSubscribed={isSubscribed} 
        userType={userType} 
        onSubscribe={() => setIsSubscribed(true)} 
        onLogout={() => { setIsLoggedIn(false); setActiveTab(1); }} 
      />

      {/* Main Structural Layout Grid */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        
        {/* DESKTOP MODE SIDEBAR */}
        {isLoggedIn && (
          <aside className="hidden md:block w-64 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm h-fit space-y-1.5">
            <button onClick={() => setActiveTab(1)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 1 ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`}>
              Central Console
            </button>
            <button onClick={() => setActiveTab(2)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 2 ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`}>
              {userType === 'customer' ? 'Logistics Ledger' : 'Revenue Center'}
            </button>
            <button onClick={() => setActiveTab(3)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 3 ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`}>
              {userType === 'customer' ? 'Fleet Inventory' : 'Safety Directives'}
            </button>
          </aside>
        )}

        {/* APPLICATION RENDER BODY VIEWPORT */}
        <main className="flex-1 pb-24 md:pb-0">
          {!isLoggedIn ? (
            <Login userType={userType} setUserType={setUserType} onLoginSuccess={() => setIsLoggedIn(true)} />
          ) : (
            <>
              {/* Mobile-Only Premium Alert */}
              {userType === 'customer' && !isSubscribed && (
                <div className="md:hidden bg-amber-500 text-amber-950 text-[11px] font-bold px-4 py-2 rounded-xl mb-4 flex justify-between items-center shadow-sm">
                  <span>Claim 0% Convenience Fees Premium Offer!</span>
                  <button onClick={() => setIsSubscribed(true)} className="bg-amber-950 text-white px-2 py-0.5 rounded text-[9px]">Activate</button>
                </div>
              )}

              {userType === 'customer' ? (
                <>
                  {activeTab === 1 && (
                    <CustomerHome 
                      isSubscribed={isSubscribed} 
                      dropLocation={dropLocation} 
                      setDropLocation={setDropLocation} 
                      routeMapped={routeMapped} 
                      setRouteMapped={setRouteMapped} 
                      selectedTruck={selectedTruck} 
                      setSelectedTruck={setSelectedTruck} 
                      bookingStatus={bookingStatus} 
                      setBookingStatus={setBookingStatus} 
                    />
                  )}
                  {activeTab === 2 && <CustomerAccount />}
                  {activeTab === 3 && <CustomerServices onSelectShortcut={handleShortcutService} />}
                </>
              ) : (
                <OwnerDashboard 
                  capacity={ownerCapacity} 
                  setCapacity={setOwnerCapacity} 
                  rate={ownerRate} 
                  setRate={setOwnerRate} 
                  isOwnerRegistered={isOwnerRegistered} 
                  setIsOwnerRegistered={setIsOwnerRegistered} 
                  jobAccepted={jobAccepted} 
                  setJobAccepted={setJobAccepted} 
                  jobCompleted={jobCompleted} 
                  setJobCompleted={setJobCompleted} 
                />
              )}
            </>
          )}
        </main>
      </div>

      {/* MOBILE FOOTER NAVBAR */}
      {isLoggedIn && (
        <BottomMobileNav activeTab={activeTab} setActiveTab={setActiveTab} userType={userType} />
      )}
    </div>
  );
}