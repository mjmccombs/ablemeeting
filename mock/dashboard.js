import { Mock, Constant } from './_utils'
const axios = require('axios')
const { ApiPrefix, Color } = Constant

// MAIN DASHBOARD
const Dashboard = Mock.mock({
  'sales|12': [
    {
      'name|+1': 'Week',
      'Interviews Initiated|1-25': 1,
      'Objectives Completed|150-300': 1,
      'Interviews Completed|1-25': 1,
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
  // 'completed|12': [
  //   {
  //     'name|+1': 2011,
  //     'Our company|500-1000': 1,
  //     'Our competition|100-400': 1,
  //   },
  // ],
  'comments|5': [
    {
      name: '@last',
      'status|3': 1,
      content: 'Company Name',
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
        return ` ${Mock.Random.date('MM-dd')} ${Mock.Random.time('HH')}`
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
        )} ${Mock.Random.time('HH')}`
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
    axios
      .get(process.env.URL + 'interview/findByManagerID/UNIQUEUSERID1')
      .then(response => {
        const interviews = response.data

        var recentSales = []
        var comments = []
        var avatar = 'http://dummyimage.com/48x48/79a9f2/757575.png&text='

        for (let index = 0; index < interviews.length; index++) {
          const interview = interviews[index]
          var recentSale = {}

          if (interview.status == 'Awaiting Candidate') recentSale.status = 2
          else recentSale.status = 4

          recentSale.name = interview.name
          recentSale.date = interview.date

          recentSales.push(recentSale)
        }

        for (let index = 0; index < interviews.length; index++) {
          const interview = interviews[index]
          var comment = {}

          if (interview.status == 'Awaiting Candidate') comment.status = 2
          else comment.status = 3

          comment.name = interview.name
          comment.date = interview.date
          comment.avatar = avatar + interview.name[0]
          comment.content = interview.company

          comments.push(comment)
        }

        Dashboard.recentSales = recentSales
        Dashboard.comments = comments
        res.json(Dashboard)
      })
      .catch(error => {
        console.log(error)
      })
  },
}
