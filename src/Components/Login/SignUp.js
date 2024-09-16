import "./LoginComponent.css";
import ContentConfig from "../../ContentConfig.json";
import { useState } from "react";
import TextField from "../../Common/TextField/TextField";
import Validations from "./Validations";
import { postLoginDetails } from "../../ApiHelper";
import { ToastContainer } from "react-toastify";
import {
  ErrorToastMessage,
  SuccessToastMessage,
} from "../../Common/Toast/Toast";

const SignUp = (props) => {
  const { changeAuthMode } = props;
  const [signInValues, setSignInValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const {
    login,
    login: { signIn, signUp },
  } = ContentConfig;

  const changeInputValue = (event) => {
    setErrors({});
    setSignInValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = Validations(signInValues);
    setErrors(validationErrors);
    if (
      validationErrors?.name === "" &&
      validationErrors?.email === "" &&
      validationErrors?.password === "" &&
      validationErrors?.confirmPassword === ""
    ) {
      postLoginDetails(signInValues)
        .then((response) => {
          if (response.status === 200) {
            SuccessToastMessage(response.message);
            setTimeout(() => {
              changeAuthMode();
            }, 2000);
          } else {
            ErrorToastMessage(response.message);
          }
        })
        .catch((err) => {
          ErrorToastMessage(err?.response?.data?.message);
        });
    }
  };

  return (
    <form className="Auth-form" onSubmit={onSubmit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">{signUp.header}</h3>
        <div className="text-center">
          Already registered?{" "}
          <span className="link-primary" onClick={changeAuthMode}>
            {signIn.header}
          </span>
        </div>
        <TextField
          label={signUp.name}
          type={"text"}
          placeholder={signUp.namePlaceholder}
          autofocus={true}
          id={"signUpName"}
          name={"name"}
          maxlength={25}
          changeInputValue={changeInputValue}
        />
        {errors?.name && (
          <span className="text-danger small">{errors.name}</span>
        )}
        <TextField
          label={login.email}
          type={"text"}
          placeholder={signUp.emailPlaceholder}
          id={"signUpEmail"}
          name={"email"}
          maxlength={30}
          changeInputValue={changeInputValue}
        />
        {errors?.email && (
          <span className="text-danger small">{errors.email}</span>
        )}
        <TextField
          label={login.password}
          type={showPassword ? "text" : "password"}
          placeholder={signUp.passwordPlaceholder}
          id={"signUpPassword"}
          name={"password"}
          maxlength={20}
          changeInputValue={changeInputValue}
        />
        {errors?.password && (
          <span className="text-danger small">{errors.password}</span>
        )}
        <div>
          <input
            type="checkbox"
            id="show-password"
            checked={showPassword}
            onChange={togglePasswordVisibility}
          />
          <label for="show-password" className="password-label">
            <span className="muted small"> {"Show Password"}</span>
          </label>
        </div>
        <TextField
          label={signUp.confirmPassword}
          type={"password"}
          placeholder={signUp.confirmPasswordPlaceholder}
          id={"confirmPassword"}
          name={"confirmPassword"}
          maxlength={20}
          changeInputValue={changeInputValue}
        />
        {errors?.confirmPassword && (
          <span className="text-danger small">{errors.confirmPassword}</span>
        )}
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            {login.submitCta}
          </button>
        </div>
        <ToastContainer />
      </div>
    </form>
  );
};

export default SignUp;
