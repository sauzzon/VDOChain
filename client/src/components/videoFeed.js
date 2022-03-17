import { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { TransactionContext } from "../context/TransactionContext";

const VideoFeed = () => {
  const { currentAccount } = useContext(TransactionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentAccount) {
      return navigate("/");
    } else {
    }
  }, [currentAccount, navigate]);

  return (
    <center>
      <h4>Welcome, {currentAccount} </h4>

      <Button variant="contained" component={Link} to="/upload">
        Upload Video
      </Button>
    </center>
  );
};
export default VideoFeed;
