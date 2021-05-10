var express = require('express');
const userHandler = require('../Handlers/userHandler');
const { route } = require('./users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to Backend Dev")
});

router.post('/login',(req,res)=>
{
  userHandler.ValidateUser(req.body).then((response)=>
  {
    res.status(200).send({message:response})
  })
})

module.exports = router;
