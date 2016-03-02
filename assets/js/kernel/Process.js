function Process() {
  this.queue = undefined;
  this.id = 0;
  this.firstName = "Process";
}
  Process.prototype.start = function(){
    var threadProcess = setInterval(() => {
      this.run();
    },5000);
  };
  Process.prototype.run = function(){
    if (this.isProcess()){
        this.queue.push(this.getNewPCB(this.firstName + this.id));
        this.id = this.id + 1;
    }
  };
  Process.prototype.isProcess = function() {
    var probability = Math.random();
    if(probability < 0.9502) return true;
    else return false;
  };
  Process.prototype.getPriority = function() {
    var priority = Math.random();
    if(priority < 0.1) return 0;
    if(priority < 0.3) return 1;
    if(priority < 0.7) return 2;
    if(priority < 0.8) return 3;
    return 4;
  };
  Process.prototype.getNewPCB = function(name) {
    var priority = this.getPriority();
    var ticks = 1 + parseInt(Math.random() * 10);
    return new PCB(name, priority, ticks);
  };
