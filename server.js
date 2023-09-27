const WebSocket = require("ws");
const port = 8080;
const server = new WebSocket.Server({ port });

server.on("connection", (socket) => {
  console.log("Client connected");
  let i = 100;

  const sendRandomData = () => {
    const data = {
      x: i++,
      y: Math.random(),
    };
    socket.send(JSON.stringify(data));

    setTimeout(sendRandomData, 100);
  };

  sendRandomData();

  socket.on("close", () => {
    console.log("Client disconnected.");
  });
});

console.log(`WebSocket server started on port ${port}`);
