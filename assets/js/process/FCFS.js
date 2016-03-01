/*
    Implementacion de algorimo FCFS para simulacion de procesos
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/
function FCFS(){
    this.queue = new Queue();
    this.process = new Process(this.queue);
    this.complete = new Queue();
}
  FCFS.prototype.start = function(){
    this.process.start();
    var pcb = this.queue.shift();
    var threadPriority = setInterval(() => {
      if(pcb === undefined) pcb = this.queue.shift();
      else if(pcb.ticks > 0){
        pcb.work();
        this.queue.wait();
      }else{
        this.complete.push(pcb);
        pcb = this.queue.shift();
      }
      console.log(this.queue);
      console.log(pcb);
    },5000);
  };
