var display = document.getElementById('display');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var comecar = document.getElementById('comecar');

var cronometroSeg;
var minutoAtual;
var segundoAtual;
var intervalo;

for(var i = 0; i <=60; i++){
    minutos.innerHTML+='<option value="'+i+'"> '+i+'</option>';
}