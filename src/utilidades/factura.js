class Factura{
    constructor() {
        this.listaProductos = [];
    }
    insertarProducto(producto){
        this.listaProductos.push(producto);
    }    

    mostrarFactura(){
        let valorTotal = 0;
        this.listaProductos.forEach(function(i){
            valorTotal += i.precio;
        });

        console.log(valorTotal, "Valor total");
        console.log(this.listaProductos);
    }

    eliminar(){
        this.listaProductos = [];
    }
}

module.exports = Factura;