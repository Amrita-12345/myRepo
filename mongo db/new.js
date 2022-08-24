db.comments.insertMany(
    [{
    username : "GoodGuyGreg",
    comment : "Hope you got a good deal!",
    post : ObjectId("62b0acab967866aa1e95754b")
    },
    {
    username : "GoodGuyGreg",
    comment : "What's mine is yours! ",
    post :  ObjectId("62b0acab967866aa1e95754c")
    },
    {
    username : "GoodGuyGreg",
    comment : "Don't violate the licensing agreement! ",
    post : ObjectId("62b0acab967866aa1e95754d")
    },
    {
    username : "ScumbagSteve",
    comment : "It still isn't clean",
    post : ObjectId("62b0acab967866aa1e957548"),
    },
    {
    username : "ScumbagSteve",
    comment : "Denied your PR cause I found a hack",
    post : ObjectId("62b0acab967866aa1e95754a")
    }]);
    {
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("62b31cdd277a41f1d848be8e"),
                ObjectId("62b31cdd277a41f1d848be8f"),
                ObjectId("62b31cdd277a41f1d848be90"),
                ObjectId("62b31cdd277a41f1d848be91"),
                ObjectId("62b31cdd277a41f1d848be92")
        ]

    }