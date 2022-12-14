var soma = 0
var somaLocalStorage = 0
var meuStorage = window.localStorage
var imgProdutoPrincipalAmpliada = document.getElementsByClassName('imgProdutoPrincipalDepoisDoClick')[0]
var x = window.matchMedia("(max-width: 375px)")
var y = window.matchMedia("(max-width: 920px)")

function mediaQueries375px(x){
    let secaoTotalLadoEsquerdoDepoisDoClick = document.getElementsByClassName('secaoTotalLadoEsquerdoDepoisDoClick')[0]

    if (x.matches){
        secaoTotalLadoEsquerdoDepoisDoClick.style.display = 'flex' 
    } 
}

function mediaQueries920px(y){
    let secaoTotalLadoEsquerdoDepoisDoClick = document.getElementsByClassName('secaoTotalLadoEsquerdoDepoisDoClick')[0]

    if (y.matches){
        secaoTotalLadoEsquerdoDepoisDoClick.style.display = 'flex' 
    } else {
        secaoTotalLadoEsquerdoDepoisDoClick.style.display = 'none'
    }
}

mediaQueries920px(y)
y.addListener(mediaQueries920px)

mediaQueries375px(x)
x.addListener(mediaQueries375px)

function clickBotaoAdicionar(){
    let quantidade = document.getElementById('quantidade')
    soma = soma + 1

    if (soma < 0){
        soma = 0 
        quantidade.innerHTML = `${soma}`
    } else {
        quantidade.innerHTML = `${soma}`
    }   
}

function clickBotaoEliminar(){
    let quantidade = document.getElementById('quantidade')
    soma = soma - 1

    if (soma < 0){
        soma = 0 
        quantidade.innerHTML = `${soma}`
    } else {
        quantidade.innerHTML = `${soma}`
    }   
}

function clickBotaoAddCart(){
    var quantidadeCarrinho = document.getElementById("quantidadeCarrinho")
 
    if (soma > 0) {
        somaLocalStorage = soma
        meuStorage.setItem('ValorTotal-Produto-Tenis', JSON.stringify(somaLocalStorage * 125))
        quantidadeCarrinho.style.display = 'flex'
        quantidadeCarrinho.innerHTML = somaLocalStorage
    }else{
        quantidadeCarrinho.style.display = 'none'
        localStorage.clear()
    }
}


window.addEventListener("click", function(event) {
    let openCart = document.getElementById('divDescricaoProdutoCart')

    if (!openCart.contains(event.target)){
        if (openCart.style.display == 'block'){
            openCart.style.display = 'none'
        }
    }
})

function openCart(event){
    let openCart = document.getElementById('divDescricaoProdutoCart')
    let descricaoCartVazio = document.getElementById("paragrafoDescricaoCartVazio")
    let descricaoCartCheio = document.getElementById("divTotalDescricaoCartCheio")
    let paragrafoCartCheio = document.getElementById('paragrafoDescricaoCartCheio')
    paragrafoCartCheio.innerHTML = `Fall Limited Edition Sneakers <br>
    $ 125.00 x`

        openCart.style.display = 'block'
        event.stopPropagation(); 
        
        if(soma > 0){
            descricaoCartVazio.style.display = "none"
            descricaoCartCheio.style.display = "block"
            paragrafoCartCheio.innerHTML += ""
            paragrafoCartCheio.innerHTML += ` ${soma}  <span class="textBlack">$${soma * 125}.00</span>`
        }else{
            descricaoCartVazio.style.display = "flex"
            descricaoCartCheio.style.display = "none"
        }
}

function excluindoItemCart(){
    let quantidade = document.getElementById('quantidade')
    let descricaoCartVazio = document.getElementById("paragrafoDescricaoCartVazio")
    let descricaoCartCheio = document.getElementById("divTotalDescricaoCartCheio")
    let quantidadeCarrinho = document.getElementById('quantidadeCarrinho')
    soma = 0

    descricaoCartVazio.style.display = 'flex'
    descricaoCartCheio.style.display = 'none'
    quantidade.innerHTML = `${soma}`
    quantidadeCarrinho.style.display = 'none'
    localStorage.clear()
}


