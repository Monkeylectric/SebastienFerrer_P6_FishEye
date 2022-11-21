export default class Photographer {
    constructor(photographer) {
        this._id = photographer.id;
        this._name = photographer.name;
        this._portrait = photographer.portrait;
        this._city = photographer.city;
        this._country = photographer.country;
        this._tagline = photographer.tagline;
        this._price = photographer.price;

        return {
            'id': this._id,
            'name': this._name,
            'portrait' : this._portrait,
            'city': this._city,
            'country': this._country,
            'tagline': this._tagline,
            'price': this._price,
        }
    }
}
