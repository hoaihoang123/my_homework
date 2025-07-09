import React from "react";

interface Props {
  register: any;
  errors: any;
}

const AddressFields: React.FC<Props> = ({ register, errors }) => (
  <div>
    <label className="block mb-1">Country</label>
    <select {...register("country")} className="w-full border rounded p-2">
      <option value="">Select Country</option>
      <option value="vn">Vietnam</option>
      <option value="us">United States</option>
      <option value="jp">Japan</option>
      <option value="kr">Korea</option>
      {/* Thêm các quốc gia khác nếu muốn */}
    </select>
    {errors.country && (
      <p className="text-red-500 text-xs mt-1">{errors.country.message}</p>
    )}
  </div>
);

export default AddressFields;
