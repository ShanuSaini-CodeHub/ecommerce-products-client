import "./LoginComponent.css";
import ContentConfig from "../../ContentConfig.json";
import { useContext, useState } from "react";
import TextField from "../../Common/TextField/TextField";
import Validations from "./Validations";
import { getLoginDetails } from "../../ApiHelper";
import { ToastContainer } from "react-toastify";
import {
  ErrorToastMessage,
  SuccessToastMessage,
} from "../../Common/Toast/Toast";
import { useNavigate } from "react-router-dom";
import { AppDashboardContext } from "../../AppContext";

const SignIn = (props) => {
  const { changeAuthMode } = props;
  const [signInValues, setSignInValues] = useState({
    email: "",
    loginPassword: "",
  });
  const context = useContext(AppDashboardContext);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const {
    login,
    login: { signIn, signUp },
  } = ContentConfig;
  const navigate = useNavigate();

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
      validationErrors?.email === "" &&
      validationErrors?.loginPassword === ""
    ) {
      getLoginDetails(signInValues)
        .then((response) => {
          if (response.status === 200) {
            SuccessToastMessage(response.message);
            setTimeout(() => {
              sessionStorage.setItem("username", response.data.name);
              sessionStorage.setItem("email", response.data.email);
              context.setUsername(response.data.name);
              context.setEmail(response.data.email);
              navigate("/products");
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
        <h3 className="Auth-form-title">{signIn.header}</h3>
        <div className="text-center">
          Not registered yet?{" "}
          <span className="link-primary" onClick={changeAuthMode}>
            {signUp.header}
          </span>
        </div>
        <TextField
          label={login.email}
          type={"text"}
          novalidate
          placeholder={signIn.emailPlaceholder}
          autofocus={true}
          id={"signInEmail"}
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
          placeholder={signIn.passwordPlaceholder}
          id={"signInPassword"}
          name={"loginPassword"}
          maxlength={20}
          changeInputValue={changeInputValue}
        />
        {errors?.loginPassword && (
          <span className="text-danger small">{errors.loginPassword}</span>
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
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            {"Sign In"} <i className="fa fa-sign-in" aria-hidden="true" />
          </button>
        </div>
        <ToastContainer />
      </div>
    </form>
  );
};

export default SignIn;
