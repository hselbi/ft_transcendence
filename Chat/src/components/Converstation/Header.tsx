import React from "react";
import {
  Box,
  Stack,
  Avatar,
  Badge,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { faker } from "@faker-js/faker";
import { alpha, styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleDialog } from "../../redux/slices/App";
import { InviteDialog } from "./Dialogs";
import { MenuOptions } from "./MsgTypes";

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


const Header = () => {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openInvite, setOpenInvite] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleCloseInvite = () => {
    setOpenInvite(false);
  };
  const handleClick = (event:any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        padding: "14px 32px",
        width: "100%",
        background: "#5E4F80",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
      //   p={2}
    >
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{ width: 46, height: 46 }}
            >
              <IconButton>
                <Avatar
                  onClick={() => {
                    dispatch(toggleDialog());
                  }}
                  alt={faker.person.firstName()}
                  src={faker.image.avatar()}
                  sx={{ width: 46, height: 46 }}
                />
              </IconButton>
            </StyledBadge>
          </Box>
          <Stack spacing={0.75}>
            <Typography variant="subtitle2" color={"#fff"} sx={{ padding: 0 }}>
              {faker.person.firstName()}
            </Typography>
            <Typography
              variant="caption"
              color={"#322554"}
              sx={{ padding: 0, fontWeight: 400, fontSize: "14px" }}
            >
              Online
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          {/* invite botton */}
          <Stack>
            <Button
              onClick={() => {
                setOpenInvite(true);
              }}
              sx={{
                backgroundColor: "#8979AC",
                color: "#EADDFF",
                padding: "10px 15px",
                borderRadius: "22px",
              }}
            >
              Invite to Play
            </Button>
          </Stack>
          {/* Menu option is done */}
          <MenuOptions />
        </Stack>
      </Stack>
      {openInvite && (
        <InviteDialog open={openInvite} handleClose={handleCloseInvite} />
      )}
    </Box>
  );
};

export default Header;
