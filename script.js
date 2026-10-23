/*
#############################################################################################################################################
                                                    REMOVER CLICK DIREITO DO MOUSE
#############################################################################################################################################
*/

/*
##############################
    REMOVE O CLICK DIREITO
##############################
*/
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});





/*
#############################################################################################################################################
                                                        TRANSIÇÃO PARA O JOGO
#############################################################################################################################################
*/

/*
##################################
    TRANISIÇÃO CIRCULO CRESCE
##################################
*/
const BOTAO_JOGAR = document.querySelector(".MENU-BOTAO-JOGAR");
const TRANSICAO = document.querySelector("#TRANSICAO");
const SELECAO_NIVEL = document.querySelector("#SELECAO-NIVEL");
const BOTAO_VOLTAR_SELECAO = document.querySelector("#VOLTAR-SELECAO");

const NIVEIS = [
    { botao: "#NIVEL-FACIL", estrelas: "#ESTRELAS-NIVEL-FACIL", dificuldade: "FÁCIL", chave: "estrelas-nivel-facil" },
    { botao: "#NIVEL-MEDIO", estrelas: "#ESTRELAS-NIVEL-MEDIO", dificuldade: "MÉDIO", chave: "estrelas-nivel-medio" },
    { botao: "#NIVEL-DIFICIL", estrelas: "#ESTRELAS-NIVEL-DIFICIL", dificuldade: "DIFÍCIL", chave: "estrelas-nivel-dificil" },
    { botao: "#NIVEL-SUPER-DIFICIL", estrelas: "#ESTRELAS-NIVEL-SUPER-DIFICIL", dificuldade: "SUPER DIFÍCIL", chave: "estrelas-nivel-super-dificil" }
];

function mostrarEstrelasNivel(nivel) {
    const elementoEstrelas = document.querySelector(nivel.estrelas);
    const estrelas = Number(localStorage.getItem(nivel.chave) || 0);
    const estrelasValidas = Number.isInteger(estrelas)
        ? Math.min(3, Math.max(0, estrelas))
        : 0;

    elementoEstrelas.textContent = "★".repeat(estrelasValidas) + "☆".repeat(3 - estrelasValidas);
    elementoEstrelas.setAttribute("aria-label", `${estrelasValidas} de 3 estrelas conquistadas`);
}

NIVEIS.forEach(function(nivel) {
    mostrarEstrelasNivel(nivel);
});

BOTAO_JOGAR.addEventListener("click", function() {
    NIVEIS.forEach(function(nivel) {
        mostrarEstrelasNivel(nivel);
    });
    SELECAO_NIVEL.hidden = false;
});

BOTAO_VOLTAR_SELECAO.addEventListener("click", function() {
    SELECAO_NIVEL.hidden = true;
});

NIVEIS.forEach(function(nivel) {
    document.querySelector(nivel.botao).addEventListener("click", function() {
        sessionStorage.setItem("nivel-selecionado", nivel.dificuldade);
        document.querySelector(nivel.botao).disabled = true;
        TRANSICAO.classList.add("FECHAR");

        setTimeout(function() {
            window.location.href = "pagina2.html";
        }, 500);
    });
});