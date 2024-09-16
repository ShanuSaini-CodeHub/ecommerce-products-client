import { useLocation } from "react-router-dom";
import ProductsListCard from "../ProductsListCard/ProductsListCard";
import DocumentTitle from "react-document-title";
import Breadcrumbs from "../../Common/Breadcrumbs/Breadcrumbs";
import Header from "../../Common/Header/Header";

const SearchComponent = () => {
  const location = useLocation();
  const { state : { searchResults }} = location;

  return (
    <>
      <DocumentTitle title="Search List | Products App" />
      <div className="container">
        <Header />
        <Breadcrumbs currentPage="ProductsListsPage" />
        <div className="row product-list-row">
          {searchResults &&
            searchResults.map((productData) => (
              <ProductsListCard
                key={`product-list-${productData.code}`}
                productType={productData.type}
                productData={productData}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
