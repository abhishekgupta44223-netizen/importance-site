"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    const audio = new Audio("/song.mp3");
    audio.play();
  };

  return (
    <div 
      onClick={handleClick}
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        overflow: "hidden",
        color: "#fff"
      }}
    >
      {!show ? (
        <h1>Tap for Surprise 💖</h1>
      ) : (
        <>
          <h1 className="title">Happy Birthday Riya 🎉🎂</h1>

          <p className="msg">
            Riya 💖 Tu meri life ki sabse special insan hai ❤️  
            Teri smile meri duniya hai 😊  
            Bhagwan kare tujhe har khushi mile 💫  
            Stay happy always 💕  
          </p>

          <img src="/riya.jpg" className="photo" />

          <div className="balloons">
            🎈 🎈 🎈 🎈 🎈 🎈 🎈
          </div>

          <div className="confetti"></div>
        </>
      )}

      <style>{`
        .title {
          font-size: 36px;
          animation: glow 2s infinite alternate;
        }

        .msg {
          max-width: 300px;
          margin-top: 10px;
          font-size: 18px;
        }

        .photo {
          width: 220px;
          border-radius: 50%;
          margin-top: 20px;
          border: 5px solid white;
          animation: pop 1s ease;
        }

        .balloons {
          font-size: 40px;
          margin-top: 20px;
          animation: float 3s infinite;
        }

        .confetti {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, white 2px, transparent 2px);
          background-size: 20px 20px;
          animation: fall 3s linear infinite;
          opacity: 0.3;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-60px); }
          100% { transform: translateY(0); }
        }

        @keyframes pop {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }

        @keyframes glow {
          from { text-shadow: 0 0 10px white; }
          to { text-shadow: 0 0 25px pink; }
        }

        @keyframes fall {
          from { background-position: 0 0; }
          to { background-position: 0 100px; }
        }
      `}</style>
    </div>
  );
}