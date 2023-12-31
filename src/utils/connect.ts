import useAddress from "../store/useAddress";
import useNavbarButton from "../store/useNavbarButton";
import wallet from "./Arweave-wallet";
const set_address = useAddress.getState().set_address;
const unset_address = useAddress.getState().unset_address;
export const connect_arconnect = async () => {
    if (window.arweaveWallet) {
        try {
            const data = await window.arweaveWallet.getActiveAddress();
            set_address()
        } catch (err) {
            try {
                await window.arweaveWallet.connect([
                    "ACCESS_ADDRESS",
                    "SIGN_TRANSACTION",
                    "SIGNATURE",
                    "ACCESS_PUBLIC_KEY",
                ]);
                connect_arconnect();
            } catch (err) {
                console.log(err);
                unset_address()
            }
        }
    }
}
export const connect_areave = async () => {
    wallet.on("connect", () => {
        console.log(wallet.address)
    })
    // try {
    //     await wallet.connect()
    //     set_address()
    // } catch (err) {
    //     console.log(err)
    //     unset_address()
    // }
}
export const connect = () => {
    const data = useNavbarButton.getState().type;
    if (data === "arconnect") {
        connect_arconnect().then().catch((err) => console.log(err))
    }
    if (data === "arweave.app") {
        connect_areave().then().catch((err) => console.log(err))
    }
}
export const _automatically_check = async () => {
    //for arconnect
    if (window.arweaveWallet) {
        try {
            const data = await window.arweaveWallet.getActiveAddress()
            set_address()
        } catch (err) {
            unset_address()
        }
    }
    //for arweave.app
    // wallet.on("connect", () => {
    //     if (wallet.address?.length && wallet.connected) {
    //         const setType = useNavbarButton.getState().setType
    //         setType("arweave.app");
    //         set_address()
    //     } else {
    //         unset_address()
    //     }
    // })
}

export const automatically_check = () => { _automatically_check().then().catch() }
