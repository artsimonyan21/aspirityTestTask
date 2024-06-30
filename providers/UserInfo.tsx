"use client";

import { FC, ReactNode, createContext, useMemo, useState } from "react";

export type UserInfoType = {
  name: string;
  surname: string;
  middleName: string;
  dateOfBirth: string;
  dateOfEmployment: string;
  country: string;
  city: string;
  position: string;
  email: string;
};

type UserInfoValue = {
  handleUserInfo: (data: Partial<UserInfoType>) => void;
  userInformation: UserInfoType;
};

const initialUserInfo: UserInfoType = {
  name: "Юрий",
  surname: "Герыш",
  middleName: "Андреевич",
  dateOfBirth: "06.01.2014",
  dateOfEmployment: "15.05.2020",
  country: "Россия",
  city: "Красноярск",
  position: "UI/UX designer",
  email: "test@gmail.com",
};

const initialValue: UserInfoValue = {
  handleUserInfo: () => {},
  userInformation: initialUserInfo,
};

export const UserInfo = createContext<UserInfoValue>(initialValue);

const UserInfoProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [userInformation, setUserInformation] =
    useState<UserInfoType>(initialUserInfo);

  const handleUserInfo = (data: Partial<UserInfoType>) => {
    setUserInformation((prevInfo) => ({
      ...prevInfo,
      ...data,
    }));
  };

  const contextValue = useMemo(
    () => ({ handleUserInfo, userInformation }),
    [userInformation]
  );

  return <UserInfo.Provider value={contextValue}>{children}</UserInfo.Provider>;
};

export default UserInfoProvider;
