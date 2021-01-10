var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/browse', function(req, res, next) {
    var people = [
        { name: 'Yuka', courses: ["CPSC320","DSCI100", "JAPN200"]},
        { name: 'Yutong', courses: ["CPSC340"]},
        { name: 'Yingqi', courses: ["MATH320", "CPSC340" ]},
        { name: 'Duy', courses: ["CPSC310"]}
    ];
    try{
    res.render('browse', { title: 'Browse' , people: people});}
    catch(err){
        console.log(err)
    }
  });
  
  // Below are added by yingqi01

  router.get('/signin', function(req, res, next) {
    res.render('signin', { title: 'Sign In' });
  });
  router



module.exports = router;