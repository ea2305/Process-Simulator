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
            A = new FCFS(this);
            break;
        case 2:
            A = new SJF(this);
            break;
        case 3:
            A = new SRTF(this);
            break;
        case 4:
            A = new RR(this);
            break;
        case 5:
            A = new Priority(this);
            break;
        case 6:
            //A = new MultiLevel(this);
            break;
        default:
            A = new FCFS(this);
    }
    //Lanzamos la el algoritmo
    A.start()
}
