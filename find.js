var url = "mongodb://localhost:27017/learnyoumongo"
var mongo = require('mongodb').MongoClient

var arg = Number(process.argv[2]);
mongo.connect(url,function(err,db){
    if (err)
    {
        console.log(err);
    }
    else
    {
        var collection = db.collection('parrots');
        collection.find({
            age:{$gt : arg}
        }).toArray(function(err,docs){
            if (err)
            {
                console.log(err)
            }
            else
            {
                console.log(docs)
                db.close()
            }
        })
    }
})