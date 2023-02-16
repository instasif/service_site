import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import Card from "react-bootstrap/Card";

const ServiceCarousel = () => {
  return (
    <div className="mt-3">
      <div className="py-4 px-4 justify-content-center">
        <Swiper
          FreeMode={true}
          grabCursor={true}
          modules={[FreeMode, Autoplay]}
          className="MySwiper"
          slidesPerView={4}
          spaceBetween={30}
          autoplay={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Card className="bg-primary">
              <Card.Body>
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="https://static-01.daraz.com.bd/p/ff7f994f14efd70637441baf07b353d1.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold text-light ps-2">
                      Lorem ipsum dolor
                    </p>
                  </div>
                </div>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  fuga adipisci quibusdam incidunt assumenda vero?
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className="bg-primary">
              <Card.Body>
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="https://static-01.daraz.com.bd/p/ff7f994f14efd70637441baf07b353d1.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold text-light ps-2">
                      1. Lorem ipsum dolor
                    </p>
                  </div>
                </div>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  fuga adipisci quibusdam incidunt assumenda vero?
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className="bg-primary">
              <Card.Body>
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="https://static-01.daraz.com.bd/p/ff7f994f14efd70637441baf07b353d1.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold text-light ps-2">
                      2. Lorem ipsum dolor
                    </p>
                  </div>
                </div>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  fuga adipisci quibusdam incidunt assumenda vero?
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className="bg-primary">
              <Card.Body>
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="https://static-01.daraz.com.bd/p/ff7f994f14efd70637441baf07b353d1.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold text-light ps-2">
                      3. Lorem ipsum dolor
                    </p>
                  </div>
                </div>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  fuga adipisci quibusdam incidunt assumenda vero?
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className="bg-primary">
              <Card.Body>
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="https://static-01.daraz.com.bd/p/ff7f994f14efd70637441baf07b353d1.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold text-light ps-2">
                      4. Lorem ipsum dolor
                    </p>
                  </div>
                </div>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  fuga adipisci quibusdam incidunt assumenda vero?
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className="bg-primary">
              <Card.Body>
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="https://static-01.daraz.com.bd/p/ff7f994f14efd70637441baf07b353d1.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold text-light ps-2">
                      5. Lorem ipsum dolor
                    </p>
                  </div>
                </div>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  fuga adipisci quibusdam incidunt assumenda vero?
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className="bg-primary">
              <Card.Body>
                <div className="d-flex flex-row">
                  <div>
                    <img
                      src="https://static-01.daraz.com.bd/p/ff7f994f14efd70637441baf07b353d1.jpg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </div>
                  <div>
                    <p className="fs-5 fw-bold text-light ps-2">
                      6. Lorem ipsum dolor
                    </p>
                  </div>
                </div>
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  fuga adipisci quibusdam incidunt assumenda vero?
                </p>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceCarousel;
