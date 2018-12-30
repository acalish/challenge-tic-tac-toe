'use strict'

const gamelogic = require('./gamelogic.js')

$(() => {
  $('.cell').on('click', function (event) {
    console.log('you clicked', event.target.id)
    gamelogic.alternateUser()
  })
})
