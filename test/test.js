// write a test to validate how users alternate
// want to test that the input to alternateUser is opposite of output

const assert = require('assert')
const app = require('../assets/scripts/app.js')

let currentUser = 'X'
let previousUser = 'O'

const alternateUser = function (previousUser) {
  if (previousUser === 'X') {
    currentUser = 'O'
  } else {
    currentUser = 'X'
  }
  return currentUser
}

// describe('turns', function () {
//   describe('alternateUser()', function () {
//     it('should fail', function () {
//       alternateUser(previousUser).should.equal(currentUser)
//       alternateUser(currentUser).should.equal(previousUser)
//     })
//   })
// })

describe('turns', function () {
  describe('alternateUser()', function () {
    it('currentUser to be O', function () {
      app.alternateUser(currentUser).should.equal('O')
    })
  })
})
