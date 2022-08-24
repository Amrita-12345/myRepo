db.orders.insertMany([
    { _id: 1, item: "almonds", price: 12, quantity: 2 },
    { _id: 2, item: "pecans", price: 20, quantity: 1 },
    { _id: 3 },
  ]);
  
  db.inventory.insertMany([
    { _id: 1, sku: "almonds", description: "product 1", instock: 120 },
    { _id: 2, sku: "bread", description: "product 2", instock: 80 },
    { _id: 3, sku: "cashews", description: "product 3", instock: 60 },
    { _id: 4, sku: "pecans", description: "product 4", instock: 70 },
    { _id: 5, sku: null, description: "Incomplete" },
    { _id: 6 },
  ]);
  
  db.orders.aggregate([
    {
      $lookup: {
        from: "inventory",
        localField: "item",
        foreignField: "sku",
        as: "inventory_docs",
      },
    },
  ]);