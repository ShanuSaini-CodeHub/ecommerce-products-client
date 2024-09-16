import DocumentTitle from "react-document-title";
import "./ProductComponent.css";
import {
  Desktop_1,
  Desktop_2,
  Desktop_3,
  Mobile_1,
  Mobile_2,
  Mobile_3,
  Accessory_1,
  Accessory_2,
  Accessory_3,
} from "../../assets";
import Header from "../../Common/Header/Header";
import ProductComponentListCard from "../../Common/ProductComponentListCard/ProductComponentListCard";

const ProductComponent = () => {
  return (
    <>
      <DocumentTitle title="Home | Products App" />
      <div className="container">
        <Header />
        <div className="row product-component-list">
          <ProductComponentListCard
            image1={Desktop_1}
            image2={Desktop_2}
            image3={Desktop_3}
            cardTitle={"Laptops"}
          />
          <ProductComponentListCard
            image1={Mobile_1}
            image2={Mobile_2}
            image3={Mobile_3}
            cardTitle={"Mobiles"}
          />
          <ProductComponentListCard
            image1={Accessory_1}
            image2={Accessory_2}
            image3={Accessory_3}
            cardTitle={"Accessories"}
          />
        </div>
      </div>
    </>
  );
};

export default ProductComponent;
