const formulario = document.querySelector('.inserir-itens'); 
const itemInput = document.querySelector('#item-produto');
const precoInput = document.querySelector('#preco-produto');
const listaItensContainer = document.querySelector('.lista-itens');
const totalDisplay = document.querySelector('.total h1');

let itens = [];

const renderizarLista = () => {

    listaItensContainer.innerHTML = ''; 
    let total = 0;

    itens.forEach((val) => {
        const precoNum = parseFloat(val.preco);
        
        total += precoNum; 
        
        listaItensContainer.innerHTML += `
            <div class="lista-itens-single">
                <h3>${val.nome}</h3>
                <h3>R$${precoNum.toFixed(2).replace('.', ',')}</h3>
            </div>
        `;
    });
    
    totalDisplay.innerHTML = `R$${total.toFixed(2).replace('.', ',')}`;
};

formulario.addEventListener('submit', (e) => {
    document.querySelector('#mensagem').innerHTML = "";

    e.preventDefault(); 
    
    itens.push({
        nome: itemInput.value.trim(),
        preco: parseFloat(precoInput.value) 
    });

    renderizarLista();
    
    itemInput.value = "";
    precoInput.value = "";
    itemInput.focus(); 
});

renderizarLista();
