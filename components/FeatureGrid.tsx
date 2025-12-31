
import React from 'react';

const features = [
  { 
    id: 'teams', 
    label: 'Teams', 
    color: 'bg-[#ff9800]', 
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    )
  },
  { 
    id: 'record', 
    label: 'Record', 
    color: 'bg-[#4db6ac]', 
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    )
  },
  { 
    id: 'wallet', 
    label: 'Wallet management', 
    color: 'bg-[#ff5252]', 
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 17.07l1.5 1.42z"/>
      </svg>
    )
  },
  { 
    id: 'invite', 
    label: 'Invite friends', 
    color: 'bg-[#42a5f5]', 
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    )
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="bg-white py-6 flex justify-around w-full border-b border-gray-50">
      {features.map((item) => (
        <div key={item.id} className="flex flex-col items-center w-1/4">
          <div className={`${item.color} w-11 h-11 rounded-full flex items-center justify-center mb-2 shadow-sm`}>
            {item.icon}
          </div>
          <span className="text-[11px] text-[#424242] text-center leading-tight font-medium max-w-[70px]">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
