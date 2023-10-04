import React from "react";
import PropTypes from "prop-types";
import Chats from "./Chats";
import {
  AppBar,
  Box,
  Button,
  Divider,
  InputBase,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { alpha, styled, useTheme } from "@mui/material/styles";
import Converstation from "../../components/Converstation";
import { useSelector } from "react-redux";
import ContactInfos from "../../components/Converstation/ContactInfos";
import SharedMsgs from "../../components/Converstation/SharedMsgs";
import StarredMsgs from "../../components/Converstation/StarredMsgs";
import SwipeableViews from "react-swipeable-views";
import { Users } from "phosphor-react";

import TmpChats from "./TmpChats";
import Channels from "./Channels";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const GeneralApp = () => {
  const { contactInfo } = useSelector((store) => store.app);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // console.log(contactInfo);
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Chat  App */}
      {/* <AppBar position="static"> */}
      <Stack direction={"column"} margin={"18px"}>
        <Tabs
          // margin="40px"
          value={value}
          onChange={handleChange}
          // variant="fullWidth"
          centered
          aria-label="full width tabs example"
        >
          <Tab
            icon={<Users size={32} />}
            sx={{
              margin: "0",
              padding: "0px 15px",
              backgroundColor: value === 0 ? "#806EA9" : "#443263", // Selected tab color
              color: value === 0 ? "#443263" : "#806EA9", // Selected tab text color
              // border: "1px solid transparent",
            }}
            aria-label="friends"
            {...a11yProps(0)}
          />
          <Tab
            label="All"
            sx={{
              margin: "0",
              padding: "0px 15px",
              backgroundColor: value === 1 ? "#806EA9" : "#443263", // Selected tab color
              color: value === 1 ? "#443263" : "#806EA9", // Selected tab text color
              // border: "1px solid transparent",
            }}
            {...a11yProps(1)}
          />
          <Tab
            label="Privates"
            sx={{
              margin: "0",
              padding: "0px 30px",
              backgroundColor: value === 2 ? "#806EA9" : "#443263", // Selected tab color
              color: value === 2 ? "#443263" : "#806EA9", // Selected tab text color
              // border: "1px solid transparent",
            }}
            {...a11yProps(2)}
          />
          <Tab
            label="Channels"
            sx={{
              margin: "0",
              padding: "0px 20px",
              backgroundColor: value === 3 ? "#806EA9" : "#443263", // Selected tab color
              color: value === 3 ? "#443263" : "#806EA9", // Selected tab text color
              // border: "1px solid transparent",
            }}
            {...a11yProps(3)}
          />
        </Tabs>
        <Box
          sx={{
            position: "relative",
            width: 452,
            backgroundColor: "#806EA9",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            margin: "0 18px 18px",
            borderRadius: "25px",
          }}
        >
          {/* </AppBar> */}
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              all
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              all
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <TmpChats />
              {/* privates */}
              {/* <Chats />  */}
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
              <Channels />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Stack>
      {/* <Chats />  */}

      {/* ******************************* */}
      {/* Converstation */}
      <Box
        sx={{
          height: "calc(100vh - 32px)",
          width: "calc(100vw - 612px)",
          backgroundColor: "#806EA9",
          margin: "18px",
          // borderRadius: "25px",
        }}
        // PaperProps={{
        //       style: { borderRadius: "15px", },
        //     }}
      >
        <Converstation />
      </Box>
      {contactInfo.open &&
        (() => {
          switch (contactInfo.type) {
            case "CONTACT":
              return <ContactInfos />;
            case "STARRED":
              return <StarredMsgs />;
            case "SHARED":
              return <SharedMsgs />;
            default:
              return null;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
