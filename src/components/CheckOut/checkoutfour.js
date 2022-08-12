import React, { useState } from 'react'
import { Link } from "react-router-dom";
import '../../assets/scss/checkoutfour.css';
import { useSelector } from 'react-redux';
import { FiEdit2 } from "react-icons/fi"

function Checkoutfour(props) {
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
    const shippingMethod = useSelector((state) => state.orderDetails.shippingMethod);
    const paymentInfo = useSelector((state) => state.orderDetails.paymentInfo);

    return (
        <div className='container'>
            <section className="placeOrderCart">
                <h1>Checkout</h1>
                <div className="aem-Grid aem-Grid--12">
                    <h4 className='placeOrderTitle'>Guest Checkout</h4>
                    <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className='cartA'>
                            <div className="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Shipping Information </p>
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
                                    <div className='editIcon2'>
                                        <img src="" /><span><FiEdit2 />Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div className="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Shipping Method</p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>
                                        {shippingMethod}
                                    </p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='editIcon2'>
                                        <img src="" /><span> <FiEdit2 />Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="aem-Grid aem-Grid--12 placeorder-method">
                                <div className='editOption'>
                                    <p>Payment Information</p>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                    <p className='shipping_details'>
                                        {paymentInfo.paymentMethod}<br />
                                        Visa ending in {paymentInfo.cardNumber?.substring(paymentInfo.cardNumber?.length - 4)}<br />
                                    </p>
                                </div>

                                <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='editIcon3'>
                                        <img src="" /><span><FiEdit2 />Edit</span>
                                    </div>
                                </div>
                            </div>
                            <br />

                            <div className="aem-Grid aem-Grid--12">
                                <div className='shipping_info_radio'>
                                    <div className="placeorder-method">
                                        <div className='editOption'>
                                            <p>3 items in your order</p>
                                        </div>
                                        <div className='imageOne'>
                                            <div className="aem-Grid aem-Grid--12">
                                                {cartItems.length === 0 ? <h2 className='emptybasket'>Basket is empty <i className='tear-icon fas fa-sad-tear'></i></h2> :
                                                    <>{cartItems?.map((item) => (
                                                        <>
                                                            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                                <div className='items-inorder'>
                                                                    <img src={item.image} />
                                                                    <div>
                                                                        <h6>{item.title}</h6>
                                                                        <p>Size: Medium</p>
                                                                        <p>Color: Storm</p>
                                                                        <p>Quantity: 1</p>
                                                                        <p>Price: ${item.price}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))}</>

                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='payment__method'>
                                <div className='placeOrder_btn'>
                                    <Link to="/checkoutfive">
                                        <button type="button" className="btn-shipping-method">
                                            PLACE ORDER
                                        </button></Link>
                                </div>
                            </div>
                            <div className='terms'>
                                <p className='terms_condition'>By clicking confirm order you agree to our <Link to='/' ><span className='condition'>Terms and Conditions</span></Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className="aem-Grid aem-Grid--12 pricing-detail">
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

export default Checkoutfour