import { createContext } from "react";
import { useState } from "react";

export const AuditoriumContext = createContext()

export const AuditoriumProvider=({ children })=> {
  const [selectedAuditorium, setSelectedAuditorium] = useState(null);

  const selectAuditorium = (auditoriumData) => {
    setSelectedAuditorium(auditoriumData);
  };

  return (
    <AuditoriumContext.Provider
      value={{
        selectedAuditorium,
        selectAuditorium,
      }}
    >
      {children}
    </AuditoriumContext.Provider>
  );
}