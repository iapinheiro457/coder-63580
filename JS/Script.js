document.addEventListener('scroll', function() {
    var secoes = document.querySelectorAll('.secao');
    secoes.forEach(function(secao) {
        var posicao = secao.getBoundingClientRect();
        if (posicao.top < window.innerHeight && posicao.bottom > 0) {
            secao.classList.add('visivel');
        }
    });
});
