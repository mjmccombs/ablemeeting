import React from 'react';


import { MDBIcon } from "mdbreact";

// import './css/slick.css';
// import './css/slick-theme.css';
// import './css/style.css';


//import TestimonialsPage from './testi';

import styles from '../index.less'


import Webslide from './webslide';

import CarouselPage from './testi';



class FullPageIntroWithFixedNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
  
<div className="container-fluid p-o">
    <header>
        <link rel="stylesheet" type="text/css" href="/css/jumbo.css" />
        <div className="container">
            <div className="row">
              <div className="col-xs-6 col-sm-3 col-md-2">
                <div className="logo"> <a href="#top"><img alt="img" src={require('../images/logo.png')}  className="img-responsive" /></a> </div>
              </div>
              <div className="device-nav" id="nav-icon"> <img alt="img" src={require('../images/menu.png')}  className="img-responsive" /> </div>
              <div className="col-md-9 pull-right navigation p-o">
                <nav>
                  <ul>
                    <li><a href="#work">How it Works</a></li>
                    <li><a href="#benefit">Benefit</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#pricing">Pricing</a></li>                                                            
                    <li className="block-btn" style={styles.button}>
                        <a href="#" onClick={() => this.props.openLogin()} className="block2">Log In</a>
                        <a href="#" onClick={() => this.props.signUpSheet()} className="block">Try for Free</a>
                    </li>                                                                      
                  </ul>
                </nav>
              </div>
            </div>
        </div>
    </header>
    <section className="section1">
    	<div className="container">
        	<div className="row">
                <div className="col-sm-6">
                    <div className="left-part">
                        <h1>Automate Your Interview Scheduling</h1>
                        <p>
                        	As recruiters, we know scheduling interviews takes resources away from other areas. Now we can save hours of time and frustration while giving interviewers and candidates a better
scheduling experience, AbleMeeting has you covered.
                        </p>
                        <a href="#">Get Started Now</a>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="right-part">
                        <img alt="img"  src={require('../images/top-banner.png')} className="img-responsive" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section2" id="work">
    	<div className="container">
        	<div className="row">
            	<div className="col-md-12">
                	<h1>How Does It Work?</h1>
                    <h2>
                    	No need for unnecessary artificial intelligence. No need to take security risks by giving away access to your calendar. We let the humans drive the bus with some old-fashioned business process automation!
                    </h2>
                </div>
            </div>
             <div className="boxes">
            <div className="row">
            	
                	<div className="col-sm-4">
                    	<div className="box-img">
                        	<img alt="img" src={require('../images/icon-recruiter-.png')} />
                        </div>
                        <h3>Recruiter</h3>
                        <p>
                        	An AbleMeeting Recruiter creates an open position and submits basic
candidate and interviewer information into our program
                        </p>
                    </div>
                    <div className="col-sm-4">
                    	<div className="box-img">
                        	<img alt="img" src={require('../images/icon-interviewer.png')} />
                        </div>
                        <h3>Interviewer</h3>
                        <p>
                        	The Interviewer receives an automated email coming from the Recruiter
which directs them to a webpage where they enter their availability and submit
                        </p>
                    </div>
                    <div className="col-sm-4">
                    	<div className="box-img">
                        	<img alt="img" src={require('../images/icon-employee.png')} />
                        </div>
                        <h3>Candidate</h3>
                        <p>
                        	The job candidate gets an email with a link to a page where they select
the time that works best for them and the interview is set!
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
            	<div className="col-md-12">
                	<a href="#">Get Started</a>
                </div>
            </div>
        </div>
    </section>
  
 

<CarouselPage />
    <section className="section5" id="pricing">
    	<div className="container">
        	<div className="row">
            	<div className="col-md-12">
                	<h1>Plans For All Types Of Recruiters</h1>
                    <h2>See all that AbleMeeting can do for you with a 14-day free trial</h2>
                </div>
            </div>
            <div className="row">
            	<div className="col-sm-4">
                	<div className="boxes dot-bord">
                    	<h3>
                        	Starter<br/>$15/mo
                        </h3>
                        <a href="#">Try for Free</a>
                        <ul>
                        	<li>Easily schedule interviews between candidates and interviewers</li>
                            <li>Up to 10 active positions   </li>                         
                            <li>Unlimited archived positions     </li>                       
                            <li>Dashboard with metrics and reporting  </li>                          
                            <li>All emails to Candidate and Interviewer come from the Recruiter </li>                          
                            <li>Automated Event Notifications When An Interview Status Changes </li>                     
                            <li>Schedule interviews for four unique venues (In Person, Skype, Phone, or Zoom)</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                	<div className="boxes">
                    	<div className="stickers"><img alt="img" src={require('../images/sticker.png')} className="img-responsive" /></div>
                    	<h3>
                        	Power Pack<br/>$25/mo
                        </h3>
                        <a href="#">Try for Free</a>
                        <ul>
                        	<li>Includes all features in the Starter plan</li>
                            <li>Up to 30 active positions  </li>                          
                            <li>Access to new features first    </li>                        
                            <li>More to Come</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-4">
                	<div className="boxes dot-bord">
                    	<h3>
                        	Enterprise<br/><span>Contact Us for Price</span>
                        </h3>
                        <a href="#">Contact Us</a>
                        <ul>
                        	<li>All features in “Power Pack” Plan</li>
                            <li>Managerial Dashboard</li>                            
                            <li>Designed For Teams</li>                     
                            <li>User Management</li>


                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section6">
    	<div className="container">
        	<div className="row">
            	<div className="col-md-12">
                	<h1>Give interviewers and candidates a<br className="hidden-xs" />
                     better scheduling experience</h1>
                    <a href="#">Get Started Today</a>
                </div>
            </div>
        </div>
    </section>
    <footer>
    	<div className="container">
        	<div className="row">
            	<div className="col-sm-4">
                	<div className="box1">
                    	<p>© 2018 AbleMeeting</p>
                        <a href="#">Sign Up</a>
                    </div>
                </div>
                <div className="col-sm-2">
                	<div className="box2">
                    	<h1>Company</h1>
                        <ul>
                        	<li><a href="#">Blog</a></li>
                        	<li><a href="#">Features</a></li>
                        	<li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-2">
                	<div className="box2">
                    	<h1>Legal</h1>
                        <ul>
                        	<li><a href="#">Privacy Policy</a></li>
                        	<li><a href="#">Terms & Conditions</a></li>                  
                        </ul>
                    </div>
                </div>
                <div className="col-sm-3">
                	<div className="box3">
                    	<h1>Social Media</h1>
                        <ul>
                        	<li><a href="#"><MDBIcon fab icon="facebook-f" /></a></li>
                        	<li><a href="#"><MDBIcon fab icon="youtube" /></a></li>
                        	<li><a href="#"><MDBIcon fab icon="twitter" /></a></li>
                        	<li><a href="#"><MDBIcon fab icon="linkedin-in" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div> 
     
  );
  }
}

export default FullPageIntroWithFixedNavbar;