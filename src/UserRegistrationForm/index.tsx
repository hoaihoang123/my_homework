import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./validation";
import PersonalInfoFields from "./components/PersonalInfoFields";
import PasswordFields from "./components/PasswordFields";
import AddressFields from "./components/AddressFields";
import HobbiesFields from "./components/HobbiesFields";
import ProfilePictureField from "./components/ProfilePictureField";
import BioField from "./components/BioField";
import SubmitButton from "./components/SubmitButton";

const UserRegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (data: Record<string, unknown>) => {
    console.log("Registration Data:", data);
    alert("Registration successful!\n" + JSON.stringify(data, null, 2));
  };

  // Theo dõi độ dài bio
  const bioValue = watch("bio") || "";

  return (
    <div className="max-w-lg w-full mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">User Registration</h1>
      </div>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <PersonalInfoFields register={register} errors={errors} />
        <PasswordFields register={register} errors={errors} />
        <AddressFields register={register} errors={errors} />
        <HobbiesFields register={register} errors={errors} />
        <ProfilePictureField register={register} errors={errors} />
        <BioField
          register={register}
          errors={errors}
          bioLength={bioValue.length}
        />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </div>
  );
};

export default UserRegistrationForm;
