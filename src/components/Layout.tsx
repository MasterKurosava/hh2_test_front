import React, { useMemo } from "react";
import Device from "./Device";
import Conveier from "./Conveier";
import Container from "./Container";
import Sort from "./Sort";
import OutputContainer from "./OutputContainer";
import { Device as DeviceType, Conveyor } from "../config/state";

interface LayoutProps {
  devices: DeviceType[];
  conveyors: Conveyor[];
}

const Layout: React.FC<LayoutProps> = ({ devices, conveyors }) => {
  const layout = useMemo(() => [
    [null, null, <Device device={devices[0]} />, <Conveier name={conveyors[0]?.name ?? "?"} status={conveyors[0]?.status ?? "off"} direction="right" />, <Container />, null, null],
  [null, null, <Conveier name={conveyors[0]?.name ?? "?"} status={conveyors[0]?.status ?? "off"} direction="up" />, null, null, null, null],
  [
    <Container />,
    <Conveier name={conveyors[1]?.name ?? "?"} status={conveyors[1]?.status ?? "off"} direction="right" />,
    <Sort />,
    <Conveier name={conveyors[1]?.name ?? "?"} status={conveyors[1]?.status ?? "off"} direction="right" />,
    <Device device={devices[1]} />,
    <Conveier name={conveyors[1]?.name ?? "?"} status={conveyors[1]?.status ?? "off"} direction="right" />,
    <OutputContainer />
  ],
  [null, null, <Conveier name={conveyors[2]?.name ?? "?"} status={conveyors[2]?.status ?? "off"} direction="down" />, null, null, null, null],
  [null, null, <Device device={devices[2]} />, <Conveier name={conveyors[2]?.name ?? "?"} status={conveyors[2]?.status ?? "off"} direction="right" />, <Container />, null, null]
  ], [devices, conveyors]);

  return (
    <div className="w-3/4 flex justify-center items-center">
      <div className="grid grid-cols-7 grid-rows-5 w-[1000px] h-[700px] bg-gray-800">
        {layout.flat().map((Component, index) => (
          <div key={index} className="flex justify-center items-center">
            {Component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;