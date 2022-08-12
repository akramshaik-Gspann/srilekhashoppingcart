
import React from 'react';
import { Link } from "react-router-dom";
// import '../Style/landingpage.css';
import { BiMap } from "react-icons/bi";
// import landing1 from '../Images/landingpage1.png';
import landing2 from '../../assets/images/hero-component-image2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import landingimg1 from '../../assets/images/Carousel-image 2cropped1.jpeg';
import '../../assets/scss/landingpage.css';
import landing1 from '../../assets/images/landingpage1.png';

export default function Landingone() {
  return (
    <div>
      <div className='landing_1'>
        <Carousel >
          <Carousel.Item>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 flex-disp">
                    <div className='left-content'>
                      <h2 className="csl-text-one">Shop the new<br />Signature Collection</h2>
                      <p className='md-block mob-csl-text-two'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p> 
                      <p className="dd-block csl-text-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
                      <div className="mobile-btn">
                        <p><a className="a-btn"href="">SHOP NOW</a></p>
                      </div>
                      </div>
                      <div className='right-content'>
                      <img src={landingimg1} className='dd-block tab-block' />
                      <img  className="md-block" src="https://i.ibb.co/jT8BMpJ/mobile-c-img.jpg"/>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='container max-width-desktop'>
          <div className="aem-Grid aem-Grid--12 mgt-1">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 ">
              <div className='landimg img1'>
                {/* <div className='card'>*/}
                  
              </div>
              <div className='card-desc'>
                  <h3><Link to="/women">Shop Women</Link></h3>
                  <p>Lorem ipsum dolor sit amet</p>

                </div>
              
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 ">
              <div className='landimg img2'>
                
              </div>
              <div className='card-desc'>
                  <h3><Link to="/mem">Shop Men</Link></h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
             
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 ">
              <div className='landimg img3'>
                {/* <div className='card'>*/}
                


              </div>
              <div className='card-desc'>
                  <h3><Link to="/jewellery">Jewellery</Link></h3>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
            
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 ">
              <div className='landimg img4'>
                {/* <div className='card'>*/}
                

              </div>
              <div className='card-desc'>
                  <h3><Link to="/electronics">Electronics</Link></h3>
                  <p>Lorem ipsum dolor sit amet</p>

                </div>
              
            </div>
          </div>
      </div>

     <div className="aem-Grid aem-Grid--12 max-width-desktop mob-flex-display pd-2">
         <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--12">
            <div className="textblock">
               <h2 className="text-block-one">
                  Take off in the new
                  Signature Legging
               </h2>
               <h3 className="text-block-two">
                  Lorem ipsum dolor Tempor
               </h3>
               <div className="text-block-three">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna lorem ipsum dolor sit amet. 
               </div>
               
               <div>
                  <p>
                     <span className="mob-flex-display">
                        <a className="text-block-btns" href="">Shop Collection</a>
                        <a className="text-block-btns text-block-btns-b" href="">Shop Now</a>
                        </span>
                        <hr className="border-btm"/>
                  </p>
               </div>
            </div>
         </div>
         <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
            <div>
            <img className="componentimg" src="../assets/model1.png" />
            </div>
         </div>
         </div>

      <div className='container pd-2 max-width-desktop'>
        <div className='landing_4'>
          <div className="aem-Grid aem-Grid--12 flex-display ">
            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
              <div className='landing-left'>
                <img className="adventure-img" src={landing2} />
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--12">
              <a href="#" className='map1'><BiMap />
              <hr className="map-border"/></a>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
              <div className='landing-right'>
                <div className='land-content'>
                  <h2 className='mobile-text'>Conquer your next adventure</h2>
                  <p>Lorem Ipsum Dolor Tempor</p>
                  <a href="" className='text-block-btns text-block-btns-w'>SHOP DEVICES</a>
                </div>
                
                <hr />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
