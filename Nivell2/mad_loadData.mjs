import mongoose from "mongoose";
import data from "./menjarADomicili.json" assert { type: "json"};

const clientSchema = new mongoose.Schema({
  id_client: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  address: {
    street: String,
    number: Number
  },
  postal_code: Number,
  city: String,
  province: String,
  phone_number: Number,
  orders_made: [
    { type: String, ref: "Order"}
  ]
});

const productSchema = new mongoose.Schema({
  id_product: { type: String, required: true },
  category: { type: String, enum: ["Pizza", "Hamburguer", "Drink"] },
  name: String,
  description: String,
  image: String,
  prize: Number,
});

const orderSchema = new mongoose.Schema({
  id_order: { type: String, required: true },
  order_time: {type: Date, required: true},
  order_type: { type: String, enum: ["Delivery", "Local"], required: true},
  delivered_by: { type: String, ref: "Employee"},
  when_delivered: Date,
  order_details: [{
    product_id: { type: String, ref: "Product"}
  }],
  order_amount: Number,
  customer_info: String,
  order_status: { type: String, enum: ["Delivered", "On the way", "On preparation"]},
  order_payment: { type: String, enum: ["Paid", "Pending"]},
  shop: [{ type: String, ref: "Shop"}]
});

const employeeSchema = new mongoose.Schema({
  id_employee: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  nif: { type: String, required: true },
  duty: {type: String, enum: ["Delivery", "Cook", "Counter"]}
});
const shopSchema = new mongoose.Schema({
  id_shop: { type: String, required: true},
  address: { type: String, required: true},
  postal_code: Number,
  city: { type: String, required: true},
  province: String,
  employees: [
    {type: String, ref: "Employee"}
  ]
});

const Client = mongoose.model("Client", clientSchema);
const Product = mongoose.model("Product", productSchema);
const Order = mongoose.model("Order", orderSchema);
const Employee = mongoose.model("Employee", employeeSchema);
const Shop = mongoose.model("Shop", shopSchema);

async function loadData() {
  try {
    await mongoose.connect("mongodb://localhost:27017/menjar", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Client.insertMany(data.clients);
    await Product.insertMany(data.products);
    await Order.insertMany(data.orders);
    await Employee.insertMany(data.employees);
    await Shop.insertMany(data.shops);

    console.log("Datos cargados correctamente en Base de Datos");
    
  } catch (error) {
    console.error("Error cargando los datos en la base de datos", error);    
  } finally {
    await mongoose.disconnect();
  }
}

loadData();