import { createContext, useContext, useState } from "react";

const modelOutputContext = createContext(""); // default value

export const useOutput = () => {
  return useContext(modelOutputContext);
};

export const outputProvider = ({ children }) => {
  const [songName, setSongName] = useState("songname");

  return (
    <modelOutputContext.Provider value={{ songName,setSongName }}>
      {children}
    </modelOutputContext.Provider>
  );
};
