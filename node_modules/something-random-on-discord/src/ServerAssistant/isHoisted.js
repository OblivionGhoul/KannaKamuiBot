const isHoisted = (name) => {
  if(!name) return;
  return name.match(/[^a-zA-Z0-9]/g) ? true : false
}

module.exports = isHoisted;