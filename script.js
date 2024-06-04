const caixaPrincipal=document.querySelector(".caixa-principal")
const caixaPerguntas=document.querySelector(".caixa-perguntas")
const caixaAlternativas=document.querySelector(".caixa-alternativas")
const caixaResultado=document.querySelector(".caixa-resultado")
const caixaResultado=document.querySelector(".caixa-resultado")

const perguntas = [
    {
        enunciado:"gab é viado?",
        alternativas:[
            "Sim",
            "Sim, certeza",
                ]
    },
    {
        enunciado:"complete: gabreil  ",
        alternativas:[
            "linos",
            "pauling",
                ]
    },
    {
        enunciado:"supra ou skayline?",
        alternativas:[
            "supra",
            "skayline",
                ]
    },
    {
        enunciado:"turbinado ou aspirado",
        alternativas:[
            "tubinado",
            "aspirado ______",
                ]
    },
    {
        enunciado:"o que e um radiador?",
        alternativas:[
            "sistema de resfriamento",
            "caixa de som",
                ]
    },  
];

let atual =0;
let pergunta.Atual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado
  
}

function mostraPergunta();
     for(const alternativaofperguntaAtual.alternativas){
     const botaoAlternativas = document.createElement("buton");
     botaoAlternativas.textContent = alternativa;
     caixaAlternativas.appendChild(botaoAlternativas);
    }
}
]
