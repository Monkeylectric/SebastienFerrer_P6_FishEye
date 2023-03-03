export default class PhotographerMedias {
    constructor(media, name) {
        this.media = media;
        this.name = name.split(" ")[0];
    }

    createPhotographerMedia(type) {
        let photo = document.createElement('div');
        photo.classList.add("photo");
        this.indexPhoto = document.querySelectorAll(".photo").length + 1;
        let datePrecise = `${this.media.date}`;
        datePrecise = new Date(datePrecise).getTime();

        photo.setAttribute("id", `${this.indexPhoto}`);
        photo.setAttribute("data-likes", `${this.media.likes}`);
        photo.setAttribute("data-date", "'"+datePrecise+"'");
        photo.setAttribute("data-titre", `${this.media.title}`);

        let mediaType = '';

        if (type == 'image') {
            mediaType = `<img alt="${this.media.title}" class="photo_img content_src" src="assets/photographers/${this.name}/${this.media.image}">`;
        }else {
            mediaType = `
                <video title="${this.media.title}" controls class="photo_img">
                    <source class="content_src" src="./assets/photographers/${this.name}/${this.media.video}" type="video/mp4">
                </video>`;
        }

        let cartePhoto = `
            <a href="#" class="lightbox_link" aria-label="Image en gros plan" onclick="openLightbox(${this.indexPhoto}, '${this.media.title}')">${mediaType}</a>
            <div>
                <span class="photo_title">${this.media.title}</span>
                <div class="like like-${this.media.id}">
                    <span id="like-${this.media.id}">${this.media.likes}</span>
                    <button role="button" class="like_icon" aria-label="Bouton j'aime" onclick="manageLikes('${this.media.id}', 'like')"></button>
                </div>
            </div>
        `;

        photo.innerHTML = cartePhoto;

        return photo;     
    }
}