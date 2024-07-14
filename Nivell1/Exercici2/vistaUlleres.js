use("opticaCulAmpolla");

db.getCollection("ulleres").insertOne({
  brand: "Brand",
  frame: "Metallic",
  provider: {
    name: "Googles Associated SL",
    address: "",
    nif: "",
  },
  price: 105.75,
  bought_by: [
    {
      name: "Client 1",
    },
    {
      name: "Client 2",
    },
    {
      name: "Client 3",
    },
  ],
});
