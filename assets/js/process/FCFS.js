/*
    Implementacion de algorimo FCFS para simulacion de procesos
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/
function FCFS (){
    this.complete = []
    this.actully = 0
}

FCFS.prototype.start = function startProcess(){
    var timer = setInterval((e) => {
        this.check()
    },5000)
}

//Verificamos el esetado actual de la cola
FCFS.prototype.check = function checkOut(){
    if (queueProc.queue[0].ticks > 0){

        queueProc.queue[0].work()
        console.log(queueProc.queue[0]);

    }else{
        //Agregamos proceso a terminado
        this.complete.push(queueProc.queue[0])
        queueProc.queue.shift()//Removemos el elemento

        queueProc.queue[0].work()//Comenzamos a trabajar el otro proceso
        console.log(queueProc.queue[0]);
    }
}
