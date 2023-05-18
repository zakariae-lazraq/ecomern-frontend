import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonial.css'

export default class TestimonialSlider extends Component {
  render() {
    return (
      <>
      <h1 className="title">Testimonials</h1>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3100}
      >
        <div>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--0SCWkYwS--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/9dhr4cw2s0skgfig8qnw.png" />
          <div className="myCarousel">
            <h3>Sarah</h3>
            <h4>Graphic Designer</h4>
            <p>
            I recently purchased a new laptop for work, and I couldn't be happier with my decision. The processing speed is lightning-fast,
            and it's incredibly lightweight and portable. 
            </p>
          </div>
        </div>

        <div>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nSI8V6RE--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/81co8nilff5r9eer3xga.png" />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Photographer</h4>
            <p>
            I'm an amateur photographer, and I recently upgraded my camera to a DSLR. The difference in picture quality is amazing - 
            I feel like I'm seeing the world through a whole new lens. 
            </p>
          </div>
        </div>

        <div>
          <img src="https://www.faceapp.com/static/img/content/compare/old-example-before@3x.jpg" />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>business owner</h4>
            <p>
            I've been a loyal iPhone user for years, and I recently upgraded to the latest model. The camera quality is incredible,
             and the new features like facial recognition and wireless charging have made my life so much easier.
            </p>
          </div>
        </div>
        <div>
          <img src="https://robophot.com/wp-content/plugins/widgetkit/cache/gallery/379/002_boehm_andre_130918_test_tiffocsel_no_stackretou_cut_300-6af69709ca.jpg" />
          <div className="myCarousel">
            <h3>Emily</h3>
            <h4>Student</h4>
            <p>
            As a college student, my laptop is my lifeline for everything from coursework to socializing. 
            I recently invested in a new model, and it's been a game-changer. The speed and functionality have helped me .
            </p>
          </div>
        </div>
      </Carousel>
      </>
    );
  }
}