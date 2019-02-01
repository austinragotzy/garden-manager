var mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var SALT_WORK_FACTOR = 10

//define model
var User = new mongoose.Schema({
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    name: {type: String}
})

User.pre('save', function(next){
    var user = this
    // if password is not changed just break out
    if(!user.isModified('password')){
        return next
    }
    // salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err){
            return next(err)
        }
        //hash with salt
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err){
                return next(err)
            }
            //override password with hashed
            user.password = hash
            next()
        })
    })

}) 
//########################################################################
//promise paractice stuff
// serSchema.methods.comparePassword = function(candidatePassword) {
//     return new Promise((resolve, reject) => {
//         bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//             if (err) reject(err);
//             else resolve(isMatch)
//         });
//     })
// };

// serSchema.methods.comparePassword = function(candidatePassword, cb) {
//     bcrypt.compare(candidatePassword, this.password)
//         .then(isMatch => {
//             return isMatch
//         })
//         .catch(err => {
//             return err
//         })
// };
//############################################################################

User.methods.comparePassword = async function(candidatePassword, cb) {
    try{
        var isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch
    }catch(err){
        return err
    } 
};

module.exports = mongoose.model('User', User)
