import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import { automatically_check } from "./utils/connect";
import useAddress from "./store/useAddress";
const App = () => {
  const address = useAddress((state) => state.address);
  useEffect(() => {
    window.addEventListener("arweaveWalletLoaded", () => {
      automatically_check();
    });
  }, [address]);
  return (
    <>
      <NavBar />
      {address?.length ? (
        <button
          onClick={() => {
            window.arweaveWallet
              .disconnect()
              .then(() => automatically_check())
              .catch();
          }}
        >
          Disconnect
        </button>
      ) : null}
    </>
  );
};
export default App;
