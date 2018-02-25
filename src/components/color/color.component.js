import { Component } from "../component.component";

export class Color extends Component {

    constructor(client, hydrator) {
        super();
        this.getClient = () => {
            return client;
        }
        this.getHydrator = () => {
            return hydrator;
        }

    }

    initialize() {

        //Version mobile avec serveur phonegap: 
        //document.addEventListener('deviceready', this.render.bind(this), false);//quand le device est ready, j'active
        //Version desktop si on veux utiliser un localHoast:
        window.onload = function () { this.onDeviceReady() }.bind(this);
    }

    onDeviceReady() {
        var input = document.getElementById("input");
        //callback est une copie de la function onChange
        var callback = this.onChange.bind(this);
        //bug de l'alert ios dans un evement (on change ici)
        input.onchange = function () {

            var file = input.files[0];

            var id = window.setTimeout(function () {
                //on envoi file a callback qui est une copie de la function onChange(file)
                callback(file);
            }, 1000);
        }
    }

    onChange(file) {

        var output = document.getElementById('output');
        
        var reader = new FileReader();
        reader.readAsDataURL(file);
        //quand il a fini sa lecture, on appel sa fonction de rappel
        reader.onload = (function () {
            output.src = reader.result;
            //si on veux pas utiliser le bind, mais mauvais code car pas utilisable en class
            //window.app.getId(file)

            this.getClient().getId(file);
            var div = document.createElement('div');
            div.setAttribute('class','mdl-spinner mdl-js-spinner is-active');
            document.getElementById("wait").appendChild(div);
            let json = window.setTimeout(function () {
                document.getElementById("wait").removeChild(div);
                //on envoi file a callback qui est une copie de la function onChange(file)
                callback();
            }, 10000);
            let callback = this.rendu.bind(this);

        }).bind(this) // je change le context avec bind pour ne plus etre xhr et appeler la fonction getId(file)

        reader.onerror = function () {
            alert("pas de lecture possible")
        }
    }


    rendu() {
        this.getHydrator().hydrateColorList(this.getClient().getJson());
    }


}