import CloseIcon from "@/assets/icons/close.svg";
import { TCommandMemper } from "@/types";
import { FC } from "react";
import CommandMember from "./CommandMember";

interface CommandListProps {
  command: TCommandMemper[];
}
const CommandList: FC<CommandListProps> = ({ command }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <h4 className="text-4xl text-[#E1E3E6]">Команда</h4>
        <CloseIcon className="w-6 h-6" />
      </div>

      <div className="h-full flex flex-col gap-2 overflow-y-auto">
        {command.map((item, idx) => (
          <CommandMember key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CommandList;
