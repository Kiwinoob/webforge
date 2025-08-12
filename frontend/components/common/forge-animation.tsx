// components/hero/ForgeAnimation.tsx

"use client";
import React from "react";

// Configuration for each spark. This makes it easy to add/remove/tweak sparks.
const sparksConfig = [
  // Large sparks
  { id: 1, size: "large", duration: 4, delay: 0 },
  { id: 2, size: "large", duration: 3.5, delay: 0.5 },
  { id: 3, size: "large", duration: 4.2, delay: 1 },
  // Medium sparks
  { id: 4, size: "medium", duration: 3.8, delay: 0.2 },
  { id: 5, size: "medium", duration: 4.5, delay: 0.8 },
  { id: 6, size: "medium", duration: 3.2, delay: 1.2 },
  { id: 7, size: "medium", duration: 4.8, delay: 1.5 },
  { id: 16, size: "medium", duration: 4.1, delay: 2 },
  { id: 17, size: "medium", duration: 3.6, delay: 2.2 },
  // Small sparks
  { id: 8, size: "small", duration: 2.5, delay: 0.1 },
  { id: 9, size: "small", duration: 2.8, delay: 0.3 },
  { id: 10, size: "small", duration: 2.2, delay: 0.6 },
  { id: 11, size: "small", duration: 3.1, delay: 0.9 },
  { id: 12, size: "small", duration: 2.6, delay: 1.1 },
  { id: 13, size: "small", duration: 2.9, delay: 1.4 },
  { id: 14, size: "small", duration: 2.4, delay: 1.6 },
  { id: 15, size: "small", duration: 3, delay: 1.8 },
  { id: 18, size: "small", duration: 2.7, delay: 2.4 },
  { id: 19, size: "small", duration: 3.3, delay: 2.6 },
  { id: 20, size: "small", duration: 2.1, delay: 2.8 },
  { id: 21, size: "small", duration: 2.9, delay: 3 },
  { id: 22, size: "small", duration: 3.4, delay: 3.2 },
  { id: 23, size: "small", duration: 2.5, delay: 3.4 },
];

