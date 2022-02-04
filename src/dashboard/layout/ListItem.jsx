import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const {
    selectedIndex,
    handleListItemClick,
    icon,
    name,
    index,
    toggleItem,
    lists,
    routeName,
  } = props;
  const [toggle, setToggle] = useState(false);

  const listItemComp = (
    <React.Fragment>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} style={{ marginLeft: "-10px" }} />
      <ListItemIcon>
        {toggleItem ? (
          toggle ? (
            <ArrowDropDownIcon style={{ color: "white", marginLeft: "20px" }} />
          ) : (
            <ArrowRightIcon style={{ color: "white", marginLeft: "20px" }} />
          )
        ) : null}
      </ListItemIcon>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {routeName ? (
        <ListItemButton
          component={Link}
          to={routeName}
          style={{ marginTop: 2 }}
          selected={selectedIndex === index}
          onClick={() => {
            handleListItemClick(index);
            setToggle(!toggle);
          }}
        >
          {listItemComp}
        </ListItemButton>
      ) : (
        <ListItemButton
          style={{ marginTop: 2 }}
          selected={selectedIndex === index}
          onClick={() => {
            handleListItemClick(index);
            setToggle(!toggle);
          }}
        >
          {listItemComp}
        </ListItemButton>
      )}

      {toggleItem && (
        <Collapse in={toggle} timeout="auto" unmountOnExit>
          <List component="div" style={{ paddingLeft: "40px" }}>
            {lists?.map((list, index) => (
              <ListItemButton
                key={index++}
                component={Link}
                to={list.route}
                sx={{ pl: 4 }}
              >
                <ListItemText
                  sx={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                  }}
                  primary={list.label}
                  disableTypography
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      )}
    </React.Fragment>
  );
};

export default ListItem;
