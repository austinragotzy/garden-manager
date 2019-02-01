var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var mongoose = require('mongoose')
//var methodOverride = require('method-override')

var app = express()

var db = require('./config/db')

// set port we will be communicating on
var port = process.env.PORT || 4200

var htmlDir = path.join(__dirname, "../frontend/dist/gardenMon")


//connect to database
mongoose.connect(db.url)

//parser
app.use(bodyParser.json())
//app.use(bodyParser.json({ type: 'application/vnd.api+json' })) // may not need
app.use(bodyParser.urlencoded({ extended: true }))

//override
//app.use(methodOverride('X-HTTP-Method-Override')) //may not need

//set static file location
app.use(express.static(htmlDir))

// front end routeing ---- this is done here rest is in angular ###########
app.get('*', function(req, res){
    res.sendFile(htmlDir + '/index.html')
})

//route configs
require('./app/routes')(app)

//start it up
app.listen(port, function() {
    //report its happening
    console.log('open on port ' + port)
})



//export
exports = module.exports = app