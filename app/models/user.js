let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
password: { type: String, required: true, trim: true }
}) ;
module.exports = mongoose.model('users', userSchema);