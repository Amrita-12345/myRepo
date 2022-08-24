db.posts
  .find([
    { $unwind: "$comments" },
    { $match: { title: "Coffee please.", "comments.description": "Cold" } },
    {
      $project: {
        title: 1,
        "comments.comment": 1,
      },
    },
  ])
  .pretty();