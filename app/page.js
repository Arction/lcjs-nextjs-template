"use client";
import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import Chart from "./chart";

export default function Home() {
  const [dataSource, setDataSource] = useState([]);
  const { lastMessage } = useWebSocket("ws://localhost:8080", {
    onOpen: () => console.log("Connected to the server"),
    shouldReconnect: (closeEvent) => true,
  });

  useEffect(() => {
    const initialData = [];
    for (let i = 0; i < 100; i++) {
      initialData.push({ x: i, y: Math.random() });
    }
    setDataSource(initialData);
  }, []);

  useEffect(() => {
    if (lastMessage) {
      const data = JSON.parse(lastMessage.data);
      setDataSource(data);
    }
  }, [lastMessage]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{ width: "100vw", height: "100vh" }}>
        <Chart id="chart" data={dataSource} />
      </div>
    </main>
  );
}
