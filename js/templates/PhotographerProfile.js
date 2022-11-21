export default class PhotographerProfile {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPhotographerProfile() {
        const article = document.createElement('article');
        const photographerProfile = `
            <img alt="${this.photographer.name}" class="photographer_img" id="profil_photographer_photo" src="assets/photographers/Photographers_ID_Photos/${this.photographer.portrait}">
            <div id="profile_contact_name">
                <h1 class="photographer_name">${this.photographer.name}</h1>
                <button class="btn_contact" onclick="contactDisplay('${this.photographer.name}')">Contactez-moi</button>
            </div>
            <div>
                <span class="photographer_city">${this.photographer.city}, ${this.photographer.country}</span>
                <p class="photographer_description" id="photographer_profile_description">${this.photographer.tagline}</p>
            </div>
        `;

        article.innerHTML = photographerProfile;

        return article;
    }
}