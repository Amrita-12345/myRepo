db.products
  .find({
    $or: [
      {
        price: 599,
      },
      {
        price: 699,
      },
    ],
  })
  .pretty();

// SELECT * FROM products WHERE price = 599 OR price = 699 \G

db.products
  .find(
    {
      $or: [
        {
          price: 599,
        },
        {
          price: 699,
        },
      ],
    },
    {
      name: 1,
      price: 1,
    }
  )
  .pretty();

// SELECT _id, name, price FROM products WHERE price = 599 OR price = 699 \G

db.products
  .find({
    price: {
      $in: [599, 699],
    },
  })
  .pretty();

// SELECT * FROM products WHERE price IN (599, 699) \G