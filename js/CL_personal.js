export default class CL_personal {
    constructor(p, t) {
        this.pago = p;
        this.tipoP = t;
    }
    set pago (p) {
        this._pago = p;
    }
    get pago() {
        return this._pago;
    }
    set tipoP (t) {
        this._tipoP = t;
    }
    get tipoP() {
        return this._tipoP;
    }
}