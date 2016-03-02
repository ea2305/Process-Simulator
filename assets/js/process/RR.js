function RR(){
    this.queue = new Queue();
    this.process = new Process();
    this.complete = new Queue();
    this.rr = new SchedulingAlgorithm();
}
  RR.prototype.start = function(){
    this.process.queue = this.queue;
    this.rr.isExpulsive = true;
    this.rr.quatum = 2;
    this.rr.queue = this.process.queue;
    this.rr.complete = this.complete;
    this.process.start();
    this.rr.start();
  };
