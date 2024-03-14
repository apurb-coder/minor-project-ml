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
    <div className='model'>
      <textarea
        name="thought"
        id="thought"
        cols="50"
        rows="7"
        placeholder={text}
        onChange={(e) => setThought(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Model