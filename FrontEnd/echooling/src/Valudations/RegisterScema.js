import * as Yup from "yup";

const RegisterScema = Yup.object({
  name: Yup.string()
    .min(2, "name too Short!")
    .max(55, "name too Long!")
    .required("name is requred!"),
  password: Yup.string()
    .min(8, "Password too short")
    .max(255, "Password too long")
    .required("Password field is required!")
    .test(
      "uppercase",
      "Password must contain at least 1 uppercase letter",
      (value) => /[A-Z]/.test(value)
    )
    .test(
      "lowercase",
      "Password must contain at least 1 lowercase letter",
      (value) => /[a-z]/.test(value)
    )
    .test("digit", "Password must contain at least 1 digit", (value) =>
      /\d/.test(value)
    )
    .test(
      "specialCharacter",
      "Password must contain at least 1 special character",
      (value) => /[@$!%*?&]/.test(value)
    ),
  userName: Yup.string()
    .min(3, "user name too short")
    .max(255, "user name too long")
    .required("user name field is requred!"),
  email: Yup.string()
    .email("invalid email")
    .min(10, "email too short")
    .max(255, "email too long")
    .required("email field is requred!"),
  phoneNumber: Yup.string()
    .min(10, "phone number too short")
    .max(255, "phone number too long"),
});

export default RegisterScema;
