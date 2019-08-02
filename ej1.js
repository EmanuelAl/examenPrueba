function ej1(){
  var ladoA=0;
  var ladoB=0;
  var ladoC=0;
  var angulo=0;
  var superficie=0;
  /*
  do{
  ladoA=prompt("ingrese lado A");
  ladoB=prompt("ingrese lado B");
  ladoB=prompt("ingrese lado C");
  }while(isNaN(ladoA,ladoB,ladoC));
*/
  /*if(Math.pow(ladoA,2)+Math.pow(ladoA,2)==Math.pow(ladoC,2)){
    alert("es rectàngulo ");
  }else{
    alert("no es rectangulo");
  }*/
  /*
    do{
      angulo=prompt("");
    }while(angulo==90);
  */ 
  do{
    ladoA=prompt("ingrese lado A");
    ladoB=prompt("ingrese lado B");
    angulo=prompt("ingrese angulo ");
    }while(isNaN(ladoA,ladoB,ladoC));

  if(angulo==90){
    alert("es rectàngulo ");
  }else{
    alert("no es rectangulo");
  }
//calculo de la base
  superficie=ladoA*ladoB/2;
  alert("la superficie del triangulo es: "+superficie);
}
function ej2(){
    var nombre;
    var nombreMax;
    var nombreMin;
    var edad;
    var partidosGanados;
    var partidosPerdidos;
    var maxGanados;
    var maxPerdidos;
    var pormedioEdad=0;
    var contEdad=0;
    var sumEdad=0;
    var cantRecordPos=0;
    var contpos=0;
    var bandera=true;
    var respuesta=true;
    while(respuesta){

    /*do{
      nombre=prompt("ingrese nombre");
      edad=prompt("ingrese edad");
      partidosGanados=prompt("ingrese partidosGanados");
      partidosPerdidos=prompt("ingrese partidosPerdidos");
      
    }while(isNaN(nombre)||isNaN(edad)||isNaN(partidosGanados)||isNaN(partidosPerdidos));
    */
    do{
      nombre=prompt("ingrese nombre");
      var nombreAux=parseInt(nombre);
    }while(isNaN(nombreAux)==false);
    do{
      edad=prompt("ingrese nombre");
      var edad=parseInt(edad);
    }while(isNaN(edad)||edad<0);
    do{
      partidosGanados=prompt("ingrese partidosGanados");
      partidosGanados=parseInt(partidosGanados);
    }while(isNaN(partidosGanados)||partidosGanados<0);
    do{
      partidosPerdidos=prompt("ingrese partidosPerdidos");
      partidosPerdidos=parseInt(partidosPerdidos);
    }while(isNaN(partidosPerdidos)||partidosPerdidos<0);

    if(edad>0){
      contEdad++;
      sumEdad+=edad;
    }
    if(bandera){
      maxGanados=partidosGanados;
      nombreMax=nombre;
      maxPerdidos=partidosPerdidos;
      nombreMin=nombre;
      bandera=false;
    }
    //calculo el que gano mas
    if(partidosGanados>maxGanados){
      maxGanados=partidosGanados;
      nombreMax=nombre;
      
    }
    //calculo el que perdio mas
    if(partidosPerdidos>maxPerdidos){
      maxPerdidos=partidosPerdidos;
      nombreMin=nombre;
    }
    //calculo los que tienen records positivos
    cantRecordPos=partidosGanados-partidosPerdidos;
    if(cantRecordPos>0){
      contpos++;
    }

    respuesta=confirm("quiere seguir ingresando datos?");
    }
    promedioEdad=sumEdad/contEdad;
    document.write("el promedio de edades es: "+promedioEdad+"<br>");
    document.write("el maximo ganador es: "+nombreMax+"<br>");
    document.write("el que mas perdio es: "+nombreMin+"<br>");
    document.write("cantidad de tenistas con record positivo "+contpos+"<br>");
    document.write("el promedio de edades es: "+promedioEdad+"<br>");
    document.write("el promedio de edades es: "+promedioEdad+"<br>");

}
function ej3(){
  
}
function ej4(){
  
}

