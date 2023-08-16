class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens = []) {

        var estoque = [
            {
                codigo: 'cafe',
                descricao: 'Café',
                valor: 3.00
            },

            {
                codigo: 'chantily',
                descricao: 'Chantily (Extra do Café)',
                valor: 1.50
            },

            {
                codigo: 'suco',
                descricao: 'Suco Natural',
                valor: 6.20
            },

            {
                codigo: 'sanduiche',
                descricao: 'Sanduíche',
                valor: 6.50
            },

            {
                codigo: 'queijo',
                descricao: 'Queijo (extra do Sanduíche)',
                valor: 2.00
            },

            {
                codigo: 'salgado',
                descricao: 'Salgado',
                valor: 7.25
            },

            {
                codigo: 'combo1',
                descricao: '1 Suco e 1 Sanduíche',
                valor: 9.50
            },
            {
                codigo: 'combo2',
                descricao: '1 Café e 1 Sanduíche',
                valor: 7.50
            },

        ];
        
        if (metodoDePagamento == null || metodoDePagamento == 'especie') {
            return 'Forma de pagamento inválida!';
        }
        if (itens.length == 0) {
            return 'Não há itens no carrinho de compra!';
        }

        var valorTotal = 0
        var quantidade = []
        var codigo = []

        for (var i = 0; i < itens.length; i++) {
            var separador = itens[i].split(',')
            quantidade[i] = separador[1]
            codigo[i] = separador[0]

            var existe = estoque.find(v => v.codigo == codigo[i])
            if (!existe) {
                return 'Item inválido!';
            }

            for (var j = 0; j < estoque.length; j++) {

                if (codigo[i] == estoque[j].codigo) {
                    valorTotal += quantidade[i] * estoque[j].valor
                }
            }
        }

        if (codigo.includes('chantily') && !codigo.includes('cafe') || codigo.includes('queijo') && !codigo.includes('sanduiche')) {
            return "Item extra não pode ser pedido sem o principal"
        } else if (quantidade < 1) {
            return 'Quantidade inválida!'
        } else if (metodoDePagamento == 'credito') {
            var valorTaxa = valorTotal + (valorTotal * 0.03)
            return 'R$ ' + valorTaxa.toFixed(2).replace('.', ',')
        } else if (metodoDePagamento == 'dinheiro') {
            var valorTaxa2 = valorTotal - (valorTotal * 0.05)
            return 'R$ ' + valorTaxa2.toFixed(2).replace('.', ',')
        } else {
            return 'R$ ' + valorTotal.toFixed(2).replace('.', ',');
        }
    }
}


export { CaixaDaLanchonete };
