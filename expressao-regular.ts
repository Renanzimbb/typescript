function checar_todas_palavras(par_padrao: RegExp, par_texto: string[]): number {
    let total: number = 0;
    for (var val of par_texto) {        
        if(par_padrao.test(val)){
            total++;
        }
    }
    return total;
}


