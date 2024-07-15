import mongoose from "mongoose";
import data from "../json/opticaCulAmpolla.json" assert { type: "json" };


const supplierSchema = new mongoose.Schema({
  id_supplier: { type: String, required: true },
  name: { type: String, required: true },
  address: {
    street: String,
    number: Number,
    floor: Number,
    door: String,
    city: String,
    postal_code: Number,
    country: String
  },
  phone_number: String,
  fax: String,
  nif: String,
  brand: {
    name: String
  }
});

const googleSchema = new mongoose.Schema({
  id_google: { type: String, required: true },
  brand: {
    name: String
  },
  prescriptionL: Number,
  prescriptionR: Number,
  colorL: String,
  colorR: String,
  frame: {
    type: { type: String, enum: ["Pasta", "Metalica", "Flotante"] },
    color: String
  },
  prize: Number,
  supplier: { type: String, ref: "Supplier" }
});

const customerSchema = new mongoose.Schema({
  id_customer: { type: String, required: true },
  name: { type: String, required: true },
  address: {
    street: String,
    number: Number,
    floor: Number,
    door: String,
    city: String,
    postal_code: Number,
    country: String
  },
  email: String,
  phone_number: String,
  registered_since: Date,
  recommended_by: { type: String, ref: "Customer" }
});


const employeeSchema = new mongoose.Schema({
  id_employee: { type: String, required: true },
  name: { type: String, required: true },
  surname: String,
  nif: String
});


const orderSchema = new mongoose.Schema({
  date_order: { type: Date, required: true },
  items: [{ type: String, ref: "Google" }],
  subtotal: Number,
  employee: { type: String, ref: "Employee" }
});


const Supplier = mongoose.model("Supplier", supplierSchema);
const Google = mongoose.model("Google", googleSchema);
const Customer = mongoose.model("Customer", customerSchema);
const Employee = mongoose.model("Employee", employeeSchema);
const Order = mongoose.model("Order", orderSchema);

async function loadData() {
  try {
    await mongoose.connect("mongodb://localhost:27017/optica", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    await Supplier.insertMany(data.suppliers);
    await Google.insertMany(data.googles);
    await Customer.insertMany(data.customers);
    await Employee.insertMany(data.employees);
    await Order.insertMany(data.orders);

    console.log("Datos insertados correctamente.");

  } catch (error) {
    console.error("Error al cargar datos:", error);
  } finally {
    await mongoose.disconnect();
  }
}

loadData();
