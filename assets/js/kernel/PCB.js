function PCB(name, priority, ticks) {
  this.name = name;
  this.priority = priority;
  this.ticks = ticks;
  this.waitTime = 0;
  this.workingTime = 0;
  this.tiempollegada = 0;
}
  PCB.prototype.wait = function(){
    this.waitTime++;
  };
  PCB.prototype.work = function(){
    this.workingTime++;
    this.ticks--;
  };
