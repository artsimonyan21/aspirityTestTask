import Image from "next/image";
import { FC } from "react";

interface UserInfoProps {
  name: string;
  surname: string;
  middleName: string;
  position: string;
  address: string;
}

const UserInfo: FC<UserInfoProps> = ({
  name,
  middleName,
  surname,
  address,
  position,
}) => {
  return (
    <div className="w-full max-w-[620px] ">
      <div className="flex md:flex-row flex-col items-center gap-12">
        <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 relative">
          <Image src="/user.png" alt="user image" layout="fill" />
        </div>
        <h2 className="md:text-5xl text-2xl text-[#E1E3E6] font-bold">
          {surname} {name} {middleName}
        </h2>
      </div>
      <div className="flex md:justify-start justify-center items-center gap-12 mt-2">
        <div className="w-40 rounded-full md:block hidden"></div>
        <div className="col-start-5 md:text-start text-center col-span-7">
          <p className="text-[#E1E3E6]">{position}</p>
          <p className="text-[#E1E3E6]">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
