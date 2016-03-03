/*
    Manejo de algoritmos y kernel
*/

function Model(){
    this.modeProcess = 1;//Selecciona el tipo de algoritmo
    this.option = 1;
    this.Time = 5000;
}

Model.prototype.setOption = function(option){
    this.option = option;
}

//Retorna el tiempo de espera para la simulacion
Model.prototype.getTime = function () {
    return this.Time
}

Model.prototype.exec = function(){

    //Inicio de la simulacion

    //Seleccion del algoritmo
        switch (this.option) {
        case 1:
        console.log(" Va a cargar FSFC");

            A = new FCFS();
            break;
        case 2:
        console.log(" Va a cargar SJF");

            A = new SJF();
            break;
        case 3:
        console.log(" Va a cargar SRTF");

            A = new SRTF();
            break;
        case 4:
        console.log(" Va a cargar RR");

            A = new RR();
            break;
        case 5:
        console.log(" Va a cargar Pryority");

            A = new Priority();
            break;
        case 6:
        console.log(" Va a cargar multilevel");
            A = new Multilevel();
            break;
        default:
          console.log("Esta cargando el default");
            A = new FCFS();
    }
    //Lanzamos la el algoritmo
     A.start();
}
