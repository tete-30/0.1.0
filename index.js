function Mercado(valor, convenio, cartao) {
    if (convenio && cartao) {
        let desconto = valor * 0.15

        let compra = valor - desconto
        return compra
    } else {
        if (convenio || cartao) {
            let desconto = valor * 0.10

            let compra = valor - desconto
            return compra
        } else {
            return valor;
        }
    }
}
console.log (Mercado(200, true, false));

    
