const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')


// create application/json parser 
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

let User = []

router.get('/', (req, res) => {
  res.send(User)
})

router.post('/',jsonParser,(req, res, body) => {
  let data = req.body
  let flag = false
  if (User.length == 0) {
      User.push(data)
  } else {
      User.forEach((item) => {
          if (data.id == item.id) {
              flag = true
          }
      })
      if(!flag){
          User.push(data)
      }
  }
  res.json(User)

})

router.delete('/:id', (req, res, body) => {
  let {id} = req.params
  User = User.filter((item) => {
      return item.product.key !== Number(id);
    });

  res.json(User)

})

module.exports = router

