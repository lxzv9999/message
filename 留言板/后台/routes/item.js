var express = require('express');
var router = express.Router();
var mysql= require('mysql'); 
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '123456'
});
router.post('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var a=req.body.cc;
    var b=req.body.bb;
    connection.query('INSERT INTO message.message_table(name,content) VALUES("'+a+'","'+b+'")', function(err, rows, fields) {
        res.send(rows);
    });
});

router.get('/detail', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    connection.query('SELECT * FROM message.message_table', function(err, rows, fields) {
        res.send(rows)
    })
});


router.post('/delete', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var id=req.body.cc;
    console.log(id);
    connection.query('DELETE FROM message.message_table WHERE id='+id, function(err, rows, fields) {
        res.send(rows)
    })
});







module.exports = router;
