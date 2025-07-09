import React from "react";
import Input from "../../Form/ui/Input";

interface Props {
  register: any;
  errors: any;
}

const PersonalInfoFields: React.FC<Props> = ({ register, errors }) => (
  <>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <Input
          placeholder="First Name"
          {...register("firstName")}
          className={errors.firstName ? "border-red-500" : ""}
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
          className={errors.lastName ? "border-red-500" : ""}
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
        )}
      </div>
    </div>
    <Input
      type="email"
      placeholder="Email"
      {...register("email")}
      className={errors.email ? "border-red-500" : ""}
    />
    {errors.email && (
      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
    )}
    <Input
      type="tel"
      placeholder="Phone Number"
      {...register("phone")}
      className={errors.phone ? "border-red-500" : ""}
    />
    {errors.phone && (
      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
    )}
    <Input
      type="date"
      placeholder="Date of Birth"
      {...register("dateOfBirth")}
      className={errors.dateOfBirth ? "border-red-500" : ""}
    />
    {errors.dateOfBirth && (
      <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth.message}</p>
    )}
  </>
);

export default PersonalInfoFields;
