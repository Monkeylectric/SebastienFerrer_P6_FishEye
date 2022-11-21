export default class PhotographerPhoto {
    constructor(media) {
        this._id = media.id;
        this._photographerId = media.photographerId;
        this._title = media.title;
        this._image = media.image;
        this._likes = media.likes;
        this._date = media.date;
        this._price = media.price;

        return {
            'id': this._id,
            'photographerId': this._photographerId,
            'title' : this._title,
            'image': this._image,
            'likes': this._likes,
            'date': this._date,
            'price': this._price,
        }
    }
}