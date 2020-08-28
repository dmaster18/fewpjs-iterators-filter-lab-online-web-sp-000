// Code your solution here
function findMatching(drivers, string) {
  let matchingDrivers = drivers.filter(d => d.toLowerCase() === string.toLowerCase())
  return matchingDrivers;
}

function fuzzyMatch(drivers, string) {
  const matchingDrivers = drivers.filter(function(driver) {
    for (let i = 0; i < string.length; i++) {
      driver.toLowerCase().charAt(i) === string.toLowerCase().charAt(i);
      }
    })
    return matchingDrivers;
  }
