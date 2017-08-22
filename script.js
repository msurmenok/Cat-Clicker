// Cats' names.
var names = ['Salsa', 'Pearl', 'Ebony', 'Misty', 'Buttercup', 'Mocha', 'Jailbird', 'Chilly', 'Cyclone'];

// Create main containers
var container = document.querySelector('.container')
var kittenContainer = document.createElement('div');
kittenContainer.setAttribute('class', 'kitten-container');

// Menu (anchor links)
var navigation = document.createElement('div');
navigation.setAttribute('class', 'menu');
var menu = document.createElement('ul');
navigation.appendChild(menu);

for (var i = 0; i < names.length; i++) {
    var linkContainer = document.createElement('li');
    var link = document.createElement('a');
    link.textContent = names[i];
    link.setAttribute('href', '#' + names[i]);
    linkContainer.appendChild(link);
    menu.appendChild(linkContainer);
}
container.appendChild(navigation);

// Callback function with closure.
countClicks = function (counterCopy) {
    return function () {
        var counter = parseInt(counterCopy.textContent);
        console.log('Clicked!');
        counter += 1;
        console.log(counterCopy);
        counterCopy.textContent = '' + counter;
    }
}

// Generate items with cats' images and information.
for (var i = 0; i < names.length; i++) {

    var item = document.createElement('div');

    var kittenImage = document.createElement('img');
    var url = 'http://loremflickr.com/400/300/cat?random=' + [i+1];
    console.log(url);
    kittenImage.setAttribute('src', url);
    kittenImage.setAttribute('width', '400');

    var counterContainer = document.createElement('p');
    counterContainer.textContent = 'clicks ';
    var counter = document.createElement('span');
    counter.textContent = 0;
    counterContainer.appendChild(counter);
    
    var kittenName = document.createElement('h2');
    kittenName.textContent = names[i];

    var anchor = document.createElement('a');
    anchor.setAttribute('name', names[i])

    item.appendChild(anchor);
    item.appendChild(kittenName);
    item.appendChild(kittenImage);
    item.appendChild(counterContainer);
    item.appendChild(document.createElement('hr'));

    // Increment number of 'clicks' when user clicked on an image.
    kittenImage.addEventListener('click', (countClicks)(counter), false);
    kittenContainer.appendChild(item);
}

container.appendChild(kittenContainer);

