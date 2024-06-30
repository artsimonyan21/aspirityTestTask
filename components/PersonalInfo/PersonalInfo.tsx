"use client";

import { useContext, useState } from "react";
import { TextField } from "@mui/material";
import { UserInfo } from "@/providers/UserInfo";
import UserInfoForm from "../UserInfoForm";

const PersonalInfo = () => {
  const [openModal, setOpenModal] = useState<boolean>();
  const { userInformation, handleUserInfo } = useContext(UserInfo);
  const handleOpen = () => {
    setOpenModal(true);
  };
  return (
    <div className="w-full flex flex-col gap-8">
      {openModal ? (
        <UserInfoForm setOpenModal={setOpenModal} />
      ) : (
        <>
          <div className="w-full flex justify-between items-center">
            <h5 className="text-2xl text-[#E1E3E6]">Персональная информация</h5>
            <button className="text-sm text-[#76787A]" onClick={handleOpen}>
              Изменить
            </button>
          </div>
          <div className="flex flex-col gap-6">
            <div className="w-full flex md:flex-row flex-col gap-2">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={userInformation.name}
                disabled
                InputProps={{
                  sx: {
                    color: "#B0B1B6",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#B0B1B6 !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#B0B1B6 !important",
                  },
                  shrink: true,
                }}
                className="w-full"
              />
              <TextField
                id="outlined-basic"
                label="Surname"
                variant="outlined"
                value={userInformation.surname}
                disabled
                InputProps={{
                  sx: {
                    color: "#B0B1B6",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#B0B1B6 !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#B0B1B6 !important",
                  },
                  shrink: true,
                }}
                className="w-full"
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Middle Name"
              variant="outlined"
              value={userInformation.middleName}
              disabled
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-disabled fieldset": {
                    borderColor: "#B0B1B6", // Change the border color when disabled
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "#B0B1B6", // Change the label color
                },
                "& .Mui-disabled .MuiInputLabel-root": {
                  color: "#B0B1B6", // Change the label color when disabled
                },
                "& .MuiInputBase-input": {
                  color: "#B0B1B6", // Change the text color
                },
              }}
              className="w-full"
            />
            <div className="w-full flex md:flex-row flex-col gap-2">
              <TextField
                id="outlined-basic"
                label="Date of Birth"
                variant="outlined"
                value={userInformation.dateOfBirth}
                disabled
                InputProps={{
                  sx: {
                    color: "#B0B1B6",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#B0B1B6 !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#B0B1B6 !important",
                  },
                  shrink: true,
                }}
                className="w-full"
              />
              <TextField
                id="outlined-basic"
                label="Date of Employment"
                variant="outlined"
                value={userInformation.dateOfEmployment}
                disabled
                InputProps={{
                  sx: {
                    color: "#B0B1B6",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#B0B1B6 !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#B0B1B6 !important",
                  },
                  shrink: true,
                }}
                className="w-full"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col gap-2">
              <TextField
                id="outlined-basic"
                label="Country"
                variant="outlined"
                value={userInformation.country}
                disabled
                InputProps={{
                  sx: {
                    color: "#B0B1B6",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#B0B1B6 !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#B0B1B6 !important",
                  },
                  shrink: true,
                }}
                className="w-full"
              />
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                value={userInformation.city}
                disabled
                InputProps={{
                  sx: {
                    color: "#B0B1B6",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#B0B1B6 !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#B0B1B6 !important",
                  },
                  shrink: true,
                }}
                className="w-full"
              />
            </div>
            <div className="w-full flex md:flex-row flex-col gap-2">
              <TextField
                id="outlined-basic"
                label="Position"
                variant="outlined"
                value={userInformation.position}
                disabled
                InputProps={{
                  sx: {
                    color: "#B0B1B6",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#B0B1B6 !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#B0B1B6 !important",
                  },
                  shrink: true,
                }}
                className="w-full"
              />
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={userInformation.email}
                disabled
                InputProps={{
                  sx: {
                    color: "#B0B1B6",
                    "& .MuiOutlinedInput-root": {
                      borderColor: "#B0B1B6 !important",
                    },
                  },
                }}
                InputLabelProps={{
                  sx: {
                    color: "#B0B1B6 !important",
                  },
                  shrink: true,
                }}
                className="w-full"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfo;
