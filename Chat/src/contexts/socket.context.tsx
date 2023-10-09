import { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { SOCKET_URL } from "../config/default";
import EVENTS from "../config/events";

interface SocketContextProps {
  socket: Socket | null;
  connected: boolean;
}

interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  messages?: { message: string; time: string; username: string }[];
  setMessages: Function;
  roomId?: string;
  rooms: object;
}

const socket = io(SOCKET_URL, {
  withCredentials: true,
});

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  setMessages: () => {},
  rooms: {},
});

function SocketsProvider(props: any) {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [rooms, setRooms] = useState("");

socket.on(EVENTS.SERVER.ROOMS, (value) => {
    setRooms(value);
  });
  socket.on(EVENTS.SERVER.ROOMS, (value) => {
    setRooms(value);
  });

//   socket.on(EVENTS.SERVER.JOINED_ROOM, (value) => {
//     setRoomId(value);

//     setMessages([]);
//   });

  return (
    <SocketContext.Provider
      value={{ socket, username, setUsername, roomId, rooms }}
      {...props}
    />
  );
}

export const useSocket = () => useContext(SocketContext);

export default SocketsProvider;
