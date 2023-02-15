import React from 'react';

const Hero = () => {
    return (
      <div>
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/slides/041.webp')",
            height: 400,
            backgroundSize: "cover",
            // overflow: "hidden",
            // filter: "blur(4px)",
          }}
        >
          <div className="mask">
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-light">
                <h1 className="mb-3">— Result Making</h1>
                <h1 className="mb-3">— 360° Full-Service</h1>
                <h4 className="mb-3">
                  Digital Marketing Agency in Dhaka, Bangladesh
                </h4>
                <p>
                  {" "}
                  We design website, develop content, do seo, manage social
                  media, run advertisement and finally make results.
                </p>
                <p>
                  {" "}
                  We help any businesses, specially small & medium-sized (SMEs)
                  enterprises to grow in the digital market.
                </p>
                <a
                  className="btn btn-outline-light btn-lg text-uppercase"
                  href="#!"
                  role="button"
                >
                  get a free marketing proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;