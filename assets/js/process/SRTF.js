function SRTF(){
    this.queue = new Queue();
    this.queue.ticks = true;
    this.process = new Process(this.queue);
    this.complete = new Queue();
}
  SRTF.prototype.start = function(){
    this.process.start();
    var pcb;
    var threadPriority = setInterval(() => {
      pcb = this.queue.shift();
      if(pcb !== undefined){
        pcb.work();
        this.queue.wait();
        if(pcb.ticks === 0) this.complete.push(pcb);
        else this.queue.push(pcb);
      }
      console.log(this.queue);
      console.log(pcb);
    },5000);
  };
