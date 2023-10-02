import React from "react";
import { MenuOptions } from "./MsgTypes";

const ContactMenu = () => {
  return (
    <Stack direction={"row"} justifyContent={"end"}>
      <Box
        p={1.5}
        sx={{
          backgroundColor: el.incoming ? "#5E4F80" : "#3D2E5F",
          borderRadius: 1.5,
          width: "max-content",
        }}
      >
        <Stack direction={"row"} justifyContent={"end"}>
          <MenuOptions />
        </Stack>
        
      </Box>
    </Stack>
  );
};

export default ContactMenu;
