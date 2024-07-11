export default class Cl_Articulo {
    constructor(cod, cost, p) {
        this.codigo = cod;
        this.costo = cost;
        this.precio = p;
    }

    //metodos
    set codigo(cod) {
        this._codigo = cod;
    }

    get codigo() {
        return this._codigo;
    }

    set costo(cost) {
        this._costo = cost;
    }

    get costo() {
        return this._costo;
    }

    set precio(p) {
        this._precio = p;
    }

    get precio() {
        return this._precio;
    }
}