"use client";
import React, { useEffect, useRef } from "react";
import { AxisScrollStrategies, lightningChart } from "@lightningchart/lcjs";

const Chart = (props) => {
  const { id, data } = props;
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const lc = lightningChart();
    const chart = lc
      .ChartXY({ container })
      .setTitle("LightningChart JS x Next.js");
    const lineSeries = chart.addLineSeries({
      dataPattern: { pattern: "ProgressiveX" },
    });
    chartRef.current = { chart, lineSeries };
    chart
      .getDefaultAxisX()
      .setScrollStrategy(AxisScrollStrategies.progressive)
      .setInterval({ start: -100, end: 0, stopAxisAfter: false });

    return () => {
      lc.dispose();
      chartRef.current = null;
    };
  }, []);

  useEffect(() => {
    const { lineSeries } = chartRef.current;
    lineSeries.add(data);
  }, [data]);

  return (
    <div
      id={id}
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    ></div>
  );
};

export default Chart;
