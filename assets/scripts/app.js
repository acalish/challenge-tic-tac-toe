'use strict'

const gameArray = ['', '', '', '', '', '', '', '', '']
let currentUser = 'X'

const alternateUser = function () {
  if (currentUser === 'X') {
    currentUser = 'O'
  } else {
    currentUser = 'X'
  }
}

const updateGame = function () {
  $('.cell').on('click', function (event) {
    if (gameArray[event.target.id] === '') {
      gameArray[event.target.id] = currentUser
      $(event.target).text(currentUser)
      alternateUser()
    }
  })
}

const playGame = function () {
  updateGame()
}

playGame()
