import _ from 'underscore'
const NETWORK = 'http://localhost:4000'

const APILIST = {
  CELLPHPNE: '/login/cellphone?',
  BANNER: '/banner'
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

export default {
  cellphone (phone, password) {
    return params(APILIST.CELLPHPNE, { phone, password })
  },
  banner () {
    return NETWORK + APILIST.BANNER
  }
}
