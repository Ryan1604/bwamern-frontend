import React, { Component } from "react";

import Fade from "react-reveal/Fade";

import Header from "parts/Header";
import Title from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import Description from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Category from "parts/Categories";
import Testimonial from "parts/Testimonial";
import Footer from "parts/Footer";

import itemDetails from "json/itemDetails.json";

export default class DetailPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <Title breadcrumb={breadcrumb} data={itemDetails} />
        <FeaturedImage data={itemDetails.imageUrl} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <Description data={itemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={itemDetails} />
              </Fade>
            </div>
          </div>
        </section>
        <Category data={itemDetails.categories} />
        <Testimonial data={itemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
