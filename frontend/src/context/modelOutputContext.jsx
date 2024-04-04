import { createContext, useContext, useState } from "react";
// name should be capital 1st letter
const ModelOutputContext = createContext({
  mood: "Happy",
  songName: "songname",
}); // default value

// will use this hook to access all the states globally
export const useOutput = () => {
  return useContext(ModelOutputContext);
};

export const OutputProvider = ({ children }) => {
  const [songName, setSongName] = useState("songname");
  const [mood, setMood] = useState("Happy");
  return (
    <ModelOutputContext.Provider
      value={{ songName, setSongName, mood, setMood }}
    >
      {children}
    </ModelOutputContext.Provider>
  );
};
