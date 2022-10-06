const express = require('express')
require('dotenv').config()
const app = express();
app.use(express.json({ limit: '200mb' }));
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
  res.json({
    success:"some body asked\n"
  })
})
app.post('/selam',(req,res)=>{
  res.json({
    try:"wellocome to the jungle",
    success:"some body asked\n"
  })
})
app.post('/:route', (req, res) => {
  console.log(req.body);
  try {
    const handler = require(`./handler/${req.params.route}`);
    if (!handler) {
      return res.status(400).json({
        message: 'not found'
      })
    }
    handler(req, res);
  }
  catch (e) {
    return res.status(400).json({
      message: 'unexpected error occured'
    })
  }
})
app.listen(3000,
  () => {
    console.log("on the moon")
  });