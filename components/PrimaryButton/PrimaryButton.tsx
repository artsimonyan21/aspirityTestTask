import { FC, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  type?: "submit" | "button";
  className?: string;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  title,
  type = "button",
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      className={twMerge(`bg-[#0047BB]`, className)}
      {...props}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
