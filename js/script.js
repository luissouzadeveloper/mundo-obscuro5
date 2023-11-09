// Menu
let botao = document.querySelector('.btn-mobile');

botao.addEventListener('click', () => {
    let navMobile = document.querySelector('.navegacao-mobile');

    if (navMobile.classList.contains('abrir')) {
        navMobile.classList.remove('abrir');
    } else {
        navMobile.classList.add('abrir');
    }
});