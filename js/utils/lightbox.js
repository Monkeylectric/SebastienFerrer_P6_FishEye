/** Système de lightbox **/
function openLightbox(index, titre) {
    /* Obtient le nombre total de photos */
    const totalPhoto = document.querySelectorAll(".photo").length;
    /* Récupère la photo lié à l'index */
    const photos = document.getElementById(index);
    /* Obtient la source de l'image */
    const photosSrc = photos.getElementsByClassName("content_src")[0].getAttribute("src");
    /* Obtient le type de l'image */
    const photoType = photosSrc.split('.').pop();
    let photoFormat = "";

    const imageType = ["jpg", "jpeg", "gif", "png"];
    const videoType = ["mp4", "mkv", "avi"];

    if (imageType.includes(photoType)) {
        photoFormat = "image";
    } else if (videoType.includes(photoType)) {
        photoFormat = "video";
    }

    /* Récupère l'id de la photo */
    let idPhoto = index;

    /* Affiche la lightbox */
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("lightbox").style.display = "block";

    /* Gère l'affichage des flèches */
    if (idPhoto === 1) {
        document.getElementById("previous_page").style.display = "none";
        document.getElementById("next_page").style.display = "block";
        /* Change les index des flèches */
        document.getElementById("previous_page").setAttribute("onclick", "");
        document.getElementById("next_page").setAttribute("onclick", "nextPage(" + (idPhoto + 1) + ")");
    } else if (idPhoto === totalPhoto) {
        document.getElementById("previous_page").style.display = "block";
        document.getElementById("next_page").style.display = "none";
        /* Change les index des flèches */
        document.getElementById("previous_page").setAttribute("onclick", "previousPage(" + (idPhoto - 1) + ")");
        document.getElementById("next_page").setAttribute("onclick", "");
    } else {
        document.getElementById("previous_page").style.display = "block";
        document.getElementById("next_page").style.display = "block";
        /* Change les index des flèches */
        document.getElementById("previous_page").setAttribute("onclick", "previousPage(" + (idPhoto - 1) + ")");
        document.getElementById("next_page").setAttribute("onclick", "nextPage(" + (idPhoto + 1) + ")");
    }

    /* Affiche la photo */
    if (photoFormat === "image") {
        document.getElementById("lightbox_img_container").innerHTML = "<img alt='" + titre + "' id='photo-lightbox' src=" + photosSrc + ">";
    } else {
        document.getElementById("lightbox_img_container").innerHTML = "<video title='" + titre + "' id='photo-lightbox' controls><source src=" + photosSrc + ">";
    }

    /** Affiche le titre */
    document.getElementById("lightbox_title").innerHTML = titre;

    /** Gére les flèches du clavier **/
    document.onkeydown = function (event) {
        /* Si la Lightbox est ouverte */
        if (document.getElementById("lightbox").style.display === "block") {
            switch (event.key) {
                case 'ArrowLeft':
                    previousPage(idPhoto - 1);
                    break;
                case 'ArrowRight':
                    nextPage(idPhoto + 1);
                    break;
                case 'Esc':
                case 'Escape':
                    document.querySelector(".lightbox_close").click();
                    break;
                default:
                    break;
            }
        }
    };
}

/* Ferme la lightbox */
function closeLightbox() {
    document.getElementsByTagName("body")[0].style.overflow = "unset";
    document.getElementById("lightbox").style.display = "none";
}

/* Gère la flèche gauche */
function previousPage(index) {
    let titreAvant = document.getElementsByClassName("photo")[index-1].getElementsByClassName("photo_title")[0].innerHTML;
    openLightbox(index, titreAvant);
}

/* Gère la flèche droite */
function nextPage(index) {
    const totalPhoto = document.querySelectorAll(".photo").length;

    if (index === (totalPhoto)) {
        let titreApres = Array.from(document.querySelectorAll('.photo')).pop();
        titreApres = titreApres.getElementsByClassName("photo_title")[0].innerHTML;
        openLightbox(index, titreApres);
    } else {
        let titreApres = document.getElementsByClassName("photo")[index-1].getElementsByClassName("photo_title")[0].innerHTML;
        openLightbox(index, titreApres);
    }
}
