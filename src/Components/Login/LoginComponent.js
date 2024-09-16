import "./LoginComponent.css";
import { useState } from "react";
import DocumentTitle from "react-document-title";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const LoginComponent = () => {
  const [authMode, setAuthMode] = useState("signin");
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <>
      <DocumentTitle title="Login | Products App" />
      <div className="Auth-form-container">
        {authMode === "signin" ? (
          <SignIn changeAuthMode={changeAuthMode} />
        ) : (
          <SignUp changeAuthMode={changeAuthMode} />
        )}
      </div>
    </>
  );
};

export default LoginComponent;
