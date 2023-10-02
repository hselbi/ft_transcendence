import React, { useState } from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { ArchiveBox, MagnifyingGlass, PlusCircle } from "phosphor-react";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { ChatList } from "../../data";
import ChatElements from "../../components/Converstation/ChatElements.tsx";
import CreateChannel from "./CreateChannel.tsx";

const Channels = () => {
  const [openCreateChannel, setOpenCreateChannel] = useState(false);
  const handleCloseCreateChannel = () => {
    setOpenCreateChannel(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}
      >
        <Stack sx={{ height: "calc(100vh - 130px)" }}>
          <Stack padding={1} sx={{ width: "100%" }}>
            <Search>
              <SearchIconWrapper>
                <MagnifyingGlass />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Stack>
          <Stack padding={"10px 35px 20px"} spacing={2}>
            <Stack
              direction={"row"}
              alignContent={"center"}
              spacing={3}
              color="#709CE6"
              margin={"auto"}
              display={"block"}
            >
              {/* <ArchiveBox size={35} /> */}
              <Button
              onClick={() => {
                setOpenCreateChannel(true);
              }}
                startIcon={<PlusCircle size={26} />}
                sx={{
                  width: "100%",
                  fontSize: "18px", // Adjust the font size as needed
                  padding: "10px 38px", // Adjust the padding as needed
                  // neeed to make it center
                  backgroundColor: "#443263", // Change the background color to purple
                  color: "#C7BBD1", // Change the text color to white
                  "&:hover": {
                    backgroundColor: "#684C83", // Change the background color on hover
                    color: "#C7BBD1",
                  },
                }}
              >
                Create a New Channel
              </Button>
            </Stack>
            <Divider sx={{ paddingTop: "1px", background: "#684C83" }} />
          </Stack>
          <Stack
            direction={"column"}
            sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
          >
            <SimpleBarStyle>
              <Stack>
                {ChatList.filter((el) => !el.pinned).map((el) => {
                  return <ChatElements {...el} />;
                })}
              </Stack>
            </SimpleBarStyle>
          </Stack>
        </Stack>
      </Box>
      {openCreateChannel && <CreateChannel open={openCreateChannel} handleClose={handleCloseCreateChannel}/>}
    </>
  );
};

export default Channels;
