use(menjarADomicili);

db.getCollection("Order").insertOne({
  shop: "Food for couch potates",
  confirmed_order_id: "",
})