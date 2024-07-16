use("opticaCulAmpolla");

db.getCollection("client").insertOne({
  name: "Client Name",
  address: {
    street: "Right Street",
    number: 123,
    city: "City C",
    postal_code: 24680,
    country: "Country C",
  },
  phone_number: "678921235",
  email: "email@email.com",
  registered_since: "2023-09-23",
  recommended_by: null,
  last_shoppings: [
    {
      brand: "Rayban",
      lens_graduation: {
        left: 2.3,
        right: 2.0,
      },
      lens_color: {
        left: "Color1",
        right: "Color2",
      },
      frame_type: "Metallic",
      price: 127.0,
      provider: {
        name: "Googles Associated SL",
        address: {
          street: "Entença",
          number: 45,
          floor: 2,
          door: "1",
          city: "Barcelona",
          postal_code: 12345,
          country: "Spain",
        },
        phone_number: "654789321",
        fax: "936669933",
        nif: "B12345678",
      },
    },
  ],
});
