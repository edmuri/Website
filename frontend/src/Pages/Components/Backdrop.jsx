import React from 'react';
import ReactDOM from "react-dom/client";

const SwirlingBackground = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-60">
          <div className="swirl-1"></div>
        </div>
        <div className="absolute inset-0 opacity-50">
          <div className="swirl-2"></div>
        </div>
        <div className="absolute inset-0 opacity-40">
          <div className="swirl-3"></div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="swirl-4"></div>
        </div>
        <div className="absolute inset-0 opacity-35">
          <div className="swirl-5"></div>
        </div>
      </div>

      {/* Content overlay - your website content goes here */}
      {/* <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white p-8">
          <h1 className="text-4xl font-bold mb-4">Your Website Content</h1>
          <p className="text-lg opacity-80">This content appears above the swirling background</p>
        </div>
      </div> */}

      <style jsx>{`
        .swirl-1 {
          position: absolute;
          width: 800px;
          height: 800px;
          background: radial-gradient(ellipse at center, 
            rgba(255, 255, 255, 0.3) 0%, 
            rgba(255, 255, 255, 0.1) 30%, 
            transparent 70%);
          border-radius: 50% 30% 60% 40%;
          top: -200px;
          left: -200px;
          animation: swirl1 20s ease-in-out infinite;
          filter: blur(2px);
        }

        .swirl-2 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse at 30% 70%, 
            rgba(255, 255, 255, 0.25) 0%, 
            rgba(255, 255, 255, 0.08) 40%, 
            transparent 80%);
          border-radius: 60% 40% 30% 70%;
          top: 20%;
          right: -150px;
          animation: swirl2 25s ease-in-out infinite;
          filter: blur(3px);
        }

        .swirl-3 {
          position: absolute;
          width: 700px;
          height: 500px;
          background: radial-gradient(ellipse at 60% 30%, 
            rgba(255, 255, 255, 0.2) 0%, 
            rgba(255, 255, 255, 0.06) 50%, 
            transparent 85%);
          border-radius: 40% 60% 50% 30%;
          bottom: -100px;
          left: 10%;
          animation: swirl3 30s ease-in-out infinite;
          filter: blur(4px);
        }

        .swirl-4 {
          position: absolute;
          width: 500px;
          height: 700px;
          background: radial-gradient(ellipse at 80% 20%, 
            rgba(255, 255, 255, 0.18) 0%, 
            rgba(255, 255, 255, 0.05) 45%, 
            transparent 90%);
          border-radius: 30% 70% 40% 60%;
          top: 40%;
          left: 50%;
          animation: swirl4 22s ease-in-out infinite reverse;
          filter: blur(5px);
        }

        .swirl-5 {
          position: absolute;
          width: 900px;
          height: 400px;
          background: radial-gradient(ellipse at 20% 80%, 
            rgba(255, 255, 255, 0.15) 0%, 
            rgba(255, 255, 255, 0.04) 60%, 
            transparent 95%);
          border-radius: 70% 30% 60% 40%;
          top: 60%;
          right: 20%;
          animation: swirl5 35s ease-in-out infinite;
          filter: blur(6px);
        }

        @keyframes swirl1 {
          0%, 100% { 
            transform: rotate(0deg) scale(1) translate(0, 0);
            border-radius: 50% 30% 60% 40%;
          }
          25% { 
            transform: rotate(90deg) scale(1.1) translate(50px, -30px);
            border-radius: 30% 60% 40% 50%;
          }
          50% { 
            transform: rotate(180deg) scale(0.9) translate(100px, 50px);
            border-radius: 60% 40% 50% 30%;
          }
          75% { 
            transform: rotate(270deg) scale(1.05) translate(-20px, 80px);
            border-radius: 40% 50% 30% 60%;
          }
        }

        @keyframes swirl2 {
          0%, 100% { 
            transform: rotate(0deg) scale(1) translate(0, 0);
            border-radius: 60% 40% 30% 70%;
          }
          33% { 
            transform: rotate(120deg) scale(1.2) translate(-60px, 40px);
            border-radius: 40% 30% 70% 60%;
          }
          66% { 
            transform: rotate(240deg) scale(0.8) translate(80px, -60px);
            border-radius: 30% 70% 60% 40%;
          }
        }

        @keyframes swirl3 {
          0%, 100% { 
            transform: rotate(0deg) scale(1) translate(0, 0);
            border-radius: 40% 60% 50% 30%;
          }
          20% { 
            transform: rotate(72deg) scale(1.1) translate(30px, -40px);
            border-radius: 60% 50% 30% 40%;
          }
          40% { 
            transform: rotate(144deg) scale(0.95) translate(-50px, 60px);
            border-radius: 50% 30% 40% 60%;
          }
          60% { 
            transform: rotate(216deg) scale(1.05) translate(70px, 20px);
            border-radius: 30% 40% 60% 50%;
          }
          80% { 
            transform: rotate(288deg) scale(0.9) translate(-30px, -50px);
            border-radius: 40% 60% 50% 30%;
          }
        }

        @keyframes swirl4 {
          0%, 100% { 
            transform: rotate(0deg) scale(1) translate(0, 0);
            border-radius: 30% 70% 40% 60%;
          }
          50% { 
            transform: rotate(180deg) scale(1.15) translate(-80px, 100px);
            border-radius: 70% 40% 60% 30%;
          }
        }

        @keyframes swirl5 {
          0%, 100% { 
            transform: rotate(0deg) scale(1) translate(0, 0);
            border-radius: 70% 30% 60% 40%;
          }
          14% { 
            transform: rotate(51deg) scale(1.08) translate(40px, -30px);
            border-radius: 30% 60% 40% 70%;
          }
          28% { 
            transform: rotate(102deg) scale(0.92) translate(-60px, 70px);
            border-radius: 60% 40% 70% 30%;
          }
          42% { 
            transform: rotate(153deg) scale(1.12) translate(90px, 10px);
            border-radius: 40% 70% 30% 60%;
          }
          56% { 
            transform: rotate(204deg) scale(0.88) translate(-20px, -80px);
            border-radius: 70% 30% 60% 40%;
          }
          70% { 
            transform: rotate(255deg) scale(1.05) translate(50px, 90px);
            border-radius: 30% 60% 40% 70%;
          }
          84% { 
            transform: rotate(306deg) scale(0.95) translate(-70px, -10px);
            border-radius: 60% 40% 70% 30%;
          }
        }
      `}</style>
    </div>
  );
};

export default SwirlingBackground;