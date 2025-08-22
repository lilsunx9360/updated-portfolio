import React from 'react';

const Cube = () => {
  return (
    <div className="relative bg-black flex text-center justify-center items-center h-screen w-screen">
      <style>
        {`
          .cube-container {
            width: 120px;
            height: 120px;
            position: relative;
            transform-style: preserve-3d;
            animation: rotate 10s infinite ease-in-out;
            margin: auto;
          }

          @media (min-width: 640px) {
            .cube-container {
              width: 160px;
              height: 160px;
            }
          }

          @media (min-width: 768px) {
            .cube-container {
              width: 180px;
              height: 180px;
            }
          }

          @media (min-width: 1024px) {
            .cube-container {
              width: 200px;
              height: 200px;
            }
          }

          .cube-container::after {
            content: '';
            position: absolute;
            bottom: -90px;
            left: 50%;
            transform: translateX(-50%);
            width: 90px;
            height: 30px;
            background: radial-gradient(circle, rgba(128, 0, 128, 0.5) 0%, rgba(0, 128, 0, 0.5) 50%, transparent 100%);
            filter: blur(20px);
            z-index: -1;
          }

          @media (min-width: 640px) {
            .cube-container::after {
              bottom: -40px;
              width: 120px;
              height: 40px;
            }
          }

          @media (min-width: 768px) {
            .cube-container::after {
              bottom: -45px;
              width: 135px;
              height: 45px;
            }
          }

          @media (min-width: 1024px) {
            .cube-container::after {
              bottom: -50px;
              width: 150px;
              height: 50px;
            }
          }

          .cube {
            position: absolute;
            width: 100%;
            height: 100%;
            transform-style: preserve-3d;
          }

          .cube-face {
            position: absolute;
            width: 120px;
            height: 120px;
            display: flex;
            padding: 20px;
            justify-content: center;
            align-items: center;
          }

          @media (min-width: 640px) {
            .cube-face {
              width: 200px;
              height: 200px;
            }
          }

          @media (min-width: 768px) {
            .cube-face {
              width: 200px;
              height: 200px;
            }
          }

          @media (min-width: 1024px) {
            .cube-face {
              width: 200px;
              height: 200px;
            }
          }

          .front  { transform: translateZ(60px); }
          .back   { transform: translateZ(-60px) rotateY(180deg); }
          .right  { transform: translateX(60px) rotateY(90deg); }
          .left   { transform: translateX(-60px) rotateY(-90deg); }
          .top    { transform: translateY(-60px) rotateX(90deg); }
          .bottom { transform: translateY(60px) rotateX(-90deg); }

          @media (min-width: 640px) {
            .front  { transform: translateZ(80px); }
            .back   { transform: translateZ(-80px) rotateY(180deg); }
            .right  { transform: translateX(80px) rotateY(90deg); }
            .left   { transform: translateX(-80px) rotateY(-90deg); }
            .top    { transform: translateY(-80px) rotateX(90deg); }
            .bottom { transform: translateY(80px) rotateX(-90deg); }
          }

          @media (min-width: 768px) {
            .front  { transform: translateZ(90px); }
            .back   { transform: translateZ(-90px) rotateY(180deg); }
            .right  { transform: translateX(90px) rotateY(90deg); }
            .left   { transform: translateX(-90px) rotateY(-90deg); }
            .top    { transform: translateY(-90px) rotateX(90deg); }
            .bottom { transform: translateY(90px) rotateX(-90deg); }
          }

          @media (min-width: 1024px) {
            .front  { transform: translateZ(100px); }
            .back   { transform: translateZ(-100px) rotateY(180deg); }
            .right  { transform: translateX(100px) rotateY(90deg); }
            .left   { transform: translateX(-100px) rotateY(-90deg); }
            .top    { transform: translateY(-100px) rotateX(90deg); }
            .bottom { transform: translateY(100px) rotateX(-90deg); }
          }

          @keyframes rotate {
            from { transform: rotateX(0deg) rotateY(0deg); }
            to { transform: rotateX(360deg) rotateY(360deg); }
          }
        `}
      </style>
      <div className="cube-container perspective">
        <div className="cube">
          <div className="cube-face front p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="HTML Logo" className="w-full h-full" />
          </div>
          <div className="cube-face back p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS Logo" className="w-full h-full" />
          </div>
          <div className="cube-face right p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Logo" className="w-full h-full" />
          </div>
          <div className="cube-face left p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" className="w-full h-full" />
          </div>
          <div className="cube-face top p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://www.mongodb.com/assets/images/global/leaf.png" alt="MongoDB Logo" className="w-full h-full" />
          </div>
          <div className="cube-face bottom p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://git-scm.com/images/logos/logomark-orange@2x.png" alt="Git Logo" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;