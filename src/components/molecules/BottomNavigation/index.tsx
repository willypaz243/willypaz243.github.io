import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import * as React from "react";

import { ContactMail, Home, Info } from "@mui/icons-material";
import { Container } from "@mui/material";

export function LabelBottomNavigation() {
  const [value, setValue] = React.useState("home");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Container
      // maxWidth="lg"
      sx={{
        display: {
          xs: "fixed",
          md: "none",
          position: "fixed",
          bottom: 0,
          left: 0,
          justifyContent: "center",
        },
      }}
    >
      <BottomNavigation
        showLabels
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          href="#"
          label="Home"
          value="home"
          icon={<Home />}
        />
        <BottomNavigationAction
          href="#aboutme"
          label="About me"
          value="aboutme"
          icon={<Info />}
        />
        <BottomNavigationAction
          href="#projects"
          label="Projects"
          value="projects"
          icon={<ContactMail />}
        />
      </BottomNavigation>
    </Container>
  );
}
