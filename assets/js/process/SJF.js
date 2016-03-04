function SJF(){
    this.queue = new Queue();
    this.process = new Process();
    this.complete = new Queue();
    this.sjf = new SchedulingAlgorithm();
}
  SJF.prototype.start = function(){
    this.queue.ticks = true;
    this.process.queue = this.queue;
    this.sjf.queue = this.process.queue;
    this.sjf.complete = this.complete;
    this.process.start();
    this.sjf.start();
  };

  SJF.prototype.stop = function(){
      this.process.stop();
      this.sjf.stop();
  }
