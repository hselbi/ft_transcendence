import {
  Box,
  Button,
  ButtonProps,
  Divider,
  IconButton,
  InputBase,
  Paper,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ArchiveBox, ChatText, MagnifyingGlass } from "phosphor-react";
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
import { useRef } from "react";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#C7BBD1",
  backgroundColor: "#443263",
  "&:hover": {
    backgroundColor: "darkpurple",
  },
}));

const Privates = () => {
  const { socket, roomId, rooms } = useSocket();
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
        margin: "0 18px 18px",
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

        <Stack padding={"10px 35px 20px"} spacing={2}>
          <Stack
            direction={"row"}
            alignContent={"center"}
            spacing={3}
            color="#709CE6"
            margin={"auto"}
            display={"block"}
          >
            <ColorButton
              startIcon={<ArchiveBox size={26} />}
              sx={{
                // margin: " 0 20px",
                width: "100%",
                fontSize: "18px", // Adjust the font size as needed
                padding: "8px 53px", // Adjust the padding as needed
                // neeed to make it center
                backgroundColor: "red", // Change the background color to purple
                color: "#C7BBD1", // Change the text color to white
                "&:hover": {
                  backgroundColor: "darkpurple", // Change the background color on hover
                  color: "#443263",
                },
              }}
            >
              Archive
            </ColorButton>
          </Stack>
          <Divider sx={{ paddingTop: "2px", background: "#684C83a2" }} />
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Create a new Room"
              inputProps={{ "aria-label": "create a new room" }}
              inputRef={newRoomRef}
            />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
              onClick={handleCreateRoom}
            >
              <ChatText size={32} />
            </IconButton>
          </Paper>
        </Stack>

        <Stack
          direction={"column"}
          sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack>
              {/* every converstation == */}
              {Object.keys(rooms).map((key) => {
                return (
                  <ChatElements
                    key={key}
                    name={rooms[key].name}
                    img={rooms[key].img}
                    msg={"the last msg"}
                    time={"10:45 PM"}
                    unread={2}
                    online={true}
                    roomId={key}
                    active={roomId === key}
                    // onClick={() => handleJoinRoom(key)}
                  />
                );
              })}
              {/* {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElements {...el} />;
              })} */}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Privates;
