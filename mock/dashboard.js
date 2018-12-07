import { Mock, Constant } from './_utils'

const { ApiPrefix, Color } = Constant

const Dashboard = Mock.mock({
  'sales|8': [
    {
      'name|+1': 2011,
      'Meetings|100-150': 1,
      'Objectives Completed|150-300': 1,
      'Length(minutes)|30-180': 1,
    },
  ],
  cpu: {
    'usage|50-60': 1,
    space: 43,
    'cpu|40-90': 1,
    'data|20': [
      {
        'cpu|20-80': 1,
      },
    ],
  },
  browser: [
    {
      name: 'Google',
      percent: 43.3,
      status: 1,
    },
    {
      name: 'BubleUp',
      percent: 33.4,
      status: 3,
    },
    {
      name: 'Verizon',
      percent: 34.6,
      status: 3,
    },
    {
      name: 'Tesla',
      percent: 12.3,
      status: 4,
    },
    {
      name: 'GitHub',
      percent: 3.3,
      status: 2,
    },
    {
      name: 'Snapchat',
      percent: 2.53,
      status: 2,
    },
  ],
  user: {
    name: 'github',
    sales: 140,
    sold: 450,
  },
  'completed|12': [
    {
      'name|+1': 2011,
      'Our company|500-1000': 1,
      'Our competition|100-400': 1,
    },
  ],
  'comments|5': [
    {
      name: '@last',
      'status|3': 1,
      content: 'This will the section for short personal explanations of upcoming recruits.',
      avatar() {
        return Mock.Random.image(
          '48x48',
          Mock.Random.color(),
          '#757575',
          'png',
          this.name.substr(0, 1)
        )
      },
      date() {
        return ` ${Mock.Random.date(' ')} ${Mock.Random.time(
          ' '
        )}`
      },
    },
  ],
  'recentSales|36': [
    {
      'id|+1': 1,
      name: '@last',
      'status|1': 1,
      date() {
        return `${Mock.Random.integer(2019, 2019)}-${Mock.Random.date(
          'MM-dd'
        )} ${Mock.Random.time('HH:mm')}`
      },
      'price|10-200.1-2': 1,
    },
  ],
  quote: {
    name: 'Richard Branson',
    title: 'Founder of Virgin Group',
    content:
      "'Hiring the right people takes time, the right questions, and a healthy dose of curiosity.'",
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQb-Ays5FYHDtgkSzpNbJavrD0DBBkE268yl68zssXYv_DUzXd8Q',
  },
  numbers: [
    {
      icon: 'pay-circle-o',
      color: Color.green,
      title: 'Meetings scheduled',
      number: 126,
    },
    {
      icon: 'team',
      color: Color.blue,
      title: 'Waiting list',
      number: 59,
    },
    {
      icon: 'message',
      color: Color.purple,
      title: 'New Messages',
      number: 23,
    },
    {
      icon: 'shopping-cart',
      color: Color.red,
      title: 'Jobs Secured',
      number: 4325,
    },
  ],
})

module.exports = {
  [`GET ${ApiPrefix}/dashboard`](req, res) {
    res.json(Dashboard)
  },
}
