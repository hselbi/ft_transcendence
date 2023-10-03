import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { Nav_Buttons } from "../../data";
import Logo from "../../assets/Images/logoPP.svg";
import { GearSix, SignOut } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";

const DashboardLayout = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 56,
    height: 28,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform:
          theme.palette.mode === "dark"
            ? "translateX(28px)"
            : "translateX(0.4px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.info.main
              : theme.palette.grey[500],
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 24,
      height: 24,
      borderRadius: 12,
      transition: theme.transitions.create(["width"], {
        duration: 800,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 28 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  
  return (
    <Stack direction={"row"} alignItems={"center"} padding={4} className="h-screen">
      <Box
        p={4}
        sx={{
          backgroundColor: "rgba(34, 31, 54, 0.53)",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "calc(100vh - 31px)",
          width: 80,
          borderRadius: "2rem",
        }}
        
      >
        <Stack
          direction="column"
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={8}
          sx={{ height: "100%" }}
        >
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 54,
              width: 54,
              borderRadius: 2,
            }}
          >
            
            
            {/* <img src={Logo} alt="Ping Pong Home" /> */}
          </Box>

          <Stack
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
            spacing={3}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  p={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "red",
                    height: 60,
                    width: 60,
                    borderRadius: 2.5,
                  }}
                >
                  <IconButton
                    sx={{
                      display: "flex",
                      alignContent: "center",
                      width: "max-content",
                      color: "#fff",
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <Box
                  p={1}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "green",
                    height: 60,
                    width: 60,
                    borderRadius: 2.5,
                  }}
                >
                  <IconButton
                    onClick={() => {
                      setSelected(el.index);
                    }}
                    sx={{ width: "max-content", color: "black" }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              )
            )}
            <Divider sx={{ width: "46px" }} />

            {selected === 4 ? (
              <Box
                p={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  width: 60,
                  backgroundColor: "red",
                  borderRadius: 2.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <GearSix size={32} />
                </IconButton>
              </Box>
            ) : (
              <Box
                p={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 60,
                  width: 60,
                  backgroundColor: "green",
                  borderRadius: 2.5,
                }}
              >
                <IconButton
                  sx={{ width: "max-content", color: "black" }}
                  onClick={() => {
                    setSelected(4);
                  }}
                >
                  <GearSix size={32} />
                </IconButton>
              </Box>
            )}
          </Stack>

          <Stack
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
            spacing={4}
          >
            <Box
              p={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 60,
                width: 60,
                backgroundColor: "green",
                borderRadius: 2.5,
              }}
            >
              <IconButton sx={{ width: "max-content", color: "#000" }}>
                <SignOut size={32} />
              </IconButton>
            </Box>
            <AntSwitch
              onChange={() => {
                // console.log(theme.palette.mode);
                onToggleMode();
              }}
              defaultChecked
            />
            <Avatar src={faker.image.avatar()} sx={{ width: 56, height: 56 }} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
