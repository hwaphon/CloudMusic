function secondToTime (total) {
  let minute = (Math.floor(total / 60)).toString()
  let second = (Math.floor(total % 60)).toString()

  minute = minute.length > 1 ? minute : `0${ minute }`
  second = second.length > 1 ? second : `0${ second }`
  return `${minute}:${second}`
}

export default secondToTime
