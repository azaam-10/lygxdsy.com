
import React, { useState } from 'react';
import Header from './components/Header';
import FeatureGrid from './components/FeatureGrid';
import MenuList from './components/MenuList';
import BottomNav from './components/BottomNav';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Mine');
  const [showModal, setShowModal] = useState(true);

  return (
    <div className={`flex flex-col min-h-[100dvh] max-w-[430px] mx-auto bg-[#f9f9f9] relative overflow-x-hidden ${showModal ? 'h-[100dvh] overflow-hidden' : ''}`}>
      {/* Background content */}
      <div className={`flex-1 pb-[75px] ${showModal ? 'blur-[2px] pointer-events-none' : ''}`}>
        {/* Top Header with Gradient and Actions */}
        <Header />

        {/* Main Content Area */}
        <div className="relative">
          {/* Row of quick feature icons */}
          <FeatureGrid />

          {/* Detailed menu list section */}
          <div className="px-3.5 mt-5">
            <MenuList />
          </div>
        </div>
      </div>

      {/* Bottom Fixed Navigation Bar - Placed correctly at the bottom edge */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Logic for the Multi-step Modal */}
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default App;
