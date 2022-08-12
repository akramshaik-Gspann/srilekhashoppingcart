import React from 'react'
import '../../assets/scss/checkout.scss';
import Checkoutone from './checkoutone';

function CheckOut() {
    return (
        <div className="aem-Grid aem-Grid--12">
            <section className="checkOutCart">
                <h1>Checkout</h1>
                <div className='container'>
                        <div className="aem-Grid aem-Grid--12">
                            < div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12" >
                                <Checkoutone />
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default CheckOut