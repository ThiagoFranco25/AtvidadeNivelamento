var oper = true;

$(document).on("click", ".negPosi", function(){

  var visor = $("#visor").val();
  var resultado1 =  visor * -1;
  $("#visor").val(resultado1);

})

$(document).on("click",".ponto", function(){
    var visorCalc = $("#visor").val();

    if(visorCalc == ""){
      $("#visor").val("0.");
    } else{
      if(visorCalc.includes(".")){
        
      } else{
        $("#visor").val(visorCalc + ".");
      }
    }
});

$(document).on("click", ".sinalSub", function(){
  if ($("#visor").val() == ""){
    $("#visor").val('-');
    oper = true;
   
  }
})

$(document).on("click", ".num", function(){
  visorCalc = $("#visor").val();
  valorTotal2 = visorCalc.split(" ");
  
  if((valorTotal2[0] == "") ||  (valorTotal2[1] != '√')) {
     $("#visor").val(visorCalc + $(this).val());
     
  }
})

 $(document).on("click", ".oper", function(){
   visorCalc = $("#visor").val();
   valorTotal2 = visorCalc.split(" ");

   if(oper == false){
     
     var sinal1 = $(this).val().split("");
     var sinal = valorTotal2[1];
     $("#visor").val($("#visor").val().replace(sinal, sinal1[1]));
     



   } else if ((valorTotal2[0] != "") && (oper == true)){
        oper = false;
        $("#visor").val(visorCalc + $(this).val());         
   }

 });

$(document).on("click", ".btnIgual", function(){

  var valorTotal = $("#visor").val();
  var valorTotal2 = valorTotal.split(" ");

  switch (valorTotal2[1]){
      case 'x':
          var resultado = valorTotal2[0] * valorTotal2[2];
          break;

      case '√':
        var resultado = Math.sqrt(valorTotal2[0]);
       
        break;

      case '^':
        var resultado = Math.pow(valorTotal2[0],valorTotal2[2]);
        break;

      case '+':
        var resultado = parseFloat(valorTotal2[0]) + parseFloat(valorTotal2[2]);
        break;
        
      case '-':
        var resultado = valorTotal2[0] - valorTotal2[2];
        break;

      case '÷':
        var resultado = valorTotal2[0] / valorTotal2[2];
        break;

      case '%':
        if((valorTotal2[0] != "") && (valorTotal2[2] != "")){

          var resultado = (valorTotal2[2] / 100) * valorTotal2[0];
        } else if ((valorTotal2[0] != "") && (valorTotal2[2] == "")){

          var resultado = (valorTotal2[0] / 100);
        }    
        break;
  }
  
  $("#visor").val(resultado);
  oper = true;
})

$(document).on("click", ".btnReset", function(){
  oper = true;
  $("#visor").val("");
})

$(document).on("click", ".btnCE", function(){

  var visorCalc = $("#visor").val();
  var diminuirVisor = visorCalc.length-1;
  var diminuirVisor2 = visorCalc.substring(0, diminuirVisor);
  $("#visor").val(diminuirVisor2);
})