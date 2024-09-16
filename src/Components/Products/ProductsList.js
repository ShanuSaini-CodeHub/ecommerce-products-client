import { Navigate, useLocation, useParams } from "react-router-dom";
import DocumentTitle from "react-document-title";
import Breadcrumbs from "../../Common/Breadcrumbs/Breadcrumbs";
import Header from "../../Common/Header/Header";
import ProductsListCard from "../../Common/ProductsListCard/ProductsListCard";
import "./ProductsList.css";

const ProductsList = () => {
  const params = useParams();
  const location = useLocation();

  if (!location.state?.productsData) {
    return <Navigate to={"/products"} />
  } else {
    const {
      state: { productsData },
    } = location;
    return (
      <>
        <DocumentTitle title="Products List | Products App" />
        <div className="container">
          <Header />
          <Breadcrumbs currentPage="ProductsListsPage" />
          <div className="row product-list-row">
            {productsData &&
              productsData.map((productData) => (
                <ProductsListCard
                  key={`product-list-${productData.code}`}
                  productType={params.productType}
                  productsData={productsData}
                  productData={productData}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
};

export default ProductsList;
