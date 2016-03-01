function Priority(){
    this.queue = new Queue();
    this.queue.priority = true;
    this.process = new Process(this.queue);
    this.complete = new Queue();
}
  Priority.prototype.start = function(){
    this.process.start();
    var pcb = this.queue.shift();
    console.log(pcb);
    var threadPriority = setInterval(() => {
      pcb = this.queue.shift();
      console.log(pcb);
      /*if(pcb.ticks > 0){
        pcb.work();
        this.queue.wait();
      }else{
        this.complete.push(pcb);
        pcb = this.queue.shift();
      }*/
    },5000);
  };
