'use strict'

let currentUser = 'X'

const alternateUser = function () {
  if (currentUser === 'X') {
    currentUser = 'O'
  } else {
    currentUser = 'X'
  }
  console.log(currentUser)
}

module.exports = {
  alternateUser
}
