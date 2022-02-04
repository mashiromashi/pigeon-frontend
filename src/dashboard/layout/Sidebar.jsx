import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import ListItem from "./ListItem";
import TocIcon from "@mui/icons-material/Toc";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { layoutName } from "./LayoutName";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const drawerWidth = 240;

const StyledList = styled(List)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: "100vh",
  color: "white",
  // selected and (selected + hover) states
  "&& .Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    "&, & .MuiListItemIcon-root": {
      color: "white",
    },
  },
  "&& .Mui-selected:hover": {
    backgroundColor: theme.palette.secondary.light,
    "&, & .MuiListItemIcon-root": {
      color: "white",
    },
  },
  // hover states
  "& .MuiListItemButton-root:hover": {
    backgroundColor: theme.palette.secondary.light,
    "&, & .MuiListItemIcon-root": {
      color: "white",
    },
  },
}));

const Sidebar = ({ open, handleClose, drawerHeaderStyle }) => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div className={drawerHeaderStyle}>
        <IconButton onClick={handleClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <StyledList>
        <ListItem
          toggleItem={false}
          index={0}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          icon={<DashboardIcon style={{ color: "white" }} />}
          name={layoutName.dashboard.name}
          routeName={layoutName.dashboard.route}
        />
        <ListItem
          toggleItem={true}
          index={1}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          icon={<TocIcon style={{ color: "white" }} />}
          name={layoutName.article.name}
          lists={layoutName.article.lists}
        />
        <ListItem
          toggleItem={true}
          index={2}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
          icon={<ShoppingCartIcon style={{ color: "white" }} />}
          name={layoutName.product.name}
          lists={layoutName.product.lists}
        />
      </StyledList>
    </Drawer>
  );
};

export default Sidebar;
