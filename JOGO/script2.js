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
    TRANISIÇÃO CIRCULO DIMINUI
##################################
*/
const TRANSICAO = document.querySelector("#TRANSICAO");

window.addEventListener("load", function() {
    setTimeout(function() {
        TRANSICAO.classList.add("ABRIR");
    }, 100);
});





/*
#############################################################################################################################################
                                                        PERGUNTAS DO JOGO
#############################################################################################################################################
*/

/*
###################
    NIVEL FÁCIL
###################
*/
const PERGUNTAS = [
    {
        dificuldade: "FÁCIL",
        tema: "CORES",
        pergunta: "1- QUAL É A COR DA BOLA?",
        respostas: ["VERMELHO", "AZUL", "VERDE", "AMARELO"],
        certa: "VERDE",
    },

    {
        dificuldade: "FÁCIL",
        tema: "CORES",
        pergunta: "2- QUAL É A COR DO CABELO DO MENINO?",
        respostas: ["VERMELHO", "AZUL", "VERDE", "AMARELO"],
        certa: "AZUL",
    },


    {
        dificuldade: "FÁCIL",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "3- QUAL FORMA GEOMÉTRICA SE PARECE COM UMA BOLA?",
        respostas: ["TRIÂNGULO", "QUADRADO", "CÍRCULO", "RETÂNGULO"],
        certa: "CÍRCULO",
    },

    {
        dificuldade: "FÁCIL",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "4- QUAL FORMA GEOMÉTRICA SE PARECE COM UMA PIRÂMIDE?",
        respostas: ["TRIÂNGULO", "QUADRADO", "CÍRCULO", "RETÂNGULO"],
        certa: "TRIÂNGULO",
    },

    {
        dificuldade: "FÁCIL",
        tema: "QUANTIDADE",
        pergunta: "5- QUANTAS MAÇÃS APARECEM NA IMAGEM?",
        respostas: ["1", "2", "3", "4"],
        certa: "2",
    },

    {
        dificuldade: "FÁCIL",
        tema: "QUANTIDADE",
        pergunta: "6- QUANTOS PEIXES APARECEM NA IMAGEM?",
        respostas: ["1", "2", "3", "4"],
        certa: "4",
    },

    {
        dificuldade: "FÁCIL",
        tema: "ANIMAIS",
        pergunta: "7- QUAL DESSES ANIMAIS É CONSIDERADO O MELHOR AMIGO DO HOMEM?",
        respostas: ["GATO", "CACHORRO", "PEIXE", "COELHO"],
        certa: "CACHORRO",
    },

    {
        dificuldade: "FÁCIL",
        tema: "ANIMAIS",
        pergunta: "8- QUAL ANIMAL É MAIS COMUM DE ENCONTRAR NAS RUAS DE UMA CIDADE?",
        respostas: ["LEÃO", "GATO", "ELEFANTE", "TIGRE"],
        certa: "GATO",
    },

    {
        dificuldade: "MÉDIO",
        tema: "CORES",
        pergunta: "1- QUAL COR SE FORMA AO MISTURAR TINTA VERMELHA COM AMARELA?",
        respostas: ["LARANJA", "ROXA", "VERDE", "MARROM"],
        certa: "LARANJA",
    },

    {
        dificuldade: "MÉDIO",
        tema: "CORES",
        pergunta: "2- QUAL COR SE FORMA AO MISTURAR TINTA AZUL COM AMARELA?",
        respostas: ["VERDE", "VERMELHA", "ROXA", "LARANJA"],
        certa: "VERDE",

    },

    {
        dificuldade: "MÉDIO",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "3- QUAL PAR JUNTA UMA FORMA PLANA A UM OBJETO 3D COM FORMATO RELACIONADO?",
        respostas: ["QUADRADO + BOLA", "TRIÂNGULO + PIRÂMIDE", "CUBO + CÍRCULO", "BOLA + TRIÂNGULO"],
        certa: "TRIÂNGULO + PIRÂMIDE",
    },

    {
        dificuldade: "MÉDIO",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "4- QUAL FORMA NÃO TEM LADOS NEM VÉRTICES?",
        respostas: ["CÍRCULO", "QUADRADO", "TRIÂNGULO", "RETÂNGULO"],
        certa: "CÍRCULO",
    },

    {
        dificuldade: "MÉDIO",
        tema: "QUANTIDADE",
        pergunta: "5- NA CASA HÁ 2 ADULTOS E 2 CRIANÇAS. QUANTAS PESSOAS ESTÃO NA CASA?",
        respostas: ["3", "4", "5", "6"],
        certa: "4",
    },

    {
        dificuldade: "MÉDIO",
        tema: "QUANTIDADE",
        pergunta: "6- NO CERCADO HÁ 2 VACAS, 1 CAVALO E 3 GALINHAS. QUANTOS ANIMAIS HÁ AO TODO?",
        respostas: ["3", "4", "5", "6"],
        certa: "6",
    },

    {
        dificuldade: "MÉDIO",
        tema: "ANIMAIS",
        pergunta: "7- ONDE O LOBO VIVE NATURALMENTE?",
        respostas: ["FLORESTA", "CIDADE", "RIO", "FAZENDA"],
        certa: "FLORESTA",

    },

    {
        dificuldade: "MÉDIO",
        tema: "ANIMAIS",
        pergunta: "8- ONDE É COMUM ENCONTRAR UM GATO DOMÉSTICO?",
        respostas: ["FLORESTA", "CIDADE", "RIO", "OCEANO"],
        certa: "CIDADE",
    },

    {
        dificuldade: "DIFÍCIL",
        tema: "CORES",
        pergunta: "1- AS FIGURAS MOSTRADAS SÃO BOLINHAS VERMELHAS. QUAL É A COR DELAS?",
        respostas: ["VERMELHA", "AZUL", "VERDE", "AMARELA"],
        certa: "VERMELHA",
    },

    {
        dificuldade: "DIFÍCIL",
        tema: "CORES",
        pergunta: "2- A FIGURA TEM APENAS BOLINHAS VERMELHAS. QUANTAS CORES DIFERENTES APARECEM?",
        respostas: ["1", "2", "3", "4"],
        certa: "1",
    },

    {
        dificuldade: "DIFÍCIL",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "3- QUAL FORMA TEM QUATRO LADOS IGUAIS E QUATRO ÂNGULOS RETOS?",
        respostas: ["QUADRADO", "TRIÂNGULO", "CÍRCULO", "RETÂNGULO"],
        certa: "QUADRADO",
    },

    {
        dificuldade: "DIFÍCIL",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "4- QUAL FORMA NÃO TEM LADOS NEM VÉRTICES?",
        respostas: ["QUADRADO", "TRIÂNGULO", "CÍRCULO", "RETÂNGULO"],
        certa: "CÍRCULO",
    },

    {
        dificuldade: "DIFÍCIL",
        tema: "QUANTIDADE",
        pergunta: "5- O CARRO COMPORTA 4 CAPIVARAS POR VIAGEM. QUANTAS CABEM EM CADA VIAGEM?",
        respostas: ["1", "2", "3", "4"],
        certa: "4",
    },

    {
        dificuldade: "DIFÍCIL",
        tema: "QUANTIDADE",
        pergunta: "6- A PISCINA COMPORTA 5 CAPIVARAS. QUANTAS CABEM NELA?",
        respostas: ["2", "3", "4", "5"],
        certa: "5",
    },

    {
        dificuldade: "DIFÍCIL",
        tema: "ANIMAIS",
        pergunta: "7- QUAL É O PAR MACHO DA VACA?",
        respostas: ["BOI", "CACHORRO", "LOBO", "URSO"],
        certa: "BOI",
    },

    {
        dificuldade: "DIFÍCIL",
        tema: "ANIMAIS",
        pergunta: "8- QUAL É O PAR FÊMEA DO PINGUIM?",
        respostas: ["LOBA", "URSA", "PINGUIM FÊMEA", "LEOA"],
        certa: "PINGUIM FÊMEA",
    },

    {
        dificuldade: "SUPER DIFÍCIL",
        tema: "CORES",
        pergunta: "1- O CÉU É AZUL E A GRAMA É VERDE. QUAIS CORES FORAM MENCIONADAS?",
        respostas: ["AZUL E VERMELHO", "PRETO E VERDE", "ROXO E AMARELO", "AZUL E VERDE"],
        certa: "AZUL E VERDE",
    },

    {
        dificuldade: "SUPER DIFÍCIL",
        tema: "CORES",
        pergunta: "2- A CAPIVARA É MARROM E O PATO É BRANCO. QUAIS CORES FORAM MENCIONADAS?",
        respostas: ["PRETO E BRANCO", "VERMELHO E ROXO", "MARROM E BRANCO", "BRANCO E ROSA"],
        certa: "MARROM E BRANCO",
    },

    {
        dificuldade: "SUPER DIFÍCIL",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "3- QUAL FIGURA É FORMADO JUNTANDO ESSAS 3 FORMAS?",
        respostas: ["AVIÃO", "BOLA", "PRESENTE", "FUNIL"],
        certa: "AVIÃO",
    },

    {
        dificuldade: "SUPER DIFÍCIL",
        tema: "FORMAS GEOMÉTRICAS",
        pergunta: "4- QUAL OBJETO TEM FORMATO REDONDO, PARECIDO COM UMA ESFERA?",
        respostas: ["AVIÃO", "BOLA", "PRESENTE", "FUNIL"],
        certa: "BOLA",
    },

    {
        dificuldade: "SUPER DIFÍCIL",
        tema: "QUANTIDADE",
        pergunta: "5- SE 3 CAPIVARAS SAÍREM DO RIO, QUANTAS IRÃO FICAR?",
        respostas: ["1", "2", "3", "4"],
        certa: "1",
    },

    {
        dificuldade: "SUPER DIFÍCIL",
        tema: "QUANTIDADE",
        pergunta: "6- CADA BARCO LEVA 3 CAPIVARAS. QUANTAS CABEM EM CADA BARCO?",
        respostas: ["1", "2", "3", "4"],
        certa: "3",
    },

    {
        dificuldade: "SUPER DIFÍCIL",
        tema: "ANIMAIS",
        pergunta: "7- QUAL É O HABITAT NATURAL DO GOLFINHO?",
        respostas: ["MAR", "RIO", "LAGO", "CIDADE"],
        certa: "MAR",
    },

    {
        dificuldade: "SUPER DIFÍCIL",
        tema: "ANIMAIS",
        pergunta: "8- QUAL É O HABITAT NATURAL DO LEÃO?",
        respostas: ["SAVANA", "FLORESTA", "CIDADE", "LAGO"],
        certa: "SAVANA",
    }
];

