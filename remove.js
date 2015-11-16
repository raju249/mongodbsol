var db = process.argv[2];
var name = process.argv[3];
var id = process.argv[4]
var url = "mongodb://localhost:27017/"+db;
var mongo = require('mongodb').MongoClient

mongo.connect(url,function(err,db){
    if (err) throw err
    var collections = db.collection(name)
    
    collections.remove({
        _id:id
    },function(err){
        if (err) throw err
        db.close();
    })
})