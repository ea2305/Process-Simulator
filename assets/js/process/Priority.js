function Priority(){
    this.queue = new Queue();
    this.process = new Process();
    this.complete = new Queue();
    this.priority = new SchedulingAlgorithm();
}
  Priority.prototype.start = function(){
    this.queue.priority = true;
    this.process.queue = this.queue;
    this.priority.queue = this.process.queue;
    this.priority.complete = this.complete;
    this.process.start();
    this.priority.start();
  };
