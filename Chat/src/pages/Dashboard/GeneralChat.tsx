import { useTheme } from "@emotion/react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper, Stack, Tab, Tabs, styled } from "@mui/material";
import { Users } from "phosphor-react";
import React from "react";
import { useSelector } from "react-redux";
import ChatTabs from "./ChatTabs";
import Converstation from "../../components/Converstation";
import ContactInfos from "../../components/Converstation/ContactInfos";
import SharedMsgs from "../../components/Converstation/SharedMsgs";
import StarredMsgs from "../../components/Converstation/StarredMsgs";
// import Paper from "../../theme/overrides/Paper";

const GeneralApp = () => {

  const theme = useTheme();
  const { contactInfo } = useSelector((store) => store.app);

  return (
    <Stack direction={"row"} sx={{ width: "100%", height: "100vh"}}>
      <Stack direction={"column"} margin={"42px"}>
      <ChatTabs />
      </Stack>
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
      {/* {contactInfo.open &&
        (() => {
          switch (contactInfo.type) {
            case "CONTACT":
              return <ContactInfos />;
            case "STARRED":
              return <StarredMsgs />;
            case "SHARED":
              return <SharedMsgs />;
            case "MODIFY":
              return <Profile />;
            default:
              return null;
          }
        })()} */}
    </Stack>
  );
};

export default GeneralApp;
