function criptografarTexto() {
    // Captura o texto digitado pelo usuário
    let textoOriginal = document.getElementById("textoOriginal").value;

    // Realiza as substituições conforme as regras
    let textoCriptografado = textoOriginal
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    // Mostra o texto criptografado no lugar da imagem
    let containerFoto = document.querySelector(".container_foto");
    containerFoto.innerHTML = `<div class="texto-criptografado">${textoCriptografado}</div>`;

    // Habilita o botão de descriptografar
    document.getElementById("descriptografar").disabled = false;
}

function copiarTexto() {
    let textoCriptografado = document.getElementById("textoCriptografado").textContent;

    // Cria um elemento textarea fora da visão do usuário
    let textarea = document.createElement("textarea");
    textarea.value = textoCriptografado;
    document.body.appendChild(textarea);

    // Seleciona o conteúdo do textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Remove o elemento textarea
    document.body.removeChild(textarea);

    alert("Texto copiado para a área de transferência!");
}

function descriptografarTexto() {
    let textoCriptografado = document.getElementById("textoCriptografado").textContent;

    // Realiza a reversão das substituições
    let textoOriginal = textoCriptografado
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    // Exibe o texto descriptografado no input
    document.getElementById("textoOriginal").value = textoOriginal;

    // Mostra a imagem e esconde o texto criptografado
    document.getElementById("containerFoto").style.display = "block";
    document.getElementById("textoCriptografadoContainer").style.display = "none";

    // Desabilita o botão de descriptografar
    document.getElementById("descriptografar").disabled = true;
}


