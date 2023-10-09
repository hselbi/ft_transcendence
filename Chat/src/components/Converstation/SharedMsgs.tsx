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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SharedMsgs = () => {
  const dispatch = useDispatch();
  const { contactInfo } = useSelector((store) => store.app);
  //   console.log(contactInfo)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue:any) => {
    setValue(newValue);
  };
  return (
    <Dialog
      open={contactInfo.open}
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
        <Button
          onClick={() => {
            dispatch(updatedDialogType("CONTACT"));
          }}
          startIcon={<CaretLeft />}
        ></Button>
        <DialogTitle sx={{ m: "0", p: "15px 0" }}>{"Shared"}</DialogTitle>
      </Stack>

      {/* ===> body <=== */}
      <Tabs
        sx={{ px: 2, pt: 2 }}
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Photos" />
        <Tab label="Videos" />
      </Tabs>

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
        {(() => {
          switch (value) {
            case 0:
              // images
              return (
                <Grid container spacing={2}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                    return (
                      <Grid item xs={4}>
                        <img
                          src={faker.image.avatar()}
                          alt={faker.person.fullName()}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              );
            case 1:
              // videos
              return (
                <Grid container spacing={2}>
                  {[0, 1, 2, 3, 4, 5, 6].map(() => {
                    return (
                      <Grid item xs={4}>
                        <img
                          src={faker.image.avatar()}
                          alt={faker.person.fullName()}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              );
            default:
              break;
          }
        })()}
      </Stack>
    </Dialog>
  );
};

export default SharedMsgs;
