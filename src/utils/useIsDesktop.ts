import { useState, useEffect } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
  };

  useEffect(() => {
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return isDesktop;
};

export default useIsDesktop;
