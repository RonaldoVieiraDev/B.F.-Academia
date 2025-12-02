const botaoMobile = document.getElementById('botao-mobile');
function alternarMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navegacao');
    nav.classList.toggle('ativo');
    const ativo = nav.classList.contains('ativo');
    event.currentTarget.setAttribute('aria-expanded', ativo);
    
    if (ativo) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
botaoMobile.addEventListener('click', alternarMenu);
botaoMobile.addEventListener('touchstart', alternarMenu);

const roleta = document.getElementById('roleta');
let estaPressionado = false;
let inicioX;
let rolagemEsquerda;

roleta.addEventListener('mousedown', (e) => {
    estaPressionado = true;
    roleta.classList.add('ativo');
    inicioX = e.pageX - roleta.offsetLeft;
    rolagemEsquerda = roleta.scrollLeft;
});

roleta.addEventListener('mouseleave', () => {
    estaPressionado = false;
    roleta.classList.remove('ativo');
});

roleta.addEventListener('mouseup', () => {
    estaPressionado = false;
    roleta.classList.remove('ativo');
});

roleta.addEventListener('mousemove', (e) => {
    if (!estaPressionado) return;
    e.preventDefault();
    const x = e.pageX - roleta.offsetLeft;
    const caminhada = (x - inicioX) * 2;
    roleta.scrollLeft = rolagemEsquerda - caminhada;
});