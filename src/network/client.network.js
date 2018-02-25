
export class Client{

    constructor() {

        let jsonResult;
        this.getEndpoint = () => {
            let endpoint = "https://api.imagga.com/v1/content";
            return endpoint;
        }
        this.getAuth = () => {
            let pswd = "7efeb3e48b91eaaca97f03f2aca65522";
            let user = "acc_eb766073b033d86";
            let auth = "Basic " + btoa(user + ":" + pswd);
            return auth;
        }
        this.getXhr = () => {
            let xhr = new XMLHttpRequest;
            return xhr;
        }
        this.getMyFormData = () => {
            let myFormData = new FormData;
            return myFormData;
        }
        this.setJson = (json) => {
            jsonResult = json;
        }
        this.getJson = () => {
           return jsonResult;
        }

    }

    getId(file) {


        let xhr = this.getXhr();
        let endpoint = this.getEndpoint();
        let auth = this.getAuth();
        let myFormData = this.getMyFormData();
        //formdata est un "sac" qui envoi les fichiers
        myFormData.append("monFichier", file);
        xhr.open("POST", endpoint);
        xhr.onload = onerror = onabort = (function () {
            
            if (window.JSON.parse(xhr.response)['status'] == "success") {
                let endpointget = "https://api.imagga.com/v1/colors?content=" + window.JSON.parse(xhr.response)['uploaded']['0']['id'];
                this.getColor(endpointget);
            }
        }).bind(this)
        //il faut ajouter une entete !!
        xhr.setRequestHeader("Authorization", auth);
        xhr.send(myFormData);
    }

    getColor(endpointget) {
        let xhr = this.getXhr();
        let auth = this.getAuth();
        
        xhr.open("GET", endpointget);
        xhr.onload = onerror = onabort = (function () {
            if (window.JSON.parse(xhr.response).results) {
                this.setJson(window.JSON.parse(xhr.response));
            }
        }).bind(this);

        xhr.setRequestHeader("Authorization", auth);
        xhr.send();
    }


}