var kittenPicture = document.querySelector('#image-container');
var counter = 0;
kittenPicture.addEventListener('click', function (e) {
    console.log('Clicked!');
    counter += 1;
    document.querySelector('#clicks').textContent = '' + counter;

}, false);