import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getSearchResults } from "../../ApiHelper";
import { AppDashboardContext } from "../../AppContext";
import "../../assets/css/common.css";
import { ErrorToastMessage } from "../Toast/Toast";

const Header = () => {
  const context = useContext(AppDashboardContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogOut = (event) => {
    event.preventDefault();
    sessionStorage.clear();
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchResults(event.target[0].value);
  };

  const handleSearchResults = (input) => {
    const data = {
      searchInput: input,
    };
    getSearchResults(data)
      .then((response) => {
        if (response.status === 200) {
          navigate("/search-results", {
            state: {
              searchResults: response.data,
            },
          });
        } else {
          ErrorToastMessage(response.message);
        }
      })
      .catch((err) => {
        ErrorToastMessage(err?.response?.data?.message);
      });
  };

  return (
    <nav aria-label="header" className="navbar navbar-light">
      <div className="container-fluid">
        <span className="navbar-brand">Products</span>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 col-10 search-input"
            type="search"
            placeholder="What are you looking for ?"
            aria-label="Search"
          />
          <button className="btn btn-default" type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
        {context?.username && context?.email ? (
          <div className="btn-group">
            <button
              className="text-capitalize btn btn-default btn-sm"
              type="button"
            >
              {"Profile"}
            </button>
            <button
              type="button"
              className={`btn btn-default btn-sm dropdown-toggle dropdown-toggle-split`}
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <p className="text-muted small">
                <i className="fa fa-user" /> {context?.username}
              </p>
              <p className="text-muted small">
                <i className="fa fa-envelope" /> {context?.email}
              </p>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" onClick={handleLogOut}>
                <i className="fa fa-sign-out" aria-hidden="true" /> {"Sign Out"}
              </button>
            </div>
          </div>
        ) : (
          <button
            className="btn btn-outline-primary btn-sm"
            type="button"
            onClick={handleLogOut}
          >
            {"Login"}
          </button>
        )}
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Header;
