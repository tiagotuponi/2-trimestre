const caixaPrincipal=document.querySelector(".caixa-principal")
const caixaPerguntas=document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector(".caixa-alternativas")
const caixaResultado=document.querySelector(".caixa-resultado")
const caixaResultado=document.querySelector(".texto-resultado")

const perguntas = [
    {
        enunciado: "gab e viado",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "vocÊ gosta de jogar ",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "vocÊ gosta de pizza",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "vocÊ gosta de sair com os amigos",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "vocÊ gosta de carros",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "afirmação"
            },
            {
                texto: "não",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }  
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmação; /* mudar para opcaoSelecionada.afirmacao*/
            historiaFinal += afirmacoes + " ";
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = ""
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();
