import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AuthFooter from "./AuthFooter";

// Validation schema cho signup form
const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be less than 50 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/\d/, "Password must contain at least one number"),
  })
  .required();

// Type cho form data
type FormData = {
  name: string;
  password: string;
};

interface SignUpScreenProps {
  email?: string; // Email từ WelcomeScreen truyền vào
}

const SignUpScreen = ({ email = "jane.doe@gmail.com" }: SignUpScreenProps) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Submit handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log("Signup data:", { ...data, email });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      alert(`Account created successfully for ${data.name}!`);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <AuthLayout title="Sign up" showBackButton={true}>
      <div className="space-y-4">
        {/* Email display section */}
        <div className="mb-6">
          <p className="text-gray-300 text-sm mb-2">
            Looks like you don't have an account.
          </p>
          <p className="text-gray-300 text-sm">
            Let's create a new account for{" "}
            <span className="text-green-400">{email}</span>
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input */}
          <div>
            <Input
              type="text"
              placeholder="Name"
              {...register("name")}
              className={errors.name ? "border-2 border-red-500" : ""}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              showToggle
              onToggle={togglePasswordVisibility}
              className={errors.password ? "border-2 border-red-500" : ""}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Terms and Privacy */}
          <div className="py-2">
            <p className="text-gray-400 text-xs text-center">
              By selecting 'Agree and continue', you agree to our{" "}
              <span className="text-green-400 cursor-pointer hover:underline">
                Terms of Service
              </span>{" "}
              and{" "}
              <span className="text-green-400 cursor-pointer hover:underline">
                Privacy Policy
              </span>
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            fullWidth
            disabled={isSubmitting || !isValid}
            className={
              !isValid || isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }
          >
            {isSubmitting ? "Creating Account..." : "Agree and continue"}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUpScreen;
