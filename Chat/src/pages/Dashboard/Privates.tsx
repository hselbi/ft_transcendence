import { Box, Button, ButtonProps, Divider, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import { ArchiveBox, MagnifyingGlass } from "phosphor-react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ChatElements from "../../components/Converstation/ChatElements";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#C7BBD1",
  backgroundColor: "#443263",
  '&:hover': {
    backgroundColor: "darkpurple",
  },
}));

const Privates = () => {
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
            {/* <ArchiveBox size={35} /> */}
            <ColorButton
              //   PaperProps={{
              //     style: { margin: "0 15px 20px" },
              //   }}
              // margin="0 12px 0"
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
        </Stack>

        <Stack
          direction={"column"}
          sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
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

export default Privates;
