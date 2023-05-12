document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');
    images.forEach(function (image) {
        image.onerror = function () {
            this.onerror = null;
            this.src = '../images/imagempadrao.png';
        };
    });
});
