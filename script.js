document.addEventListener('DOMContentLoaded', function () {

    // Data to load.
    var cats = [
        {
            id: 1,
            name: 'Salsa',
            url: '/img/kitten1.jpg',
            counter: 0
        },
        {
            id: 2,
            name: 'Pearl',
            url: '/img/koshenka.jpg',
            counter: 0
        },
        {
            id: 3,
            name: 'Ebony',
            url: '/img/kitten3.jpg',
            counter: 0
        },
        {
            id: 4,
            name: 'Misty',
            url: '/img/kitten4.jpg',
            counter: 0
        },
        {
            id: 5,
            name: 'Buttercup',
            url: '/img/kitten5.jpg',
            counter: 0
        },
        {
            id: 6,
            name: 'Mocha',
            url: '/img/kitten6.jpg',
            counter: 0
        },
    ]

    // Model.
    var model = {
        init: function () {
            if(!localStorage.notes) {
                localStorage.notes = JSON.stringify(cats);
            }
        },
        getAllKittens: function () {
            return JSON.parse(localStorage.notes);
        },
        getKittenByName: function (name) {
            kittens = JSON.parse(localStorage.notes);
            var kitten = undefined;
            for (var i = 0; i < kittens.length; i++) {
                if (name === kittens[i].name) {
                    kitten = kittens[i];
                }
            }
            return kitten;
        }
    }











    // Cats' names.
    var names = ['Salsa', 'Pearl', 'Ebony', 'Misty', 'Buttercup', 'Mocha', 'Jailbird', 'Chilly', 'Cyclone'];

    // Create main containers
    var menu = document.querySelector('.menu');
    var kittenContainer = document.querySelector('.kitten-container');

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

});