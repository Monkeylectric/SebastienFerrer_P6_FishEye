export default class PhotographerCard {
    constructor(photographer) {
        this.photographer = photographer;
    }

    createPhotographerCard() {
        let article = document.createElement('article');
        article.classList.add("photographer");

        let photographerProfile = `
            <a class="photographer_link" href="photographer.html?id=${this.photographer.id}" aria-label="${this.photographer.name}">
                <img alt="${this.photographer.name}" class="photographer_img" src="assets/photographers/Photographers_ID_Photos/${this.photographer.portrait}">
                <h2 class="photographer_name">${this.photographer.name}</h2>
            </a>
            <span class="photographer_city">${this.photographer.city}, ${this.photographer.country}</span>
            <p class="photographer_tagline">
                ${this.photographer.tagline}
                <br>
                <span class="photographer_price">${this.photographer.price}€ / Jour</span>
            </p>
        `;
        
        article.innerHTML = photographerProfile;

        return article;
    }
}