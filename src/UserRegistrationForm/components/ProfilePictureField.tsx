import React from "react";

interface Props {
  register: any;
  errors: any;
}

const ProfilePictureField: React.FC<Props> = ({ register, errors }) => (
  <div>
    <label className="block mb-1">Profile Picture</label>
    <input
      type="file"
      accept=".jpg,.jpeg,.png"
      {...register("profilePicture")}
    />
    {errors.profilePicture && (
      <p className="text-red-500 text-xs mt-1">
        {errors.profilePicture.message}
      </p>
    )}
  </div>
);

export default ProfilePictureField;
