var url = "mongodb://localhost:27017/learnyoumongo"
var mongo = require('mongodb').MongoClient

var age = process.argv[2]
mongo.connect(url,function(err,db){
    if (err) throw err
    var par = db.collection('parrots');
    par.count({
        age:{$gt:+age}
    },function(err,data){
        if (err) throw err
        console.log(data);
        db.close()
    })
})