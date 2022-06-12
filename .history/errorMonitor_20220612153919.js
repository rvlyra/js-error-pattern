function valArr(arr, num){
    if(!arr && !num) throw new ReferenceError("Cadê os parâmetros? Esqueceu de novo! Está tudo bem em casa?");

    if(typeof arr !== 'object') throw new TypeError("Era pra ser um Object, não? Hoje tá complicado...");
    
    if(typeof num !== 'number') throw new TypeError("Era pra ser um Object, não? Hoje tá complicado...");
}