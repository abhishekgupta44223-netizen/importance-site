"use client";
import { useState } from "react";

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
        background: "linear-gradient(to right, pink, purple)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        textAlign: "center"
      }}
    >
      {!show ? (
        <h1>Tap anywhere 💖</h1>
      ) : (
        <>
          <h1 style={{ fontSize: "35px" }}>
            Happy Birthday Riya 🎉🎂
          </h1>

          <p style={{ maxWidth: "300px" }}>
            Riya 💖  
            Tu meri life ki sabse special insan hai ❤️  
            Teri smile meri duniya hai 😊  
            Bhagwan kare tujhe har khushi mile 💫  
            Stay happy always 💕  
          </p>

          <img 
            src="/riya.jpg" 
            alt="Riya"
            style={{
              width: "200px",
              borderRadius: "50%",
              marginTop: "20px",
              animation: "pop 1s ease"
            }}
          />

          <div className="balloons">🎈🎈🎈🎈🎈</div>
        </>
      )}

      <style>{`
        .balloons {
          font-size: 40px;
          animation: float 3s infinite;
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
          100% { transform: translateY(0); }
        }

        @keyframes pop {
          from { transform: scale(0); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
