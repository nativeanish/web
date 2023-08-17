import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import { automatically_check } from "./utils/connect";
import useAddress from "./store/useAddress";
import useNavbarButton from "./store/useNavbarButton";
import wallet from "./utils/Arweave-wallet";
const App = () => {
  const address = useAddress((state) => state.address);
  useEffect(() => {
    window.addEventListener("arweaveWalletLoaded", () => {
      automatically_check();
    });
  }, [address]);
  const type = useNavbarButton((state) => state.type);
  return (
    <>
      <NavBar />
      {address?.length ? (
        <button
          onClick={() => {
            if (type === "arconnect") {
              window.arweaveWallet
                .disconnect()
                .then(() => automatically_check())
                .catch();
            }
            if (type === "arweave.app") {
              wallet.disconnect();
              automatically_check();
            }
          }}
        >
          Disconnect
        </button>
      ) : null}
    </>
  );
};
export default App;
