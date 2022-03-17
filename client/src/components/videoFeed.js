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
  }, []);

  return (
    <center>
      <h4>{currentAccount}</h4>
      <h3>Upload, View and Share Videos</h3>
      <Button component={Link} to="/" variant="contained">
        Goto Home
      </Button>
    </center>
  );
};
export default VideoFeed;
