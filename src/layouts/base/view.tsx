import React from "react";
import Container from "@material-ui/core/Container";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { IProps } from "./types";
import { useLocation } from "../../utils";

const BaseLayoutComponent: React.FC<IProps> = ({
  children,
  siderIsOpen,
  toggleSider,
}) => {
  const { changeLocation } = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleSider}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Covid-19 Statistic</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ paddingTop: 50 }}>{children}</Container>
      <SwipeableDrawer
        anchor={"right"}
        open={siderIsOpen}
        onClose={toggleSider}
        onOpen={() => null}
      >
        <div style={{ padding: 20 }}>
          <Button
            className="w-100"
            onClick={() => {
              console.log("click");
              changeLocation({ location: "/", params: {} });
            }}
          >
            General statistic
          </Button>
          <br />
          <Button
            className="w-100"
            onClick={() => changeLocation({ location: "/countries" })}
          >
            All countries
          </Button>
        </div>
      </SwipeableDrawer>
    </>
  );
};

export { BaseLayoutComponent };
