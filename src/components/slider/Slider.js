import React from "react";
import { Voslogicimages } from "../../feature/Voslogicimages";
import './Slider.css'

const Slider = () => {
  return (
    <>
      <div className="slider">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="Caro_main_wrapper  d-flex align-items-center">
                <div className="icon_diff">
                  <img
                    src={Voslogicimages.datadrive}
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
                <div className="detail">
                  <h2>Data Driven</h2>
                  <p>
                    We dynamically use outbound call routing to ensure high
                    connectivity rates.
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="Caro_main_wrapper d-flex align-items-center">
                <div className="icon_diff">
                  <img
                    src={Voslogicimages.aviability}
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
                <div className="detail">
                  <h2>99.999% Availabality </h2>
                  <p>
                    We dynamically use outbound call routing to ensure high
                    connectivity rates.
                  </p>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="Caro_main_wrapper d-flex align-items-center">
                <div className="icon_diff">
                  <img
                    src={Voslogicimages.aviability}
                    alt="icon"
                    className="img-fluid"
                  />
                </div>
                <div className="detail">
                  <h2>Data Driven</h2>
                  <p>
                    We dynamically use outbound call routing to ensure high
                    connectivity rates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
