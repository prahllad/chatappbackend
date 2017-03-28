let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let msgSchema = new Schema({
    sender: { type: String, required: true, trim: true },
    reciver: { type: String,required: true, trim: true },
    message: { type: String, required: true, trim: true }
}) ;
module.exports = mongoose.model('chatlog', msgSchema);
