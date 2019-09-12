var express = require('express');
var router = express.Router();
const https = require("https");
var request = require('request');

var User = require('../modals/user.js');
User.methods(['get', 'put', 'post','delete']);
User.register(router, '/user');



var Notes = require('../modals/notes.js');
Notes.methods(['get', 'put', 'post','delete']);
Notes.register(router, '/notes');



router.put('/updateData', function (req, res) {
    console.log("datavalue in body",req.body);


Notes.update({ _id: req.body.id },{myNotes:req.body.data},function (err, response) {
    if (err) throw err;
    else {
        console.log("data", response);
        res.setHeader('Content-Type', 'application/json');
        res.json({data: response});
    }
});
})


router.delete('/deleteData', function (req, res) {
    console.log("idddddddddd", req.headers.id);
    Notes.deleteOne({ _id: req.headers.id },function (err, response) {
        if (err) throw err;
        else {
            console.log("data",response);
            res.setHeader('Content-Type', 'application/json');
            res.json({ data: response });
        }
    })


});

module.exports = router;