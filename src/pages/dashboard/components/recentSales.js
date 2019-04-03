import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { Table, Tag } from 'antd'
import { Color } from 'utils'
import styles from './recentSales.less'

const location = {
  1: {
    text: 'Starbucks',
  },
}

const status = {
  1: {
    color: Color.green,
    text: 'SCHEDULED',
  },
  2: {
    color: Color.yellow,
    text: 'PENDING',
  },
  3: {
    color: Color.red,
    text: 'UNSCHEDULED',
  },
  4: {
    color: Color.blue,
    text: 'POSTPONED',
  },
}

function RecentSales({ data }) {
  const columns = [
    {
      title: 'NAME',
      dataIndex: 'name',
    },
    {
      title: 'COMPANY',
      // dataIndex: 'location',
      // render: text => <Tag>{location.text}</Tag>,
      // render: text => <Tag color={status[text].color}>{status[text].text}</Tag>,
    },
    {
      title: 'DATE',
      dataIndex: 'date',
      render: text => moment(text).format('MM-DD'),
    },
  ]
  return (
    <div className={styles.recentsales}>
      <Table
        pagination={false}
        columns={columns}
        rowKey={(record, key) => key}
        dataSource={data.filter((item, key) => key < 5)}
      />
    </div>
  )
}

RecentSales.propTypes = {
  data: PropTypes.array,
}

export default RecentSales
