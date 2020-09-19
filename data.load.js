
const axios = require('axios');

const instance = axios.create({
  baseURL: 'https://api.github.com',
})

const defaultProps = {
  // access_token: '0a37364c218cfa9b2943f448d503742daf32e45d'
}

/**
 * 加载collection辅助函数
 * @param {String} curl 
 * @param {Function} callback 
 * @param {Object} params 
 */
module.exports = async (curl, callback, params = {}) => {
  const { data } = await instance.get(curl, {
    params: {...defaultProps, ...params }
  })
  const edges = [],
  dataWrapper = Array.isArray(data) ? data : [data];

  console.log("数据请求数:", dataWrapper.length, "条");

  for (const item of dataWrapper) {
    edges.push(callback? callback(item): item) 
  }

  return edges
}