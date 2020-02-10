// This is a JavaScript file

var tipo;
var tabela;



$(document).on("click","#salvar",function(){
    var parametros ={
      "horario":$("#entrada").val()+":00",
      "nome":$("#nome").val(),
      "marca":$("#marca").val(),
      "modelo":$("#modelo").val(),
      "tipo":$("#tipo").val(),
      "placa":$("#placa").val()
      
    };

    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://estacionamentocarros.000webhostapp.com/cadastro.php",//para onde vou enviar
      data:parametros,//o que eu vou enviar
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        navigator.notification.alert(data);
        $("#entrada").val("");
        $("#nome").val("");
        $("#tipo").val("");
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao cadastrar!");
      }
    });
});


$(document).on("click","#buscarPlaca",function(){

var botao = "<button class= type=button id=arquivar>Arquivar Saida</button>";

    $("#botao").html(botao);
    
  var parametro ={
      "placa":$("#buscarNumero").val()
    };

    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://estacionamentocarros.000webhostapp.com/buscar.php",//para onde vou enviar
      data:parametro,
      dataType: "json",
      //caso esteja tudo certo executa esse codigo
      success: function(data){
                $("#registro").val(data.veiculo.nome);
                $("#horas").val(data.veiculo.entrada);
                $("#CodigoPlaca").val(data.veiculo.placa);

                tipo = data.veiculo.tipo;
        },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        alert("Registro não Encontrado");
      }
    });

 

});



$(document).on("click","#arquivar",function(){

var saida = "<input type='time' class='' id='saida'> <button id='salvarSaida'>Salvar</button>";

    $("#botao").html(saida);

});

$(document).on("click","#salvarSaida",function(){


var horaEntrada = $("#horas").val().split(":")[0];
var minutosEntrada= $("#horas").val().split(":")[1];


var horaSaida = $("#saida").val().split(":")[0];
var minutosSaida= $("#saida").val().split(":")[1];

minutosSaida = minutosSaida * 60;

minutosEntrada = minutosEntrada * 60;

var tempoSaida = minutosSaida + horaSaida;

var tempoEntrada = minutosEntrada + horaEntrada;

var TempoTotal = tempoSaida - tempoEntrada;

if(tipo == 'carro'){
   if(TempoTotal <= 1){
     var valor = 5;
   }
   else{
     var valor =  (TempoTotal - 1) * 3;
     valor = valor + 5;
   }
}

if(tipo == 'moto'){
   if(TempoTotal <= 1){
     var valor = 3;
   }
   else{
     var valor = ( TempoTotal - 1) * 2;
     valor = valor + 3;
   }
}

var parametros ={
      "saida":$("#saida").val()+":00",
      "placa":$("#CodigoPlaca").val(),
      "valor":valor
    };

    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://estacionamentocarros.000webhostapp.com/saida.php",//para onde vou enviar
      data:parametros,//o que eu vou enviar
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        navigator.notification.alert("saida Arquivada com Sucesso");
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao Arquivar!");
      }
    });


});

