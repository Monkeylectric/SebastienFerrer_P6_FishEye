/** Système de like **/
function manageLikes(id, type) {
    let likes = document.getElementById("like-" + id).innerHTML;
    likes = parseInt(likes);

    let totalLikes = document.getElementById("photographer_total_likes").innerHTML;
    totalLikes = parseInt(totalLikes);

    if (type == "like") {
        likes = likes + 1;
        totalLikes = totalLikes + 1;
        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("like_icon")[0].style.color = "#db8876";

        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("like_icon")[0].setAttribute("onclick", "manageLikes('" + id + "', 'unlike')");
    } else {
        likes = likes - 1;
        totalLikes = totalLikes - 1;
        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("like_icon")[0].style.color = "#901c1c";

        document.getElementsByClassName("like-" + id)[0].getElementsByClassName("like_icon")[0].setAttribute("onclick", "manageLikes('" + id + "', 'like')");
    }

    document.getElementById("like-" + id).innerHTML = likes;
    document.getElementById("photographer_total_likes").innerHTML = totalLikes;
}