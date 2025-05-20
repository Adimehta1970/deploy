import { WebSocketServer } from "ws";
import { prisma } from "@repo/database";

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", async (socket) => {
  prisma.user.create({
    data: {
      email: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  socket.send("Hi there you are connected to the server");
});
