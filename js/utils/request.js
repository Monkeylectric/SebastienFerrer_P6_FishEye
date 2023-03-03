export default class ApiRequest {
    constructor(url) {
        this.url = url;
    }

    /**
     * Get photogrqphers function
     * 
     * @returns photogrqphers list
     */
    async getPhotographers() {
        if (!sessionStorage.getItem("photographers")) {
            return fetch(this.url)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    sessionStorage.setItem("photographers", JSON.stringify(res.photographers));

                    return res.photographers;
                })
                .catch(err => {
                    console.log(err);
                })
        }else {
            const photographers = JSON.parse(sessionStorage.getItem("photographers"));

            return photographers;
        }
    }

    /**
     * Get only one photogrqpher function
     * 
     * @param {Integer} photographerId 
     * @returns photogrqpher profile
     */
    async getOnePhotographer(photographerId) {
        return fetch(this.url)
            .then(res => {
                return res.json();
            })
            .then(res => {
                let photographerProfile;

                if (!sessionStorage.getItem(`photographer${photographerId}`)) {
                    res.photographers.forEach(photographer => {
                        if (photographer.id == photographerId) {
                            sessionStorage.setItem(`photographer${photographerId}`, JSON.stringify(photographer));

                            photographerProfile = photographer;
                        }
                    });

                    return photographerProfile;
                }else {
                    photographerProfile = JSON.parse(sessionStorage.getItem(`photographer${photographerId}`));

                    return photographerProfile;
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    /**
     * Get photographer medias
     * 
     * @param {Integer} photographerId 
     * @returns photographer medias
     */
    async getMedias(photographerId) {
        if (!sessionStorage.getItem(`medias${photographerId}`)) {
            return fetch(this.url)
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    let medias = [];

                    res.media.forEach(media => {
                        if (media.photographerId == photographerId) {
                            medias.push(media);
                        }    
                    });

                    sessionStorage.setItem(`medias${photographerId}`, JSON.stringify(medias));

                    return medias;
                })
                .catch(err => {
                    console.log(err);
                })
        }else {
            const medias = JSON.parse(sessionStorage.getItem(`medias${photographerId}`));

            return medias;
        }
    }
}