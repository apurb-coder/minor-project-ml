import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Model = () => {
  const [thought, setThought] = useState('');
  const navigate = useNavigate();

  //submit the thought to the model
  const handleSubmit = () => {
    console.log(thought);
    // TODO: add all the submission logic to the model here
    navigate("/result");
  }

  //for typewriting effect
  const [text] = useTypewriter({
    words: ["What's on your mind?..."],
    loop: {},
  });

  return (
    <div className="flex flex-col justify-center items-center bg-white p-[1.25rem] m-auto rounded-lg shadow-md w-[80%] md:w-full">
      <textarea
        name="thought"
        id="thought"
        cols="50"
        rows="7"
        placeholder={text}
        onChange={(e) => setThought(e.target.value)}
        className="font-medium border-none p-[1.25rem] m-[1.25rem] resize-none focus:outline-none w-full text-black"
      />
      <button
        onClick={handleSubmit}
        className="font-semibold px-5 py-2 m-[1.25rem] border-none bg-[#024361] rounded-md cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}

export default Model