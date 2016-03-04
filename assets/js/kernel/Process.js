function Process() {
  this.threadProcess = null;
  this.queue = undefined;
  this.id = 0;
  this.firstName = "Process";
  this.isMultilevel = false;
  this.q0 = undefined;
  this.q1 = undefined;
  this.q2 = undefined;
  this.q3 = undefined;
  this.q4 = undefined;
  this.pcb=undefined;
}
  // Detiene todos los procesos
  Process.prototype.stop = function(){
      //Limpiamos el timer
      clearInterval(this.threadProcess);
  }
  Process.prototype.start = function(){
    this.threadProcess = setInterval(() => {
      this.run();
      console.log('existo :Vvvvv')
    },5000);
  };
  Process.prototype.run = function(){
    if (this.isProcess()){
        this.queue.push(this.getNewPCB(this.firstName + this.id));
        this.id = this.id + 1;
        if(this.isMultilevel){
          this.pcb = this.queue.shift();
          switch (this.pcb.priority) {
            case 0:
            console.log("Insertando proceso en la cola 0");
              this.q0.push(this.pcb);
              break;
            case 1:
            console.log("Insertando proceso en la cola 1");
              this.q1.push(this.pcb);
              break;
            case 2:
            console.log("Insertando proceso en la cola 2");
              this.q2.push(this.pcb);
              break;
            case 3:
            console.log("Insertando proceso en la cola 3");
              this.q3.push(this.pcb);
              break;
            case 4:
            console.log("Insertando proceso en la cola 4");
              this.q4.push(this.pcb);
              break;
            default:
          }
      }
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
