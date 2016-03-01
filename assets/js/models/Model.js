function Model(){

    this.modeProcess = 1;//Selecciona el tipo de algoritmo
    this.Time = 5000;

}

Model.prototype.start = function startGeneration(){
    count = 0//contador de procesos

    makeProcess = new Procesos //instancia de generador de procesos
    queueProc = new Queue //instacia de cola de procesos

    //Obtencion de cola de procesos por medio de intervalos
    var timerProcess = setInterval(() => {
        if (makeProcess.isProcess()){ //? obtiene probabilidad
            queueProc.queue.push(makeProcess.getNewPCB("pC_" + (count++)))
        }

        console.log(queueProc.queue);
    },this.Time)
}

Model.prototype.exec = function execAlgoritm(option){
//Harcodeado no hagan caso de esto :v
    switch (option) {
        case 1:
            A = new FCFS(this);
            break;
        case 2:
            //A = new SJF(this);
            break;
        case 3:
            //A = new SRTF(this);
            break;
        case 4:
            //A = new RR(this);
            break;
        case 5:
            //A = new Priority(this);
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
