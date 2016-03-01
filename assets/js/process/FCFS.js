/*
    Implementacion de algorimo FCFS para simulacion de procesos
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/
function FCFS (Model){
    this.Model = Model
    this.queue = new Queue();
    this.queue.priority = true;
    this.process = new Process(this.queue);
    this.complete = new Queue();
}

FCFS.prototype.start = function startProcess(){
    var timer = setInterval((e) => {
        this.check()
    },this.Model.getTime())
}

//Verificamos el esetado actual de la cola
FCFS.prototype.check = function checkOut(){

    console.log(this.complete);
    queueProc.wait()
    if (queueProc.queue[0].ticks > 0){

        queueProc.queue[0].work()
        console.log(queueProc.queue[0]);

    }else{
        //Agregamos proceso a terminado
        this.complete.push(queueProc.queue.shift())
        queueProc.queue[0].work()//Comenzamos a trabajar el otro proceso
        console.log(queueProc.queue[0]);
    }
}
