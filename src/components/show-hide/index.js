import { useState } from "react";

export const ShowHide = ({ children }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <button onClick={() => setIsShown(!isShown)}>
        {isShown ? "Hide" : "Show"}
      </button>
      {isShown && children}
    </div>
  );
};
