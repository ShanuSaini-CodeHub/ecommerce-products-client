import { useNavigate } from "react-router-dom";
import { getProductSuggestions } from "../../ApiHelper";
import { formatPrice, getImagePath } from "../../Utils";

const ProductsListCard = (props) => {
  const { productType, productData } = props;
  const { name, price, imagePath, manufacture, code } = productData;
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
    const payload = {
      productType: productType,
      manufacture: manufacture,
      code: code,
      price: price,
    };
    getProductSuggestions(payload)
      .then((response) => {
        if (response.status === 200) {
          navigate(`/products-details`, {
            state: {
              productType: productType,
              productData: productData,
              productSuggestions: response.data,
              ...props,
            },
          });
        }
      })
      .catch((err) => {
        console.error(err?.response?.data?.message);
      });
  };

  return (
    <>
      <div className="card col-md-3 col-10 product-list-card">
        <img
          className="mx-auto img-thumbnail"
          src={getImagePath(imagePath)}
          width="auto"
          height="auto"
          alt="Product"
        />
        <div className="card-body text-center mx-auto">
          <div className="cvp">
            <h5 className="card-title font-weight-bold">{name}</h5>
            <p className="card-text">
              <i className="fa fa-inr" /> {formatPrice(price)}
            </p>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={handleClick}
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsListCard;
