var mongoose = require('mongoose')

var heroSchema = mongoose.Schema({
    title: String,
    avatar: String,
    desc: String,
    created:{
        type:Date,
        default:Date.now
    }
})

module.exports.Hero = mongoose.model("Hero", heroSchema)
