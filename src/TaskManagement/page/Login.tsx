import React, { useContext, useEffect } from "react";
import Input from "../../Form/ui/Input";
import Button from "../../Form/ui/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import type { SubmitHandler } from "react-hook-form";
import { AuthContext } from "../context";
import { useLocation, useNavigate } from "react-router-dom";
import { authLogin } from "../service/auth";

interface FormData {
  email: string;
  password: string;
}

// Schema validation riêng cho form login
const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [error, setError] = React.useState<string>("");
  const location = useLocation();

  const from = location.state?.from?.pathname || "/tasks";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setError("");
      const response = await authLogin({
        username: data.email,
        password: data.password,
      });
      const user = {
        email: response.loggedInUser.email,
        access_token: response.access_token,
        role: response.loggedInUser.role,
      };
      setUser(user);
      navigate(from);
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-6"
      >
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Email address"
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>
        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
            className={errors.password ? "border-red-500" : ""}
          />
          <p className="text-red-500 text-sm mt-1">
            {errors.password?.message}
          </p>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <Button type="submit" variant="blue" fullWidth disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Login;
