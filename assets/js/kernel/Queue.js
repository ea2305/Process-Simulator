function Queue() {
  this.priority = false;
  this.ticks = false;
  this.queue = [];
}
  Queue.prototype.wait = function(){
    this.queue.forEach(function(element){
      element.wait();
    });
  };
  Queue.prototype.push = function(pcb){
    if(this.priority){
      this.pushPriority(pcb);
    }
    else if(this.ticks){
      this.pushTicks(pcb);
    }else {
      this.queue.push(pcb);
    }
  };
  Queue.prototype.pushPriority = function(pcb){
    this.queue.push(pcb);
    this.sortPriority();
  };
  Queue.prototype.pushTicks = function(pcb){
    this.queue.push(pcb);
    this.sortTicks();
  };
  Queue.prototype.sortPriority = function(){
    this.queue.sort(function(a, b){
      return(a.priority - b.priority);
    });
  };
  Queue.prototype.sortTicks = function(){
    this.queue.sort(function(a, b){
      return(a.ticks - b.ticks);
    });
  };
  Queue.prototype.shift = function(){
    if(this.priority){
      return this.shiftPriority();
    }
    else if(this.ticks){
      return this.shiftTicks();
    }else {
      return this.queue.shift();
    }
  };
  Queue.prototype.shiftPriority = function(){
    this.sortPriority();
    return this.queue.shift();
  };
  Queue.prototype.shiftTicks = function(){
    this.sortTicks();
    return this.queue.shift();
  }
