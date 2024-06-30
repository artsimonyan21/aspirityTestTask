import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        `w-full 2xl:px-[213px] lg:px-40 md:px-16 sm:px-8 px-4`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
