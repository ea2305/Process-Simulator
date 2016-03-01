function Model(){

    this.modeProcess = 1;//Selecciona el tipo de algoritmo

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
    },5000)
}

Model.prototype.exec = function execAlgoritm(){
    a = new FCFS
    a.start()
}
