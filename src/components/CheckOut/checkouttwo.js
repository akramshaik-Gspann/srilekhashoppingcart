import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../../assets/scss/checkouttwo.css';
import { Link } from "react-router-dom";
// import Edit from '../../assets/images/Edit.svg';
import { setShippingMethod } from "../../redux/actions/orderDetailsActions"
import { useNavigate } from 'react-router-dom';
import { FiEdit2 } from "react-icons/fi"



function Checkouttwo(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const [qty, setQty] = useState(1);

  function onChange(e) {
    const v = e.target.value;
    if (v <= 0) setQty(0);
    else if (v >= 6) setQty(6);
    else setQty(v);
  }
  const shippingAddress = useSelector((state) => state.orderDetails.shippingAddress);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShippingMethod = (e) => {
    dispatch(setShippingMethod(e.target.value));
  }

  return (
    <div className='container'>
      <section className="shipMethodCart">
        <h1>Checkout</h1>
        <div className="aem-Grid aem-Grid--12">
          <h4 className='shippingTitle'>Guest Checkout</h4>
          <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
            <div className="aem-Grid aem-Grid--12 shipping-Info">
              <div className='editOption'>
                <p>Shipping Information</p>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                <p className='shipping_details'>{shippingAddress.email} <br />{shippingAddress.phoneNumber}</p>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                <p className='shipping_details'>
                  {shippingAddress.streetAddress}<br /> {shippingAddress.streetAddress1} <br />{shippingAddress.city} {shippingAddress.state} {shippingAddress.zipcode}<br /> {shippingAddress.country}
                </p>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                <div className='editIcon3'>
                  <img src="" /><span> <FiEdit2 />Edit</span>
                </div>
              </div>
            </div>
            <br />

            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                <div className='shipping_method_radio'>
                  <h3>2. Shipping Method</h3>

                  <div className="form-check">
                    <input className="standard" type="radio" value=" Standard Shipping (4-8 business days via USPS) FREE" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleShippingMethod} />
                    <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                      Standard Shipping (4-8 business days via USPS) FREE
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="standard" type="radio" value="Express Delivery (2-5 business days via USPS) $17.95" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleShippingMethod} />
                    <label class="form-check-label" for="flexRadioDefault2" className='label_text'>
                      Express Delivery (2-5 business days via USPS) $17.95
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="standard" type="radio" value="Next Day Delivery (Next business days via FedEx) $53.61" name="flexRadioDefault" id="flexRadioDefault3" onChange={handleShippingMethod} />
                    <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                      Next Day Delivery (Next business days via FedEx) $53.61
                    </label>
                  </div>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
              </div>
            </div>

            <div className='button__method'>
              <Link to="/checkoutthree">
                <button type="button" className="btn-shipping-method">
                  CONTINUE TO PAYMENT
                </button></Link>
            </div>

            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--10 aem-GridColumn--phone--12 payment_info">
                <hr />
                <p> 3. Payment Information</p>
                <hr />
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12">
              </div>
            </div>
          </div>

          <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <div className="aem-Grid aem-Grid--12 aem-GridColumn--phone--12 shipping_pricing">
              <p className='pricing__Summary'>Pricing Summary</p>

              <div className="cart__right-subtotal">
                <p>Price</p>
                <p>${itemsPrice.toFixed(2)}</p>
              </div>
              <div className="cart__right-coupon">
                <p>Coupon</p>
                <p>-$0</p>
              </div>
              <div className="cart__right-giftcard">
                <p>Giftcard</p>
                <p>-$0</p>
              </div>
              <div className="cart__right-tax">
                <p>Estimated tax</p>
                <p>${taxPrice.toFixed(2)}</p>
              </div>
              <div className="cart__right-ship">
                <p>Estimated shipping</p>
                <p>${shippingPrice.toFixed(2)}</p>
              </div>
              <div className="cart__right-total">
                <p><b>Estimated Total</b></p>
                <p><b>${totalPrice.toFixed(2)}</b></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Checkouttwo