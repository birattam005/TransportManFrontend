import React, { useState } from 'react';

export default function OwnerSafety() {
  const [lang, setLang] = useState('EN');

  return (
    <div className="space-y-3 text-xs">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-slate-900 text-sm">Multilingual Road Safety Tips</h3>
        <select value={lang} onChange={(e) => setLang(e.target.value)} className="border rounded p-1 text-xs bg-white">
          <option value="EN">English</option>
          <option value="HI">Hindi</option>
        </select>
      </div>

      <div className="p-3 bg-white border rounded-xl shadow-sm">
        {lang === 'EN' ? (
          <p><strong>Section 113 Parameters:</strong> Never exceed maximum truck load limits structural configuration specs assigned in your RC book matrix.</p>
        ) : (
          <p><strong>धारा 113 नियम:</strong> आरसी बुक में निर्धारित सीमा से अधिक माल वाहन में कभी न लोड करें।</p>
        )}
      </div>
    </div>
  );
}