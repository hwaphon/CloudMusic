import _ from 'underscore'
import axios from 'axios'
const NETWORK = 'http://localhost:4000'

const APILIST = {
  CELLPHPNE: '/login/cellphone?',
  BANNER: '/banner',
  DETAIL: '/user/detail?',
  RECOMMENDRESOURCE: '/personalized',
  RECOMMENDSONG: '/recommend/songs'
}

function params(uri, args) {
  let result = NETWORK + uri
  let arr = _.pairs(args)
  let len = arr.length

  for(let i = 0; i < len; i++) {
    if (i !== 0) {
      result += '&'
    }
    result += `${arr[i][0]}=${arr[i][1]}`
  }
  return result
}

function request (url, resolve) {
  axios.get(url)
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default {
  cellphone (pm, callback) {
    return request(params(APILIST.CELLPHPNE, pm), callback)
  },
  banner (callback) {
    return request(params(APILIST.BANNER), callback)
  },
  detail (pm, callback) {
    return request(params(APILIST.DETAIL, pm), callback)
  },
  recommendResource (callback) {
    return request(params(APILIST.RECOMMENDRESOURCE), callback)
  },
  recommendSongs (callback) {
    return request(params(APILIST.RECOMMENDSONG), callback)
  }
}
