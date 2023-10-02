import React from "react";
import {
  Box,
  Stack,
} from "@mui/material";

import Header from "./Header";
import Chatbox from "./Chatbox";
import Messages from "./Messages";

const Converstation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/* header chat */}
      <Header/>
      {/* messaging */}
      <Box width={"100%"} sx={{flexGrow:1, height: "100%", overflowY:"scroll"}}>
        <Messages />
      </Box>
     
      {/* typing */}
      <Chatbox />
     
    </Stack>
  );
};

export default Converstation;
