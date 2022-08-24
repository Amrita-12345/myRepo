 use restro
switched to db restro

 db.createCollection('restaurants')
{ "ok" : 1 }

 db.resturants.insertMany([{
...   "address": {
...      "building": "1007",
...      "coord": [ -73.856077, 40.848447 ],
...      "street": "Morris Park Ave",
...      "zipcode": "10462"
...   },
...   "borough": "Bronx",
...   "cuisine": "Bakery",
...   "grades": [
...      { "date": { "$date": 1393804800000 }, "grade": "A", "score": 2 },
...      { "date": { "$date": 1378857600000 }, "grade": "A", "score": 6 },
...      { "date": { "$date": 1358985600000 }, "grade": "A", "score": 10 },
...      { "date": { "$date": 1322006400000 }, "grade": "A", "score": 9 },
...      { "date": { "$date": 1299715200000 }, "grade": "B", "score": 14 }
...   ],
...   "name": "Morris Park Bake Shop",
...   "restaurant_id": "30075445"
... }])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62d00baa4f5d68e03cf518af")
        ]
}
//find all documents
db.resturants.find().pretty();
{ "_id" : ObjectId("62d00b844f5d68e03cf518ae") }
{
        "_id" : ObjectId("62d00baa4f5d68e03cf518af"),
        "address" : {
                "building" : "1007",
                "coord" : [
                        -73.856077,
                        40.848447
                ],
                "street" : "Morris Park Ave",
                "zipcode" : "10462"
        },
        "borough" : "Bronx",
        "cuisine" : "Bakery",
        "grades" : [
                {
                        "date" : {
                                "$date" : 1393804800000
                        },
                        "grade" : "A",
                        "score" : 2
                },
                {
                        "date" : {
                                "$date" : 1378857600000
                        },
                        "grade" : "A",
                        "score" : 6
                },
                {
                        "date" : {
                                "$date" : 1358985600000
                        },
                        "grade" : "A",
                        "score" : 10
                },
                {
                        "date" : {
                                "$date" : 1322006400000
                        },
                        "grade" : "A",
                        "score" : 9
                },
                {
                        "date" : {
                                "$date" : 1299715200000
                        },
                        "grade" : "B",
                        "score" : 14
                }
        ],
        "name" : "Morris Park Bake Shop",
        "restaurant_id" : "30075445"
}

// display the fields restaurant_id, name, borough and cuisine for all the documents
db.resturants.find({},{restaurants_id:1,name:1,borough:1,cuisine:1})
