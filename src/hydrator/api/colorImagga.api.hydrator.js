
export class Hydrator{

    constructor() {
        this.getEndpoint = () => {
            return document.getElementById("color-list");
        }

    }

    hydrateColorList(Json) {

        this.render(Json.results['0'].info.background_colors);
        this.render(Json.results['0'].info.foreground_colors);
        this.render(Json.results['0'].info.image_colors);
    }

    render(colors){
        for (var i = 0, l = colors.length; i < l; i++) {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.innerHTML = colors[i].html_code;
            this.getEndpoint().appendChild(tr);
            this.getEndpoint().appendChild(td);
            td.style.backgroundColor = colors[i].html_code;
        }
    }


}