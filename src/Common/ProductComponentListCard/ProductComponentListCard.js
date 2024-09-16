import { useNavigate } from "react-router-dom";
import { getProductsList } from "../../ApiHelper";

const ProductComponentListCard = (props) => {
  const { image1, image2, image3, cardTitle } = props;
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    getProductsList({ productType: cardTitle })
      .then((response) => {
        if (response.status === 200) {
          navigate(`/products-list/${cardTitle}`, {
            state: {
              productsData: response.data,
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
      <div className="col-md-4">
        <div className="card mb-30">
          <div className="card-img-tiles">
            <div className="inner">
              <div className="main-img">
                <img src={image1} alt="Category" />
              </div>
              <div className="thumblist">
                <img src={image2} alt="Category" />
                <img src={image3} alt="Category" />
              </div>
            </div>
          </div>
          <div className="card-body text-center">
            <h4 className="card-title">{cardTitle}</h4>
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={handleClick}
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductComponentListCard;
