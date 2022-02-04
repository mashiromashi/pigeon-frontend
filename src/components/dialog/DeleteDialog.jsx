import React from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import DialogWrapper from "./DialogWrapper";

const DeleteDialog = ({
  open,
  handleClose,
  type,
  cancelClose,
  agreeClickHandler,
}) => {
  return (
    <DialogWrapper open={open} handleClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        Are you sure want to delete?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`You will not be able to recover this ${type} `}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelClose}>Disagree</Button>
        <Button onClick={agreeClickHandler} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </DialogWrapper>
  );
};

export default DeleteDialog;
