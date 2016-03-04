function SRTF(){
    this.queue = new Queue();
    this.process = new Process();
    this.complete = new Queue();
    this.srtf = new SchedulingAlgorithm();
}
  SRTF.prototype.start = function(){
    this.queue.ticks = true;
    this.process.queue = this.queue;
    this.srtf.isExpulsive = true;
    this.srtf.queue = this.process.queue;
    this.srtf.complete = this.complete;
    this.process.start();
    this.srtf.start();
  };

  SRTF.prototype.stop = function(){
      this.process.stop();
      this.srtf.stop();
  }
