const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const getDateString = (month, year) => {
  let mon = month < 1 ? 1 : month
  if (mon > 12) { mon = 12 }
  return `${monthNames[mon - 1]} ${year}`
}
