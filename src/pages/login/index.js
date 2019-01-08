import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Icon, Input, Modal } from 'antd'
import { GlobalFooter } from 'ant-design-pro'
import { Trans, withI18n } from '@lingui/react'
import { setLocale } from 'utils'
import config from 'utils/config'

import styles from './index.less'
const FormItem = Form.Item

const __html =
  '   <!DOCTYPE HTML>  ' +
  '   <html lang="en-US">  ' +
  '   <head>  ' +
  '   <meta charset="UTF-8">  ' +
  '   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">  ' +
  '   <title>Title Here</title>  ' +
  '   <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700,900" rel="stylesheet">  ' +
  '   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">  ' +
  '   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">  ' +
  '     ' +
  '   <link href="/css/slick-theme.css" rel="stylesheet">  ' +
  '   <link href="/css/slick.css" rel="stylesheet">  ' +
  '     ' +
  '   <link href="/css/style.css" rel="stylesheet">  ' +
  '   </head>  ' +
  '   <body>  ' +
  '   <div class="container-fluid p-o">  ' +
  '       <header>  ' +
  '           <div class="container">  ' +
  '               <div class="row">  ' +
  '                 <div class="col-xs-6 col-sm-3 col-md-2">  ' +
  '                   <div class="logo"> <a href="#top"><img src="/images/logo.png" class="img-responsive"></a> </div>  ' +
  '                 </div>  ' +
  '                 <div class="device-nav" id="nav-icon"> <img src="/images/menu.png" class="img-responsive"> </div>  ' +
  '                 <div class="col-md-9 pull-right navigation p-o">  ' +
  '                   <nav>  ' +
  '                     <ul>  ' +
  '                       <li><a href="#work">How it Works</a></li>  ' +
  '                       <li><a href="#benefit">Benefit</a></li>  ' +
  '                       <li><a href="#testimonials">Testimonials</a></li>  ' +
  '                       <li><a href="#pricing">Pricing</a></li>                                                              ' +
  '                       <li class="block-btn">  ' +
  "                           <a href=\"#\" onclick=\"var display=document.querySelector('body > div:nth-child(3) > div > div.ant-modal-wrap').style.display;'none'==display?(document.querySelector('body > div:nth-child(3) > div > div.ant-modal-mask').className='ant-modal-mask fade-enter fade-enter-active',document.querySelector('body > div:nth-child(3) > div > div.ant-modal-wrap').style.display=''):(document.querySelector('body > div:nth-child(3) > div > div.ant-modal-mask').className='ant-modal-mask fade-leave fade-leave-active',document.querySelector('body > div:nth-child(3) > div > div.ant-modal-wrap').style.display='none');\" class=\"block2\">Log In</a>  " +
  '                           <a href="#" class="block">Try for Free</a>  ' +
  '                       </li>                                                                        ' +
  '                     </ul>  ' +
  '                   </nav>  ' +
  '                 </div>  ' +
  '               </div>  ' +
  '           </div>  ' +
  '       </header>  ' +
  '       <section class="section1">  ' +
  '       	<div class="container">  ' +
  '           	<div class="row">  ' +
  '                   <div class="col-sm-6">  ' +
  '                       <div class="left-part">  ' +
  '                           <h1>Automate Your Interview Scheduling</h1>  ' +
  '                           <p>  ' +
  '                           	As recruiters, we know scheduling interviews takes resources away from other areas. Now we can save hours of time and frustration while giving interviewers and candidates a better  ' +
  '   scheduling experience, AbleMeeting has you covered.  ' +
  '                           </p>  ' +
  '                           <a href="#">Get Started Now</a>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '                   <div class="col-sm-6">  ' +
  '                       <div class="right-part">  ' +
  '                           <img src="/images/top-banner.png" class="img-responsive" />  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '           </div>  ' +
  '       </section>  ' +
  '       <section class="section2" id="work">  ' +
  '       	<div class="container">  ' +
  '           	<div class="row">  ' +
  '               	<div class="col-md-12">  ' +
  '                   	<h1>How Does It Work?</h1>  ' +
  '                       <h2>  ' +
  '                       	No need for unnecessary artificial intelligence. No need to take security risks by giving away access to your calendar. We let the humans drive the bus with some old-fashioned business process automation!  ' +
  '                       </h2>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '               <div class="row">  ' +
  '               	<div class="boxes">  ' +
  '                   	<div class="col-sm-4">  ' +
  '                       	<div class="box-img">  ' +
  '                           	<img src="/images/icon-recruiter-.png" />  ' +
  '                           </div>  ' +
  '                           <h3>Recruiter</h3>  ' +
  '                           <p>  ' +
  '                           	An AbleMeeting Recruiter creates an open position and submits basic  ' +
  '   candidate and interviewer information into our program  ' +
  '                           </p>  ' +
  '                       </div>  ' +
  '                       <div class="col-sm-4">  ' +
  '                       	<div class="box-img">  ' +
  '                           	<img src="/images/icon-interviewer.png" />  ' +
  '                           </div>  ' +
  '                           <h3>Interviewer</h3>  ' +
  '                           <p>  ' +
  '                           	The Interviewer receives an automated email coming from the Recruiter  ' +
  '   which directs them to a webpage where they enter their availability and submit  ' +
  '                           </p>  ' +
  '                       </div>  ' +
  '                       <div class="col-sm-4">  ' +
  '                       	<div class="box-img">  ' +
  '                           	<img src="/images/icon-employee.png" />  ' +
  '                           </div>  ' +
  '                           <h3>Candidate</h3>  ' +
  '                           <p>  ' +
  '                           	The job candidate gets an email with a link to a page where they select  ' +
  '   the time that works best for them and the interview is set!  ' +
  '                           </p>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '               <div class="row">  ' +
  '               	<div class="col-md-12">  ' +
  '                   	<a href="#">Get Started</a>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '           </div>  ' +
  '       </section>  ' +
  '       <section class="section3" id="benefit">  ' +
  '       	<div class="container">  ' +
  '           	<div class="row">  ' +
  '               	<div class="col-md-12">  ' +
  '                   	<h1>Benefits Spotlight</h1>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '           	<div class="row">  ' +
  '               	<div class="col-md-offset-1 col-md-10">  ' +
  '                   	<div class="row list">  ' +
  '                       	<div class="col-sm-6 pull-right">  ' +
  '                           	<div class="right-part"><img src="/images/icon-Recruiters-Save.png" class="img-responsive" /></div>  ' +
  '                           </div>  ' +
  '                       	<div class="col-sm-6">  ' +
  '                           	<div class="left-part">  ' +
  '                               	<h2>Recruiters Save Time</h2>  ' +
  '                                   <p>  ' +
  '                                   	What would happen if we gave you hours of your time back every week? More sourcing? More time giving candidates the red carpet treatment? More sanity?  ' +
  '                                   </p>  ' +
  '                               </div>  ' +
  '                           </div>  ' +
  '                       </div>  ' +
  '                       <div class="row list">  ' +
  '                       	<div class="col-sm-6">  ' +
  '                           	<div class="right-part"><img src="/images/icon-schedule-better-.png" class="img-responsive" /></div>  ' +
  '                           </div>  ' +
  '                       	<div class="col-sm-6">  ' +
  '                           	<div class="left-part">  ' +
  '                               	<h2>Candidates And Interviewers Have A Better Scheduling Experience</h2>  ' +
  '                                   <p>  ' +
  '                                   	AbleMeeting makes it easy for them to schedule with less opportunity for human error. Humans drive the bus!  ' +
  '                                   </p>  ' +
  '                               </div>  ' +
  '                           </div>  ' +
  '                       </div>  ' +
  '                       <div class="row list">  ' +
  '                       	<div class="col-sm-6 pull-right">  ' +
  '                           	<div class="right-part"><img src="/images/icon-hero.png"class="img-responsive" /></div>  ' +
  '                           </div>  ' +
  '                       	<div class="col-sm-6">  ' +
  '                           	<div class="left-part">  ' +
  '                               	<h2>We Make Recruiters Look Like Heroes</h2>  ' +
  '                                   <p>  ' +
  '                                   	Because all the communication between AbleMeeting and your Candidates and  ' +
  '   Interviewers comes from you, the Recruiter! Not a silly AI robot responding to your high value clients behind your back.  ' +
  '                                   </p>  ' +
  '                               </div>  ' +
  '                           </div>  ' +
  '                       </div>  ' +
  '                       <div class="row list">  ' +
  '                       	<div class="col-sm-6">  ' +
  '                           	<div class="right-part"><img src="/images/icon-security.png" class="img-responsive" /></div>  ' +
  '                           </div>  ' +
  '                       	<div class="col-sm-6">  ' +
  '                           	<div class="left-part">  ' +
  '                               	<h2>Secure</h2>  ' +
  '                                   <p>  ' +
  '                                   	Did you know that in most cases when you give a website access to your calendar they can see ALL of your appointments with edit privileges! We think that is creepy which is why we don’t ask to connect to your calendar. You can sleep better at night with AbleMeeting. Your IT department will thank you.  ' +
  '                                   </p>  ' +
  '                               </div>  ' +
  '                           </div>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '           </div>  ' +
  '       </section>  ' +
  '       <section class="section4" id="testimonials">  ' +
  '       	<div class="container">  ' +
  '               <div class="row">  ' +
  '                   <div class="col-md-12">  ' +
  '                       <h1>Testimonials</h1>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '               <div class="row">  ' +
  '                   <div id="testmonial-slider">  ' +
  '                       <div class="col-md-12">  ' +
  '                           <h2>  ' +
  '                               <span class="quote"><img src="/images/icon-quote.png" class="img-responsive" /></span>  ' +
  '                               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaqu unde omnis iste natus set  ' +
  '                           </h2>  ' +
  '                           <div class="prof-img">  ' +
  '                               <img src="/images/Thumbnail.png" class="img-responsive" />  ' +
  '                               <p>  ' +
  '                                   Marc Snow<br /><span>HR</span>  ' +
  '                               </p>  ' +
  '                           </div>  ' +
  '                       </div>  ' +
  '                       <div class="col-md-12">  ' +
  '                           <h2>  ' +
  '                               <span class="quote"><img src="/images/icon-quote.png" class="img-responsive" /></span>  ' +
  '                               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaqu unde omnis iste natus set  ' +
  '                           </h2>  ' +
  '                           <div class="prof-img">  ' +
  '                               <img src="/images/Thumbnail.png" class="img-responsive" />  ' +
  '                               <p>  ' +
  '                                   Marc Snow<br /><span>HR</span>  ' +
  '                               </p>  ' +
  '                           </div>  ' +
  '                       </div>  ' +
  '                       <div class="col-md-12">  ' +
  '                           <h2>  ' +
  '                               <span class="quote"><img src="/images/icon-quote.png" class="img-responsive" /></span>  ' +
  '                               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaqu unde omnis iste natus set  ' +
  '                           </h2>  ' +
  '                           <div class="prof-img">  ' +
  '                               <img src="/images/Thumbnail.png" class="img-responsive" />  ' +
  '                               <p>  ' +
  '                                   Marc Snow<br /><span>HR</span>  ' +
  '                               </p>  ' +
  '                           </div>  ' +
  '                       </div>  ' +
  '                       <div class="col-md-12">  ' +
  '                           <h2>  ' +
  '                               <span class="quote"><img src="/images/icon-quote.png" class="img-responsive" /></span>  ' +
  '                               Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaqu unde omnis iste natus set  ' +
  '                           </h2>  ' +
  '                           <div class="prof-img">  ' +
  '                               <img src="/images/Thumbnail.png" class="img-responsive" />  ' +
  '                               <p>  ' +
  '                                   Marc Snow<br /><span>HR</span>  ' +
  '                               </p>  ' +
  '                           </div>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '           </div>  ' +
  '       </section>  ' +
  '       <section class="section5" id="pricing">  ' +
  '       	<div class="container">  ' +
  '           	<div class="row">  ' +
  '               	<div class="col-md-12">  ' +
  '                   	<h1>Plans For All Types Of Recruiters</h1>  ' +
  '                       <h2>See all that AbleMeeting can do for you with a 14-day free trial</h2>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '               <div class="row">  ' +
  '               	<div class="col-sm-4">  ' +
  '                   	<div class="boxes dot-bord">  ' +
  '                       	<h3>  ' +
  '                           	Starter<br/>$15/mo  ' +
  '                           </h3>  ' +
  '                           <a href="#">Try for Free</a>  ' +
  '                           <ul>  ' +
  '                           	<li>Easily schedule interviews between candidates and interviewers</li>  ' +
  '                               <li>Up to 10 active positions   </li>                           ' +
  '                               <li>Unlimited archived positions     </li>                         ' +
  '                               <li>Dashboard with metrics and reporting  </li>                            ' +
  '                               <li>All emails to Candidate and Interviewer come from the Recruiter </li>                            ' +
  '                               <li>Automated Event Notifications When An Interview Status Changes </li>                       ' +
  '                               <li>Schedule interviews for four unique venues (In Person, Skype, Phone, or Zoom)</li>  ' +
  '                           </ul>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '                   <div class="col-sm-4">  ' +
  '                   	<div class="boxes">  ' +
  '                       	<div class="stickers"><img src="/images/sticker.png" class="img-responsive" /></div>  ' +
  '                       	<h3>  ' +
  '                           	Power Pack<br/>$25/mo  ' +
  '                           </h3>  ' +
  '                           <a href="#">Try for Free</a>  ' +
  '                           <ul>  ' +
  '                           	<li>Includes all features in the Starter plan</li>  ' +
  '                               <li>Up to 30 active positions  </li>                            ' +
  '                               <li>Access to new features first    </li>                          ' +
  '                               <li>More to Come</li>  ' +
  '                           </ul>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '                   <div class="col-sm-4">  ' +
  '                   	<div class="boxes dot-bord">  ' +
  '                       	<h3>  ' +
  '                           	Enterprise<br/><span>Contact Us for Price</span>  ' +
  '                           </h3>  ' +
  '                           <a href="#">Contact Us</a>  ' +
  '                           <ul>  ' +
  '                           	<li>All features in “Power Pack” Plan</li>  ' +
  '                               <li>Managerial Dashboard</li>                              ' +
  '                               <li>Designed For Teams</li>                       ' +
  '                               <li>User Management</li>  ' +
  '     ' +
  '     ' +
  '                           </ul>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '           </div>  ' +
  '       </section>  ' +
  '       <section class="section6">  ' +
  '       	<div class="container">  ' +
  '           	<div class="row">  ' +
  '               	<div class="col-md-12">  ' +
  '                   	<h1>Give interviewers and candidates a<br class="hidden-xs">  ' +
  '                        better scheduling experience</h1>  ' +
  '                       <a href="#">Get Started Today</a>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '           </div>  ' +
  '       </section>  ' +
  '       <footer>  ' +
  '       	<div class="container">  ' +
  '           	<div class="row">  ' +
  '               	<div class="col-sm-4">  ' +
  '                   	<div class="box1">  ' +
  '                       	<p>© 2018 AbleMeeting</p>  ' +
  '                           <a href="#">Sign Up</a>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '                   <div class="col-sm-2">  ' +
  '                   	<div class="box2">  ' +
  '                       	<h1>Company</h1>  ' +
  '                           <ul>  ' +
  '                           	<li><a href="#">Blog</a></li>  ' +
  '                           	<li><a href="#">Features</a></li>  ' +
  '                           	<li><a href="#">Contact Us</a></li>  ' +
  '                           </ul>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '                   <div class="col-sm-2">  ' +
  '                   	<div class="box2">  ' +
  '                       	<h1>Legal</h1>  ' +
  '                           <ul>  ' +
  '                           	<li><a href="#">Privacy Policy</a></li>  ' +
  '                           	<li><a href="#">Terms & Conditions</a></li>                    ' +
  '                           </ul>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '                   <div class="col-sm-3">  ' +
  '                   	<div class="box3">  ' +
  '                       	<h1>Social Media</h1>  ' +
  '                           <ul>  ' +
  '                           	<li><a href="#"><span class="fa fa-facebook-f"></span></a></li>  ' +
  '                           	<li><a href="#"><span class="fa fa-youtube-play"></span></a></li>  ' +
  '                           	<li><a href="#"><span class="fa fa-twitter"></span></a></li>  ' +
  '                           	<li><a href="#"><span class="fa fa-linkedin"></span></a></li>  ' +
  '                           </ul>  ' +
  '                       </div>  ' +
  '                   </div>  ' +
  '               </div>  ' +
  '           </div>  ' +
  '       </footer>  ' +
  '   </div>   ' +
  '     ' +
  '     ' +
  '   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>   ' +
  '   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>  ' +
  '   <script src="/js/slick.min.js"> </script>  ' +
  '   <script>  ' +
  '$( document ).ready(function() {' +
  'console.log( "ready!" );' +
  '});' +
  '   </script>  ' +
  '   </body>  ' +
  '   </html>  '

