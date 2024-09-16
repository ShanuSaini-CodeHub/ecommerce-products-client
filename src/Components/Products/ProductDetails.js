import { useLocation } from "react-router-dom";
import DocumentTitle from "react-document-title";
import Breadcrumbs from "../../Common/Breadcrumbs/Breadcrumbs";
import Header from "../../Common/Header/Header";
import ProductsListCard from "../../Common/ProductsListCard/ProductsListCard";
import "./ProductDetails.css";
import { formatPrice, getImagePath } from "../../Utils";

const ProductDetails = () => {
  const location = useLocation();
  const {
    state: { productType, productsData, productData, productSuggestions },
  } = location;
  const { name, description, price, imagePath } = productData;

  return (
    <>
      <DocumentTitle title="Product Details | Products App" />
      <div class="container">
        <Header />
        <Breadcrumbs
          currentPage="ProductDetailPage"
          productType={productType}
          productsData={productsData}
        />
        <div class="card details-card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1">
                    <img src={getImagePath(imagePath)} alt="Product" />
                  </div>
                </div>
              </div>
              <div class="product-details col-md-6">
                <h3 class="product-title">{name}</h3>
                <p class="product-description">{description}</p>
                <h4 class="price">
                  Current price:{" "}
                  <span>
                    <i className="fa fa-inr" /> {formatPrice(price)}
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
        {productSuggestions?.length > 0 && (
          <>
            <h5 className="text-center font-weight-bold">Similar Products</h5>
            <div className="row suggestionsList">
              {productSuggestions.map((productData) => (
                <ProductsListCard
                  key={`product-list-${productData.code}`}
                  productType={productType}
                  productsData={productsData}
                  productData={productData}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
