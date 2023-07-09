var c = 1

/*while(c<1000){
    console.log(`te amo`)
    c++
}*/

function parImpar(n){
    if(n%2 == 0){
        return"Par"
    }else{
        return"Impar"
    }
}

parImpar(4)

console.log(parImpar(54566))



const soma = function somar(n1=0,n2=0){
    return n1 + n2
}

console.log(soma)


function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c //ou fat = fat * c
    }
    return fat
}


console.log(fatorial(5))
//RECURSIVIDADE
function fator(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}