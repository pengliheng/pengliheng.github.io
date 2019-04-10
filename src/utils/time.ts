export function timeUtils(time: string) {
  const res = new Date() - new Date(time)
  if (res < 60 * 1000 * 60) {
    return (res / (60 * 1000)).toFixed(0) + '分钟'
  } else if (res < 60 * 1000 * 60 * 24) {
    return (res / (60 * 1000 * 60)).toFixed(0) + '小时'
  } else if (res < 60 * 1000 * 60 * 24 * 30) {
    return (res / (60 * 1000 * 60 * 24)).toFixed(0) + '天'
  } else if (res < 60 * 1000 * 60 * 24 * 30 * 12) {
    return (res / (60 * 1000 * 60 * 24 * 30)).toFixed(0) + '个月'
  } else {
    return (res / (60 * 1000 * 60 * 24 * 30 * 12)).toFixed(0) + '年前'
  }
}
