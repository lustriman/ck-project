import { useState, useEffect } from "react";

export const useHome = () => {
  const [name, setName] = useState("");

  const useInitData = () => {
    const chosenName = "Samuel Sihotang";

    setName(chosenName);
  };

  useEffect(useInitData, []);

  return {
    name,
  };
};
