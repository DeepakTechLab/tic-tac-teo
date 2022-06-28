import React, { useEffect, useState } from "react";
import { Alert, Box, Button, Stack, Typography } from "@mui/material";
import AddPlayer from "./AddPlayer";

const Home = () => {
  // Page update , basically it's cames from AddPlayer components
  const [update, setUpdate] = useState(false);

  // User mean who plaing the geme
  const [users, setUsers] = useState({
    firstPlayer: "",
    secondPlayer: "",
  });
  const { firstPlayer, secondPlayer } = users;

  // This is another thick that's is if player is false in this case Print "X" otherwise Print "O"
  const [player, setPlayer] = useState(false);

  // Check win or not and also draw
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);

  // Total 9 box state
  const [boxs, setBoxs] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
  });
  const { box1, box2, box3, box4, box5, box6, box7, box8, box9 } = boxs;

  // Indivisually Click the box
  const isClick = (name) => {
    setBoxs({ ...boxs, [name]: !player ? "X" : "O" });
    setPlayer(!player);
    setDraw(false);
    setWin(false);
  };

  // Reset Game
  const resetGame = () => {
    setWin(false);
    setDraw(false);
    setPlayer(false);
    setBoxs({
      box1: "",
      box2: "",
      box3: "",
      box4: "",
      box5: "",
      box6: "",
      box7: "",
      box8: "",
      box9: "",
    });
  };

  // Main calculation
  if (
    (box1 && box2 && box3 && box1 === box2 && box2 === box3) ||
    (box4 && box5 && box6 && box4 === box5 && box5 === box6) ||
    (box7 && box8 && box9 && box7 === box8 && box8 === box9) ||
    (box1 && box4 && box7 && box1 === box4 && box4 === box7) ||
    (box2 && box5 && box8 && box2 === box5 && box5 === box8) ||
    (box3 && box6 && box9 && box3 === box6 && box6 === box9) ||
    (box1 && box5 && box9 && box1 === box5 && box5 === box9) ||
    (box3 && box5 && box7 && box3 === box5 && box5 === box7)
  ) {
    setWin(true);
    setBoxs({
      box1: "",
      box2: "",
      box3: "",
      box4: "",
      box5: "",
      box6: "",
      box7: "",
      box8: "",
      box9: "",
    });
  } else if (
    box1 &&
    box2 &&
    box3 &&
    box4 &&
    box5 &&
    box6 &&
    box7 &&
    box8 &&
    box9
  ) {
    setDraw(true);
    setPlayer(false);
    setBoxs({
      box1: "",
      box2: "",
      box3: "",
      box4: "",
      box5: "",
      box6: "",
      box7: "",
      box8: "",
      box9: "",
    });
  }
  //

  // if User add their name in input field in this case page update  and get item from local storage
  useEffect(() => {
    let players = JSON.parse(localStorage.getItem("players"));
    if (players) {
      setUsers({
        firstPlayer: players.firstPlayer,
        secondPlayer: players.secondPlayer,
      });
    }
    setWin(false);
  }, [update]);

  return (
    <Stack pt={2} alignItems={"center"}>
      {/* This is little bit triky  */}
      <Typography color={"#fff"} variant="h4" mb={6}>
        {draw ? (
          <Alert variant="filled" severity="warning">
            opps! Match Draw . Play again....😐
          </Alert>
        ) : win ? (
          <Alert variant="outlined" sx={{ color: "#fff" }} severity="success">
            {player ? `${firstPlayer}` : `${secondPlayer}`} {""}
            win the match . Congratulations!🏆🏆🏆
          </Alert>
        ) : (
          `${!player ? `${firstPlayer}` : `${secondPlayer}`}`
        )}
      </Typography>
      {/*  */}
      <>
        <Stack direction={"row"}>
          <Box
            className="b-bottom-right square"
            onClick={() => {
              isClick("box1");
            }}
          >
            {box1}
          </Box>
          <Box
            className="b-bottom-right square"
            onClick={() => {
              isClick("box2");
            }}
          >
            {box2}
          </Box>
          <Box
            className="b-bottom square"
            onClick={() => {
              isClick("box3");
            }}
          >
            {box3}
          </Box>
        </Stack>

        <Stack direction={"row"}>
          <Box
            className="b-bottom-right square"
            onClick={() => {
              isClick("box4");
            }}
          >
            {box4}
          </Box>
          <Box
            className="b-bottom-right square"
            onClick={() => {
              isClick("box5");
            }}
          >
            {box5}
          </Box>
          <Box
            className="b-bottom square"
            onClick={() => {
              isClick("box6");
            }}
          >
            {box6}
          </Box>
        </Stack>

        <Stack direction={"row"}>
          <Box
            className="b-right square"
            onClick={() => {
              isClick("box7");
            }}
          >
            {box7}
          </Box>
          <Box
            className="b-right square"
            onClick={() => {
              isClick("box8");
            }}
          >
            {box8}
          </Box>
          <Box
            className="square"
            onClick={() => {
              isClick("box9");
            }}
          >
            {box9}
          </Box>
        </Stack>
      </>
      <Stack direction={"row"} mt={4} spacing={2}>
        <Button variant="contained" onClick={resetGame}>
          Reset
        </Button>
        <AddPlayer update={update} setUpdate={setUpdate} />
      </Stack>
    </Stack>
  );
};

export default Home;
