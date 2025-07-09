import React from "react";

interface Props {
  register: any;
  errors: any;
  bioLength: number;
}

const BioField: React.FC<Props> = ({ register, errors, bioLength }) => (
  <div>
    <label className="block mb-1">Bio</label>
    <textarea
      maxLength={300}
      {...register("bio")}
      className="w-full border rounded p-2"
      rows={3}
    />
    <div className="text-xs text-gray-500 text-right">{bioLength}/300</div>
    {errors.bio && (
      <p className="text-red-500 text-xs mt-1">{errors.bio.message}</p>
    )}
  </div>
);

export default BioField;
