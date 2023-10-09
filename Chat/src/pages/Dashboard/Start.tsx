import React, { useRef } from "react";
import { useSocket } from "../../contexts/socket.context";
import GeneralApp from "./GeneralChat";
import { Button, Input, Stack } from "@mui/material";

const Start = () => {
  const { socket, username, setUsername } = useSocket();
  const usernameRef = useRef(null);

  function handleSetUsername() {
    const value = usernameRef.current;
    // console.log(value.value)
    if (!value) {
      return;
    }

    setUsername(value.value);

    localStorage.setItem("username", value.value);
  }
  return (
    <Stack >
      {!username && (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} >
          <input placeholder="Username" ref={usernameRef} />
          <Button onClick={handleSetUsername} variant="outlined">Submit</Button>
        </Stack>
      )}
      {username && (
        // <div className={styles.container}>
        <GeneralApp />
        // </div>
      )}
    </Stack>
  );
};

export default Start;
