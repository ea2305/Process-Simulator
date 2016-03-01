function RR(){
    this.queue = new Queue();
    this.process = new Process(this.queue);
    this.complete = new Queue();
    this.quatum = 2;
}
  RR.prototype.start = function(){
    this.process.start();
    var pcb = this.queue.shift();
    var cont = 0;
    var threadPriority = setInterval(() => {
      if(pcb === undefined) pcb = this.queue.shift();
      else if(pcb.ticks > 0 && cont < this.quatum){
        pcb.work();
        this.queue.wait();
        cont++;
      }else{
        this.complete.push(pcb);
        pcb = this.queue.shift();
        cont = 0;
      }
      console.log(this.queue);
      console.log(pcb);
    },5000);
  };
