import React from "react";
import { Button, Dialog, DialogActions, DialogTitle, Stack } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import ProfileForm from "../../../sections/dashboard/ProfileForm";
import { toggleDialog, updatedDialogType } from "../../../redux/slices/App";




const Profile = () => {
  const dispatch = useDispatch();
  const { contactInfo } = useSelector((store) => store.app);
  return (
    <Dialog
      open={contactInfo.open}
      //   TransitionComponent={Transition}
      //   keepMounted
      onClose={() => {
        dispatch(toggleDialog());
      }}
      //   aria-describedby="alert-dialog-slide-description"
    >
      {/* ==> title <== */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        p={2}
        // sx={{backgroundColor: "red"}}
        // justifyContent={"space-between"}
      >
        <Button
          onClick={() => {
            dispatch(updatedDialogType("CONTACT"));
          }}
          startIcon={<CaretLeft />}
        ></Button>
        <DialogTitle sx={{ m: "0", p: "15px 0" }}>{"Profile"}</DialogTitle>
      </Stack>


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
        <ProfileForm />
      </Stack>
    </Dialog>
  );
};

export default Profile;
