import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    'id|+1': 1,
    title: '@sentence(3, 8)',
    'status|1': ['published', 'draft', 'deleted'],
    author: '@name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)',
    'position|1-3': {
      '110000': '北京市',
      '120000': '天津市',
      '130000': '河北省',
      '140000': '山西省'
    }
  }]
})

export default [
  {
    url: '/api/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
