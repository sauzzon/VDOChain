import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { TransactionContext } from "../context/TransactionContext";

const LandingPage = () => {
  const { currentAccount, connectWallet } = useContext(TransactionContext);

  return (
    <center>
      <h1>VDO-Chain</h1>
      <h3>Decentralized Video Sharing Platform</h3>
      {!currentAccount && (
        <Button onClick={connectWallet} variant="outlined">
          Connect Wallet
        </Button>
      )}
      {currentAccount && (
        <>
          <h4>Welcome, {currentAccount}</h4>
          <Button component={Link} to="/home" variant="contained">
            Get Started
          </Button>
        </>
      )}
    </center>
  );
};
export default LandingPage;
