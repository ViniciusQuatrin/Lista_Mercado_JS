var itens = [];

document.querySelector('input[type=submit]').addEventListener('click', () => {
    let nomeProduto = document.querySelector('input[name=nome_produto]');
    let precoProduto = document.querySelector('input[name=valor_produto]');

    itens.push({
        nome: nomeProduto.value,
        valor: precoProduto.value 
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;

    listaProdutos.innerHTML = "";
    itens.map(function(val){
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML+= `
        <div class="produto">  
            <h3>`+val.nome+`</h3>
            <h3 class="preco_prod"><span>R$`+val.valor+`</span></h3>
        </div>
        `;
    });

    soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = "";

    let totalProd = document.querySelector('.total h2')
    totalProd.innerHTML = "Total: R$" + soma.toFixed(2);
});

document.querySelector('button[name=limpar').addEventListener('click', () => {
    itens = [];
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.total h2').innerHTML = "Total: R$0";
})