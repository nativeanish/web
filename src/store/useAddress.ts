import { create } from "zustand";
import useNavbarButton from "./useNavbarButton";
import wallet from "../utils/Arweave-wallet";
interface State {
    address: null | string;
    set_address: () => void;
    unset_address: () => void;
}
const useAddress = create<State>((set) => ({
    address: null,
    set_address: () => {
        const _type = useNavbarButton.getState().type
        console.log(_type)
        if (_type === "arconnect") {
            if (window.arweaveWallet) {
                window.arweaveWallet.getActiveAddress().then((e) => set({ address: String(e) })).catch((er) => {
                    set({ address: null });
                    console.log(er)
                })
            }
        }
        if (_type === "arweave.app") {
            const _data = wallet.address
            if (_data?.length) {
                set({ address: _data })
            } else {
                set({ address: null })
            }
        }
    },
    unset_address: () => {
        set({ address: null })
    }
}))
export default useAddress