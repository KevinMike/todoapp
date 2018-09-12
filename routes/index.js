var express = require('express');
var router = express.Router();
var Task = require('../dal/task');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/task', function(req, res, next) {
    Task.list().then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send('Error, please try again ',err).status(500);
    })
});

router.post('/task', function(req, res, next) {
    Task.create({name : req.body.name})
    .then(data => {
        res.send({
            message : 'Record created succesfully',
            result : {
                _id : data._id,
                name : data.name
            }
        });
    })
    .catch(err=>{
        res.send('Error, please try again ',err).status(500);
    })

});

router.delete('/task/:id', function(req, res, next) {
    Task.remove({_id : req.params.id})
    .then(data => {
        if(data.n > 0) res.send({message: 'Record deleted succesfully'});
        res.send({message: 'No record deleted'});
    })
    .catch(err=>{
        res.send('Error, please try again ',err).status(500);
    })
});



module.exports = router;
