import AuthLayout from "../layout/AuthLayout";
import Input from "../ui/Input";
import Button from "../ui/Button";
import SocialLogin from "./SocialLogin";
import AuthFooter from "./AuthFooter";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

// Validation schema for the form
const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  })
  .required();
const WelcomeScreen = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    // Handle form submission logic here
    console.log("Form submitted with data:", data);
    navigate("/login");
  };
  return (
    <AuthLayout title="Hi!" showBackButton={false}>
      <div className="space-y-4">
        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Email" {...register("email")} type="email" />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <Button
            variant="primary"
            fullWidth
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Loading..." : "Continue"}
          </Button>
        </form>

        <div className="text-center text-gray-400 py-2">or</div>

        <SocialLogin />
        <AuthFooter
          text="Already have an account?"
          linkText="Log in"
          secondaryText="Forgot your password?"
        />
      </div>
    </AuthLayout>
  );
};

export default WelcomeScreen;
