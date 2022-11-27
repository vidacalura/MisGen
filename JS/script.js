import { dados } from "./dados.js";

const musicaFrame = document.getElementById("musica-iframe");
const btns = document.querySelectorAll(".guess-btn");
const textoPlacar = document.getElementById("texto-placar");

const sleep = ms => new Promise(r => setTimeout(r, ms));

let musicaAtual = null;
let rodadas = 1;
let pontos = 0;

// Define a função dos botões do jogo
for (const btn of btns){

    btn.addEventListener("click", async (e) => {

        if (e.target.id == musicaAtual.cantor.genero){
            // Avisar que acertou
            textoPlacar.textContent = "Certa resposta! :)";

            pontos++;
        }
        else{
            textoPlacar.textContent = "Você errou. :(";
        }

        if (rodadas == 10){
            encerrarJogo();
        }
        else {
            rodadas++;

            await sleep(2000);
            gerarMusica();
        }

    });

}

gerarMusica();


function gerarMusica(){

    textoPlacar.textContent = "";
    const randN = Math.floor(Math.random() * dados.length);
    musicaAtual = dados[randN];

    // Fazer músicas não se repetir
    dados.splice(dados.indexOf(musicaAtual), 1);

    musicaFrame.src = musicaAtual.embedLink;

}

function encerrarJogo(){

    document.querySelector("section").remove();

    const vitoriaTexto = document.createElement("p");
    vitoriaTexto.textContent = "Você acertou " + pontos + "/" + rodadas + "!";
    vitoriaTexto.classList.add("p-final");

    document.querySelector("main").appendChild(vitoriaTexto);

}