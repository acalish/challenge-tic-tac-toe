'use strict'

const gameArray = ['', '', '', '', '', '', '', '', '']
let currentUser = 'X'

const alternateUser = function () {
  if (currentUser === 'X') {
    currentUser = 'O'
  } else {
    currentUser = 'X'
  }
  return currentUser
}

const updateGame = function () {
  $('.cell').on('click', function (event) {
    if (gameArray[event.target.id] === '') {
      gameArray[event.target.id] = currentUser
      $(event.target).text(currentUser)
      currentUser = alternateUser(currentUser)
    }
  })
}

const playGame = function () {
  updateGame()
}

playGame()

module.exports = {
  alternateUser,
  currentUser
}
