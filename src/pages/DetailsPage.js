import React, { Component } from "react";

import Header from "parts/Header";
import Title from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import Description from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";

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
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Description data={itemDetails} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={itemDetails}> </BookingForm>
            </div>
          </div>
        </section>
      </>
    );
  }
}
