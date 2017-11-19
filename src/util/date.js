function toWeek (n) {
  let result = ''
  switch (n) {
    case 0:
      result = '星期日'
      break;
    case 1:
      result = '星期一'
      break
    case 2:
      result = '星期二'
      break
    case 3:
      result = '星期三'
      break
    case 4:
      result = '星期四'
      break
    case 5:
      result = '星期五'
      break
    case 6:
      result = '星期六'
      break
    default:
      break
  }
  return result
}

export default toWeek
