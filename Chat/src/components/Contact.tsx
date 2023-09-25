import React, { useState } from "react";
import {
  Box,
  Stack,
  Avatar,
  Badge,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { styled } from "@mui/material/styles";
// import CloseIcon from '@mui/icons-material/Close';
import { DotsThreeCircle, Sidebar, X } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDialog } from "../../redux/slices/App";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = (open:any, handleClose:any) => {
  const dispatch = useDispatch();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <IconButton
        aria-label="close"
        onClose={() => {
          dispatch(toggleDialog());
        }}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <X />
      </IconButton>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

const Contact = () => {
  return <div></div>;
};

export default Contact;