function fechandoImagens(){
    let secaoTotalLadoEsquerdoDepoisDoClick = document.getElementsByClassName('secaoTotalLadoEsquerdoDepoisDoClick')[0]
    let bigOverlay = document.getElementsByClassName('bigOverlay')[0]

    secaoTotalLadoEsquerdoDepoisDoClick.style.display = 'none'
    bigOverlay.style.display = 'none'
}

function abrirMenu(){
    let divOpcoesMediaQueries = document.getElementsByClassName("divOpcoesMediaQueries")[0]
    let bigOverlay = document.getElementsByClassName("bigOverlay")[0]
    divOpcoesMediaQueries.style.display = 'block'
    bigOverlay.style.display = "block"
}

function fecharMenu(){
    let divOpcoesMediaQueries = document.getElementsByClassName("divOpcoesMediaQueries")[0]
    let bigOverlay = document.getElementsByClassName("bigOverlay")[0]
    divOpcoesMediaQueries.style.display = 'none'
    bigOverlay.style.display = "none"
}

function clickFoto1AmpliandoImg(event){
    let overlay1 = document.getElementsByClassName('clickOver')[0]
    let overlay2 = document.getElementsByClassName('clickOver')[1]
    let overlay3 = document.getElementsByClassName('clickOver')[2]
    let overlay4 = document.getElementsByClassName('clickOver')[3]
    let divOverlayImagens1 = document.getElementsByClassName('divOverlayImagens1')[0]

    overlay2.style.display = 'none'
    overlay3.style.display = 'none'
    overlay4.style.display = 'none'
    
    if(divOverlayImagens1.contains(event.target)){
    imgProdutoPrincipalAmpliada.setAttribute('src', 'images/image-product-1.jpg');
    overlay1.style.display = 'block';
    } else {
        overlay1.style.display = 'none'
    }

    event.stopPropagation()
}

function clickFoto2AmpliandoImg(event){
    let overlay1 = document.getElementsByClassName('clickOver')[0]
    let overlay2 = document.getElementsByClassName('clickOver')[1]
    let overlay3 = document.getElementsByClassName('clickOver')[2]
    let overlay4 = document.getElementsByClassName('clickOver')[3]
    let divOverlayImagens2 = document.getElementsByClassName('divOverlayImagens2')[0]

    overlay1.style.display = 'none'
    overlay3.style.display = 'none'
    overlay4.style.display = 'none'

    if(divOverlayImagens2.contains(event.target)){
    imgProdutoPrincipalAmpliada.setAttribute('src', 'images/image-product-2.jpg');
    overlay2.style.display = 'block';
    } else {
        overlay2.style.display = 'none'
    }

    event.stopPropagation()
}

 function clickFoto3AmpliandoImg(event){
    let overlay1 = document.getElementsByClassName('clickOver')[0]
    let overlay2 = document.getElementsByClassName('clickOver')[1]
    let overlay3 = document.getElementsByClassName('clickOver')[2]
    let overlay4 = document.getElementsByClassName('clickOver')[3]
    let divOverlayImagens3 = document.getElementsByClassName('divOverlayImagens3')[0]

    overlay1.style.display = 'none'
    overlay2.style.display = 'none'
    overlay4.style.display = 'none'


    if(divOverlayImagens3.contains(event.target)){
    imgProdutoPrincipalAmpliada.setAttribute('src', 'images/image-product-3.jpg');
    overlay3.style.display = 'block';
    } else {
        overlay3.style.display = 'none'
    }

    event.stopPropagation()
}

