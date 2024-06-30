"use client";
import { UserInfo, UserInfoType } from "@/providers/UserInfo";
import { TextField } from "@mui/material";
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import PrimaryButton from "../PrimaryButton";
import { useForm } from "react-hook-form";

const UserInfoForm = ({
  setOpenModal,
}: {
  setOpenModal: Dispatch<SetStateAction<boolean | undefined>>;
}) => {
  const { userInformation, handleUserInfo } = useContext(UserInfo);

  const { handleSubmit, register, setValue } = useForm<UserInfoType>({
    defaultValues: userInformation,
  });

  useEffect(() => {
    Object.entries(userInformation).forEach(([key, value]) => {
      setValue(key as keyof UserInfoType, value);
    });
  }, [userInformation, setValue]);

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit((data) => {
        setOpenModal(false);
        handleUserInfo(data);
      })}
    >
      <div className="w-full flex md:flex-row flex-col gap-2">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          defaultValue={userInformation.name}
          className="w-full"
          {...register("name")}
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
        />

        <TextField
          id="outlined-basic"
          label="Surname"
          variant="outlined"
          defaultValue={userInformation.surname}
          className="w-full"
          {...register("surname")}
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
        />
      </div>
      <TextField
        id="outlined-basic"
        label="Middle Name"
        variant="outlined"
        defaultValue={userInformation.middleName}
        className="w-full"
        {...register("middleName")}
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
      />
      <div className="w-full flex md:flex-row flex-col gap-2">
        <TextField
          id="outlined-basic"
          label="Date of Birth"
          variant="outlined"
          defaultValue={userInformation.dateOfBirth}
          className="w-full"
          {...register("dateOfBirth")}
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
        />
        <TextField
          id="outlined-basic"
          label="Date of Employment"
          variant="outlined"
          defaultValue={userInformation.dateOfEmployment}
          className="w-full"
          {...register("dateOfEmployment")}
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
        />
      </div>
      <div className="w-full flex md:flex-row flex-col gap-2">
        <TextField
          id="outlined-basic"
          label="Country"
          variant="outlined"
          defaultValue={userInformation.country}
          className="w-full"
          {...register("country")}
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
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          defaultValue={userInformation.city}
          className="w-full"
          {...register("city")}
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
        />
      </div>
      <div className="w-full flex md:flex-row flex-col gap-2">
        <TextField
          id="outlined-basic"
          label="Position"
          variant="outlined"
          defaultValue={userInformation.position}
          className="w-full"
          {...register("position")}
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
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          defaultValue={userInformation.email}
          className="w-full"
          {...register("email")}
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
        />
      </div>
      <PrimaryButton
        title="СОХРАНИТЬ"
        className="w-full py-[10px] text-sm text-[#E1E3E6] font-semibold"
        type="submit"
      />
    </form>
  );
};

export default UserInfoForm;
