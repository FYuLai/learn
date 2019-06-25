const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const path = require('path')
app.use(function(req,res,next){
  console.log('1');
  next()
})

app.use(function(req,res,next){
  console.log('2');
  next()
})
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
// app.get('/', function(req, res) {
//   res.send('Hello, express');
// })

// app.get('/users/:name', function(req, res) {
//   res.send('heelo,' + req.params.name);
// })

// app.use('/', indexRouter);
// app.use('/users', userRouter);
indexRouter(app);
app.listen(3000);