const NIVEIS_DISPONIVEIS = ["FÁCIL", "MÉDIO", "DIFÍCIL", "SUPER DIFÍCIL"];
const NIVEL_SALVO = sessionStorage.getItem("nivel-selecionado");
const NIVEL_SELECIONADO = NIVEIS_DISPONIVEIS.includes(NIVEL_SALVO)
    ? NIVEL_SALVO
    : "FÁCIL";
const PERGUNTAS_DO_NIVEL = PERGUNTAS.filter(function(pergunta) {
    return pergunta.dificuldade === NIVEL_SELECIONADO;
});
const CHAVES_ESTRELAS = {
    "FÁCIL": "estrelas-nivel-facil",
    "MÉDIO": "estrelas-nivel-medio",
    "DIFÍCIL": "estrelas-nivel-dificil",
    "SUPER DIFÍCIL": "estrelas-nivel-super-dificil"
};

let perguntaAtual = 0;
let certas = 0;
let erradas = 0;
let respostaSelecionada = null;

/*
###############################################################################
    SELECIONANDO POSIÇÕES DOS ELEMENTOS: PERGUNTA - TEMA - NIVEL - RESPOSTA
###############################################################################
*/
const LOCAL_DIFICULDADE = document.querySelector("#JOGO-LOCAL-DIFICULDADE");
const LOCAL_TEMA = document.querySelector("#JOGO-LOCAL-TEMA");
const LOCAL_PERGUNTA = document.querySelector("#JOGO-LOCAL-PERGUNTAS");
const LOCAL_IMAGEM = document.querySelector("#JOGO-IMAGEM-OU-DESAFIO");

