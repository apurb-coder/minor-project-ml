import { createContext, useContext, useState } from "react";

const modelOutputContext = createContext({
  mood:"Happy",
  songName:"songname"
}); // default value

export const useOutput = () => {
  return useContext(modelOutputContext);
};

export const outputProvider = ({ children }) => {
  const [songName, setSongName] = useState("songname");
  const [mood, setMood] = useState("Happy")
  return (
    <modelOutputContext.Provider value={{ songName,setSongName, mood, setMood }}>
      {children}
    </modelOutputContext.Provider>
  );
};
