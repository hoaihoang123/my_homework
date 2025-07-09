import * as yup from "yup";

const schema = yup.object({
  // Personal Info
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters"),

  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10,15}$/, "Phone number must be between 10-15 digits"),

  dateOfBirth: yup
    .date()
    .required("Date of birth is required")
    .max(new Date(), "Date of birth cannot be in the future")
    .test("age", "You must be at least 13 years old", function (value) {
      if (!value) return false;
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 13;
    }),

  // Password Fields
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/\d/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),

  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),

  // Address Fields
  street: yup
    .string()
    .required("Street address is required")
    .min(5, "Street address must be at least 5 characters"),

  city: yup
    .string()
    .required("City is required")
    .min(2, "City must be at least 2 characters"),

  state: yup.string().required("State is required"),

  zipCode: yup
    .string()
    .required("ZIP code is required")
    .matches(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code"),

  country: yup.string().required("Country is required"),

  // Hobbies
  hobbies: yup
    .array()
    .of(yup.string())
    .min(1, "Please select at least one hobby")
    .max(5, "You can select up to 5 hobbies"),

  // Profile Picture
  profilePicture: yup
    .mixed()
    .test("fileSize", "File size is too large", function (value: any) {
      if (!value || !value[0]) return true; // Optional field
      return value[0].size <= 5 * 1024 * 1024; // 5MB limit
    })
    .test("fileType", "Unsupported file type", function (value: any) {
      if (!value || !value[0]) return true; // Optional field
      return ["image/jpeg", "image/jpg", "image/png", "image/gif"].includes(
        value[0].type
      );
    }),

  // Bio
  bio: yup.string().max(500, "Bio must not exceed 500 characters").optional(),

  // Terms and conditions
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});

export default schema;
