import React, { useState } from 'react'
// import "../Style/Checkoutthree.css"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import '../../assets/scss/checkoutthree.css';
// import Edit from '../../assets/images/Edit.svg';
import { BsQuestionCircle } from 'react-icons/bs';
import { useForm } from "react-hook-form";
import { setPaymentInfo } from "../../redux/actions/orderDetailsActions"
import { FiEdit2 } from "react-icons/fi"

function Checkoutthree(props) {
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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shippingAddress = useSelector((state) => state.orderDetails.shippingAddress);
    const shippingMethod = useSelector((state) => state.orderDetails.shippingMethod);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        dispatch(setPaymentInfo(data));
        navigate('/checkoutfour');
    };

    return (
        <div className='container'>
            <section className="paymentInfoCart">
                <h1>Checkout</h1>
                <div className="aem-Grid aem-Grid--12">
                    <h4 className='paymentInfoTitle'>Guest Checkout</h4>
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className="aem-Grid aem-Grid--12 payment-method">
                            <div className='editOption'>
                                <p>Shipping Information</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='shipping_details'>{shippingAddress.email} <br />{shippingAddress.phoneNumber}</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <p className='shipping_details'>
                                    {shippingAddress.streetAddress}<br /> {shippingAddress.streetAddress1} <br />{shippingAddress.city} {shippingAddress.state} {shippingAddress.zipcode}<br /> {shippingAddress.country}
                                </p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <div className='editIcon3'>
                                    <img src="" /><span><FiEdit2 />Edit</span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="aem-Grid aem-Grid--12 payment-method">
                            <div className='editOption'>
                                <p>Shipping Method</p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                <p className='shipping_details'>
                                    {shippingMethod}
                                </p>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                <div className='editIcon3'>
                                    <img src="" /><span> <FiEdit2 />Edit</span>
                                </div>
                            </div>
                        </div>

                        <div className="aem-Grid aem-Grid--12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 payment_info">
                                    <p className='shippingInfo'>3. Payment Information</p>
                                    <div className="form-check">
                                        <input className="standard" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                                            {...register("paymentMethod", {
                                                required: "Please select payment method",
                                            })}
                                            onClick={() => {
                                                trigger("paymentMethod");
                                            }}
                                            value="Credit Card"
                                        />
                                        <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                                            Credit Card
                                        </label>
                                        {errors.paymentMethod && (
                                            <small className="text-danger">{errors.paymentMethod.message}</small>
                                        )}
                                    </div>
                                    <label for="exampleFormControlInput1">Name on Card</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=" "
                                        {...register("name", {
                                            required: "Please enter name on the card"
                                        })}
                                        onKeyUp={() => {
                                            trigger("name");
                                        }}
                                    />
                                    {errors.name && (
                                        <small className="text-danger">{errors.name.message}</small>
                                    )}
                                    <br />
                                    <label for="exampleFormControlInput1">Credit Card Number</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder=" "
                                        {...register("cardNumber", {
                                            required: "Please enter cardnumber"
                                        })}
                                        onKeyUp={() => {
                                            trigger("cardNumber");
                                        }}
                                    />
                                    {errors.cardNumber && (
                                        <small className="text-danger">{errors.cardNumber.message}</small>
                                    )}
                                    <br />
                                    <div className="aem-Grid aem-Grid--12">
                                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                            <label for="exampleFormControlInput1">Expiration Date</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="" />
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">

                                            <label for="exampleFormControlInput1">CVV</label>
                                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="91001" />
                                        </div>
                                        <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12">
                                            <BsQuestionCircle className='icon' />
                                        </div>
                                    </div>
                                    <div className="checkbox1">
                                        <label><input type="checkbox" />Billing address same as shipping address</label>
                                    </div>
                                </div>

                                <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                </div>

                                <div className="aem-Grid aem-Grid--12">
                                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 payment_info">
                                        <hr />
                                        <div className="form-check">
                                            <input className="standard" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Paypal" onClick={() => {
                                                trigger("paymentMethod");
                                            }} />
                                            <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                                                PayPal
                                            </label>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    </div>
                                </div>

                                <div className='button__method_one'>
                                    {/* <Link to="/placeOrder"> */}
                                    <button type="submit" className="btn-shipping-method">
                                        CONTINUE TO REVIEW ORDER
                                    </button>
                                    {/* </Link> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 checkoutpricing">
                        <div className="aem-Grid aem-Grid--12 button-btnone">
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

export default Checkoutthree