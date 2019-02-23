import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Button, Row, Form, Icon, Input, Modal } from 'antd'
import { GlobalFooter } from 'ant-design-pro'
import { Trans, withI18n } from '@lingui/react'
import { setLocale } from 'utils'
import config from 'utils/config'

import styles from './index.less'

import Home from '../../components/LandingPage'
const FormItem = Form.Item

@withI18n()
@connect(({ loading }) => ({ loading }))
@Form.create()
class Login extends PureComponent {

  constructor() {
    super()
    
    this.openLogin = this.openLogin.bind(this)
  }

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
    visible: false,
  }

  openLogin() {
    this.setState(
      {
        visible: !this.state.visible
      }
    )
  }

  signUpSheet() {
    console.log("practice makes perfect!")
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

        <Home openLogin={this.openLogin} signUpSheet={this.signUpSheet}/>

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
