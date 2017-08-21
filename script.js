var kittenPictures = document.querySelectorAll('.image-container');
console.log(kittenPictures)

countClicks = function (e) {
    var counter = parseInt(this.querySelector('.clicks').textContent);
    console.log('Clicked!');
    counter += 1;
    console.log(this);
    this.querySelector('.clicks').textContent = '' + counter;
}

for (var i = 0; i < kittenPictures.length; i++) {
    console.log(i);
    var kittenPicture = kittenPictures[i];
    kittenPicture.addEventListener('click', countClicks, false);
}