function somatorio(pvetor: number []) : number{
    let soma: number = 0;
    for(var num of pvetor){
        soma +=num;
    }
    return soma;
}

let vetor: number [] = [1,2,3,4,5,6,7,8,9,10];
let res_soma: number = somatorio(vetor);
console.log(`O somátório dos elementos do vertor ${vetor} é ${res_soma}`);