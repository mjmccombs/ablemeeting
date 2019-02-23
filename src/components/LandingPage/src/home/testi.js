import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const MultiCarouselPage = () => {
  return (
        <section className="section4" id="testimonials">
    <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={false} showIndicators={true} multiItem>
        <MDBCarouselInner>
           <MDBRow>
                <div className="col-md-12">
                    <h1>Testimonials</h1>
                </div>
            </MDBRow>
          <MDBRow>
            <MDBCarouselItem itemId="1">
             
               <h2>
                            <span className="quote"><img alt="img" src={require('../images/icon-quote.png')} className="img-responsive" /></span>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaqu unde omnis iste natus set
                        </h2>
                        <div className="prof-img">
                            <img alt="img" src={require('../images/Thumbnail.png')} className="img-responsive" />
                            <p>
                                Marc Snow<br /><span>HR</span>
                            </p>
                        </div>
              
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
            
              <h2>
                            <span className="quote"><img alt="img" src={require('../images/icon-quote.png')} className="img-responsive" /></span>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaqu unde omnis iste natus set
                        </h2>
                        <div className="prof-img">
                            <img alt="img" src={require('../images/Thumbnail.png')} className="img-responsive" />
                            <p>
                                Marc Snow<br /><span>HR</span>
                            </p>
                        </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              
              <h2>
                    <span className="quote"><img alt="img" src={require('../images/icon-quote.png')} className="img-responsive" /></span>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaqu unde omnis iste natus set
                </h2>
                <div className="prof-img">
                    <img alt="img" src={require('../images/Thumbnail.png')} className="img-responsive" />
                    <p>
                        Marc Snow<br /><span>HR</span>
                    </p>
                </div>
              
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
      </section>
  );
}

export default MultiCarouselPage;