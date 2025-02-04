interface DeviceProps {
  device: { id: number; name: string; status: string };
}

export const Device: React.FC<DeviceProps> = ({ device }) => {
  return (
    <div className={`flex flex-col items-center justify-center w-full h-full text-center col-span-1 ${device?.status === "on" ? "bg-green-500" : "bg-red-500"}`}>
      {device?.name ?? "Неизвестное устройство"}
    </div>
  );
};

export default Device;
