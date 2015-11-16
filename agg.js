var url = "mongodb://localhost:27017/learnyoumongo"
var mongo = require('mongodb').MongoClient

var size = process.argv[2]

mongo.connect(url,function(err,db){
    if (err) throw err
    var prices = db.collection('prices');
    prices.aggregate([
            {$match:{size:size}},
                {$group:{
                    _id:'total',total:{
                        $avg:'$price'
                    }
                }}
            
        ]).toArray(function(err,res){
            if (err) throw err
            console.log(Number(res[0].total).toFixed(2))
            db.close()
        })
})