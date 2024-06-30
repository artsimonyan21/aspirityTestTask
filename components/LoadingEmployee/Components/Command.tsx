"use client";

import { TCommandMemper } from "@/types";
import Image from "next/image";
import { FC } from "react";

interface CommandProps {
  command: TCommandMemper[];
}

const Command: FC<CommandProps> = ({ command }) => {
  const newCommand = command.length > 7 ? command.slice(0, 7) : null;

  if (newCommand) {
    return (
      <div className="w-full h-fit flex justify-between relative">
        {newCommand.map(({ image, name }, idx) => {
          return (
            <div
              key={idx}
              className={`w-12 h-12 rounded-full overflow-hidden absolute`}
              style={{ left: `${idx * 30}px` }}
            >
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex justify-between relative">
      {command.map(({ image, name }, idx) => {
        return (
          <div
            key={idx}
            className={`w-12 h-12 rounded-full overflow-hidden absolute`}
            style={{ left: `${idx * 30}px` }}
          >
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
        );
      })}
    </div>
  );
};

export default Command;
