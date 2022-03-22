export const $dealtime = (date, showtime = false) => {
    function setTwo(value) {
      if (value < 10) {
        return '0' + value
      } else {
        return value
      }
    }
    //输入时间
    let mytime = new Date(date);
    let myYear = setTwo(mytime.getFullYear());
    let myMonth = setTwo(mytime.getMonth() + 1);
    let myDay = setTwo(mytime.getDate());
    let myHours = setTwo(mytime.getHours());
    let myMinutes = setTwo(mytime.getMinutes());
    let temp = `${myYear}-${myMonth}-${myDay}`
    if (showtime) {
      temp = `${myYear}-${myMonth}-${myDay} ${myHours}:${myMinutes}`
    }
    return temp
  }