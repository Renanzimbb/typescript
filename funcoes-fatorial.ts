function fatorial(n: number): number {
    if((n == 0) || (n ==1)){
        return 1;
    }
    return n*(fatorial(n-1));
}

let numero: number = 5;
let res_fat = fatorial(numero);
console.log(`O fatorial de ${numero} é: ${res_fat}`);