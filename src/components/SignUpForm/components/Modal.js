import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Input,
  InputNumber,
  Radio,
  Modal,
  Cascader,
  Button,
  Row,
} from 'antd'
import { Trans, withI18n } from '@lingui/react'
import city from 'utils/city'

const FormItem = Form.Item
import styles from '../../../pages/login/index.less'
import config from 'utils/config'

const formItemLayout = {
  labelCol: {
    span: 6,
  },
}
@withI18n()
@Form.create()
class UserModal extends PureComponent {
  handleOk = () => {
    const { item = {}, onOk, form } = this.props
    const { validateFields, getFieldsValue } = form

    validateFields(errors => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
        key: item.key,
      }

      console.log(data)
      onOk(data)
    })
  }

  render() {
    const { item = {}, onOk, form, i18n, ...modalProps } = this.props
    const { getFieldDecorator } = form

    return (
      <Modal {...modalProps} onCancel={this.props.toggleForm} footer={[]}>
        <div className={styles.logo}>
          <img alt="logo" src={config.logoPath} />
        </div>
        <Form layout="horizontal" style={{ height: 275, width: '100%' }}>
          <FormItem hasFeedback {...formItemLayout} style={{ width: '100%' }}>
            {getFieldDecorator('email', {
              initialValue: '',
              rules: [
                {
                  required: true,
                  pattern: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/,
                  message: i18n.t`The input is not valid E-mail!`,
                },
              ],
            })(<Input style={{ width: '100%' }} placeholder={i18n.t`Email`} />)}
          </FormItem>
          <FormItem hasFeedback {...formItemLayout}>
            {getFieldDecorator('password', {
              initialValue: '',
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
              style={{ width: '100%' }}
              type="primary"
              onClick={this.handleOk}
            >
              <Trans>Sign up</Trans>
            </Button>
          </Row>
        </Form>
      </Modal>
    )
  }
}

UserModal.propTypes = {
  type: PropTypes.string,
  item: PropTypes.object,
  onOk: PropTypes.func,
}

export default UserModal
