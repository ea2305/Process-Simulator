function SchedulingAlgorithm(){
    this.queue = undefined;
    this.complete = undefined;
    this.isExpulsive = false;
    this.isMultilevel = false;
    this.q0 = undefined;
    this.q1 = undefined;
    this.q2 = undefined;
    this.q3 = undefined;
    this.q4 = undefined;
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
    console.log("El peso de q0 es : " + this.q0.queue.length);
    console.log("El peso de q1 es : " + this.q1.queue.length);
    console.log("El peso de q2 es : " + this.q2.queue.length);
    console.log("El peso de q3 es : " + this.q3.queue.length);
    console.log("El peso de q4 es : " + this.q4.queue.length);
    console.log(this.isMultilevel);

    if(this.pcb === undefined) this.pcb = this.queue.shift();
    console.log(this.pcb);
    if(this.isMultilevel) this.multilevel();
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

  SchedulingAlgorithm.prototype.multilevel = function(){
    console.log("Entro aqui :)))");
    if(this.q0.queue.length > 0){
      console.log("Entro a la asignacion de q0");
      this.queue=this.q0;
      this.expulsive();
    }
    else if(this.q1.queue.length > 0){
      console.log("Entro a la asignacion de q1");
      this.queue=this.q1;
      this.notExpulsive();
    }
    else if(this.q2.queue.length > 0){
      console.log("Entro a la asignacion de q2");

      this.queue=this.q2;
      this.notExpulsive();
    }
    else if(this.q3.queue.length > 0){
      console.log("Entro a la asignacion de q3");

      this.queue=this.q3;
      this.notExpulsive();
    }
    else if(this.q4.queue.length > 0){
      console.log("Entro a la asignacion de q4");

      this.queue=this.q4;
      this.notExpulsive();
    }

    console.log(this.pcb + ":)");

  };
