$(document).ready(function(){
    $(".rodapes").hide();
    
    //$(".efeito").hide();
    //$(".efeitoNome").hide();




$(document).on("click","#camera",function(){

  navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
    destinationType: Camera.DestinationType.FILE_URI });

function onSuccess(imageURI) {
    var image = document.getElementById('imagem');
    image.src = imageURI;
    $(".rodapes").show();
    $(".foto").hide();
    
}

function onFail(message) {
    alert('falha por causa: ' + message);
}

  })

  $(document).on("change","#opacidade",function(){

   $("#imagem").css("filter", "opacity("+ $(this).val() + "%)");

  })

  $(document).on("change","#saturacao",function(){

   $("#imagem").css("filter", "saturate("+ $(this).val() + "%)");

  })

  $(document).on("change","#escala_Cinza",function(){

   $("#imagem").css("filter", "grayscale("+ $(this).val() + "%)");

  })

  $(document).on("change","#desfoque",function(){

   $("#imagem").css("filter", "blur("+ $(this).val() + "px)");

  })

})

