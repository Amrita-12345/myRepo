db.posts.aggregate([
    ...     {
    ...     $match: { "title" : " Reports a bug in your code" }
    ...     },
    ...     {
    ...     $lookup: {
    ...     from: 'comments',
    ...     localField: '_id',
    ...     foreignField: 'post',
    ...     as: 'comments'
    ...     }
    ...     }
    ...     ]).pretty();
    {
            "_id" : ObjectId("62b0acab967866aa1e95754a"),
            "username" : "GoodGuyGreg",
            "title" : " Reports a bug in your code",
            "body" : " Sends you a Pull Request",
            "comments" : [
                    {
                            "_id" : ObjectId("62b31cdd277a41f1d848be92"),
                            "username" : "ScumbagSteve",
                            "comment" : "Denied your PR cause I found a hack",
                            "post" : ObjectId("62b0acab967866aa1e95754a")
                    }
            ]
    }

  
     