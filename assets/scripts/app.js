'use strict'

$(() => {
  // initialize game with empty array
  const gameArray = ['', '', '', '', '', '', '', '', '']
  let currentUser = 'X'

  $('.cell').on('click', function (event) {
    console.log('clicked', event.target.id)
    // check if cell has been clicked before
    if (gameArray[event.target.id] === '') {
      // add current user into array
      gameArray[event.target.id] = currentUser
      console.log(gameArray)
      // alternate users
      if (currentUser === 'X') {
        $(event.target).text('X')
        currentUser = 'O'
      } else {
        $(event.target).text('O')
        currentUser = 'X'
      }
    }
  })
})
