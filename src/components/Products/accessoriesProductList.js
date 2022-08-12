import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/actions/productsActions";
import AccessoriesProductPage from "../ProductInformation/accessoriesPage";
import accessories from "../../assets/images/shopping_three.png";
import BreadCrumb from '../BreadCrumb/breadCrumb';
import '../../assets/scss/productList.css';
import { BiSort } from "react-icons/bi";
import { FaArrowsAlt } from 'react-icons/fa';
import Filter from '../Filter/Filter';
import { FiSliders } from "react-icons/fi";
import { RiArrowUpDownLine } from "react-icons/ri";


const AccessoriesProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    // fetchProducts();
  }, []);
  const categoryList = products.filter((value) => value.category === "electronics");
  return (
    <div className="productCatalog">
      <div className="productCatalog-mobile">
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__image">
              <img src={accessories} alt="accessories" />
            </div>
          </div>
          <div className="aem-GridColumn aem-GridColumn--phone--12">
            <div className="productCatalog__title">
              <h3>Accessories</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="productCatalog-desktop">
        <div className="aem-Grid aem-Grid--12">
          <div className="aem-GridColumn aem-GridColumn--default--4">
            <div className="productCatalog__title">
              <h3>Accessories</h3>
            </div>
          </div>
          <div className="aem-GridColumn aem-GridColumn--default--8">
            <div className="productCatalog__image">
              <img src={accessories} alt="accessories" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="breadcrumbslist">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <BreadCrumb />
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <div className="product-filter">
                <button><FiSliders />Filter Results</button><button><RiArrowUpDownLine />Sort Ptoducts</button>
              </div>
              <div className="breadcrumbslist__filter">
                <p>{categoryList.length} Results</p>
                <div className="sortByLatest">
                  <select>
                    <option>Sort by Latest</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="productfilter">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className="productfilters">
                <Filter />
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
              <AccessoriesProductPage />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AccessoriesProductList;
