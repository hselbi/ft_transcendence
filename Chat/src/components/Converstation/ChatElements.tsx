import React from "react";
import { Box, Badge, Stack, Typography, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";


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


export default ChatElements;