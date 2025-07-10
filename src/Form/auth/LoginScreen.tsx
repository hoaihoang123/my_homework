import AuthLayout from "../layout/AuthLayout";
import Input from "../ui/Input";
import Button from "../ui/Button";
import AuthFooter from "./AuthFooter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// Validation schema for the form
const schema = yup
  .object({
    password: yup.string().required("Password is required"),
  })
  .required();
const LoginScreen = () => {
  // Form validation setup can be added here if needed
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = () => {
    // Handle form submission logic here
    alert("login success");
    // Navigate to the next screen or perform login action
  };
  return (
    <AuthLayout title="Log in" showBackButton={true}>
      <div className="space-y-6">
        {/* User Profile Section */}
        <div className="flex items-center space-x-3 bg-green-600/20 p-4 rounded-lg">
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face"
              alt="Jane Dow"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium">Jane Dow</h3>
            <p className="text-sm text-gray-300">jane.doe@gmail.com</p>
          </div>
        </div>

        <div className="space-y-4">
          <form
            action=""
            className="space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              type="password"
              placeholder="Password"
              showToggle
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}

            <Button
              variant="primary"
              fullWidth
              type="submit"
              disabled={isSubmitting}
            >
              Continue
            </Button>
          </form>

          <AuthFooter secondaryText="Forgot your password?" />
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginScreen;
