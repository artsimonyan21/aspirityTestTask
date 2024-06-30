import Image from "next/image";
import { FC } from "react";
import { Command, CommandList } from "./Components";
import { command } from "@/constants";
import ArroIcon from "@/assets/icons/rightArrow.svg";
import PrimaryButton from "../PrimaryButton";

interface LoadingEmployeeProps {
  title: string;
  percent: string;
  projectName: string;
  projectType: string;
  userName: string;
  start: string;
  end: string;
}

const LoadingEmployee: FC<LoadingEmployeeProps> = ({
  percent,
  title,
  projectName,
  projectType,
  userName,
  start,
  end,
}) => {
  return (
    <div className="w-full h-full max-h-[484px overflow-y-auto overflow-x-hidden flex flex-col gap-10">
      {false ? (
        <CommandList command={command} />
      ) : (
        <>
          <div className="w-full flex justify-between items-center">
            <h5 className="text-2xl text-[#E1E3E6]">{title}</h5>
            <button className="text-sm text-[#D77556] font-semibold">
              {percent}%
            </button>
          </div>
          <div className="flex md:flex-row flex-col gap-2">
            <div className="w-full">
              <span className="text-[#76787A]">Название проекта</span>
              <p className="text-[#E1E3E6]">{projectName}</p>
            </div>
            <div className="w-full">
              <span className="text-[#76787A]">Тип проекта</span>
              <p className="text-[#E1E3E6]">{projectType}</p>
            </div>
          </div>
          <div className="w-full flex md:flex-row flex-col gap-2">
            <div className="w-full">
              <span className="text-[#76787A]">Ответственный</span>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full overflow-hidden relative">
                  <Image
                    src="/annak.jpeg"
                    alt="user"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[#E1E3E6]">{userName}</p>
              </div>
            </div>
            <div className="w-full">
              <span className="text-[#76787A]">Команда</span>
              <Command command={command} />
            </div>
          </div>
          <div className="w-full">
            <span className="text-[#76787A]">Сроки работы</span>
            <div className="text-[#E1E3E6] flex items-center gap-2">
              {start} <ArroIcon className="w-[18px] h-[14px]" /> {end}
            </div>
          </div>
          <PrimaryButton
            title="Посмотреть всю загрузку"
            className="w-full py-[10px] text-sm text-[#E1E3E6] font-semibold"
          />{" "}
        </>
      )}
    </div>
  );
};

export default LoadingEmployee;
