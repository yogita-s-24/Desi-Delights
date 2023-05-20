import React from "react";

import "./Slider.css";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade mt-5 ">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/">
              <img
                src="https://www.haldirams.com/media//banneruploader/tmp/banner_image_path/Summer_Banner_2.png"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/beverages">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/beverages_1_.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/savories">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/savouries.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="sweets">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/Sweets.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="sweets">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/packed_sweets_1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="sweets">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/exotic_collections.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="sweets">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/tine_sweets.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/gifting">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/gifting_1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/gifting">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/dy_fruit.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          
          <div className="carousel-item">
            <Link to="/cookies">
              <img
                src="https://www.haldirams.com/media/catalog/tmp/category/cookies_2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon mt-3"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon  mt-3"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
