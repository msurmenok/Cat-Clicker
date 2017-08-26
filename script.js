document.addEventListener('DOMContentLoaded', function () {

    // Data to load.
    var cats = [
        {
            name: 'Salsa',
            url: 'img/kitten1.jpg',
            counter: 0
        },
        {
            name: 'Pearl',
            url: 'img/koshenka.jpg',
            counter: 0
        },
        {
            name: 'Ebony',
            url: 'img/kitten3.jpg',
            counter: 0
        },
        {
            name: 'Misty',
            url: 'img/kitten4.jpg',
            counter: 0
        },
        {
            name: 'Buttercup',
            url: 'img/kitten5.jpg',
            counter: 0
        },
        {
            name: 'Mocha',
            url: 'img/kitten6.jpg',
            counter: 0
        },
    ];


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
    };


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
            viewKitten.renderCounter(model.getKittenByName(kitten.name));
        },
        init: function () {
            model.init();
            viewMenu.init();
            viewKitten.init();
            viewAdmin.init();
        }
    };


    // View for navigation.
    var viewMenu = {
        init: function () {
            this.menu = document.querySelector('.menu');
            this.render();
        },
        render: function () {
            this.menu.innerHTML = '';
            octopus.getNames().forEach((function (menu) {
                return function (kittenName) {
                    var menu_item = document.createElement('li');
                    menu_item.setAttribute('class', 'kitten');
                    menu_item.textContent = kittenName;
                    menu_item.addEventListener('click', function () {
                        octopus.changeKitten(kittenName);
                    });
                    menu.appendChild(menu_item);
                }
            })(this.menu));
        }
    };

    // View for rendering individual kitten.
    var viewKitten = {
        init: function () {
            this.kittenImageContainer = document.querySelector('.kitten-container .image-container');
            this.kittenName = document.querySelector('.kitten-container h2');
            this.kittenClicks = document.querySelector('.kitten-container span');
            var kitten = octopus.getFirstKitten();
            this.render(kitten);
        },
        render: function (kitten) {
            this.kittenImageContainer.innerHTML = '';
            this.kittenName.textContent = kitten.name;
            var image = document.createElement('img');
            image.setAttribute('src', kitten.url);
            image.addEventListener('click', function () {
                octopus.addClick(kitten);
            });
            this.kittenImageContainer.appendChild(image);
            this.renderCounter(kitten)
        },
        renderCounter: function (kitten) {
            this.kittenClicks.textContent = kitten.counter + ' clicks!';
        }
    };
    
    // View for admin panel.
    var viewAdmin = {
        init: function () {
            this.panel = document.querySelector('#new-kitten-form');
            this.showPanelBtn = document.querySelector('#show-panel');
            this.isVisible = false;
            
            // Add event handler for button Admin.
            this.showPanelBtn.addEventListener('click', (
                function (self) {
                    return function (e) {
                        self.isVisible = true;
                        self.render();
                        console.log(self.isVisible);
                        e.preventDefault();
                    }
                }
            )(this));
            this.render();
        },
        render: function () {
            // Show and hide panel
            console.log('From render function. Is visible? ' + this.isVisible);
            if (this.isVisible) {
                this.panel.style.display = 'block';
            }
            else {
                this.panel.style.display = 'none';
            }
        }
    }

    octopus.init();
});