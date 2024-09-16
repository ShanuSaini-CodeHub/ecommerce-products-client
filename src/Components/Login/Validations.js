import ContentConfig from "../../ContentConfig.json";

const Validations = (values) => {
  const { email, loginPassword, password, name, confirmPassword } = values;
  const {
    login: { validationMsg },
  } = ContentConfig;
  let error = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

  if (name === "") {
    error.name = validationMsg.nameEmpty;
  } else if (name?.length < 3 || name?.length > 25) {
    error.name = validationMsg.nameError;
  } else {
    error.name = "";
  }

  if (email === "") {
    error.email = validationMsg.emailEmpty;
  } else if (email && !emailPattern.test(email)) {
    error.email = validationMsg.emailError;
  } else {
    error.email = "";
  }

  if (password === "") {
    error.password = validationMsg.passwordEmpty;
  } else if (password && !passwordPattern.test(password)) {
    error.password = validationMsg.passwordError;
  } else {
    error.password = "";
  }

  if (loginPassword === "") {
    error.loginPassword = validationMsg.loginPasswordEmpty;
  } else if (loginPassword && !passwordPattern.test(loginPassword)) {
    error.loginPassword = validationMsg.loginPasswordError;
  } else {
    error.loginPassword = "";
  }

  if (confirmPassword === "") {
    error.confirmPassword = validationMsg.confirmPasswordEmpty;
  } else if (confirmPassword !== password) {
    error.confirmPassword = validationMsg.confirmPasswordError;
  } else {
    error.confirmPassword = "";
  }

  return error;
};

export default Validations;
