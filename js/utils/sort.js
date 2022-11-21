/** Système de tri **/
function mediaSort(choice) {
    let photosList = document.querySelectorAll('.photo');
    let sortArray = [];

    for (let i = 0; i < photosList.length; i++) {
        sortArray.push(photosList[i]);
    }

    switch (choice.value) {
        case "Popularité":
            sortArray.sort(function (a, b) {
                return a.dataset.likes - b.dataset.likes;
            });
            break;
        case "Date":
            sortArray.sort(function (a, b) {
                return a.dataset.date.localeCompare(b.dataset.date);
            });
            break;
        case "Titre":
            sortArray.sort(function (a, b) {
                return a.dataset.titre.localeCompare(b.dataset.titre);
            });
            break;
        default:
            break;
    }
    
    sortArray.forEach(function (photo, index) {
        let updateIndex = index + 1;
        let updateTitle = photo.dataset.titre;

        photo.setAttribute("id", updateIndex);
        photo.getElementsByClassName("lightbox_link")[0].setAttribute("onclick", "openLightbox(" + `${updateIndex}` + ", '" + updateTitle + "')");
        
        document.getElementById("photos_list").append(photo);
    });
}