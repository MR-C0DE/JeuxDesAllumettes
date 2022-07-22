let button = document.querySelector('.connect-btn button');
let checkbox = document.querySelector('#horns');
let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');

checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
        player2.disabled = true;
        player2.value = 'Ordinateur';
        player2.style.backgroundColor = 'rgb(255, 225, 168)';
    } else {
        player2.disabled = false;
        player2.value = '';
        player2.style.backgroundColor = 'rgb(243, 243, 243)';
    }
});

let verification = (player) => {
    if (player.value.length === 0) {
        player.style.backgroundColor = "rgb(255, 225, 225)";
        return false;
    } else {
        player.style.backgroundColor = 'rgb(243, 243, 243)';
        return true;
    }
}

button.addEventListener('click', () => {
    if (verification(player1) && verification(player2)) {
        let date = new Date(Date.now() + 86400000); //86400000ms = 1 jour
        date = date.toUTCString();

        //Crée ou met à jour un cookie 'user'
        document.cookie = 'user=Pierre; path=/; expires=' + date;

        //Supprime le cookie en lui passant une date d'expiration passée
        document.cookie = 'user=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    }
});