import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  ArrowLeft,
  Bell,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import { faker } from "@faker-js/faker";

const Settings = () => {
  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      // onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      // onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Box
          sx={{
            overflowY: "scroll",
            height: "100vh",
            width: 452,
            backgroundColor: "#806EA9",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* header */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <ArrowLeft size={25} color={"#0e0e0e"} />
              </IconButton>
              <Typography variant="h6">Settings</Typography>
            </Stack>
            {/* profile */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <Avatar
                sx={{ width: 65, height: 65 }}
                src={faker.image.avatar()}
                alt={faker.person.fullName()}
              />
              <Stack spacing={0.5}>
                <Typography variant="article">
                  {faker.person.fullName()}
                </Typography>
                <Typography variant="body3">{faker.word.sample()}</Typography>
              </Stack>
            </Stack>
            {/* list of options */}
            <Stack spacing={4}>
              {list.map((item) => (
                <Stack
                  spacing={2}
                  sx={{ cursor: "pointer" }}
                  onClick={item.onclick}
                >
                  <Stack
                    // key={item.key}
                    direction={"row"}
                    alignItems={"center"}
                    spacing={2}
                  >
                    {item.icon}
                    <Typography variant="body2">{item.title}</Typography>
                  </Stack>
                  {item.key !== 7 && <Divider sx={{ background: "#3D2E5F" }} />}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Settings;
