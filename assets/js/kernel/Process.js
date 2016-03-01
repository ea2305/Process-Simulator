function Process(queue) {
  this.queue = queue;
}
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
    var ticks = parseInt((Math.random() * 10) + 1);
    return new PCB(name, priority, ticks);
  };
  Process.prototype.start = function(){
    var id = 0;
    var threadProcess = setInterval(() => {
        if (this.isProcess()){
            this.queue.push(this.getNewPCB("Process" + (id++)));
        }
    },5000);
  };
