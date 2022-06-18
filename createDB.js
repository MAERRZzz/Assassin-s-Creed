// const MongoClient = require("mongodb").MongoClient;

// const url = "mongodb://localhost:27017/";
// const mongoClient = new MongoClient(url);
// var data = require("./data.js").data
// // Подключаемся к серверу
// mongoClient.connect(function (err, client) {
//     // обращаемся к базе данных admin
//     const db = client.db("AC");
//     db.dropDatabase();
//     var collection = db.collection("heroes");
//     collection.insertMany(data, function (err, result) {
//         client.close();
//     })
// })
var async = require('async');

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/AC')
var Hero = require("./models/hero").Hero

mongoose.connection.on("open",function(){
    var db = mongoose.connection.db
    db.dropDatabase(function(err){
        if(err) throw err

        async.parallel([
            function(callback){
                var pig = new Hero({nick:"pig"})
                pig.save(function(err,pig){
                    callback(err,"pig")
                })
            },
            function(callback){
                var vinni = new Hero({nick:"vinni"})
                vinni.save(function(err,vinni){
                    callback(err,"vinni")
                })
            },
            function(callback){
                var sova = new Hero({nick:"sova"})
                sova.save(function(err,sova){
                    callback(err,"sova")
                })
            }
        ],
        function(err,result){
            if(err){
                console.log(err)
            } else {
                console.log("Успешно созданы герои с никами: " +result.join(", "))
            }
            mongoose.disconnect()
        })
    })
})







