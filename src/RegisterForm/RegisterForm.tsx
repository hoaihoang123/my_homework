import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Form/ui/Input";
import Button from "../Form/ui/Button";

const schema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phone: yup
    .string()
    .required("Phone Number is required")
    .matches(/^\d{10,15}$/, "Phone Number is invalid"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  agreeTerms: yup.bool().oneOf([true], "You must agree to the terms"),
  receiveEmail: yup.bool(),
});

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  receiveEmail: boolean;
};

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert("Registration successful!\n" + JSON.stringify(data, null, 2));
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-10">
      <h2 className="text-2xl font-bold mb-2">Register</h2>
      <p className="text-gray-500 mb-6">
        <span className="font-semibold text-base text-gray-800">
          Manage all your lottery efficiently
        </span>
        <br />
        <span className="text-xs">
          Let’s get you all set up so you can verify your personal account and
          begin setting up your profile.
        </span>
      </p>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="First Name"
              {...register("firstName")}
              className={errors.firstName ? "border-2 border-red-500" : ""}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div>
            <Input
              placeholder="Last Name"
              {...register("lastName")}
              className={errors.lastName ? "border-2 border-red-500" : ""}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Phone Number"
              {...register("phone")}
              className={errors.phone ? "border-2 border-red-500" : ""}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div>
            <Input
              placeholder="Email"
              {...register("email")}
              className={errors.email ? "border-2 border-red-500" : ""}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input
              type="password"
              placeholder="Password"
              {...register("password")}
              className={errors.password ? "border-2 border-red-500" : ""}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <div>
            <Input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className={
                errors.confirmPassword ? "border-2 border-red-500" : ""
              }
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="receiveEmail"
            {...register("receiveEmail")}
          />
          <label htmlFor="receiveEmail" className="text-sm select-none">
            Yes, I want to receive Lottery Display emails
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="agreeTerms" {...register("agreeTerms")} />
          <label htmlFor="agreeTerms" className="text-sm select-none">
            I agree to all the{" "}
            <a href="#" className="text-blue-600 underline">
              Term
            </a>
            ,{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Fees
            </a>
          </label>
        </div>
        {errors.agreeTerms && (
          <p className="text-red-500 text-xs mt-1">
            {errors.agreeTerms.message}
          </p>
        )}
        <Button type="submit" variant="blue" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </Button>
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <a href="#" className="text-blue-600 font-semibold">
            Log in
          </a>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
