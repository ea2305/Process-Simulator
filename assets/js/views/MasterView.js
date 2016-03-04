
window.onload = () => {

    //iniciamos el controlador
    myController = new Controller;

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
            },5000);

        } else {
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
        //Obtenemos padre del evento, y obtenemos el indice del algoritmo
        var option = event.target.id.split("").pop()
        //Enviamos valores
        myController.selectMode(option)
    }

    function animationScene(){
        if(myController != null){

            //Limpiamos scene
            $('.ball').remove()

            var complete = myController.model.method.complete.queue;

            var prepare = myController.model.method.queue.queue;

            var current = whatMethod()
            if(current != undefined) {
                $('.scene').append(getBalls(current.name,true));
                $('#' + current.name).addClass('inW-2')
            }

            prepare.forEach((node,index)=>{
                console.log("Agregamos :" + node.name);
                $('.scene').append(getBalls(node.name,true,index))
            })

            complete.forEach((node,index)=>{
                console.log("Agregamos :" + node.name);
                $('.scene').append(getBalls(node.name,false,index))
            })

        }
    }

    //Obtencion de formato de pelota
    function getBalls(name,position,index){
        console.log(index);
        var increment = index * 20
        if (position){
            return "<div id='"+ name +"' class='ball white pull-left' style='top : " + increment +"px;'>" + name + "</div>";
        }else{
            return "<div id='"+ name +"' class='ball red pull-right' style='top : " + increment +"px;'>" + name + "</div>";
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
