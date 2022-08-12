import React from 'react'
import '../../assets/scss/home.css';
import { BiMap } from "react-icons/bi";
import Carousel from 'react-bootstrap/Carousel';
import landingone from '../../assets/images/Carousel-one.jpg';
import landing from '../../assets/images/Carousel-image.png';
import boytwo from '../../assets/images/boytwo.png';
import boyone from '../../assets/images/boyone.png';
import { NavLink } from "react-router-dom";


function Home() {
    return (
        <>
            <div className="collectionsign collection-desktop">
                <Carousel>
                    <Carousel.Item>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 header-one">
                                <div className='text'>
                                    <h1>Shop the new <br />Signature Collection</h1>
                                    <p className='magaone'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
                                        Lobortis mattis <br />aliquam faucibus purus.</p>
                                    <div>
                                        <p className='magna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lobortis mattis aliquam faucibus purus.</p>
                                    </div>
                                    <NavLink to="/products">
                                        <button className='btn-two'>SHOP NOW</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 header--two">
                                <img src={landing} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 header-one">
                                <div className='text'>
                                    <h1>Shop the new <br />Signature Collection</h1>
                                    <p className='magaone'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
                                        Lobortis mattis <br />aliquam faucibus purus.</p>
                                    <div>
                                        <p className='magna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lobortis mattis aliquam faucibus purus.</p>
                                    </div>
                                    <NavLink to="/products">
                                        <button className='btn-two'>SHOP NOW</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 header--two">
                                <img src={landing} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="aem-Grid aem-Grid--12">
                            <div className="aem-GridColumn aem-GridColumn--default--6 header-one">
                                <div className='text'>
                                    <h1>Shop the new <br />Signature Collection</h1>
                                    <p className='magaone'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.
                                        Lobortis mattis <br />aliquam faucibus purus.</p>
                                    <div>
                                        <p className='magna'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Lobortis mattis aliquam faucibus purus.</p>
                                    </div>
                                    <NavLink to="/products">
                                        <button className='btn-two'>SHOP NOW</button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--6 header--two aem-GridColumn--phone--12">
                                <img src={landing} />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                
                <div className='text---one'>
                    <div className='container newone'>
                        <div className="aem-Grid aem-Grid--12 ">
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6">
                                <div className='card--box women'>
                                    <div className="wq">
                                        <h6>Shop Women</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6">
                                <div className='card--box men'>
                                    <div className="wq">
                                        <h6>Shop Men</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6 shopmen">
                                <div className='card--box smart'>
                                    <div className="wq">
                                        <h6>Jewellery</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--6 shopmen">
                                <div className='card--box assess'>
                                    <div className="wq">
                                        <h6>Electronics</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className="aem-Grid aem-Grid--12 takeoffone">
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--6">
                            <div className='take-off'>
                                <h1>Take off in the new <br />Signature Legging</h1>
                                <h6>Lorem Ipsum Dolor Tempor</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor <br />labore dolore magna lorem ipsum dolor sit dolore magna.</p>

                            </div>
                            <br />
                            <div className='btn-three'>
                                <input type="button" className="btn-one" value="SHOP COLLECTION " />&nbsp;&nbsp;&nbsp;
                                <input type="button" className="btn-two" value="SHOP NOW" />

                                <div className='lines-one'>
                                    <hr />
                                </div>
                            </div>

                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--6">
                            <div className='take-off-one'>
                                <img src={boytwo} />

                            </div>
                        </div>
                    </div>
                </div>



                <div className='container'>

                    <div className="aem-Grid aem-Grid--12 boy-img-one">
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className="card-img">
                                <img src={boyone} />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className="one-card">
                                <div className="two-card">
                                    <h1 className="three-card">Conquer your <br />next adventure</h1>
                                    <p className='card-ab'>Lorem Ipsum Dolor Tempor</p>
                                    <input type="button" className="btn-four" value="SHOP DEVICES" />
                                    <a href="#" className='map1'><BiMap /></a>
                                    <div className='map2'>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            {/* mobile */}
            <div className="collectionsign collection-mobile">
                <div className="aem-Grid aem-Grid--12">
                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                        <div className='newcollection'>
                            <img src={landingone} />
                        </div>
                    </div>
                    <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                        <div className='singnature'>
                            <h1>Shop the new <br />Signature Collection</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod
                            </p>
                            <NavLink to="/products">
                                        <button className='shop-btn'>SHOP NOW</button>
                                    </NavLink>
                        </div>
                    </div>
                    

                </div>
                <div className='shopwomen'>
                    <div className=''>
                        <div className="aem-Grid aem-Grid--12 ">
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box women'>
                                    <div className="wq">
                                        <h6>Shop Women</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box men'>
                                    <div className="wq">
                                        <h6>Shop Men</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box smart'>
                                    <div className="wq">
                                        <h6>Jewellery</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>
                            </div>
                            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                                <div className='card--box assess'>
                                    <div className="wq">
                                        <h6>Electronics</h6>
                                        <p>Lorem ipsum dolor sit amet</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div >
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className='Dolor'>
                                <img src={boytwo} />

                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className='newtemp'>
                                <h1>Take off in the new Signature Legging</h1>
                                <h6>Lorem Ipsum Dolor Tempor</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
                            </div>
                            <br />
                            <div className='onebtn'>
                                <div>
                                    <input type="button" className="btntwo" value="SHOP NOW" />
                                </div>
                                <br />
                                <div>
                                    <input type="button" className="btnone" value="SHOP COLLECTION " />
                                </div>


                                <div className='lines'>
                                    <hr />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className=''>
                    <div className="aem-Grid aem-Grid--12 ">
                        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className="foot">
                                <img src={boyone} />
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 nextadventure">
                            <div className="one-card">
                                <div className="two-card">
                                    <h1 className="three-card">Conquer your <br />next adventure</h1>
                                    <p className='card-ab'>Lorem Ipsum Dolor Tempor</p>
                                    <input type="button" className="btn-four" value="SHOP DEVICES" />
                                    <a href="#" className='location'><BiMap /></a>
                                    <div className='locationone'>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Home