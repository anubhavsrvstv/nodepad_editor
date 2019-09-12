var restful = require('node-restful');
var mongoose = restful.mongoose;

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    }
},
{
    timestamps: {}
});

module.exports = restful.model('User', UserSchema);
