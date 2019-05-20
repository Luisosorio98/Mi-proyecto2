const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadesSchema = new Schema({
  nombre: String,
  tipo: String,
  descripcion: String,
  fecha: String,
  Actividades:
    {
      type: Schema.Types.ObjectId,
      ref: "Temas"
    }

});

var Actividades = mongoose.model("Temas", ActividadesSchema);
module.exports = Actividades;
