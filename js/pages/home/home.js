import ApiRequest from '../../utils/request.js';
import Photographer from '../../factories/Photographer.js';
import PhotographerCard from '../../templates/PhotographerCard.js';

export default class Home {
    constructor() {
        this.photographersList = document.querySelector('.photographer_section');
        this.request = new ApiRequest('data/photographers.json');
    }

    /**
     * Build home page function
     */
    async build() {
        let photographersData = await this.request.getPhotographers();
        let photographerArray = photographersData.map(photographer => new Photographer(photographer));

        //console.log(photographerArray);

        photographerArray.forEach(photographer => {
            // console.log(photographer);
            let cardTemplate = new PhotographerCard(photographer);
            this.photographersList.appendChild(cardTemplate.createPhotographerCard());
        })
    }
}
