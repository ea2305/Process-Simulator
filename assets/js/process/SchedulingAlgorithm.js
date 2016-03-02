function SchedulingAlgorithm(){
    this.queue = undefined;
    this.complete = undefined;
    this.isExpulsive = false;
    this.quatum = 1;
    this.pcb = undefined;
    this.tick = 0;
}
  SchedulingAlgorithm.prototype.start = function(){
    var threadPriority = setInterval(() => {
      this.run();
    },5000);
  };
  SchedulingAlgorithm.prototype.run = function(){
    if(this.pcb === undefined) this.pcb = this.queue.shift();
    else if(this.isExpulsive) this.expulsive();
    else this.notExpulsive();
    console.log(this.pcb);//eliminar
  };
  SchedulingAlgorithm.prototype.expulsive = function(){
    if(this.pcb.ticks > 0)
      if(this.tick < this.quatum) this.work();
      else this.contextSwitch();
    else this.completePush();
  };
  SchedulingAlgorithm.prototype.notExpulsive = function(){
    if(this.pcb.ticks > 0) this.work();
    else this.completePush();
  };
  SchedulingAlgorithm.prototype.work = function(){
    this.pcb.work();
    this.queue.wait();
    this.tick = this.tick + 1;
  };
  SchedulingAlgorithm.prototype.completePush = function(){
    this.complete.push(this.pcb);
    this.pcb = this.queue.shift();
    this.tick = 0;
    this.run();
  };
  SchedulingAlgorithm.prototype.contextSwitch = function(){
    this.queue.push(this.pcb);
    this.pcb = this.queue.shift();
    this.tick = 0;
    this.run();
  };