const RESPOSTA_A = document.querySelector("#RESPOSTA-A");
const RESPOSTA_B = document.querySelector("#RESPOSTA-B");
const RESPOSTA_C = document.querySelector("#RESPOSTA-C");
const RESPOSTA_D = document.querySelector("#RESPOSTA-D");
const BOTOES_RESPOSTAS = [
    document.querySelector(".LOCAL-RESPOSTA-A"),
    document.querySelector(".LOCAL-RESPOSTA-B"),
    document.querySelector(".LOCAL-RESPOSTA-C"),
    document.querySelector(".LOCAL-RESPOSTA-D")
];
const CONTEUDOS_RESPOSTA = [RESPOSTA_A, RESPOSTA_B, RESPOSTA_C, RESPOSTA_D];

const RESULTADO = document.querySelector("#JOGO-RESULTADO");
const RESULTADOS_CERTOS = document.querySelector("#JOGO-RESULTADOS-CERTOS");
const RESULTADOS_ERRADOS = document.querySelector("#JOGO-RESULTADOS-ERRADOS");

const ESTRELAS = document.querySelector("#JOGO-RESULTADO-ESTRELAS");

const BOTAO_CONTINUAR = document.querySelector("#JOGO-BOTAO-CONTINUAR");
const BOTAO_PARAR = document.querySelector("#JOGO-BOTAO-PARAR");
const BOTAO_RESULTADO_MENU = document.querySelector("#JOGO-RESULTADO-MENU");

