import { Box, Card, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Colors = () => {
  return (
    <Stack direction={"row"} p={8} spacing={15}>
      <Stack direction={"column"}>
        {/* PRIMARY COLOR */}
        <Typography variant="h4" className="text-center">Primary</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>lighter</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "primary.lighter",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>light</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "primary.light",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>main</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "primary.main",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>dark</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "primary.dark",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>darker</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "primary.darker",
              }}
              className=" rounded-lg"
            />
          </Stack>
        </Stack>
        {/* SECONDARY COLOR */}
        <Typography variant="h4" className="text-center">Secondary</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>lighter</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "secondary.lighter",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>light</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "secondary.light",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>main</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "secondary.main",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>dark</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "secondary.dark",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>darker</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "secondary.darker",
              }}
              className=" rounded-lg"
            />
          </Stack>
        </Stack>
        {/*  */}
        {/* INFO COLOR */}
        <Typography variant="h4" className="text-center">info</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>lighter</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "info.lighter",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>light</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "info.light",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>main</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "info.main",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>dark</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "info.dark",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>darker</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "info.darker",
              }}
              className=" rounded-lg"
            />
          </Stack>
        </Stack>
        {/* SECCESS COLOR */}
        <Typography variant="h4" className="text-center">success</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>lighter</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "success.lighter",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>light</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "success.light",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>main</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "success.main",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>dark</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "success.dark",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>darker</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "success.darker",
              }}
              className=" rounded-lg"
            />
          </Stack>
        </Stack>
        {/* WARNING COLOR */}
        <Typography variant="h4" className="text-center">warning</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>lighter</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "warning.lighter",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>light</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "warning.light",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>main</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "warning.main",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>dark</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "warning.dark",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>darker</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "warning.darker",
              }}
              className=" rounded-lg"
            />
          </Stack>
        </Stack>
        {/* ERROR COLOR */}
        <Typography variant="h4" className="text-center">error</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>lighter</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "error.lighter",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>light</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "error.light",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>main</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "error.main",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>dark</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "error.dark",
              }}
              className=" rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>darker</Typography>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                backgroundColor: "error.darker",
              }}
              className=" rounded-lg"
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"column"}>
        {/* Gradients */}
        <Typography variant="h4" className="text-center">Gradients</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>Background</Typography>
            <Box
              sx={{
                width: "500px",
                height: "200px",
                backgroundImage:
                  "linear-gradient(225deg, #16132B 0%, #3D3C65 100%)",
              }}
              className="rounded-lg"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>Cards</Typography>
            <Box
              sx={{
                width: "225px",
                height: "200px",
                backgroundImage:
                  "linear-gradient(250deg, rgba(63, 59, 91, 0.69) 2.09%, rgba(42, 39, 66, 0.69) 58.7%, rgba(42, 39, 66, 0.69) 100%)",
              }}
              className="rounded-3xl"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>Cards</Typography>
            <Box
              sx={{
                width: "225px",
                height: "200px",
                backgroundImage:
                  "linear-gradient(64deg, #2A2742 2.09%, rgba(88, 80, 152, 0.00) 100%)",
                //   #2A2742, #58509800
              }}
              className="rounded-3xl"
            />
          </Stack>
        </Stack>

        <Typography variant="h4" className="text-center">Gradients games pick</Typography>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>main Cards</Typography>
            <Box
              sx={{
                width: "225px",
                height: "200px",
                backgroundImage:
                  "linear-gradient(242deg, rgba(63, 59, 91, 0.69) 2.09%, rgba(42, 39, 66, 0.69) 58.7%, rgba(42, 39, 66, 0.69) 100%)",
              }}
              className="rounded-3xl"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
            <Typography>second Cards</Typography>
            <Box
              sx={{
                width: "225px",
                height: "200px",
                backgroundImage:
                  "linear-gradient(242deg, rgba(63, 59, 91, 0.69) 40.32%, rgba(42, 39, 66, 0.69) 96.92%, rgba(42, 39, 66, 0.69) 138.23%)",
              }}
              className="rounded-3xl"
            />
          </Stack>

        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack direction={"column"} alignItems={"center"}>
          <Typography variant="h4">Right NavBars</Typography>
            {/* <Typography>Cards</Typography> */}
            <Box
              sx={{
                width: "80px",
                height: "200px",
                backgroundColor: "rgba(34, 31, 54, 0.53)",
              }}
              className="rounded-3xl"
            />
          </Stack>
          <Stack direction={"column"} alignItems={"center"}>
          <Typography variant="h4">left NavBars</Typography>
            {/* <Typography>Cards</Typography> */}
            <Box
              sx={{
                width: "80px",
                height: "200px",
                // background: ; 
                backgroundColor: "rgba(52, 47, 87, 0.53)",
              }}
              className="rounded-3xl"
            />
          </Stack>
        </Stack>

      </Stack>
    </Stack>
  );
};

export default Colors;
