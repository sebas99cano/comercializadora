const Electrodomestico = require("./electrodomestico");

class Televisor extends Electrodomestico {
  constructor(consumo, procedencia, tamano, istdt) {
    super(consumo, procedencia);
    this.precio = super.calcularPrecio();
    this.tamano = tamano;
    this.istdt = istdt;
  }

  calcularPrecio() { 
    this.precio = this.tamano > 40 ? this.precio * 0.3 + this.precio : this.precio;
    this.precio = this.istdt ? (this.precio += 250000) : this.precio;
  }
}

module.exports = Televisor;