function mostrarPergunta() {
    BOTOES_RESPOSTAS.forEach(function(botao) {
        botao.classList.remove("RESPOSTA-SELECIONADA", "RESPOSTA-CORRETA", "RESPOSTA-INCORRETA");
    });

    CONTEUDOS_RESPOSTA.forEach(function(elemento) {
        elemento.style.removeProperty("background-color");
        elemento.style.removeProperty("border");
    });

    respostaSelecionada = null;
    BOTAO_CONTINUAR.disabled = false;

    const perguntas = PERGUNTAS_DO_NIVEL[perguntaAtual];

    if (perguntas.tema == "CORES") {
        LOCAL_TEMA.style.color = "white";
    }
    if (perguntas.tema == "FORMAS GEOMÉTRICAS") {
        LOCAL_TEMA.style.color = "white";
    }
    if (perguntas.tema == "QUANTIDADE") {
        LOCAL_TEMA.style.color = "white";
    }
    if (perguntas.tema == "ANIMAIS") {
        LOCAL_TEMA.style.color = "white";
    }

    const coresDificuldade = {
        "FÁCIL": "lightgreen",
        "MÉDIO": "yellow",
        "DIFÍCIL": "red",
        "SUPER DIFÍCIL": "purple"
    };
    LOCAL_DIFICULDADE.style.color = coresDificuldade[perguntas.dificuldade];

    LOCAL_DIFICULDADE.querySelector("h2").textContent = perguntas.dificuldade;
    LOCAL_TEMA.querySelector("h2").textContent = perguntas.tema;
    LOCAL_PERGUNTA.textContent = perguntas.pergunta;
    LOCAL_IMAGEM.replaceChildren();
    LOCAL_IMAGEM.style.backgroundImage = "none";

    let respostas = [...perguntas.respostas];

    respostas.sort(function() {
        return Math.random() - 0.5;
    });

    BOTOES_RESPOSTAS.forEach(function(botao, indice) {
        const conteudoResposta = CONTEUDOS_RESPOSTA[indice];
        const caixaImagem = conteudoResposta.querySelector(".RESPOSTA-IMAGEM");
        const textoResposta = conteudoResposta.querySelector(".RESPOSTA-TEXTO");
        const resposta = respostas[indice];

        caixaImagem.replaceChildren();
        textoResposta.textContent = resposta;
        botao.classList.remove("RESPOSTA-COM-IMAGEM");
        botao.setAttribute("aria-label", resposta);
    });
}

