import Image from "next/image";
import { FC } from "react";

interface CommandMemberProps {
  name: string;
  image: string;
  position: string;
}

const CommandMember: FC<CommandMemberProps> = ({ image, name, position }) => {
  return (
    <div className="w-full flex gap-2">
      <div className="w-12 h-12 rounded-full overflow-hidden relative">
        <Image src={image} alt="member" fill className="object-cover" />
      </div>
      <div>
        <h5 className="text-[#E1E3E6]">{name}</h5>
        <p className="text-[#B0B1B6]">{position}</p>
      </div>
    </div>
  );
};

export default CommandMember;