function clickFoto4AmpliandoImg(event){
    let overlay1 = document.getElementsByClassName('clickOver')[0]
    let overlay2 = document.getElementsByClassName('clickOver')[1]
    let overlay3 = document.getElementsByClassName('clickOver')[2]
    let overlay4 = document.getElementsByClassName('clickOver')[3]
    let divOverlayImagens4 = document.getElementsByClassName('divOverlayImagens4')[0]

    overlay1.style.display = 'none'
    overlay2.style.display = 'none'
    overlay3.style.display = 'none'

    if(divOverlayImagens4.contains(event.target)){
    imgProdutoPrincipalAmpliada.setAttribute('src', 'images/image-product-4.jpg');
    overlay4.style.display = 'block';
    } else {
        overlay4.style.display = 'none';
    }
    
    event.stopPropagation()
}

function clicandoDuasVezesNaImg1(){
    let secaoTotalLadoEsquerdoDepoisDoClick = document.getElementsByClassName('secaoTotalLadoEsquerdoDepoisDoClick')[0]
    let bigOverlay = document.getElementsByClassName('bigOverlay')[0]

    secaoTotalLadoEsquerdoDepoisDoClick.style.display = 'flex'
    bigOverlay.style.display = 'block'
    
    imgProdutoPrincipalAmpliada.setAttribute('src', 'images/image-product-1.jpg')
}

function clicandoDuasVezesNaImg2(){
    let secaoTotalLadoEsquerdoDepoisDoClick = document.getElementsByClassName('secaoTotalLadoEsquerdoDepoisDoClick')[0]
    let bigOverlay = document.getElementsByClassName('bigOverlay')[0]

    secaoTotalLadoEsquerdoDepoisDoClick.style.display = 'flex'
    bigOverlay.style.display = 'block'
    
    imgProdutoPrincipalAmpliada.setAttribute('src', 'images/image-product-2.jpg')
}

function clicandoDuasVezesNaImg3(){
    let secaoTotalLadoEsquerdoDepoisDoClick = document.getElementsByClassName('secaoTotalLadoEsquerdoDepoisDoClick')[0]
    let bigOverlay = document.getElementsByClassName('bigOverlay')[0]

    secaoTotalLadoEsquerdoDepoisDoClick.style.display = 'flex'
    bigOverlay.style.display = 'block'
    
    imgProdutoPrincipalAmpliada.setAttribute('src', 'images/image-product-3.jpg')
}

function clicandoDuasVezesNaImg4(){
    let secaoTotalLadoEsquerdoDepoisDoClick = document.getElementsByClassName('secaoTotalLadoEsquerdoDepoisDoClick')[0]
    let bigOverlay = document.getElementsByClassName('bigOverlay')[0]

    secaoTotalLadoEsquerdoDepoisDoClick.style.display = 'flex'
    bigOverlay.style.display = 'block'
    
    imgProdutoPrincipalAmpliada.setAttribute('src', 'images/image-product-4.jpg')
}

function clickPrevious(){
    let foto2 = "images/image-product-2.jpg"
    let foto3 = "images/image-product-3.jpg"
    let foto4 = "images/image-product-4.jpg"

    if(imgProdutoPrincipalAmpliada.getAttribute('src') == foto2){
        imgProdutoPrincipalAmpliada.setAttribute('src', `images/image-product-1.jpg`)

    } else if(imgProdutoPrincipalAmpliada.getAttribute('src') == foto3){
        imgProdutoPrincipalAmpliada.setAttribute('src', `images/image-product-2.jpg`)

    }else if(imgProdutoPrincipalAmpliada.getAttribute('src') == foto4){
        imgProdutoPrincipalAmpliada.setAttribute('src', `images/image-product-3.jpg`)

    }
}

function clickNext(){
    let foto1 = "images/image-product-1.jpg"
    let foto2 = "images/image-product-2.jpg"
    let foto3 = "images/image-product-3.jpg"

    if(imgProdutoPrincipalAmpliada.getAttribute('src') == foto1){
        imgProdutoPrincipalAmpliada.setAttribute('src', `images/image-product-2.jpg`)

    } else if(imgProdutoPrincipalAmpliada.getAttribute('src') == foto2){
        imgProdutoPrincipalAmpliada.setAttribute('src', `images/image-product-3.jpg`)

    }else if(imgProdutoPrincipalAmpliada.getAttribute('src') == foto3){
        imgProdutoPrincipalAmpliada.setAttribute('src', `images/image-product-4.jpg`)
    }
}

