import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";
import DialogWrapper from "./DialogWrapper";

const UpdateProductDialog = ({
  open,
  handleClose,
  agreeClickHandler,
  cancelClose,
}) => {
  return (
    <DialogWrapper open={open} handleClose={handleClose}>
      <DialogTitle id="alert-dialog-title">
        Are you sure want to delete?
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="normal"
          autoFocus
          type="file"
          fullWidth
          id="productImage"
          name="productImage"
        />
        <TextField
          margin="normal"
          fullWidth
          id="productName"
          label="Product Name"
          name="productName"
        />
        <TextField
          margin="normal"
          fullWidth
          id="fbLink"
          label="Facebook Link"
          name="fbLink"
        />
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={cancelClose} color="error">
          Cancel
        </Button>
        <Button variant="contained" onClick={agreeClickHandler} color="success">
          Submit
        </Button>
      </DialogActions>
    </DialogWrapper>
  );
};

export default UpdateProductDialog;
