import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productsActions";
import BreadCrumb from "../BreadCrumb/breadCrumb";
import '../../assets/scss/productDetail.css';

import heart from '../../assets/images/heart.png';



const ProductDetails = (props) => {

  const { cartItems, onAdd, onRemove } = props;
  const { productId } = useParams();
  let products = useSelector((state) => {
    return state.allProducts.products;
  });
  const dispatch = useDispatch();
  const product = products.find(product => product.id == productId);
  const { image, title, price, description, rating } = product;

  useEffect(() => {
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const [qty, setQty] = useState(1);

  function onChange(e) {
    const v = e.target.value;
    if (v <= 0) setQty(0);
    else if (v >= 6) setQty(6);
    else setQty(v);
  }


  return (
    <div className="">
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="productdetails">
          <div className="container">
            <div className="productdetails__right-breadcrumb mobile">
              <BreadCrumb />
            </div>

            <div className="aem-Grid aem-Grid--12 details ">
              <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12 productdetails_side">
                <img src={product.image} alt={product.title} height="100px" width="80px" />
                <img src={product.image} alt={product.title} height="100px" width="80px" />
                <img src={product.image} alt={product.title} height="100px" width="80px" />
                <img src={product.image} alt={product.title} height="100px" width="80px" />
                <img src={product.image} alt={product.title} height="100px" width="80px" />

              </div>

              <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                <div className="productdetails__left">
                  <img src={image} />
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <div className="productdetails__right">
                  <div className="productdetails__right-breadcrumb">
                    <BreadCrumb />
                  </div>

                  <h1 className="product-title">{title}</h1>
                  <h4 className="price">
                    ${price}
                  </h4>
                  <h5 className="rating"> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <span>({rating.count})</span>
                  </h5>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna. Read more</p>
                  <br />
                  <hr />


                  <h3 className="quantityone">Quantity</h3>

                  <div className="input-group w-auto align-items-center">
                    <input
                      type="button"
                      value="-"
                      className="button-minus border rounded-circle"
                      data-field="quantity"
                      onClick={() => onRemove(product)}
                    />&nbsp;&nbsp;
                    <h6 className="quant">{cartItems?.find((x) => x.id === product.id)?.qty || 1}</h6>&nbsp;&nbsp;
                    <input
                      type="button"
                      value="+"
                      className="button-plus border rounded-circle"
                      data-field="quantity"
                      onClick={() => onAdd(product)}
                    />
                  </div>
                  <br />


                  <button className="addtocart"
                    onClick={() => onAdd(product)}
                  >Add to Cart</button>







                  <div className="share-icons">
                    <ul>
                      <li><a href="#"><img src={heart} /> Save</a></li>
                      <li><a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i> Share</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                <div className="description">
                  <h2>{title}</h2>
                  <h5>Description</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit amet ipsum dolor sit amet, consectetur Duis tristique sollicitudin nibh sit amet. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
