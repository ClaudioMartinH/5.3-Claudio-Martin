use("opticaCulAmpolla");

db.getCollection("client").insertOne({
  name: "Client Name",
  data: {
    address: "Right Street, 123",
    telephone: 67891235,
    email: "email@email.com",
    register_date: new Date("2023-09-23"),
  },
  last_shoppings: [
    {
      brand: "Rayban",
      graduation_L: 2.3,
      graduation_R: 2.0,
      glass_color_L: null, 
      glass_color_R: null, 
      frame: "Metalic",
      prize: 127.0
    }
  ]
})