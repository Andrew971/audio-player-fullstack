const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// // create application/json parser 
// var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser 
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

//bcrypt code 
let password = '123456'
let passwordHashed = ""
const saltRounds = 10

let secretkey ="secretKey"
let userDB = []

router.use(bodyParser.json())

router.post('/signup', (req, res) => {
  const { username, password } = req.body
  bcrypt.hash(password, saltRounds).then
    ((hash) => {

      userDB.push({ username, hash })
      console.log(userDB)

    })

  res.send('thanks for your sign up')

})

router.post('/login', (req, res) => {
  const { username, password } = req.body
  let user = userDB.find((user) => {
    return user.username === username
  })
  if (user) {
    bcrypt.compare(password, user.hash).then((result) => {
      if (result) {
        
          //If we have a valid user, create jwt token with
          //the secret key
          let token = jwt.sign({
            username
          }, secretkey)
          //send the token back to the user
          res.json({ token })
        }
        //if the result is false, send back a null token
        else res.json({ token: null })
      })
    //If we didn't find the user, send back a null token
  } else {
    res.json({ token: null })
  }
})

router.get('/signout', (req, res) => {
  const { token } = req.headers.authorization

  //Could do something with token like invalidate
  //a session id. Any server-side security that we would
  //want to do knowing that the user is now signed out

  res.json({signedout: true})
})


module.exports = router
