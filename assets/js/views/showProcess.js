$("#stathics").click(function(){

    // Obtenemos el numero de filas (td) que tiene la primera columna

    // (tr) del id "tabla"

    var tds=$("#datos tbody tr:first td").length;
    console.log(tds);
    // Obtenemos el total de columnas (tr) del id "tabla"

    var trs=$("#datos tr").length;

    var nuevaFila="<tr>";

    for(var i=0;i<tds;i++){

        nuevaFila+="<td>columna "+(i+1)+" Añadida con jquery</td>";

    }

    nuevaFila+="<td>"+(trs+1)+" columnas";

    nuevaFila+="</tr>";

    $("#,").append(nuevaFila);

});
