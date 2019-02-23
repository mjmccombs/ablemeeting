import React, { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, Row, Col } from 'mdbreact';

class DomainSlide extends Component {
  constructor(props) {
    super(props);
  
  }


  

 

  render(){

    return(
         <section className="section4" id="testimonials">
    	<div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Testimonials</h1>
                </div>
            </div>
            <div className="row">
                <div id="testmonial-slider">
                    <div className="col-md-12">
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
                    </div>
                    <div className="col-md-12">
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
                    </div>
                    <div className="col-md-12">
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
                    </div>
                    <div className="col-md-12">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
  }
}

export default DomainSlide;