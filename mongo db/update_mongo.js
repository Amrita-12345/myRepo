//update 
db.movies.update({ title: 'The Hobbit: An Unexpected Journey' }, 
{ $set: { synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug." } });
 WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
{
    "_id" : ObjectId("62ad77b1066c739c48ed331e"),
    "title" : "The Hobbit: An Unexpected Journey",
    "writer" : "J.R.R. Tolkein",
    "year" : 2012,
    "franchise" : "The Hobbit",
    "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
}


db.movies.update({ title : "The Hobbit: The Desolation of smug"}, { $set: { synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring." } });
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
{
    "_id" : ObjectId("62ad77b1066c739c48ed331f"),
    "title" : "The Hobbit: The Desolation of smug",
    "writer" : "J.R.R. Tolkein",
    "year" : 2013,
    "franchise" : "The Hobbit",
    "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
}

db.movies.update({ title: 'Pulp Fiction' }, { $push: { actors: 'Samuel L. Jackson' } });
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
{
    "_id" : ObjectId("62ad77b1066c739c48ed331c"),
    "title" : "Pulp Fiction",
    "writer" : "Quentin Tarantino",
    "year" : 1994,
    "actors" : [
            "John Travolta",
            "Uma Thurman",
            "Samuel L. Jackson"
    ]
}
//Text Search
db.movies.find({"synopsis":{"$regex":"Bilbo"}},{title:1,synopsis:1,_id:0}).pretty();
{
        "title" : "The Hobbit: An Unexpected Journey",
        "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
}
{
        "title" : "The Hobbit: The Desolation of smug",
        "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
}
{
        "title" : "The Hobbit: The Battle of the Five Armies",
        "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the the lonely mountains from falling into the hands of a rising darkness."
}
db.movies.find({"synopsis":{"$regex":"Gandalf"}},{title:1,synopsis:1,_id:0}).pretty();
{
        "title" : "The Hobbit: The Desolation of smug",
        "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
}
db.movies.find({"synopsis":{"$regex":"Bilbo",$not:{"$regex":"Gandalf"}}},{title:1,synopsis:1,_id:0}).pretty();
{
        "title" : "The Hobbit: An Unexpected Journey",
        "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
}
{
        "title" : "The Hobbit: The Battle of the Five Armies",
        "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the the lonely mountains from falling into the hands of a rising darkness."
}
db.movies.find({"$or":[{"synopsis":{"$regex":"dwarves"}},{"synopsis":{"$regex":"hobbit"}}]},{title:1,synopsis:1,_id:0}).pretty();
{
        "title" : "The Hobbit: An Unexpected Journey",
        "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
}
{
        "title" : "The Hobbit: The Desolation of smug",
        "synopsis" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
}
db.movies.find({"$and":[{"synopsis":{"$regex":"gold"}},{"synopsis":{"$regex":"dragon"}}]},{title:1,synopsis:1,_id:0}).pretty();
{
        "title" : "The Hobbit: An Unexpected Journey",
        "synopsis" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
}

//Delete documents
db.movies.deleteMany({ title: "Pee Wee Herman's Big Adventure" });
{ "acknowledged" : true, "deletedCount" : 1 }
db.movies.deleteMany({ title: "Avatar" });
{ "acknowledged" : true, "deletedCount" : 1 }
db.movies.find({},{title:1,_id:0}).pretty();
{ "title" : "Fight Club" }
{ "title" : "Pulp Fiction" }
{ "title" : "Inglorius Basterds" }
{ "title" : "The Hobbit: An Unexpected Journey" }
{ "title" : "The Hobbit: The Desolation of smug" }
{ "title" : "The Hobbit: The Battle of the Five Armies" }

//Relationships
//users collection
db.users.insertMany([{"username":"GoodGuyGreg","first_name":"Good Guy", "last_name" : "Greg"},{ "username" : "ScumbagSteve", "full_name" :   {"first" : "Scumbag"  , "last" : "Steve"}}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62b0abe3967866aa1e957546"),
                ObjectId("62b0abe3967866aa1e957547")
        ]
}

// posts collections
db.posts.insertMany([{"username":"GoodGuyGreg","title" :" Passes out at party", "body" :" Wakes up early and cleans house"},{"username":"GoodGuyGreg","title" :"Steals your identity", "body" :"Raises your credit score"},{"username":"GoodGuyGreg","title" :" Reports a bug in your code", "body" :" Sends you a Pull Request"},{"username":"ScumbagSteve","title" :" Borrows something", "body" :"Sells it"},{"username":"ScumbagSteve","title" :"Borrows everything", "body" :"The end"},{"username":"ScumbagSteve","title" :"Forks your repo on github", "body" :"Sets to private"}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62b0acab967866aa1e957548"),
                ObjectId("62b0acab967866aa1e957549"),
                ObjectId("62b0acab967866aa1e95754a"),
                ObjectId("62b0acab967866aa1e95754b"),
                ObjectId("62b0acab967866aa1e95754c"),
                ObjectId("62b0acab967866aa1e95754d")
        ]
}

//comments collection
db.comments.insertMany([
    ... {
    ... username: "GoodGuyGreg",
    ... comment: "Hope you got a good deal!",
    ... post: ObjectId("5f44d3a148197d7749864def")
    ... },
    ... {
    ... username: "GoodGuyGreg",
    ... comment: "Don't violate the licensing agreement!",
    ... post: ObjectId("5f44d3a148197d7749864df0")
    ... },
    ... {
    ... username: "GoodGuyGreg",
    ... comment: "Don't violate the licensing agreement!",
    ... post: ObjectId("5f44d3a148197d7749864df1")
    ... },
    ... {
    ... username: "ScumbagSteve",
    ... comment: "It still isn't clean",
    ... post: ObjectId("5f44d3a148197d7749864dec")
    ... },
    ... {
    ... username: "ScumbagSteve",
    ... comment: "Denied your PR cause I found a hack",
    ... post: ObjectId("5f44d3a148197d7749864dee")
    ... }
    ... ]);
    {
            "acknowledged" : true,
            "insertedIds" : [
                    ObjectId("62b0afe5967866aa1e95754e"),
                    ObjectId("62b0afe5967866aa1e95754f"),
                    ObjectId("62b0afe5967866aa1e957550"),
                    ObjectId("62b0afe5967866aa1e957551"),
                    ObjectId("62b0afe5967866aa1e957552")
            ]
    }


// find users 
db.users.find().pretty();
{
        "_id" : ObjectId("62b0abe3967866aa1e957546"),
        "username" : "GoodGuyGreg",
        "first_name" : "Good Guy",
        "last_name" : "Greg"
}
{
        "_id" : ObjectId("62b0abe3967866aa1e957547"),
        "username" : "ScumbagSteve",
        "full_name" : {
                "first" : "Scumbag",
                "last" : "Steve"
        }
}
// find posts 
> db.posts.find().pretty();
{
        "_id" : ObjectId("62b0acab967866aa1e957548"),
        "username" : "GoodGuyGreg",
        "title" : " Passes out at party",
        "body" : " Wakes up early and cleans house"
}
{
        "_id" : ObjectId("62b0acab967866aa1e957549"),
        "username" : "GoodGuyGreg",
        "title" : "Steals your identity",
        "body" : "Raises your credit score"
}
{
        "_id" : ObjectId("62b0acab967866aa1e95754a"),
        "username" : "GoodGuyGreg",
        "title" : " Reports a bug in your code",
        "body" : " Sends you a Pull Request"
}
{
        "_id" : ObjectId("62b0acab967866aa1e95754b"),
        "username" : "ScumbagSteve",
        "title" : " Borrows something",
        "body" : "Sells it"
}
{
        "_id" : ObjectId("62b0acab967866aa1e95754c"),
        "username" : "ScumbagSteve",
        "title" : "Borrows everything",
        "body" : "The end"
}
{
        "_id" : ObjectId("62b0acab967866aa1e95754d"),
        "username" : "ScumbagSteve",
        "title" : "Forks your repo on github",
        "body" : "Sets to private"
}

//  
db.posts.find({ username: 'GoodGuyGreg' }).pretty();
{
        "_id" : ObjectId("62b0acab967866aa1e957548"),
        "username" : "GoodGuyGreg",
        "title" : " Passes out at party",
        "body" : " Wakes up early and cleans house"
}
{
        "_id" : ObjectId("62b0acab967866aa1e957549"),
        "username" : "GoodGuyGreg",
        "title" : "Steals your identity",
        "body" : "Raises your credit score"
}
{
        "_id" : ObjectId("62b0acab967866aa1e95754a"),
        "username" : "GoodGuyGreg",
        "title" : " Reports a bug in your code",
        "body" : " Sends you a Pull Request"
}

db.posts.find({ username: 'ScumbagSteve' }).pretty();
{
        "_id" : ObjectId("62b0acab967866aa1e95754b"),
        "username" : "ScumbagSteve",
        "title" : " Borrows something",
        "body" : "Sells it"
}
{
        "_id" : ObjectId("62b0acab967866aa1e95754c"),
        "username" : "ScumbagSteve",
        "title" : "Borrows everything",
        "body" : "The end"
}
{
        "_id" : ObjectId("62b0acab967866aa1e95754d"),
        "username" : "ScumbagSteve",
        "title" : "Forks your repo on github",
        "body" : "Sets to private"
} 

db.comments.find().pretty();
{
        "_id" : ObjectId("62b0afe5967866aa1e95754e"),
        "username" : "GoodGuyGreg",
        "comment" : "Hope you got a good deal!",
        "post" : ObjectId("5f44d3a148197d7749864def")
}
{
        "_id" : ObjectId("62b0afe5967866aa1e95754f"),
        "username" : "GoodGuyGreg",
        "comment" : "Don't violate the licensing agreement!",
        "post" : ObjectId("5f44d3a148197d7749864df0")
}
{
        "_id" : ObjectId("62b0afe5967866aa1e957550"),
        "username" : "GoodGuyGreg",
        "comment" : "Don't violate the licensing agreement!",
        "post" : ObjectId("5f44d3a148197d7749864df1")
}
{
        "_id" : ObjectId("62b0afe5967866aa1e957551"),
        "username" : "ScumbagSteve",
        "comment" : "It still isn't clean",
        "post" : ObjectId("5f44d3a148197d7749864dec")
}
{
        "_id" : ObjectId("62b0afe5967866aa1e957552"),
        "username" : "ScumbagSteve",
        "comment" : "Denied your PR cause I found a hack",
        "post" : ObjectId("5f44d3a148197d7749864dee")
}

db.comments.find({ username: 'GoodGuyGreg' }).pretty();
{
    "_id" : ObjectId("62b0afe5967866aa1e95754e"),
    "username" : "GoodGuyGreg",
    "comment" : "Hope you got a good deal!",
    "post" : ObjectId("5f44d3a148197d7749864def")
}
{
    "_id" : ObjectId("62b0afe5967866aa1e95754f"),
    "username" : "GoodGuyGreg",
    "comment" : "Don't violate the licensing agreement!",
    "post" : ObjectId("5f44d3a148197d7749864df0")
}
{
    "_id" : ObjectId("62b0afe5967866aa1e957550"),
    "username" : "GoodGuyGreg",
    "comment" : "Don't violate the licensing agreement!",
    "post" : ObjectId("5f44d3a148197d7749864df1")
}

db.comments.find({ username: 'ScumbagSteve' }).pretty();
{
    "_id" : ObjectId("62b0afe5967866aa1e957551"),
    "username" : "ScumbagSteve",
    "comment" : "It still isn't clean",
    "post" : ObjectId("5f44d3a148197d7749864dec")
}
{
    "_id" : ObjectId("62b0afe5967866aa1e957552"),
    "username" : "ScumbagSteve",
    "comment" : "Denied your PR cause I found a hack",
    "post" : ObjectId("5f44d3a148197d7749864dee")
}


