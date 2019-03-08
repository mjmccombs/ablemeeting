import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { router } from 'utils'
import { connect } from 'dva'
import { Row, Col, Button, Popconfirm } from 'antd'
import { withI18n } from '@lingui/react'
import { Page } from 'components'
import { stringify } from 'qs'

import Modal from './components/Modal'

class User extends PureComponent {
  render() {
    const modalProps = this.props.modalProps

    return <Modal {...modalProps} toggleForm={this.props.toggleForm} />
  }
}

export default User
