import React from "react";

interface Props {
  register: any;
  errors: any;
}

const HobbiesFields: React.FC<Props> = ({ register, errors }) => (
  <div>
    <label className="block mb-1">Hobbies</label>
    <div className="flex gap-4">
      <label>
        <input type="checkbox" value="reading" {...register("hobbies")} />{" "}
        Reading
      </label>
      <label>
        <input type="checkbox" value="travelling" {...register("hobbies")} />{" "}
        Travelling
      </label>
      <label>
        <input type="checkbox" value="gaming" {...register("hobbies")} /> Gaming
      </label>
    </div>
    {errors.hobbies && (
      <p className="text-red-500 text-xs mt-1">{errors.hobbies.message}</p>
    )}
  </div>
);

export default HobbiesFields;
