export default class PhotographerVideo {
    constructor(media) {
        this._id = media.id;
        this._photographerId = media.photographerId;
        this._title = media.title;
        this._video = media.video;
        this._likes = media.likes;
        this._date = media.date;
        this._price = media.price;

        return {
            'id': this._id,
            'photographerId': this._photographerId,
            'title' : this._title,
            'video': this._video,
            'likes': this._likes,
            'date': this._date,
            'price': this._price,
        }
    }
}