// Função para limpar os campos de entrada
function btnGuardar() {
    // Seleciona os campos de texto
    const inputs = document.querySelectorAll('.caixa-texto input');
    
    // Limpa cada campo de texto
    inputs.forEach(input => input.value = '');
    
    // Opcional: Exibe uma mensagem no console
    console.log("Campos limpos.");
}

// Função para finalizar o pedido
function btnFinalizar() {
    // Seleciona os campos de texto
    const inputs = document.querySelectorAll('.caixa-texto input');
    
    // Captura os valores dos campos
    const produto = inputs[0].value.trim();
    const valor = inputs[1].value.trim();
    const frete = inputs[2].value.trim();

    // Verifica se todos os campos foram preenchidos
    if (produto && valor && frete) {
        // Exibe os valores no console (simulação de finalização)
        console.log("Finalizando pedido:");
        console.log(`Produto: ${produto}`);
        console.log(`Valor: ${valor}`);
        console.log(`Frete: ${frete}`);
        
        // Opcional: Mostra um alerta ao usuário
        alert("Seguir com esse pedido?");
    } else {
        // Se algum campo estiver vazio, avisa o usuário
        alert("Por favor, preencha todos os campos para finalizar o pedido.");
    }
}