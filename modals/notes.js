var restful = require('node-restful');
var mongoose = restful.mongoose;

var NotesSchema = new mongoose.Schema({
    myNotes: {
        type: String,
        default: ""
    }
   
},
{
    timestamps: {}
});

module.exports = restful.model('Notes', NotesSchema);