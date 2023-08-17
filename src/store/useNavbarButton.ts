import { create } from "zustand";
interface State {
    type: "arconnect" | "arweave.app",
    setType: (e: "arconnect" | "arweave.app") => void;
}
const useNavbarButton = create<State>((set, get) => ({
    type: "arconnect",
    setType: (e) => set({ type: e }),
}))
export default useNavbarButton;