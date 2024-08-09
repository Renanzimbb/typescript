function func_testar_if(par_valor: number|string): number {
    if (typeof par_valor === 'number') {
      return par_valor;
    }
    if (typeof par_valor === 'string') {
      return par_valor.length;
    }
    throw new Error('O parâmetro possui um tipo que não é suportado: ' + par_valor);
  }
  let t_msg: (number | string) = func_testar_if("isto é um teste");
  console.log(`O resultado da execução da função é: ${t_msg}`)