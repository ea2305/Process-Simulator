/*
    Implementacion de algorimo FCFS para simulacion de procesos
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/
function FCFS(){
    this.queue = new Queue();
    this.process = new Process();
    this.complete = new Queue();
    this.fcfs = new SchedulingAlgorithm();
}
  FCFS.prototype.start = function(){
    this.process.queue = this.queue;
    this.fcfs.queue = this.process.queue;
    this.fcfs.complete = this.complete;
    this.process.start();
    this.fcfs.start();
  };
