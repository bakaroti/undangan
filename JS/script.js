document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bukaUndanganButton').addEventListener('click', function(e) {
        e.preventDefault();
        var targetElement = document.getElementById(this.getAttribute('href').substring(1));
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});