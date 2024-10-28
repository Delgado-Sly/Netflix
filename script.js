// Document = HTML
let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let modal = document.querySelector(".modal")
let botao_info = document.querySelector(".link-info")
//let botao_assistir = document.querySelector(".link-assistir")


// Ligar e Desligar Som
botaoSom.addEventListener("click", () => {
    if(video.muted){
        ligarSom()
    } else {
        desligarSom()
    }
})

function ligarSom(){
    video.muted = false
}

function desligarSom(){
    video.muted = true
}


// Abrir e Fechar Modal
botao_info.addEventListener("click", abrirModal)
modal.addEventListener("click", fecharModal)

function abrirModal(){
    modal.style.display = "block"
}

function fecharModal(){
    modal.style.display = "none"
}


/*
Abrir Filme
botao_assistir.addEventListener("click", abrirFilme)

function abrirFilme(){
    alert('Abrir Filme!!!')
}
*/