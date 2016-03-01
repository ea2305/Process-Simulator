//_____(BEGIN)//Objeto Cola
function Queue() {
  this.priority = false;//la cola es por prioridad
  this.ticks = false;//la cola es es por ticks pendientes
  this.queue = [];
}
//la cola espera un tick
Queue.prototype.wait = function(){
  this.queue.forEach(function(element){
    element.wait();//hacemos esperar todos los elementos de la cola
  });
};
//agrega un elemento de la cola
Queue.prototype.push = function(pcb){//recive el pcb a agregar
  if(this.priority){
    this.pushPriority(pcb);//por prioridad
  }
  else if(this.ticks){
    this.pushTick(pcb);//por ticks
  }else {
    this.queue.push(pcb);
  }
};
//agrega elemento por prioridad
Queue.prototype.pushPriority = function(pcb){
  this.queue.push(pcb);//agrega
  this.sortPriority();//ordena
};
//agrega elemento por tick
Queue.prototype.pushTick = function(pcb){
  this.queue.push(pcb);//agrega
  this.sortTick();//ordena
};
//ordena desendente por prioridad
Queue.prototype.sortPriority = function(){
  this.queue.sort(funtion(a, b){//ordena
    return(b.priority - a.priority);//decendente
  })
};
//ordena desendente por tick
Queue.prototype.sortTick = function(){
  this.queue.sort(funtion(a, b){//ordena
    return(b.ticks - a.ticks);//decendente
  })
};
//quita un elemento de la cola
Queue.prototype.shift = function(){
  if(this.priority){
    return this.shiftPriority(pcb);// por prioridad
  }
  else if(this.ticks){
    return this.shiftTick(pcb);//por ticks
  }else {
    return this.queue.shift(pcb);
  }
};
//quita elemento por prioridad
Queue.prototype.shiftPriority = function(){
  this.sortPriority();//ordena
  return this.queue.shift(pcb);//quita
};
//quita elemento por tick
Queue.prototype.shiftTick = function(){
  this.sortTick();//ordena
  return this.queue.shift(pcb);//quita
};
//_____(END)