function clickFoto1(event){
    let imgProdutoPrincipal = document.getElementsByClassName('imgProdutoPrincipal')[0]
    let overlay1 = document.getElementsByClassName('clickOver')[4]
    let overlay2 = document.getElementsByClassName('clickOver')[5]
    let overlay3 = document.getElementsByClassName('clickOver')[6]
    let overlay4 = document.getElementsByClassName('clickOver')[7]
    let divOverlayImagens1 = document.getElementsByClassName('divOverlayImagens1')[1]

    overlay2.style.display = 'none';
    overlay3.style.display = 'none';
    overlay4.style.display = 'none';
    
    if(divOverlayImagens1.contains(event.target)){
        imgProdutoPrincipal.setAttribute('src', 'images/image-product-1.jpg');
        overlay1.style.display = 'block';

    } else if (!divOverlayImagens1.contains(event.target)){
        overlay1.style.display = 'none';
    }
}

function clickFoto2(event){
    let imgProdutoPrincipal = document.getElementsByClassName('imgProdutoPrincipal')[0]
    let overlay1 = document.getElementsByClassName('clickOver')[4]
    let overlay2 = document.getElementsByClassName('clickOver')[5]
    let overlay3 = document.getElementsByClassName('clickOver')[6]
    let overlay4 = document.getElementsByClassName('clickOver')[7]
    let divOverlayImagens2 = document.getElementsByClassName('divOverlayImagens2')[1]

    overlay1.style.display = 'none';
    overlay3.style.display = 'none';
    overlay4.style.display = 'none';

    if(divOverlayImagens2.contains(event.target)){
        imgProdutoPrincipal.setAttribute('src', 'images/image-product-2.jpg');
        overlay2.style.display = 'block';

    } else if (!divOverlayImagens2.contains(event.target)){
        overlay2.style.display = 'none';
    }
}

 function clickFoto3(event){
    let imgProdutoPrincipal = document.getElementsByClassName('imgProdutoPrincipal')[0]
    let overlay1 = document.getElementsByClassName('clickOver')[4]
    let overlay2 = document.getElementsByClassName('clickOver')[5]
    let overlay3 = document.getElementsByClassName('clickOver')[6]
    let overlay4 = document.getElementsByClassName('clickOver')[7]
    let divOverlayImagens3 = document.getElementsByClassName('divOverlayImagens3')[1]

    overlay1.style.display = 'none';
    overlay2.style.display = 'none';
    overlay4.style.display = 'none';

    if(divOverlayImagens3.contains(event.target)){
        imgProdutoPrincipal.setAttribute('src', 'images/image-product-3.jpg');
        overlay3.style.display = 'block';

    } else if (!divOverlayImagens3.contains(event.target)){
        overlay3.style.display = 'none';
    }
}

function clickFoto4(event){
    let imgProdutoPrincipal = document.getElementsByClassName('imgProdutoPrincipal')[0]
    let overlay1 = document.getElementsByClassName('clickOver')[4]
    let overlay2 = document.getElementsByClassName('clickOver')[5]
    let overlay3 = document.getElementsByClassName('clickOver')[6]
    let overlay4 = document.getElementsByClassName('clickOver')[7]
    let divOverlayImagens4 = document.getElementsByClassName('divOverlayImagens4')[1]

    overlay1.style.display = 'none';
    overlay2.style.display = 'none';
    overlay3.style.display = 'none';

    if(divOverlayImagens4.contains(event.target)){
        imgProdutoPrincipal.setAttribute('src', 'images/image-product-4.jpg');
        overlay4.style.display = 'block';

    } else if (!divOverlayImagens4.contains(event.target)){
        overlay4.style.display = 'none';
    }
}


