export class Model {

    constructor() {


        /**
        * @type{fonction[]}
        */
        // on veut un tableau rempli de fonction
        let callback = [];

        this.getCallback = () => {
            return callback;

        }

    }

    /**
    * @param Function
    */
    bind(callback) {
        this.getCallback().push(callback); // on rajoute un element (on attache une fonction de rappel)
    }
    /**
 * @returns undefined
 */
    //on itere sur notre liste d'observer
    notify() {
        //on invoque les fonctions de rappel (callback)
        //for normal pour les number
        for (let i = 0,
            l = this.getCallback().length;
            i < l; this.getCallback()[i]() // chaque element du tableau est une fonction
            , i++);

        //on invoque les notify des agrégation (pour climat par exemple)
        //avec un for in car les propriétés sont des String
        for (let key in this.getObjet()) {
            if ("object" === typeof this.getObjet()[key]
                && (this.getObjet()[key] instanceof Model)) {
                this.getObjet()[key].notify(); // recursivité
            }
        }
    }
}