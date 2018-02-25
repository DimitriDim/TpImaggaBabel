 /**
   * @type{Component}
   */
  export class Component {
    /**
    * @constructor
    */
    constructor() {
        this.selector;
        this.template;
        this.component;

    }

    /**
    * @returns {HTMLElementCollection}
    */
    //les méthodes
    render(data) {
        
        //soit data = data a condition que sa valeur ne soit pas =false, soit data = []
        data = data || [];
        if (this.selector) {
     
            let elements = window.document.getElementsByTagName(this.selector);
            for (let i = 0, l = elements.length; i < l; i++) {
                //this.template() car il sait aller dans les classe enfants
                elements[i].innerHTML = this.template(...data);
            }
            return elements; // pour upgrader de nouveau le menu (bug de la librairie mdl)
        }
        let elementMenu = window.document.getElementsByTagName("em");
        for (let i = 0; i < elementMenu.length; i++) {
        }
    }
  }