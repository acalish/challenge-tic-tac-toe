'use strict'

const gA = ['', '', '', '', '', '', '', '', '']
let currentUser = 'X'

// check winning scenarios - 8 winning combinations
// look at gameArray, see who won

const winningCombos = [[0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const combination = function (array) {
  if (gA[array[0]] === gA[array[1]] && gA[array[1]] === gA[array[2]] && gA[array[1]] !== '') {
    return true
  } else return false
}

const haveWinner = function (winningCombos) {
  let result = false
  for (let i = 0; i < winningCombos.length; i++) {
    if (combination(winningCombos[i])) {
      result = true
    }
  }
  return result
}

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
    if (gA[event.target.id] === '') {
      gA[event.target.id] = currentUser
      $(event.target).text(currentUser)
      currentUser = alternateUser(currentUser)
    }
    haveWinner(winningCombos)
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