mostrarPergunta();


/*
###################################
    VERIFICAR RESPOSTAS - FÁCIL
###################################
*/
RESPOSTA_A.addEventListener("click", function() {
    verificarResposta(RESPOSTA_A);
});

RESPOSTA_B.addEventListener("click", function() {
    verificarResposta(RESPOSTA_B);
});

RESPOSTA_C.addEventListener("click", function() {
    verificarResposta(RESPOSTA_C);
});

RESPOSTA_D.addEventListener("click", function() {
    verificarResposta(RESPOSTA_D);
});

function verificarResposta(resposta) {
    if (respostaSelecionada) {
        respostaSelecionada.closest("button").classList.remove("RESPOSTA-SELECIONADA");
    }

    respostaSelecionada = resposta;
    respostaSelecionada.closest("button").classList.add("RESPOSTA-SELECIONADA");
}

BOTAO_CONTINUAR.addEventListener("click", function() {
    if (!respostaSelecionada || BOTAO_CONTINUAR.disabled) return;

    const pergunta = PERGUNTAS_DO_NIVEL[perguntaAtual];
    const textoSelecionado = respostaSelecionada
        .querySelector(".RESPOSTA-TEXTO")
        .textContent
        .trim();
    const botaoSelecionado = respostaSelecionada.closest("button");
    const respostaCorreta = textoSelecionado === pergunta.certa;

    BOTAO_CONTINUAR.disabled = true;
    if (respostaCorreta) {
        certas++;
        botaoSelecionado.classList.remove("RESPOSTA-SELECIONADA");
        botaoSelecionado.classList.add("RESPOSTA-CORRETA");
    }
    else {
        erradas++;
        botaoSelecionado.classList.remove("RESPOSTA-SELECIONADA");
        botaoSelecionado.classList.add("RESPOSTA-INCORRETA");
    }

    perguntaAtual++;

    if (perguntaAtual < PERGUNTAS_DO_NIVEL.length) {
        const painel = document.querySelector(".JOGO-PAINEL-PERGUNTAS");

        painel.classList.add("SAINDO");

        setTimeout(function() {
            mostrarPergunta();

            painel.classList.remove("SAINDO");
            painel.classList.add("ENTRANDO");

            setTimeout(function() {
                painel.classList.remove("ENTRANDO");
            }, 50);
        }, 400);
    }

    else {
        const estrelas = Math.round((certas / PERGUNTAS_DO_NIVEL.length) * 3);
        const chaveEstrelas = CHAVES_ESTRELAS[NIVEL_SELECIONADO];
        const melhorPontuacao = Number(localStorage.getItem(chaveEstrelas) || 0);

        if (estrelas > melhorPontuacao) {
            localStorage.setItem(chaveEstrelas, String(estrelas));
        }

        RESULTADOS_CERTOS.textContent = "ACERTOS: " + certas;
        RESULTADOS_ERRADOS.textContent = "ERROS: " + erradas;

        ESTRELAS.textContent = "★".repeat(estrelas) + "☆".repeat(3 - estrelas);

        setTimeout(function() {
            document.querySelector("#JOGO-BLUR").style.display = "block";

            RESULTADO.style.display = "flex";
        }, 1500);
    }
});

function voltarAoMenu() {
    TRANSICAO.classList.remove("ABRIR");
    TRANSICAO.classList.add("FECHAR");

    setTimeout(function() {
        window.location.href = "MENU.html";
    }, 500);
}

BOTAO_PARAR.addEventListener("click", voltarAoMenu);
BOTAO_RESULTADO_MENU.addEventListener("click", voltarAoMenu);