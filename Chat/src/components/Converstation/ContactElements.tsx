import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
// import Typography from "../../theme/overrides/Typography";
import { styled } from "@mui/material/styles";
import { BiVolumeMute } from "react-icons/bi";
import {
  Chat,
  Prohibit,
  SpeakerSimpleNone,
  SpeakerSimpleSlash,
  UserMinus,
} from "phosphor-react";

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

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const ContactElements = (contact: any) => {
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

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
        sx={{ padding: "0 8px 14px" }}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          {contact.online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{ width: 52, height: 52 }}
            >
              <Avatar src={contact.img} sx={{ width: 52, height: 52 }} />
            </StyledBadge>
          ) : (
            <Avatar src={contact.img} sx={{ width: 52, height: 52 }} />
          )}
          <Typography variant="subtitle2" color={"white"}>
            {contact.name}
          </Typography>
        </Stack>
        <Stack direction={"row"} spacing={1}>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton
            aria-label="mute contact"
            onClick={handleClickShowPassword}
          >
            {values.showPassword ? (
              <SpeakerSimpleSlash />
            ) : (
              <SpeakerSimpleNone />
            )}
          </IconButton>

          <IconButton>
            <UserMinus />
          </IconButton>
          <IconButton>
            <Prohibit />
          </IconButton>
          {/* <BiVolumeMute className="text-3xl" /> */}
        </Stack>
      </Stack>
      <Divider sx={{ paddingTop: "1px", background: "#684C83" }} />
    </Box>
  );
};

export default ContactElements;
