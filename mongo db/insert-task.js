db.movies.insertMany([{title: "Fight Club", writer: "Chuck Palahniuk", year: 1999, actors: ["Brad Pitt", "EEdward Norton"]},
... {title: "Pulp Fiction", writer: "Quentin Tarantino", year: 1994, actors: ["John Travolta", "Uma Thurman"]},
... {title: "Inglorius Basterds", writer: "Quentin Tarantino", year: 2009, actors: ["Brad Pitt", "Diane Kruger", "Eli Roth"]},
... {title: "The Hobbit: An Unexpected Journey", writer: "J.R.R. Tolkein", year: 2012, franchise: "The Hobbit"},
... {title: "The Hobbit: The Desolation of smug", writer: "J.R.R. Tolkein", year: 2013, franchise: "The Hobbit"},
... {title: "The Hobbit: The Battle of the Five Armies", writer: "J.R.R. Tolkein", year: 2012, franchise: "The Hobbit",
... synopsis: "Bilbo and Company are forced to engage in a war against an array of combatants and keep the the lonely mountains from falling into the hands of a rising darkness."},
... {title: "Pee Wee Herman's Big Adventure"}, {title: "Avatar"}]);
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62ad77b1066c739c48ed331b"),
                ObjectId("62ad77b1066c739c48ed331c"),
                ObjectId("62ad77b1066c739c48ed331d"),
                ObjectId("62ad77b1066c739c48ed331e"),
                ObjectId("62ad77b1066c739c48ed331f"),
                ObjectId("62ad77b1066c739c48ed3320"),
                ObjectId("62ad77b1066c739c48ed3321"),
                ObjectId("62ad77b1066c739c48ed3322")
        ]
}


 db.movies.find({}).pretty();
{
        "_id" : ObjectId("62ad77b1066c739c48ed331b"),
        "title" : "Fight Club",
        "writer" : "Chuck Palahniuk",
        "year" : 1999,
        "actors" : [
                "Brad Pitt",
                "EEdward Norton"
        ]
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed331c"),
        "title" : "Pulp Fiction",
        "writer" : "Quentin Tarantino",
        "year" : 1994,
        "actors" : [
                "John Travolta",
                "Uma Thurman"
        ]
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed331d"),
        "title" : "Inglorius Basterds",
        "writer" : "Quentin Tarantino",
        "year" : 2009,
        "actors" : [
                "Brad Pitt",
                "Diane Kruger",
                "Eli Roth"
        ]
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed331e"),
        "title" : "The Hobbit: An Unexpected Journey",
        "writer" : "J.R.R. Tolkein",
        "year" : 2012,
        "franchise" : "The Hobbit"
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed331f"),
        "title" : "The Hobbit: The Desolation of smug",
        "writer" : "J.R.R. Tolkein",
        "year" : 2013,
        "franchise" : "The Hobbit"
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed3320"),
        "title" : "The Hobbit: The Battle of the Five Armies",
        "writer" : "J.R.R. Tolkein",
        "year" : 2012,
        "franchise" : "The Hobbit",
        "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the the lonely mountains from falling into the hands of a rising darkness."
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed3321"),
        "title" : "Pee Wee Herman's Big Adventure"
}
{ "_id" : ObjectId("62ad77b1066c739c48ed3322"), "title" : "Avatar" }

db.movies.find({writer:"Quentin Tarantino"}).pretty();
{
        "_id" : ObjectId("62ad77b1066c739c48ed331c"),
        "title" : "Pulp Fiction",
        "writer" : "Quentin Tarantino",
        "year" : 1994,
        "actors" : [
                "John Travolta",
                "Uma Thurman"
        ]
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed331d"),
        "title" : "Inglorius Basterds",
        "writer" : "Quentin Tarantino",
        "year" : 2009,
        "actors" : [
                "Brad Pitt",
                "Diane Kruger",
                "Eli Roth"
        ]
}

db.movies.find({actors:"Brad Pitt"}).pretty();
{
        "_id" : ObjectId("62ad77b1066c739c48ed331b"),
        "title" : "Fight Club",
        "writer" : "Chuck Palahniuk",
        "year" : 1999,
        "actors" : [
                "Brad Pitt",
                "EEdward Norton"
        ]
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed331d"),
        "title" : "Inglorius Basterds",
        "writer" : "Quentin Tarantino",
        "year" : 2009,
        "actors" : [
                "Brad Pitt",
                "Diane Kruger",
                "Eli Roth"
        ]
}

db.movies.find({franchise : "The Hobbit"}).pretty();
{
        "_id" : ObjectId("62ad77b1066c739c48ed331e"),
        "title" : "The Hobbit: An Unexpected Journey",
        "writer" : "J.R.R. Tolkein",
        "year" : 2012,
        "franchise" : "The Hobbit"
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed331f"),
        "title" : "The Hobbit: The Desolation of smug",
        "writer" : "J.R.R. Tolkein",
        "year" : 2013,
        "franchise" : "The Hobbit"
}
{
        "_id" : ObjectId("62ad77b1066c739c48ed3320"),
        "title" : "The Hobbit: The Battle of the Five Armies",
        "writer" : "J.R.R. Tolkein",
        "year" : 2012,
        "franchise" : "The Hobbit",
        "synopsis" : "Bilbo and Company are forced to engage in a war against an array of combatants and keep the the lonely mountains from falling into the hands of a rising darkness."
}
db.movies.find({$and: [{year: {$gt: 1900}}, {year: {$lt: 2000}}]},{title:1,_id:0}).pretty();
{ "title" : "Fight Club" }
{ "title" : "Pulp Fiction" }

db.movies.find({$or:[{year:{$lt:2000}},{year:{$gt:2010}}]},{title:1,_id:0}).pretty();
{ "title" : "Fight Club" }
{ "title" : "Pulp Fiction" }
{ "title" : "The Hobbit: An Unexpected Journey" }
{ "title" : "The Hobbit: The Desolation of smug" }
{ "title" : "The Hobbit: The Battle of the Five Armies" }
