import React from "react";
import { formatDate, formatTime } from "@/utils/date";

interface TimeListProps {
  times: string[];
}

const TimeList: React.FC<TimeListProps> = ({ times }) => {
  return (
    <>
      {times.map((time, index) => (
        <div
          key={index}
          className="w-96 h-10 mb-1 flex flex-col  bg-gray-800 p-2 shadow-md hover:shodow-lg rounded"
        >
          <div className="flex items-center justify-between">
            <p className="font-thin text-sm">{formatDate(time)}</p>
            <p className="font-bold">{formatTime(time)}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TimeList;
