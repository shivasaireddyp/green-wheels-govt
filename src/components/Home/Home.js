import React from "react";
// import landsc1 from "../../images/landsc1.jpg";
// import landsc2 from "../../images/landsc2.jpg";
// import landsc3 from "../../images/landsc3.jpg";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

function Home() {
  return (
    // <div className="container">
    //   <div id="carouselExampleCaptions" className="carousel slide">
    //     <div className="carousel-indicators">
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="0"
    //         className="active"
    //         aria-current="true"
    //         aria-label="Slide 1"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="1"
    //         aria-label="Slide 2"
    //       ></button>
    //       <button
    //         type="button"
    //         data-bs-target="#carouselExampleCaptions"
    //         data-bs-slide-to="2"
    //         aria-label="Slide 3"
    //       ></button>
    //     </div>
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img src = "https://images.unsplash.com/photo-1708806016593-e6be239f9d83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>First slide label</h5>
    //           <p>
    //             Some representative placeholder content for the first slide.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img src = "https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" className="d-block w-100" alt="..." />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>Second slide label</h5>
    //           <p>
    //             Some representative placeholder content for the second slide.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="carousel-item">
    //         <img src = "https://images.unsplash.com/photo-1709274296402-f6e96caaa1eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" className="d-block w-100" alt="..." />
    //         <div className="carousel-caption d-none d-md-block">
    //           <h5>Third slide label</h5>
    //           <p>
    //             Some representative placeholder content for the third slide.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <button
    //       className="carousel-control-prev"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="prev"
    //     >
    //       <span
    //         className="carousel-control-prev-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Previous</span>
    //     </button>
    //     <button
    //       className="carousel-control-next"
    //       type="button"
    //       data-bs-target="#carouselExampleCaptions"
    //       data-bs-slide="next"
    //     >
    //       <span
    //         className="carousel-control-next-icon"
    //         aria-hidden="true"
    //       ></span>
    //       <span className="visually-hidden">Next</span>
    //     </button>
    //   </div>
    //   {/* <div
    //     id="carouselExampleSlidesOnly"
    //     className="carousel slide container "
    //     data-bs-ride="carousel"
    //   >
    //     <div className="carousel-inner">
    //       <div className="carousel-item active">
    //         <img src="https://images.unsplash.com/photo-1709274296402-f6e96caaa1eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" className="d-block w-100" alt="..." />
    //       </div>
    //       <div className="carousel-item">
    //         <img src="https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" className="d-block w-100" alt="..." />
    //       </div>
    //       <div className="carousel-item">
    //         <img src="https://images.unsplash.com/photo-1708806016593-e6be239f9d83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
    //       </div>
    //     </div>
    //   </div> */}
    // </div>
    <div >
      <Carousel>
        <Carousel.Item>
        <Image src="https://images.unsplash.com/photo-1709274296402-f6e96caaa1eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8" rounded />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src="https://images.unsplash.com/photo-1682686580849-3e7f67df4015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" rounded />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src="https://images.unsplash.com/photo-1708806016593-e6be239f9d83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" rounded />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
