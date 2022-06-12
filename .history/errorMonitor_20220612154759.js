function valArr(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Cadê os parâmetros? Esqueceu de novo! Está tudo bem em casa?");

        if(typeof arr !== 'object') throw new TypeError("Era pra ser um Object, não? Hoje tá complicado...");
        
        if(typeof num !== 'number') throw new TypeError("Agora 'A' + 5 é igual a 10. Cara, vai lá fora, depois você volta!");
        
        if(arr.length !== num) throw new RangeError("O tamanho...");
    
        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("E tome erro de referência...");
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Olha o tipo... isso tudo é vontade de ir embora?");
            console.log(e.message)
        } else if(e instanceof RangeError) {
            console.log("Tamanho... isso tudo é vontade de ir embora?");
            console.log(e.message)
        } else {
            console.log("Erro desconhecido... agora fudeu, ein!")
        }
    }
}