/*PARTE DE BAIXO OVERLAY */

function passandoNaImg1DepoisDoClick(){
    let overlay1 = document.getElementsByClassName('overlay')[0]

    overlay1.style.display = 'block';
    overlay1.style.border = '0px solid  hsl(26, 100%, 55%)'; 

}

function tirandoMouse1DepoisDoClick(){
    let overlay1 = document.getElementsByClassName('overlay')[0]
    
    overlay1.style.display = 'none';
    overlay1.style.border = '2px solid  hsl(26, 100%, 55%)';
    
}

function passandoNaImg2DepoisDoClick(){
    let overlay2 = document.getElementsByClassName('overlay')[1]

    overlay2.style.display = 'block';
    overlay2.style.border = '0px solid  hsl(26, 100%, 55%)';  
}

function tirandoMouse2DepoisDoClick(){
    let overlay2 = document.getElementsByClassName('overlay')[1]

    overlay2.style.display = 'none';
    overlay2.style.border = '2px solid  hsl(26, 100%, 55%)';
}

function passandoNaImg3DepoisDoClick(){
    let overlay3 = document.getElementsByClassName('overlay')[2]

    overlay3.style.display = 'block';
    overlay3.style.border = '0px solid  hsl(26, 100%, 55%)'; 
}

function tirandoMouse3DepoisDoClick(){
    let overlay3 = document.getElementsByClassName('overlay')[2]

    overlay3.style.display = 'none';
    overlay3.style.border = '2px solid  hsl(26, 100%, 55%)';
}

function passandoNaImg4DepoisDoClick(){
    let overlay4 = document.getElementsByClassName('overlay')[3]

    overlay4.style.display = 'block';
    overlay4.style.border = '0px solid  hsl(26, 100%, 55%)'; 
}

function tirandoMouse4DepoisDoClick(){
    let overlay4 = document.getElementsByClassName('overlay')[3]

    overlay4.style.display = 'none';
    overlay4.style.border = '2px solid  hsl(26, 100%, 55%)';
}

/*PARTE DE BAIXO OVERLAY */

function passandoNaImg1(){
    let overlay1 = document.getElementsByClassName('overlay')[4]

    overlay1.style.display = 'block';
    overlay1.style.border = '0px solid  hsl(26, 100%, 55%)'; 
}

function tirandoMouse1(){
    let overlay1 = document.getElementsByClassName('overlay')[4]
    
    overlay1.style.display = 'none';
    overlay1.style.border = '2px solid  hsl(26, 100%, 55%)';
}

function passandoNaImg2(){
    let overlay2 = document.getElementsByClassName('overlay')[5]

    overlay2.style.display = 'block';
    overlay2.style.border = '0px solid  hsl(26, 100%, 55%)'; 
}

function tirandoMouse2(){
    let overlay2 = document.getElementsByClassName('overlay')[5]

    overlay2.style.display = 'none';
    overlay2.style.border = '2px solid  hsl(26, 100%, 55%)';
}

function passandoNaImg3(){
    let overlay3 = document.getElementsByClassName('overlay')[6]

    overlay3.style.display = 'block';
    overlay3.style.border = '0px solid  hsl(26, 100%, 55%)'; 
}

function tirandoMouse3(){
    let overlay3 = document.getElementsByClassName('overlay')[6]

    overlay3.style.display = 'none';
    overlay3.style.border = '2px solid  hsl(26, 100%, 55%)';
}

function passandoNaImg4(){
    let overlay4 = document.getElementsByClassName('overlay')[7]

    overlay4.style.display = 'block';
    overlay4.style.border = '0px solid  hsl(26, 100%, 55%)'; 
}

function tirandoMouse4(){
    let overlay4 = document.getElementsByClassName('overlay')[7]

    overlay4.style.display = 'none';
    overlay4.style.border = '2px solid  hsl(26, 100%, 55%)';
}