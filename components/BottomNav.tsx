
import React from 'react';

interface NavItemProps {
  id: string;
  label: string;
  isActive: boolean;
  icon: React.ReactNode;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ id, label, isActive, icon, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center flex-1 py-1 ${isActive ? 'text-[#424242]' : 'text-[#bdbdbd]'}`}
  >
    <div className={`mb-1 ${isActive ? 'scale-110' : ''} transition-transform`}>
      {icon}
    </div>
    <span className={`text-[11px] font-bold ${isActive ? 'text-[#424242]' : 'text-[#bdbdbd]'}`}>{label}</span>
  </button>
);

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-gray-100 flex items-center justify-around h-[68px] z-[60] pb-[env(safe-area-inset-bottom)]">
      <NavItem 
        id="Home" label="Home" isActive={activeTab === 'Home'} onClick={() => setActiveTab('Home')}
        icon={<svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>}
      />
      <NavItem 
        id="Service" label="Service" isActive={activeTab === 'Service'} onClick={() => setActiveTab('Service')}
        icon={<svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0118 0v6M3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3zM21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3z"/></svg>}
      />
      <NavItem 
        id="Menu" label="Menu" isActive={activeTab === 'Menu'} onClick={() => setActiveTab('Menu')}
        icon={<svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>}
      />
      <NavItem 
        id="Record" label="Record" isActive={activeTab === 'Record'} onClick={() => setActiveTab('Record')}
        icon={<svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>}
      />
      <NavItem 
        id="Mine" label="Mine" isActive={activeTab === 'Mine'} onClick={() => setActiveTab('Mine')}
        icon={<svg className="w-[26px] h-[26px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>}
      />
    </div>
  );
};

export default BottomNav;