export default function ForgeAnimation() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <div className="forge-glow" />
        {sparksConfig.map((spark) => (
          <div
            key={spark.id}
            className={`spark-${spark.size}`}
            style={{
              animation: `spark-fly-${spark.id} ${spark.duration}s ease-out ${spark.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        /* --- Base Styles (Desktop) --- */
        .forge-glow {
          position: absolute;
          bottom: -45%;
          left: 50%;
          width: 800px;
          height: 600px;
          background: radial-gradient(
            ellipse at center,
            rgba(255, 200, 100, 0.4) 0%,
            rgba(255, 87, 51, 0.2) 40%,
            transparent 70%
          );
          transform: translateX(-50%);
          filter: blur(50px);
          animation: forge-pulse 4s ease-in-out infinite alternate;
        }

        .spark-large,
        .spark-medium,
        .spark-small {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          top: 98%;
          left: 50%;
        }

        .spark-large {
          width: 8px;
          height: 8px;
          background: radial-gradient(
            circle,
            #fff,
            #ffc947 50%,
            transparent 80%
          );
          box-shadow: 0 0 15px 5px #ff5733;
        }
        .spark-medium {
          width: 5px;
          height: 5px;
          background: radial-gradient(
            circle,
            #ffb347 0%,
            #ff5733 70%,
            transparent 100%
          );
          box-shadow: 0 0 12px 3px #c1440e;
        }
        .spark-small {
          width: 3px;
          height: 3px;
          background: radial-gradient(
            circle,
            #ffeda0 0%,
            #ffb347 80%,
            transparent 100%
          );
          box-shadow: 0 0 6px 1px #ffb347;
        }

        @keyframes forge-pulse {
          from {
            transform: translateX(-50%) scale(0.95);
            opacity: 0.8;
          }
          to {
            transform: translateX(-50%) scale(1.1);
            opacity: 1;
          }
        }

        /* --- Keyframes (Desktop) --- */
        /* Increased travel distance for all sparks */
        @keyframes spark-fly-1, @keyframes spark-fly-2, @keyframes spark-fly-3,
        @keyframes spark-fly-4, @keyframes spark-fly-5, @keyframes spark-fly-6,
        @keyframes spark-fly-7, @keyframes spark-fly-8, @keyframes spark-fly-9,
        @keyframes spark-fly-10, @keyframes spark-fly-11, @keyframes spark-fly-12,
        @keyframes spark-fly-13, @keyframes spark-fly-14, @keyframes spark-fly-15,
        @keyframes spark-fly-16, @keyframes spark-fly-17, @keyframes spark-fly-18,
        @keyframes spark-fly-19, @keyframes spark-fly-20, @keyframes spark-fly-21,
        @keyframes spark-fly-22, @keyframes spark-fly-23 {
          from {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
        }

        @keyframes spark-fly-1 {
          to {
            transform: translate(250px, -650px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-2 {
          to {
            transform: translate(-300px, -600px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-3 {
          to {
            transform: translate(150px, -700px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-4 {
          to {
            transform: translate(380px, -500px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-5 {
          to {
            transform: translate(-400px, -640px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-6 {
          to {
            transform: translate(450px, -400px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-7 {
          to {
            transform: translate(-420px, -680px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-8 {
          to {
            transform: translate(200px, -350px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-9 {
          to {
            transform: translate(-180px, -380px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-10 {
          to {
            transform: translate(240px, -320px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-11 {
          to {
            transform: translate(-220px, -400px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-12 {
          to {
            transform: translate(190px, -390px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-13 {
          to {
            transform: translate(220px, -360px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-14 {
          to {
            transform: translate(-230px, -350px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-15 {
          to {
            transform: translate(260px, -380px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-16 {
          to {
            transform: translate(-350px, -550px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-17 {
          to {
            transform: translate(370px, -580px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-18 {
          to {
            transform: translate(-280px, -330px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-19 {
          to {
            transform: translate(290px, -390px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-20 {
          to {
            transform: translate(-140px, -410px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-21 {
          to {
            transform: translate(130px, -430px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-22 {
          to {
            transform: translate(-340px, -450px) scale(0);
            opacity: 0;
          }
        }
        @keyframes spark-fly-23 {
          to {
            transform: translate(330px, -420px) scale(0);
            opacity: 0;
          }
        }

        /* --- Tablet Styles (up to 1024px) --- */
        @media (max-width: 1024px) {
          .forge-glow {
            width: 600px;
            height: 450px;
            bottom: -30%;
          }
          @keyframes spark-fly-1 {
            to {
              transform: translate(200px, -550px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-2 {
            to {
              transform: translate(-250px, -500px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-3 {
            to {
              transform: translate(120px, -600px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-5 {
            to {
              transform: translate(-300px, -540px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-7 {
            to {
              transform: translate(-320px, -580px) scale(0);
              opacity: 0;
            }
          }
        }

        /* --- Mobile Styles (up to 767px) --- */
        @media (max-width: 767px) {
          .forge-glow {
            width: 120vw;
            height: 300px;
            bottom: -20%;
            filter: blur(40px);
          }
          @keyframes spark-fly-1 {
            to {
              transform: translate(110px, -450px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-2 {
            to {
              transform: translate(-130px, -420px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-3 {
            to {
              transform: translate(70px, -480px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-4 {
            to {
              transform: translate(160px, -380px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-5 {
            to {
              transform: translate(-170px, -440px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-6 {
            to {
              transform: translate(195px, -350px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-7 {
            to {
              transform: translate(-180px, -450px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-8 {
            to {
              transform: translate(95px, -300px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-9 {
            to {
              transform: translate(-80px, -320px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-10 {
            to {
              transform: translate(110px, -280px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-11 {
            to {
              transform: translate(-100px, -330px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-12 {
            to {
              transform: translate(85px, -325px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-13 {
            to {
              transform: translate(100px, -310px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-14 {
            to {
              transform: translate(-105px, -300px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-15 {
            to {
              transform: translate(115px, -320px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-16 {
            to {
              transform: translate(-145px, -400px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-17 {
            to {
              transform: translate(155px, -410px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-18 {
            to {
              transform: translate(-120px, -290px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-19 {
            to {
              transform: translate(125px, -325px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-20 {
            to {
              transform: translate(-65px, -340px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-21 {
            to {
              transform: translate(60px, -355px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-22 {
            to {
              transform: translate(-140px, -370px) scale(0);
              opacity: 0;
            }
          }
          @keyframes spark-fly-23 {
            to {
              transform: translate(135px, -360px) scale(0);
              opacity: 0;
            }
          }
        }

        /* Accessibility: Reduce motion if the user prefers it */
        @media (prefers-reduced-motion: reduce) {
          .forge-glow,
          .spark-large,
          .spark-medium,
          .spark-small {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
