import React, { useRef } from "react";
import {
  Box,
  Badge,
  IconButton,
  Stack,
  Typography,
  InputBase,
  Button,
  Divider,
  Avatar,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { ArchiveBox, MagnetStraight, MagnifyingGlass } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import { useSocket } from "../../contexts/socket.context";
import EVENTS from "../../config/events";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElements = (id:any) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 85,
        borderRadius: "1",
        backgroundColor: "#806EA9",
      }}
      p={2}
    >
      {/* {console.log(id.img)} */}
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ padding: "0 8px" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {id.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{ width: 52, height: 52 }}
            >
              <Avatar src={id.img} sx={{ width: 52, height: 52 }} />
            </StyledBadge>
          ) : (
            <Avatar src={id.img} sx={{ width: 52, height: 52 }} />
          )}
          <Stack spacing={1.3}>
            <Typography variant="subtitle2" color={"white"}>
              {id.name}
            </Typography>
            <Typography
              variant="caption"
              color={"white"}
              sx={{ fontWeight: 400 }}
            >
              {id.msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography
            sx={{ fontWeight: 600, paddingBottom: "10px", paddingTop: 0 }}
            variant="caption"
          >
            {id.time}
            {/* 10:45 PM */}
          </Typography>
          <Badge
            color="primary"
            badgeContent={id.unread}
            sx={{ paddingBottom: "9px", paddingTop: 0 }}
          ></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: "#514371B8",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: "50px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    height: "100%",
    size: "100%",
    padding: "15px",
    color: "#ABAFB199",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    justifyContent: "center",
  },
}));

const Chats = () => {
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
        width: "100%",
        backgroundColor: "red",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        // margin: "18px",
        // borderRadius: "15px",
        
      }}
    >
      <Stack sx={{ height: "calc(100vh - 60px)" }}>

        <Stack padding={5} sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass size={25} color="#806EA9" />
            </SearchIconWrapper>
            {/* need to change the size of the placeholder */}
            <StyledInputBase size={50} placeholder="Search...." />
          </Search>
        </Stack>

        <Stack padding={"0 35px 20px"} spacing={1}>
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
              startIcon={<ArchiveBox size={26} />}
              sx={{
                width: "100%",
                fontSize: "18px", // Adjust the font size as needed
                padding: "8px 53px", // Adjust the padding as needed
                // neeed to make it center
                backgroundColor: "purple", // Change the background color to purple
                color: "white", // Change the text color to white
                "&:hover": {
                  backgroundColor: "darkpurple", // Change the background color on hover
                  color: "purple",
                },
              }}
            >
              slops
            </Button>
          </Stack>
          <Divider sx={{paddingTop:"2px", background:"#684C83a2"}} />
        </Stack>

        <Stack
          direction={"column"}
          sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
        >
            <SimpleBarStyle timeout={500} clickOnTrack={false} >

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

export default Chats;
