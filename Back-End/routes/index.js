var express = require('express');
const { route } = require('./users');
var router = express.Router();

let users = [
  {
    email:"abc@gmail,com",password:"password"
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to Backend Dev")
});

router.post('/login',(req,res)=>
{
  let result = users.find(user=>user.email === req.body.email);
  if(result)
  {
    if(result.password === req.body.password)
      {
        res.status(200).send({message:"login successful"})
      }
      else
      {
        res.status(200).send({message:"password incorrect"})
      }
  }
  else
  {
    res.status(200).send({message:"user doesn't exist"})
  }
})

module.exports = router;
