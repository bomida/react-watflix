import { atom } from "recoil";


export const windowSizeAtom = atom({
  key: "windowSizeAtom",
  default: { width: window.innerWidth, height: window.innerHeight },
});