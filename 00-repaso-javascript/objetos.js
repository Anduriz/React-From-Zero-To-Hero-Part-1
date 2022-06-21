let miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2022,

    detalleDelAuto: function(){
        console.log(`aUTO ${this.modelo} ${this.annio}`);
    }
 
};


function auto(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autoNuevo = new auto("Tesla", "Model X ", 2022);