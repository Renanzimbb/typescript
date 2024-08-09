function imprimir_ts(msg: string, num: number) : void {
    console.log(`O conteúdo da variável mensagem é ${msg}  e da variável numerica é ${num}`);
    }
let tmsg: string = 'este é um tete';
let tnum: number = 10;

imprimir_ts(tmsg,tnum)

function somar_ts(x: number, y: number) : number {
    return x + y;
}

let a: number = 10;
let b: number = 10;
let soma = somar_ts(a,b);
console.log(`A soma de ${a} com ${b} é: ${soma}.`)


