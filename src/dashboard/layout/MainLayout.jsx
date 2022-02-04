import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { Main } from "./Main";
import { AppBar } from "./AppBar";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { logout } from "applications/slice/loginSlice";
import { useNavigate } from "react-router-dom";

const MainLayout = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const dispatch = useDispatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logoutClickHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar className={classes.appBarStyle}>
          <IconButton
            style={{ color: "black" }}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ color: "black" }}
          >
            Pigeon
          </Typography>
          <Typography
            onClick={logoutClickHandler}
            noWrap
            component="div"
            style={{
              marginLeft: "auto",
              color: "black",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Logout
          </Typography>
        </Toolbar>
      </AppBar>
      <Sidebar
        open={open}
        handleClose={handleDrawerClose}
        drawerHeaderStyle={classes.drawerHeader}
      />
      <Main open={open}>
        <div className={classes.drawerHeader} />
        {props.children}
        {/* conten goes here */}
      </Main>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  appBarStyle: {
    backgroundColor: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

export default MainLayout;
