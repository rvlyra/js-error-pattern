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
            console.log("E tome erro de referência...")
            console.log(e.message)
        } else if(e instanceof TypeError) {
            console.log("Olha o tipo... isso tudo é vontade de ir embora?")
            console.log(e.message)
        } else if(e instanceof RangeError) {
            console.log("Tamanho... isso tudo é vontade de ir embora?")
            console.log(e.message)
        } else {
            console.log("Erro desconhecido... agora fudeu, ein! " + e)
        }
    }
}

// Erro:
console.log(valArr( )); // vazio
// Corrigindo: 
console.log(valArr([1],1 ));

// Erro:
console.log(valArr( 4, 5 )); // sem array
// Corrigindo: 
console.log(valArr( 'a', 6 )); // sem array

// Erro:
console.log(valArr([1], '4')); // array e string
// Corrigindo: 
console.log(valArr([], 0));

// Erro:
console.log(valArr([], 5)); // tenando iniciar o array com 5 elementos
// Corrigindo: 
console.log(valArr([1,2,3,4,5], 5));