import React from "react";
import Input from "../../Form/ui/Input";

interface Props {
  register: any;
  errors: any;
}

const PasswordFields: React.FC<Props> = ({ register, errors }) => (
  <>
    <Input
      type="password"
      placeholder="Password"
      {...register("password")}
      className={errors.password ? "border-red-500" : ""}
    />
    {errors.password && (
      <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
    )}
    <Input
      type="password"
      placeholder="Confirm Password"
      {...register("confirmPassword")}
      className={errors.confirmPassword ? "border-red-500" : ""}
    />
    {errors.confirmPassword && (
      <p className="text-red-500 text-xs mt-1">
        {errors.confirmPassword.message}
      </p>
    )}
  </>
);

export default PasswordFields;
