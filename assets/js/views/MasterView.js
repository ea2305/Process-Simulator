
window.onload = () => {

    //iniciamos el controlador

    $("#stathics").click(function() {
      $("#stathics").hide();
    });

    myController = new Controller(this);

    //Estado del boton
    var btn_state = null;

    //Contenedor de timer
    var animation = null;

    //Cambia el color del boton al ser seleccionado
    var changeColor = (e)=>{
        //Obtenemos generador del evento
        var element = $(e)[0].target.id

        btn_state = false;//Reiniciamos el valor
        btn_state = (element == "button-start") ? true : false; //Seteamos valores
        setColor(element,btn_state) //Colocamos estado de seleccionado

        if (btn_state) { //Verificamos el estado del boton
            myController.startAll();

            //lanzamos el mini loop de animacion
             animation = setInterval(()=>{
                animationScene();
            },myController.model.Time);


        } else {
            $("#stathics").show();
            stopSimulation();
            myController.stopAll();
            clearInterval(animation);
        }
    }

    var setColor = (element,state)=>{
        var clean = (state)? ["red","button-stop"] : ["cyan","button-start"];
        //Limpiamos valores
        $("#" + clean[1]).css("color","white")
        $("#" + clean[1]).css("border-color","white")
        //Cambio de color al seleccionar
        $("#" + element).css("color",clean[0])
        $("#" + element).css("border-color",clean[0])
    }

    //Set controler
    function setViewController(element){
        console.log("controller seteado");
        controller = element
    }

    function selectAlgoritm(event){
        console.log(event);
        $('.option').css("color","white")
        $('#' + event.target.id).css("color","red")
        //Obtenemos padre del evento, y obtenemos el indice del algoritmo
        var option = event.target.id.split("").pop()

        //Enviamos valores
        myController.selectMode(option)
    }

    function animationScene(){
        if(myController != null){

            //Limpiamos scene
            $('.ball').remove()

            var complete = []
            myController.model.method.complete.queue.forEach((e)=>{complete.push(e)})


            var prepare = []
            myController.model.method.queue.queue.forEach((e)=>{prepare.push(e)})

            var current = whatMethod()
            if(current != undefined) {
                $('.scene').append(getBalls(current.name,2));
                $('#' + current.name).addClass('inW-2')
            }

            prepare.reverse().forEach((node,index)=>{
                $('.scene').append(getBalls(node.name,0,index))
            })

            complete.forEach((node,index)=>{
                $('.scene').append(getBalls(node.name,1,index))
            })

        }
    }

    //Obtencion de formato de pelota
    function getBalls(name,position,index){
        var increment = index * 20
        if (position == 0){
            return "<div id='"+ name +"' class='ball white pull-left-ball' style='top : " + increment +"px;'><p>" + name + "</p></div>";
        }else if(position == 1){
            return "<div id='"+ name +"' class='ball red pull-right-ball' style='top : " + increment +"px;'><p>" + name + "</p></div>";
        }else{
            return "<div id='"+ name +"' class='ball red' style='top : " + increment +"px;'><p>" + name + "</p></div>";
        }
    }

    function whatMethod(){
        switch (myController.model.option) {
            case '1':
                return myController.model.method.fcfs.pcb
            case '2':
                return myController.model.method.sjf.pcb
            case '3':
                return myController.model.method.srtf.pcb
            case '4':
                return myController.model.method.rr.pcb
            case '5':
                return myController.model.method.priority.pcb
            case '6':
                return myController.model.method.multilevel.pcb
            default:
                return null;
        }
    }

    function stopSimulation() {

      var promtiempollegada=0;
      var promtiemporequerido=0;
      var promtiempoespera=0;
      var promtiemporespuesta=0;
      var promtiempopen=0;
      var completado = this.myController.model.method.complete.queue;

      var data =   "<thead><tr><td>Proceso #</td><td>Tiempo de llegada</td>"+
                  "<td>Tiempo requerido</td><td>Tiempo en espera</td><td>Tiempo de Respuesta</td>"+
                  "<td>Tiempo de penalización</td><td>Prioridad</td></tr></thead>";

        data+="<tbody>";

        completado.forEach(function(entry) {
            data += "<tr><td>"+entry.name+"</td>";
            data += "<td>"+entry.tiempollegada+"</td>";

            data += "<td>"+entry.workingTime+"</td>";
            data += "<td>"+entry.waitTime+"</td>";
            data += "<td>"+(entry.waitTime+entry.workingTime)+"</td>";
            data += "<td>"+(entry.waitTime+entry.workingTime)/(entry.workingTime)+"</td>";
            data += "<td>"+entry.priority+"</td></tr>";
            promtiempollegada +=  entry.tiempollegada;
            promtiemporequerido += entry.workingTime;
            promtiempoespera += entry.waitTime;
            promtiemporespuesta+=(entry.waitTime+entry.workingTime);
            promtiempopen+=(entry.waitTime+entry.workingTime)/(entry.workingTime);
        });
        var i = completado.length;
        data += "<tr>"+
          "<td>Datos promedios</td>"+
          "<td> :v </td>"+
          "<td>"+(promtiemporequerido/i)+"</td>"+
          "<td>"+(promtiempoespera/i)+"</td>"+
          "<td>"+(promtiemporespuesta/i)+"</td>"+
          "<td>"+(promtiempopen/i)+"</td>"+
          "<td>:v</td>"+
        "</tr>";
        data+="</tbody>";

      document.getElementById("datos").innerHTML = data
      $('#stathics').addClass('modal')
    }

    //Handlers
    $('#button-start').click(changeColor)
    $('#button-stop').click(changeColor)

    //Botones de Algoritmos
    $('#option_1').click(selectAlgoritm)
    $('#option_2').click(selectAlgoritm)
    $('#option_3').click(selectAlgoritm)
    $('#option_4').click(selectAlgoritm)
    $('#option_5').click(selectAlgoritm)
    $('#option_6').click(selectAlgoritm)
}
