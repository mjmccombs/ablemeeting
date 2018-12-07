import { parse } from 'qs'
import modelExtend from 'dva-model-extend'
import { queryDashboard, queryWeather } from 'api'
import { pathMatchRegexp } from 'utils'
import { model } from 'utils/model'

export default modelExtend(model, {
  namespace: 'dashboard',
  state: {
    weather: {
      city: 'Stow, Ohio',
      temperature: '30',
      name: 'Temperate',
      icon: '//s5.sencdn.com/web/icons/3d_50/2.png',
    },
    sales: [],
    quote: {
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQb-Ays5FYHDtgkSzpNbJavrD0DBBkE268yl68zssXYv_DUzXd8Q',
    },
    numbers: [],
    recentSales: [],
    comments: [],
    completed: [],
    browser: [],
    cpu: {},
    user: {
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQb-Ays5FYHDtgkSzpNbJavrD0DBBkE268yl68zssXYv_DUzXd8Q',
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        if (
          pathMatchRegexp('/dashboard', pathname) ||
          pathMatchRegexp('/', pathname)
        ) {
          dispatch({ type: 'query' })
          dispatch({ type: 'queryWeather' })
        }
      })
    },
  },
  effects: {
    *query({ payload }, { call, put }) {
      const data = yield call(queryDashboard, parse(payload))
      yield put({
        type: 'updateState',
        payload: data,
      })
    },
    *queryWeather({ payload = {} }, { call, put }) {
      payload.location = 'shenzhen'
      const result = yield call(queryWeather, payload)
      const { success } = result
      if (success) {
        const data = result.results[0]
        const weather = {
          city: data.location.name,
          temperature: data.now.temperature,
          name: data.now.text,
          icon: `//s5.sencdn.com/web/icons/3d_50/${data.now.code}.png`,
        }
        yield put({
          type: 'updateState',
          payload: {
            weather,
          },
        })
      }
    },
  },
})
