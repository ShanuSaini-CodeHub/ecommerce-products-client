import { Link } from "react-router-dom";
import "../../assets/css/common.css";

const Breadcrumbs = (props) => {
  const { currentPage, productType, productsData } = props;
  const homePageItem = () => {
    return (
      <li className="breadcrumb-item">
        <Link to={`/products`}>
          <span className="small text-muted">Home</span>
        </Link>
      </li>
    );
  };

  const homeCurrentPageItem = () => {
    return (
      <li className="breadcrumb-item active" aria-current="page">
        <span className="small text-muted">Home</span>
      </li>
    );
  };

  const productsListItem = () => {
    return (
      <li className="breadcrumb-item">
        <Link
          to={`/products-list/${productType}`}
          state={{ productType: productType, productsData: productsData }}
        >
          <span className="small text-muted">Products</span>
        </Link>
      </li>
    );
  };

  const productsListCurrentPageItem = () => {
    return (
      <li className="breadcrumb-item active" aria-current="page">
        <span className="small text-muted">Products</span>
      </li>
    );
  };

  const productsDetailCurrentPageItem = () => {
    return (
      <li className="breadcrumb-item active" aria-current="page">
        <span className="small text-muted">Product details</span>
      </li>
    );
  };

  let items;
  switch (currentPage) {
    case "ProductsHomePage":
      items = [homeCurrentPageItem()];
      break;
    case "ProductsListsPage":
      items = [homePageItem(), productsListCurrentPageItem()];
      break;
    case "ProductDetailPage":
      items = [
        homePageItem(),
        productsListItem(),
        productsDetailCurrentPageItem(),
      ];
      break;
    default:
      items = [homeCurrentPageItem()];
      break;
  }

  return (
    <nav className="breadcrumb-nav" aria-label="breadcrumb">
      <ol className="breadcrumb">{items && items.map((item) => item)}</ol>
    </nav>
  );
};

export default Breadcrumbs;
