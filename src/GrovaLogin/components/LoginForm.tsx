import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../Form/ui/Input";
import Button from "../../Form/ui/Button";

// Validation schema
const schema = yup
  .object({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    rememberMe: yup.boolean().default(false),
  })
  .required();

type FormData = {
  username: string;
  password: string;
  rememberMe: boolean;
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Login data:", data);
    alert(`Welcome back! Username: ${data.username}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-500 mb-2">
          Login
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3">
          Login to your account
        </h2>
        <p className="text-gray-600 text-sm px-2 sm:px-0">
          Thank you for get back to Grovia, let's access our the best
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          recommendation contact for you.
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <Input
            type="text"
            placeholder="Email or Phone Number"
            {...register("username")}
            className={errors.username ? "border-2 border-red-500" : ""}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
            className={errors.password ? "border-2 border-red-500" : ""}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              {...register("rememberMe")}
              className="rounded border-gray-300 text-red-500 focus:border-red-500 focus:ring-red-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-sm text-red-500 hover:underline">
            Reset Password?
          </a>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          fullWidth
          disabled={isSubmitting}
          className="bg-red-500 hover:bg-red-600 focus:ring-red-500"
        >
          {isSubmitting ? "Signing In..." : "SIGN IN"}
        </Button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600">
          Don't have an account yet?{" "}
          <a href="#" className="text-red-500 font-semibold hover:underline">
            Join Grovia Now!
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
