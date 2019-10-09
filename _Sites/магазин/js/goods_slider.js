document.body.onclick = function (event) {
    event = event || window.event;
    if (event.target.classList.contains('goods-min')) {
        // remove .active class in .goods-img-min divs
        var allDivs = document.querySelectorAll('.goods-img-min div');
        for (var i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.remove('active');
        }

        document.getElementById('goods-max').src = event.target.src;
        event.target.parentElement.classList.add('active');
    }

}