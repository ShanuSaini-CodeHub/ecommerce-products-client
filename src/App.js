import LoginComponent from "./Components/Login/LoginComponent";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductComponent from "./Components/Products/ProductComponent";
import ProductsList from "./Components/Products/ProductsList";
import ProductDetails from "./Components/Products/ProductDetails";
import { AppDashboardContextProvider } from "./AppContext";
import { useState } from "react";
import SearchComponent from "./Common/Header/SearchComponent";

const App = () => {
  const name = sessionStorage.getItem("username");
  const [username, setUsername] = useState(name || "");
  const emailAddress = sessionStorage.getItem("email");
  const [email, setEmail] = useState(emailAddress || "");
  return (
    <AppDashboardContextProvider
      value={{
        username: username,
        setUsername: setUsername,
        email: email,
        setEmail: setEmail
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={"/login"} />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/products" element={<ProductComponent />} />
          <Route path="/products-list/:productType" element={<ProductsList />} />
          <Route path="/products-details" element={<ProductDetails />} />
          <Route path="/search-results" element={<SearchComponent />} />
          <Route path="*" element={<Navigate to={"/login"} />} />
        </Routes>
      </BrowserRouter>
    </AppDashboardContextProvider>
  );
};

export default App;
