import React, { useState } from "react";
import "./Day2.css";

const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  gender: "",
  dob: "",
  country: "",
  hobbies: [] as string[],
  bio: "",
  file: null as File | null,
};

const countries = ["Vietnam", "USA", "UK", "Japan", "Other"];
const hobbiesList = ["Reading", "Travelling", "Gaming"];

const Day2: React.FC = () => {
  const [form, setForm] = useState<typeof initialState>(initialState);
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const errs: any = {};
    if (!form.fullName || form.fullName.length < 3)
      errs.fullName = "Full Name must be at least 3 characters.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = "Invalid email address.";
    if (
      !form.password ||
      form.password.length < 8 ||
      !/[a-zA-Z]/.test(form.password) ||
      !/\d/.test(form.password)
    )
      errs.password =
        "Password must be at least 8 characters with letters and numbers.";
    if (form.password !== form.confirmPassword)
      errs.confirmPassword = "Passwords do not match.";
    if (!form.phone || form.phone.replace(/\D/g, "").length < 10)
      errs.phone = "Phone number must be at least 10 digits.";
    if (!form.gender) errs.gender = "Please select a gender.";
    if (
      !form.dob ||
      new Date().getFullYear() - new Date(form.dob).getFullYear() < 18
    )
      errs.dob = "You must be at least 18 years old.";
    if (!form.country) errs.country = "Please select a country.";
    if (!form.hobbies.length) errs.hobbies = "Select at least one hobby.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setForm((prev) => {
        const hobbies = prev.hobbies.includes(value)
          ? prev.hobbies.filter((h: string) => h !== value)
          : [...prev.hobbies, value];
        return { ...prev, hobbies };
      });
    } else if (type === "file") {
      setForm((prev) => ({
        ...prev,
        file: (e.target as HTMLInputElement).files?.[0] || null,
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Registration successful!");
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>User Registration</h2>
      <label>
        Full Name
        <input name="fullName" value={form.fullName} onChange={handleChange} />
        {errors.fullName && <div className="error">{errors.fullName}</div>}
      </label>
      <label>
        Email
        <input name="email" value={form.email} onChange={handleChange} />
        {errors.email && <div className="error">{errors.email}</div>}
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}
      </label>
      <label>
        Phone Number
        <input name="phone" value={form.phone} onChange={handleChange} />
        {errors.phone && <div className="error">{errors.phone}</div>}
      </label>
      <div className="gender-group">
        <span>Gender</span>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={form.gender === "Male"}
            onChange={handleChange}
          />{" "}
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={form.gender === "Female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={form.gender === "Other"}
            onChange={handleChange}
          />{" "}
          Other
        </label>
        {errors.gender && <div className="error">{errors.gender}</div>}
      </div>
      <label>
        Date of Birth
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        {errors.dob && <div className="error">{errors.dob}</div>}
      </label>
      <label>
        Country
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="">Select Country</option>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.country && <div className="error">{errors.country}</div>}
      </label>
      <div className="hobbies-group">
        <span>Hobbies</span>
        {hobbiesList.map((hobby) => (
          <label key={hobby}>
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              checked={form.hobbies.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </label>
        ))}
        {errors.hobbies && <div className="error">{errors.hobbies}</div>}
      </div>
      <label>
        Profile Picture
        <input type="file" name="file" onChange={handleChange} />
      </label>
      <label>
        Bio
        <textarea name="bio" value={form.bio} onChange={handleChange} />
      </label>
      <button type="submit" className="register-btn">
        Register
      </button>
    </form>
  );
};

export default Day2;
