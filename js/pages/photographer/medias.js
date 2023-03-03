import ApiRequest from '../../utils/request.js';
import PhotographerPhoto from '../../factories/Photo.js';
import PhotographerVideo from '../../factories/Video.js';
import PhotographerProfile from '../../templates/PhotographerProfile.js';
import PhotographerMedias from '../../templates/PhotographerMedias.js';

export default class Medias {
    constructor() {
        this.photographerProfile = document.querySelector('#photographer_profile');
        this.listPhotos = document.querySelector('#photos_list');
        this.profileLikes = document.querySelector('#profile_likes');
        this.profilePrice = document.querySelector('#profile_price');

        this.request = new ApiRequest('data/photographers.json');
    }

    async build() {
        let photographerId = new URL(window.location.href).searchParams.get("id");
        let profile = await this.request.getOnePhotographer(photographerId);

        console.log(profile);

        const ProfileTemplate = new PhotographerProfile(profile);
        this.photographerProfile.append(
            ProfileTemplate.createPhotographerProfile()
        );

        if (profile.id == photographerId) {
            this.profilePrice.innerHTML += `${profile.price}€ / jour`;
            this.getLikes(photographerId);
        }

        this.getPhotographerMedias(photographerId, profile.name);
    }

    async getPhotographerMedias(photographerId, name) {
        let mediasData = await this.request.getMedias(photographerId);

        mediasData.forEach(media => {
            let photoTemplate = new PhotographerMedias(media, name);

            if (media.image) {
                new PhotographerPhoto(media);
                this.listPhotos.append(
                    photoTemplate.createPhotographerMedia('image')
                );
            }else {
                new PhotographerVideo(media);
                this.listPhotos.append(
                    photoTemplate.createPhotographerMedia('video')
                );
            }
        });
    }

    async getLikes(photographerId) {
        const likes = await this.request.getMedias(photographerId);

        let totalLikes = 0;

        likes.forEach(like => {
            totalLikes += like.likes;
        });

        this.profileLikes.innerHTML += `<span id="photographer_total_likes">${totalLikes}</span>♥`;
    }
}