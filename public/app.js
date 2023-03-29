// get user's data
// get user's coordinates


// get user's time


// helper functions
// check time of day


// build ads
// build ad 1


// build ad 2


// event listeners
// on load, build ads
function userTime(){
  return new Date().getHours();
}

function getMealTime() {
  const tod = userTime()
  return tod > 20 ? 'late night snack' :  tod > 16 ? 'dinner' : tod > 11 ? 'lunch' : 'breakfast'
}
console.log(getMealTime())

function buildAd1() {
  const mealTime = getMealTime()
  const div = document.querySelector('.ad1')
  const p = document.createElement('p')
  p.innerHTML = `We've got the best <span>${mealTime}</span> in town.`
  div.append(p)
}

function buildAd2(coords) {
  const href = `https://www.google.com/maps/search/coffee/@${coords[0]},${coords[1]},15z`
  const div = document.querySelector('.ad2')
  const p = document.createElement('p')
  p.innerHTML = `Coffee! <span> <a href = ${href}
  target='blank'>We're this close!</a> </span>`
  div.append(p)
}

async function getCoords() {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
  return position
}


window.onload = async () => {
  buildAd1()
  const coords = await getCoords()
  buildAd2(coords)
}