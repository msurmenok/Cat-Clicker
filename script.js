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
        },
        getAllKittensNames: function () {
            var kittens = JSON.parse(localStorage.notes);
            var names = [];
            for (var i = 0; i < kittens.length; i++) {
                names.push(kittens[i].name);
            }
            return names;
        },
        getFirstKitten: function () {
            var kittens = JSON.parse(localStorage.notes);
            return kittens[0];
        }
    }


    // Octopus.
    var octopus = {
        getNames: function () {
            return model.getAllKittensNames();
        },
        getFirstKitten: function () {
            return model.getFirstKitten();
        },
        init: function () {
            model.init();
            viewMenu.init();
            viewKitten.init();
        }
    }


    var viewMenu = {
        init: function () {
            var menu = document.querySelector('.menu');
            octopus.getNames().forEach(function (kittenName) {
                var menu_item = document.createElement('li');
                menu_item.setAttribute('class', 'kitten');
                menu_item.textContent = kittenName;
                menu.appendChild(menu_item);
            });
        }
    };

    var viewKitten = {
        init: function () {
            var kittenContainer = document.querySelector('.kitten-container');
            var kitten = octopus.getFirstKitten();
        },
        render: function () {

        }
    }
    




        // Increment number of 'clicks' when user clicked on an image.
        // kittenImage.addEventListener('click', (countClicks)(counter), false);
        // kittenContainer.appendChild(item);

    octopus.init();
});