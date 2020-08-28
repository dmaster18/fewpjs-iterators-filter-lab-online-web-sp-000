// Code your solution here
function findMatching(drivers, string) {
  const matchingDrivers = drivers.filter(d => d.toLowerCase() === string.toLowerCase())
  return matchingDrivers
}

function fuzzyMatch (drivers, string) {
  const matchingDrivers = drivers.filter(d => d.toLowerCase().slice(0, string.length) === string.toLowerCase())
  return matchingDrivers
}

function matchName (drivers, string) {
  const matchingDrivers = drivers.filter(d => d.name.toLowerCase() === string.toLowerCase())
  return matchingDrivers
}
