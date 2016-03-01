//_____(BEGIN)//Objeto Procesos
function Procesos() {
  this.tick = 0;
}
//return boolean: si se generara un proceso
Procesos.prototype.isProcess = function() {
  var probabilidad = Math.random();// probabilidad de generar un proceso
  if(probabilidad < 0.9502) return true;//0.9502 es la probabilidad sacada en clase
  else return false;
};
//return Integer: prioridad del Proceso
Procesos.prototype.getPriority = function() {
  var prioridad = Math.random();//prioridad del proceso
  if(prioridad < 0.1) return 0;//prioridad tipo 0
  if(prioridad < 0.3) return 1;//prioridad tipo 1
  if(prioridad < 0.7) return 2;//prioridad tipo 2
  if(prioridad < 0.8) return 3;//prioridad tipo 3
  return 4;//prioridad tipo 4
};
//return PCB: del Proceso
Procesos.prototype.getNewPCB = function(name) {
  var prioridad = this.getPriority();//prioridad del proceso
  var ticks = parseInt((Math.random() * 10) + 1);//ticks del proceso
  return new PCB(name, prioridad, ticks);
};
//_____(END)


//_____(BEGIN)//Objeto PCB
function PCB(name, priority, ticks) {
  this.name = name;// nombre del proceso
  this.priority = priority;// prioridad del proceso
  this.ticks = ticks;//ticks que necesita el proceso en el procesador
  this.waitTime = 0;// tiempo de espera
  this.workingTime = 0;// tiempo de trabajo en el procesador
}
//Espera un tick
PCB.prototype.wait = function(){
  this.waitTime++;
};
//Trabaja un tick
PCB.prototype.work = function(){
  this.workingTime++;
  this.ticks--;
};
//_____(END)
