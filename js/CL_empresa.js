export default class CL_empresa {
    constructor() {
     this.contObre = 0;
     this.acumPagoObre = 0;
     this.contADM = 0;
     this.acumPagoADM = 0;
    }
    procesarpersonal (per) {
        if (per.tipoP == 'obrero') {
            this.contObre++;
            this.acumPagoObre += per.pago;
        } else if (per.tipoP == 'administrativo') {
            this.contADM++;
            this.acumPagoADM += per.pago;
        }
 }
      pagoObre () {
        return this.acumPagoObre;
    }
      promedioObre () {
        return this.acumPagoObre / this.contObre;
    }
      pagoADM () {
        return this.acumPagoADM;
    }
      promedioADM () {
        return this.acumPagoADM / this.contADM;
    }

}