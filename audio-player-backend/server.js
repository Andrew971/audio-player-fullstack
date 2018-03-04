const express =require('express')
const app = express()
const port = 8080
const bcrypt = require('bcrypt')
const bodyParser = require('body-parser')
const Data = require('./Routes/data')
const Playlist = require('./Routes/playlist')
const User = require('./Routes/User')


app.use(express.static('public'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  next();
});


app.use('/data', Data)
app.use('/playlist', Playlist)
app.use('/', User)


app.listen(port, (req,ress)=>{
  console.log('i am running')
})