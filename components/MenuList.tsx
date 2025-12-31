
import React from 'react';

interface MenuItemProps {
  label: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon }) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-50 last:border-b-0 px-4 active:bg-gray-50 transition-colors">
    <div className="flex items-center space-x-4">
      <div className="text-[#9e9e9e]">
        {icon}
      </div>
      <span className="text-[14px] text-[#424242] font-medium">{label}</span>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#bdbdbd]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </div>
);

const MenuList: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-50 overflow-hidden mx-1">
      <MenuItem 
        label="Profile" 
        icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 2h7v5h-7V5zm-7 0h5v5H5V5zm0 14v-7h5v7H5zm14 0h-7v-7h7v7z"/></svg>} 
      />
      <MenuItem 
        label="Deposit records" 
        icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2z"/></svg>} 
      />
      <MenuItem 
        label="Withdrawal records" 
        icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 11h8v2H8v-2zm0-4h8v2H8V7z"/></svg>} 
      />
      <MenuItem 
        label="Setting" 
        icon={<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.07-.47 0-.59.22L3.82 10.24c-.11.2-.06.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.07.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>} 
      />
    </div>
  );
};

export default MenuList;
