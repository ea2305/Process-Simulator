/*
    Implementacion de algorimo FCFS para simulacion de procesos
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/
function FCFS(){
  //Instancia de una cola?
    this.queue = new Queue();
  //Instancia de cola de Procesos
    this.process = new Process();
    //Instancia de cola de completados
    this.complete = new Queue();
    //Instancia del planificador
    this.fcfs = new SchedulingAlgorithm();
}
  FCFS.prototype.start = function(){
    //Se define a la cola de los procesos como nuestra cola del algoritmo

    this.process.queue = this.queue;
    //De la misma manera se defina a la cola del planificador como la cola de los procesos
    this.fcfs.queue = this.process.queue;
    //Se define la cola de completdos del planificador como cola de nosotros
    this.fcfs.complete = this.complete;
    //Si inician las colas de procesos para generar PBC's
    this.process.start();
    //Se inicializa el planificador para despachar los procesos
    this.fcfs.start();
    this.fcfs.complete;
  };
