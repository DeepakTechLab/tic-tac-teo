import React, { useEffect, useState } from "react";
import { Stack, Box, Button, Modal, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// first a fall Import Props and return Props update
const AddPlayer = ({ update, setUpdate = (f) => f }) => {
  // This a Modal disign
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //

  // Changing input value capture here
  const [values, setValues] = useState({
    firstPlayer: "",
    secondPlayer: "",
  });
  const { firstPlayer, secondPlayer } = values;

  // When first time page rander then two item set in local storage
  useEffect(() => {
    localStorage.setItem(
      "players",
      JSON.stringify({ firstPlayer: "Player 1", secondPlayer: "Player 2" })
    );
  }, []);

  // Input field function change
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  // Player app button
  const addPlayerName = () => {
    if (!firstPlayer) {
      toast.error("Please enter First Player name atleast 1 char", {
        theme: "dark",
        autoClose: 1700,
      });
      return;
    }
    if (!secondPlayer) {
      toast.error("Please enter Second Player name atleast 1 char", {
        theme: "dark",
        autoClose: 1700,
      });
      return;
    }
    localStorage.setItem(
      "players",
      JSON.stringify({ firstPlayer, secondPlayer })
    );
    setValues({ firstPlayer: "", secondPlayer: "" });
    setOpen(false);
    setUpdate(!update);
  };

  return (
    <Stack>
      <ToastContainer />
      <Button onClick={handleOpen} variant="contained">
        Add player name
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={2}>
            <TextField
              label={"First Player"}
              onChange={handleChange("firstPlayer")}
              value={firstPlayer}
              autoComplete="off"
            />
            <TextField
              label={"Second Player"}
              onChange={handleChange("secondPlayer")}
              value={secondPlayer}
              autoComplete="off"
            />
            <Button variant="contained" onClick={addPlayerName}>
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Stack>
  );
};

export default AddPlayer;
