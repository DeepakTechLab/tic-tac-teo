import React from "react";
import { IconButton, Link, Stack } from "@mui/material";

// Social media icon
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <>
      <Stack
        color={"#fff"}
        width={"88%"}
        p={3}
        position={"fixed"}
        bottom={0}
        left={0}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Stack
          alignItems={"center"}
          justifyContent={"center"}
          direction={"row"}
        >
          <IconButton
            color="inherit"
            component={Link}
            href={"https://www.instagram.com/coder_deepak/"}
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href={"https://www.facebook.com/profile.php?id=100050103021020"}
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href={"https://www.linkedin.com/in/deepak-dutta-5228a9228/"}
            target="_blank"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            color="inherit"
            component={Link}
            href={"https://twitter.com/Coderdeepak"}
            target="_blank"
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
        Create by coder-Deepak @2021-2022
      </Stack>
    </>
  );
};

export default Footer;
