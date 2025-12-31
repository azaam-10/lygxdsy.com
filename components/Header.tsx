
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="w-full pt-10 pb-8 px-5 bg-gradient-to-r from-[#8a2230] to-[#4b1b23] text-white relative">
      {/* Speech bubble icon at top right */}
      <div className="absolute top-8 right-5">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white/90" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/>
        </svg>
      </div>

      {/* User Info Section */}
      <div className="flex items-center space-x-4 mb-10">
        {/* Custom Geometric Avatar */}
        <div className="relative w-[68px] h-[68px] rounded-full overflow-hidden bg-white flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M50 0 L100 35 L80 100 L20 100 L0 35 Z" fill="#FF5252" />
            <path d="M50 0 L0 35 L20 100 Z" fill="#FFD740" />
            <path d="M50 0 L100 35 L80 100 Z" fill="#448AFF" />
            <path d="M20 100 L50 70 L80 100 Z" fill="#7C4DFF" />
            <path d="M0 35 L50 70 L100 35 Z" fill="#69F0AE" />
          </svg>
        </div>
        
        <div className="flex flex-col">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">M2mooN</span>
            <div className="bg-[#fbc02d] rounded-sm px-1.5 py-0.5 flex items-center justify-center shadow-sm">
              <span className="text-[10px] font-black text-white italic tracking-tighter leading-none">VIP0</span>
            </div>
          </div>
          <div className="text-[13px] text-white/90 mt-1.5">Invitation code: 616535</div>
        </div>
      </div>

      {/* Account Info and Actions Row */}
      <div className="flex justify-between items-end pr-2">
        <div className="pb-1">
          <div className="text-[15px] font-bold mb-3 opacity-95">My Account</div>
          <div className="flex items-baseline space-x-1.5">
            <span className="text-[13px] font-medium opacity-90">USDT</span>
            <span className="text-3xl font-bold leading-none">8182</span>
          </div>
        </div>

        <div className="flex space-x-6">
          {/* Deposit Button */}
          <button className="flex flex-col items-center group">
            <div className="bg-white w-[54px] h-[54px] rounded-2xl flex items-center justify-center shadow-md active:scale-95 transition-transform">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#1a73e8]" fill="currentColor">
                <path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 19H5V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2zM19 9v6h-6V9h6zM16 13.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
              </svg>
            </div>
            <span className="text-[12px] font-medium mt-2 opacity-95">Deposit</span>
          </button>

          {/* Withdrawal Button */}
          <button className="flex flex-col items-center group">
            <div className="bg-white w-[54px] h-[54px] rounded-2xl flex items-center justify-center shadow-md active:scale-95 transition-transform">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#1a73e8]" fill="currentColor">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V12h16v6zm0-10H4V6h16v2z"/>
              </svg>
            </div>
            <span className="text-[12px] font-medium mt-2 opacity-95">Withdrawal</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
