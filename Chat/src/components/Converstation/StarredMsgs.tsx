import React from "react";
import {
  Box,
  Stack,
  Avatar,
  Typography,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  Slide,
  Divider,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { useDispatch, useSelector } from "react-redux";
import { toggleDialog, updatedDialogType } from "../../redux/slices/App";
import { CaretLeft } from "phosphor-react";
import Messages from "./Messages";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SharedMsgs = () => {
  const dispatch = useDispatch();
  const { contactInfo } = useSelector((store) => store.app);
  //   console.log(contactInfo)

  return (
    <Dialog
      open={contactInfo.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => {
        dispatch(toggleDialog());
      }}
      aria-describedby="alert-dialog-slide-description"
    >
      {/* ==> title <== */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        p={2}
        // sx={{backgroundColor: "red"}}
        // justifyContent={"space-between"}
      >
        <Button onClick={() => {
                  dispatch(updatedDialogType("CONTACT"));
                }}startIcon={<CaretLeft />}></Button>
        <DialogTitle sx={{ m: "0", p: "15px 0" }}>{"Starred"}</DialogTitle>
      </Stack>

      {/* ===> body <=== */}

      <Stack
        sx={{
          height: "800px",
          width: "600px",
          position: "relative",
          flexGrow: 1,
          overflowY: "scroll",
        }}
        p={3}
        spacing={3}
      >
        <Messages />
        
      </Stack>
    </Dialog>
  );
};

export default SharedMsgs;
