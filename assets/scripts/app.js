'use strict'

$(() => {
  $('.cell').on('click', function (event) {
    console.log('you clicked', event.target.id)
  })
})
