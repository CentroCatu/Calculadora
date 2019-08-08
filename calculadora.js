function enviarNum(numero) {
    var v = document.getElementById("visor");
    if(v.innerHTML.length == 1 && v.innerHTML == "0"){
           v.innerHTML = "";
    }
    v.innerHTML = v.innerHTML + numero
}


function sumar() {
    var v = document.getElementById("visor");
    var pn = document.getElementById("primernumero");
    pn.value = v.innerHTML;
    
    v.innerHTML = 0;
   
}
function resultado() {
    var v = document.getElementById("visor");
    var pn = document.getElementById("primernumero");
  
    v.innerHTML = parseInt(v.innerHTML) + parseInt(pn.value);
   