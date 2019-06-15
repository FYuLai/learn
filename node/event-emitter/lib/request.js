const request =require('request');


module.exports = (url) => {
  request({
    url,
    json:true
  },(err,res,body) => {
    console.log('error:',err);
    req(body);
  })
}
