import React from 'react'
import { Box, Stack } from '@mui/material'
import { MagnifyingGlass } from 'phosphor-react'
import { ChatList } from '../../data'
import { SimpleBarStyle } from '../../components/Scrollbar'
import ChatElements from '../../components/Converstation/ChatElements'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'

const All = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
            }}
        >
            <Stack sx={{ height: "calc(100vh- 130px)" }}>
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
                    sx={{ flexGrow: 2, overflow: "scroll", height: "100%" }}
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
    )
}

export default All