var template = { __html: __html }

@withI18n()
@connect(({ loading }) => ({ loading }))
@Form.create()
class Login extends PureComponent {
  handleOk = () => {
    const { dispatch, form } = this.props
    const { validateFieldsAndScroll } = form
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return
      }
      dispatch({ type: 'login/login', payload: values })
    })
  }

  state = {
    visible: true,
  }

  render() {
    const { loading, form, i18n } = this.props
    const { getFieldDecorator } = form

    let footerLinks = [
      {
        key: 'github',
        title: <Icon type="github" />,
        href: 'https://github.com/zuiidea/antd-admin',
        blankTarget: true,
      },
    ]

    if (config.i18n) {
      footerLinks = footerLinks.concat(
        config.i18n.languages.map(item => ({
          key: item.key,
          title: (
            <span onClick={setLocale.bind(null, item.key)}>{item.title}</span>
          ),
        }))
      )
    }

    return (
      <Fragment>
        <div dangerouslySetInnerHTML={template} />
        <Modal
          visible={this.state.visible}
          style={{ backgroundColor: '#FFFFF' }}
          onCancel={() => this.setState({ visible: false })}
          footer={[]}
        >
          <div className={styles.form} id="login">
            <div className={styles.logo}>
              <img alt="logo" src={config.logoPath} />
            </div>
            <form>
              <FormItem hasFeedback>
                {getFieldDecorator('username', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(
                  <Input
                    onPressEnter={this.handleOk}
                    placeholder={i18n.t`Username`}
                  />
                )}
              </FormItem>
              <FormItem hasFeedback>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                    },
                  ],
                })(
                  <Input
                    type="password"
                    onPressEnter={this.handleOk}
                    placeholder={i18n.t`Password`}
                  />
                )}
              </FormItem>
              <Row>
                <Button
                  type="primary"
                  onClick={this.handleOk}
                  loading={loading.effects.login}
                >
                  <Trans>Sign in</Trans>
                </Button>
                <p>
                  <span>
                    <Trans>Username</Trans>
                    ：guest
                  </span>
                  <span>
                    <Trans>Password</Trans>
                    ：guest
                  </span>
                </p>
              </Row>
            </form>
          </div>
        </Modal>
      </Fragment>
    )
  }
}

Login.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default Login
