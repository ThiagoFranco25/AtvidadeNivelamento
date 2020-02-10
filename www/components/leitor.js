$(document).ready(function(){
  $(".infoTecnica1").show();
  $(".infoEspecificacoes1").hide();
  $(".infoCamera").hide();

  $(document).on("click", ".fichaTec1", function(){

    $(".infoTecnica1").show();
    $(".infoEspecificacoes1").hide();
    $(".infoCamera").hide();
  })

  $(document).on("click", ".espec1", function(){

    $(".infoTecnica1").hide();
    $(".infoEspecificacoes1").show();
    $(".infoCamera").hide();
  })

  $(document).on("click", ".camera1", function(){
    $(".infoTecnica1").hide();
    $(".infoEspecificacoes1").hide();
    $(".infoCamera").show();
  })

$(document).on("click","#botao",function(){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
            if(result.text == 123456){
                 $(".infoTecnica1").show();
                 $(location).attr("href", "codigo1.html")
            }
            else if(result.text == 654321){
                 $(".infoTecnica1").show();
                 $(location).attr("href", "codigo2.html")
            }
            else{
              alert("ERRO : CÓDIGO INVÁLIDO")
            }
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,DATA_MATRIX,CODABAR,CODE_128	,CODE_93,CODE_39	", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
})
})