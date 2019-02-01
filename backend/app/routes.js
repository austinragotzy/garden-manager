var User = require('./models/user')

module.exports = function(app){
    // server routing ########################################################
    // route for createing user ##############################################
    app.post('/join', async function(req, res) {
        console.log(req)
        var user = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }
        try{
            var me = await User.create(user)
            res.send(me)
        }catch(err){
            //will put this error or what ever in page as a pretty message to user
            res.status(400).send(err)
        }
    })
    app.get('/login', async function(req, res) {
        console.log("thats wrong")
    })
}