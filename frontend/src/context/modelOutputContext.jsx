import { createContext, useContext, useState } from "react";

const ModelOutputContext = createContext({
  mood:"Happy",
  songName:"songname"
}); // default value

export const useOutput = () => {
  return useContext(ModelOutputContext);
};

export const OutputProvider = ({ children }) => {
  const [songName, setSongName] = useState("songname");
  const [mood, setMood] = useState("Happy")
  return (
    <ModelOutputContext.Provider value={{ songName,setSongName, mood, setMood }}>
      {children}
    </ModelOutputContext.Provider>
  );
};
