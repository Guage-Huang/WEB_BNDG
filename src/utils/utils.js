const formatTime = (time) => {
  if (typeof time !== 'number' || time < 0) {
    return time
  }
  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = parseInt(time % 60)
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')
}
const formatLocation = (longitude, latitude) => {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

const getNewDate = (_type) => {
    const date = new Date()
    const conversionDate = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    const conversionTime = [date.getHours(), date.getMinutes()]

    //date.getSeconds()

    let formatDate = '';
    let formatTime = ''

    formatDate = conversionDate.map((n)=>{
      n = n.toString()
      return n[1] ? n : '0' + n
    }).join('-')

    formatTime = conversionTime.map((n) => {
      n = n.toString()
      return n[1] ? n : '0' + n
    }).join(':')

    if (_type == 'date'){
      return formatDate
    } else if (_type == 'time'){
      return formatTime
    }else{
      return formatDate + ' ' + formatTime
    }  
}

const getAsDate = (_type) => {
  const date = new Date()
  const conversionDate = [date.getFullYear(), date.getMonth() + 1, date.getDate() + 1]
  const conversionTime = [date.getHours(), date.getMinutes()]

  //date.getSeconds()

  let formatDate = '';
  let formatTime = ''

  formatDate = conversionDate.map((n)=>{
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join('-')

  formatTime = conversionTime.map((n) => {
    n = n.toString()
    return n[1] ? n : '0' + n
  }).join(':')

  if (_type == 'date'){
    return formatDate
  } else if (_type == 'time'){
    return formatTime
  }else{
    return formatDate + ' ' + formatTime
  }  
}





module.exports = {
  formatTime,
  formatLocation,
  getNewDate,
  getAsDate
}
