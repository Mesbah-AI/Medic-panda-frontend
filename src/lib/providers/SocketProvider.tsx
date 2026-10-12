import SocketContext from "@/context/SocketContext";
import { ReactNode, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketUrl = process.env.NEXT_PUBLIC_Socket_Link;

    const newSocket = io(socketUrl, {
      transports: ["websocket", "polling"],
      withCredentials: true,
      autoConnect: true,
    });

    setSocket(newSocket);

    newSocket.on("connect", () => {
      console.log("Connected to Socket.IO server with ID:", newSocket.id);
    });

    newSocket.on("disconnect", (reason) => {
      console.log("Disconnected from Socket.IO. Reason:", reason);
    });

    newSocket.on("connect_error", (err) => {
      console.error("Connection error:", err.message);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
