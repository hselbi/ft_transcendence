import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ChatElements from "../../components/Converstation/ChatElements";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { useSocket } from "../../contexts/socket.context";
import EVENTS from "../../config/events";

const All = () => {

  const {socket, roomId, rooms} = useSocket();
  const newRoomRef = useRef(null);

  function handleCreateRoom() {
    //get the room name (neme of room)
    const roomName = newRoomRef.current.value || "";

    if (!String(roomName).trim()) return;

    // emit room created event (create room)
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

    // set room name input to empty string
    newRoomRef.current.value = "";
  }
  return (
    <Box
      sx={{
        position: "relative",
        width: 452,
        // backgroundColor: "#806EA9",
        // boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        margin: "0 18px 18px",
        borderRadius: "25px",
      }}
    >
      <Stack sx={{ height: "calc(100vh - 175px)" }}>
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
        <Stack
          direction={"column"}
          sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
        >
          <SimpleBarStyle >
            <Stack>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElements {...el} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default All;
