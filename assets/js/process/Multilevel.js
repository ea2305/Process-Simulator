/*
    Implementacion de algorimo MultiColas para Simular Procoses
    author : Carlos Maximiliano Ortiz Escobar
    version : 1.0
*/

function Multilevel(){

  this.process = new Process();
  this.complete = new Queue();
  this.multilevel=new SchedulingAlgorithm();
  this.queue = new Queue();
  this.q0 = new Queue();
  this.q1 = new Queue();
  this.q2 = new Queue();
  this.q3 = new Queue();
  this.q4 = new Queue();

}

Multilevel.prototype.start = function(){

    this.process.isMultilevel = true;
    this.multilevel.isMultilevel = true;
    this.process.q1=this.q1;
    this.process.q2=this.q2;
    this.process.q3=this.q3;
    this.process.q4=this.q4;
    this.process.q0=this.q0;
    this.process.queue = this.queue;
    this.multilevel.quantum=3;
    this.multilevel.queue=this.process.q0;
    this.multilevel.q0=this.process.q0;
    this.multilevel.q1=this.process.q1;
    this.multilevel.q2=this.process.q2;
    this.multilevel.q3=this.process.q3;
    this.multilevel.q4=this.process.q4;
    this.multilevel.complete=this.complete;
    this.process.start();
    this.multilevel.start();
}

Multilevel.prototype.stop = function(){
    this.process.stop();
    this.multilevel.stop();
}
