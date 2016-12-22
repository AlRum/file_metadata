
var express = require("express")
var multer = require("multer")
var upload = multer({ dest: 'uploads/' })
var bodyParser = require('body-parser');

var app = express()

app.use(express.static('index'))

app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.post('/size', upload.single('file'), function (req, res, next) {
        //var resObject = new Object()
        //resObject.size = 
        
        res.send(JSON.stringify(req.file.size))

})


app.listen(8080)