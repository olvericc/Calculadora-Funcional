function insert(numero){
    document.form.visor.value = document.form.visor.value + numero
}
function equal(){
    var expoente = document.form.visor.value;
    if (expoente){
        document.form.visor.value = eval(expoente)
    }  
}
function clean(){
    document.form.visor.value = "";
}