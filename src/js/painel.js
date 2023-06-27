const imagens = document.querySelectorAll(".slide")
const setaVoltar = document.getElementById("seta-voltar")
const setaAvancar = document.getElementById("seta-avancar")

let imagemAtual = 0

/* setaAvancar.addEventListener("click", function() {
        imagens[imagemAtual].classList.remove("mostrar")
        imagens[imagemAtual+1].classList.add("mostrar")
        imagemAtual++
})

setaVoltar.addEventListener("click", function() {
        imagens[imagemAtual].classList.remove("mostrar")
        imagens[imagemAtual-1].classList.add("mostrar")
        imagemAtual--
}) */

// Resolução

setaAvancar.addEventListener("click", function(){
    if (imagemAtual === imagens.length - 1){
        return;
    }

    imagemAtual++

    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
})

setaVoltar.addEventListener("click", function(){
    if (imagemAtual === 0){
        return;
    }

    imagemAtual--

    esconderImagemAberta()
    mostrarImagem()
    mostrarOuEsconderSetas()
})

function esconderImagemAberta(){
    const imagemAberta = document.querySelector(".mostrar")
    imagemAberta.classList.remove("mostrar")
}

function mostrarImagem(){
    imagens[imagemAtual].classList.add("mostrar")
}

function mostrarOuEsconderSetas(){
    if(imagemAtual !== 0){
        setaVoltar.classList.remove("opacidade")
    } else {
        setaVoltar.classList.add("opacidade")
    }

    if(imagemAtual === imagens.length - 1){
        setaAvancar.classList.add("opacidade")
    } else {
        setaAvancar.classList.remove("opacidade")
    }
}