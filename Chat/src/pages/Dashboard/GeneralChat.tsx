import { useTheme } from "@emotion/react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper, Stack, Tab, Tabs, styled } from "@mui/material";
import { Users } from "phosphor-react";
import React from "react";
import ChatTabs from "./ChatTabs";
// import Paper from "../../theme/overrides/Paper";

const GeneralApp = () => {

  const theme = useTheme();

  return (
    <Stack direction={"row"} sx={{ width: "100%", height: "100vh"}}>
      <Stack direction={"column"} margin={"42px"}>
      <ChatTabs />
      </Stack>
    </Stack>
  );
};

export default GeneralApp;
