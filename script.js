document.addEventListener('DOMContentLoaded', function () {

    // Data to load.
    var cats = [
        {
            id: 1,
            name: 'Salsa',
            url: 'img/kitten1.jpg',
            counter: 0
        },
        {
            id: 2,
            name: 'Pearl',
            url: 'img/koshenka.jpg',
            counter: 0
        },
        {
            id: 3,
            name: 'Ebony',
            url: 'img/kitten3.jpg',
            counter: 0
        },
        {
            id: 4,
            name: 'Misty',
            url: 'img/kitten4.jpg',
            counter: 0
        },
        {
            id: 5,
            name: 'Buttercup',
            url: 'img/kitten5.jpg',
            counter: 0
        },
        {
            id: 6,
            name: 'Mocha',
            url: 'img/kitten6.jpg',
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
            var kittens = JSON.parse(localStorage.notes);
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
        },
        addClick: function (kitten) {
            var kittens = JSON.parse(localStorage.notes);
            kittens.forEach(function (kit) {
               if (kit.name == kitten.name) {
                   kit.counter += 1;
               }
            });
            localStorage.notes = JSON.stringify(kittens);
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
        getKittenByName: function (name) {
            return model.getKittenByName(name);
        },
        changeKitten: function (name) {
            viewKitten.render(octopus.getKittenByName(name));
        },
        addClick: function (kitten) {
            model.addClick(kitten);
            viewKitten.renderClicker(model.getKittenByName(kitten.name));
        },
        init: function () {
            model.init();
            viewMenu.init();
            viewKitten.init();
        }
    };


    // View for navigation.
    var viewMenu = {
        init: function () {
            var menu = document.querySelector('.menu');
            octopus.getNames().forEach(function (kittenName) {
                var menu_item = document.createElement('li');
                menu_item.setAttribute('class', 'kitten');
                menu_item.textContent = kittenName;
                menu_item.addEventListener('click', function () {
                    octopus.changeKitten(kittenName);
                });
                menu.appendChild(menu_item);
            });
        }
    };

    // View to render individual kitten.
    var viewKitten = {
        init: function () {
            var kitten = octopus.getFirstKitten();
            viewKitten.render(kitten);
        },
        render: function (kitten) {
            var kittenContainer = document.querySelector('.kitten-container');
            // Clear container.
            while(kittenContainer.firstChild) kittenContainer.removeChild(kittenContainer.firstChild);

            var name = document.createElement('h2');
            name.textContent = kitten.name;
            kittenContainer.appendChild(name);

            var image = document.createElement('img');
            image.setAttribute('src', kitten.url);
            image.addEventListener('click', function () {
                octopus.addClick(kitten);
            });

            kittenContainer.appendChild(image);

            viewKitten.renderClicker(kitten);
        },
        renderClicker: function (kitten) {
            var kittenContainer = document.querySelector('.kitten-container');
            var clicker = document.querySelector('p');
            if (!clicker) {
                clicker = document.createElement('p');
            }
            clicker.textContent = kitten.counter + ' clicks!';
            kittenContainer.appendChild(clicker);
        }
    };

    octopus.init();
});