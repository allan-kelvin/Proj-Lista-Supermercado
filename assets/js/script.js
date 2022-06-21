var items =[];

document.querySelector('input[type=submit]')
    .addEventListener('click',()=>{
        var nomeProduto = document.querySelector('input[name=nome_produto]');
        var precoProduto =document.querySelector('input[name=valor_produto]');

        items.push({
            nome:nomeProduto.value,
            valor:precoProduto.value
        });

         
         let soma=0;
         let listaprodutos = document.querySelector('.lista-produtos');
         listaprodutos.innerHTML="";
         items.map(function(val){
            soma+=parseFloat(val.valor);
            listaprodutos.innerHTML+=
            `
            <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <span class="preco-produto">`+val.valor+`</span>
            </div>
            `;
         })
         /*TOFIXED = FIXA EM APENAS NA QUANTIDADE DE CADAS DECIMAIS CONFIGURADAS, AQUI NO CASO, FOI COLOCADO 2 CADAS APÓS A VIRGULA*/ 
         soma=soma.toFixed(2);
         nomeProduto.value="";
         precoProduto.value="";

         let elementoSoma = document.querySelector('.soma-produto h1');
         elementoSoma.innerHTML='R$'+soma;
    });


    document.querySelector('button[name=limpar]').addEventListener('click',()=>{
            items=[];

            document.querySelector('.lista-produtos').innerHTML="";
            document.querySelector('.soma-produto h1').innerHTML="R$0";
    })

    