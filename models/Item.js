const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creando Schema
const ItemSchema = new Schema(
  {
    sku: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    cantidad: {
      type: String,
      required: true,
    },
    precio: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
    },
    imagen: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = Item = mongoose.model("item", ItemSchema);
