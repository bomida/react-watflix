import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { windowSizeAtom } from "./atom";



function useWindowSize() {
  const [windowSize, setWindowSize] = useRecoilState(windowSizeAtom);
  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, [setWindowSize]);
  return windowSize;
}

export default useWindowSize;