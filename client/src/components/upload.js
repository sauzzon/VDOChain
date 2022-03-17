import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, TextField } from "@mui/material";

import { TransactionContext } from "../context/TransactionContext";

const Upload = () => {
  const { currentAccount } = useContext(TransactionContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentAccount) {
      return navigate("/");
    } else {
    }
  }, [currentAccount, navigate]);

  return (
    <>
      <center>
        <h2>Upload a video</h2>
        <Box component="form">
          <TextField
            margin="normal"
            required
            id="title"
            label="Title"
            name="title"
          />
          <br></br>
          <TextField
            margin="normal"
            required
            id="description"
            label="Description"
            name="description"
          />
          <br></br>
          <TextField
            margin="normal"
            required
            id="category"
            label="Category"
            name="category"
          />
          <br></br>
          <Button sx={{ m: 1 }} type="submit" variant="contained">
            Upload
          </Button>
        </Box>
      </center>
    </>
  );
};
export default Upload;
