/** Système de contact **/
function contactDisplay(nom) {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    document.getElementById("contact").style.display = "block";
    document.getElementById("contact_name").innerHTML = nom;

    const actionForm = document.querySelectorAll('.form_action');

    document.onkeydown = function (event) {
        if (document.getElementById("contact").style.display === "block") {
            switch (event.key) {
                case 'Esc':
                case 'Escape':
                    document.querySelector("#contact_close").click();
                    break;
                default:
                    break;
            }
        }
    };

    actionForm.forEach(function (action, i) {
        if (document.getElementById("contact").style.display === "block") {
            action.addEventListener('keydown', function (events) {
                switch (events.key) {
                    case 'ArrowUp':
                        if (i !== 0) {
                            action.parentNode.getElementsByClassName('form_action')[i - 1].focus()
                        }
                        break;
                    case 'ArrowDown':
                        if (i !== (actionForm.length - 1)) {
                            action.parentNode.getElementsByClassName('form_action')[i + 1].focus()
                        }
                        break;
                    default:
                        break;
                }
            })
        }
    });
}

/* Fermer le formulaire */
function contactClose() {
    document.getElementsByTagName("body")[0].style.overflow = "unset";
    document.getElementById("contact").style.display = "none";
}

/* Valide le formulaire */
function contactSubmit() {
    let lastname = document.getElementById("lastname").value;
    let firstname = document.getElementById("firstname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let submitForm = {
        "lastname": lastname,
        "firstname": firstname,
        "email": email,
        "message": message
    }

    console.log(submitForm);
}
