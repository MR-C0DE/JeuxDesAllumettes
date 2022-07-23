let lectureCookie = document.cookie;
let jouers = document.querySelectorAll('span');
let tableauJouer = lectureCookie.split('<>');
jouers[0].textContent = tableauJouer[0];
jouers[1].textContent = tableauJouer[1];

let selectedArray = [];

// function random pour choisir un nombre de facon aleatoire.
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Choix tour
let choix = rand(0, 1);
jouers[2].textContent = tableauJouer[choix];

console.log(jouers);

// Creation des allumettes
let creationAllumettes = () => {
    let allumettesContent = document.querySelector('.allumettes');
    let nombreAllumettes = rand(27, 66);
    for (let i = 0; i < nombreAllumettes; i++) {

        let div = document.createElement('div');
        div.setAttribute('class', 'div div-allumette-' + i);
        div.setAttribute('id', 'div-allumette-' + i);
        let img = document.createElement('img');
        img.setAttribute('src', './../img/allumette.png');
        img.setAttribute('class', 'allumette-' + i);
        let label = document.createElement('label');
        label.setAttribute('for', 'allumette-' + i);
        let input = document.createElement('input');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'allumette-' + i);
        input.style.display = 'none';

        label.appendChild(img);
        div.appendChild(label);
        div.appendChild(input);



        allumettesContent.appendChild(div);
    }

}

creationAllumettes();


// Changement des tour
let tour = () => {
    if (choix === 0) {
        choix = 1;
    } else {
        choix = 0;
    }
}


let effacerAllumettes = (array) => {
    for (let i = 0; i < array.length; i++) {
        array[i].style.opacity = '0';
        array[i].style.visibility = 'hidden';


    }
    array = [];
}


let retireElementDuTableau = (array, element) => {

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].children[1].checked) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

let selectionElement = () => {
    let inputs = document.querySelectorAll('input');


    inputs.forEach((input) => {
        input.addEventListener('click', () => {
            let parent = input.parentNode;

            if (input.checked) {
                if (selectedArray.length < 3) {
                    parent.style.backgroundColor = 'rgb(255, 237, 190)';
                    selectedArray.push(parent);
                }

            } else {
                parent.style.backgroundColor = '#fff';
                if (selectedArray.length <= 3) {
                    selectedArray = retireElementDuTableau(selectedArray, input);
                }

            }



        });
    });


}

selectionElement();


document.querySelector('.btn button').addEventListener('click', () => {
    effacerAllumettes(selectedArray);
    selectedArray = [];
    tour();
    jouers[2].textContent = tableauJouer[choix];
});