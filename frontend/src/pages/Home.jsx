import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Home = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/model");
    };
    const [text] = useTypewriter({
      words: ["Music Recommender based on your mood.", "Let's get started!"],
      loop: {},
    });
  return (
    <div className="home">
      <div className="text">
        <span>{text}</span>
        <Cursor cursorColor="white" />
      </div>
      <button onClick={handleClick}>Start</button>
    </div>
  );
}

export default Home