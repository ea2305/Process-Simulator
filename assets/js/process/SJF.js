function SJF(){
    this.queue = new Queue();
    this.queue.ticks = true;
    this.process = new Process(this.queue);
    this.complete = new Queue();
}
  SJF.prototype.start = function(){
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
