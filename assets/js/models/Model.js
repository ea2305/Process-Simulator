/*
    Manejo de algoritmos y kernel
*/

function Model(){
    //this.modeProcess = 1;//Selecciona el tipo de algoritmo
    this.method = null;
    this.option = 1;
    this.Time = 2000;
}

Model.prototype.setOption = function(option){
    this.option = option;
}

Model.prototype.getMethod = function(){
    return this.method;
}

//Retorna el tiempo de espera para la simulacion
Model.prototype.getTime = function () {
    return this.Time
}

Model.prototype.exec = function(){

        switch (this.option) {

        case '1':
            console.log(" Va a cargar FSFC");
            this.method = new FCFS(this);
            break;
        case '2':
            console.log(" Va a cargar SJF");
            this.method = new SJF(this);
            break;
        case '3':
            console.log(" Va a cargar SRTF");
            this.method = new SRTF(this);
            break;
        case '4':
            console.log(" Va a cargar RR");
            this.method = new RR(this);
            break;
        case '5':
            console.log(" Va a cargar Pryority");
            this.method = new Priority(this);
            break;
        case '6':
            console.log(" Va a cargar multilevel");
            this.method = new Multilevel(this);
            break;
        default:
          console.log("Esta cargando el default");
            this.method = new FCFS();
    }
    //Lanzamos la el algoritmo
    //Lanzamos la el algoritmo
    this.method.start()
}

Model.prototype.stop = function(){
    this.method.stop();
}
