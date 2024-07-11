export default class Cl_TodoPersona {
    constructor(){
        this.calcGanancia = 0;
        this.acumGanancia = 0;
        this.auxPrecio = 0;
        this.mayorPrecio = 0;
    }

    //metodos
    procesarArticulo(art) {
        this.calcGanancia = art.precio - art.costo;
        this.acumGanancia += this.calcGanancia;
        if (art.precio > this.auxPrecio) {
            this.auxPrecio = art.precio;
            this.mayorPrecio = art.codigo;
        }
    }
    devolverGanancia(){
        return this.acumGanancia;
    }
    devolverMayorPrecio() {
        return this.mayorPrecio;
    }
}