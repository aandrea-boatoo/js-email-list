"use strict";


const extraction = document.getElementById("emailContainer");
const generatorButton = document.getElementById('generator')

generatorButton.addEventListener('click', () => {
    buttonMove();
    extraction.innerHTML = " ";
    for (let i = 0; i < 10; i++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                const email = document.createElement('p');
                email.classList.add("paragraph",)
                email.innerHTML = response.data.response;
                extraction.appendChild(email);
            })
    }
});


function buttonMove() {
    generatorButton.classList.add("newPosition");
    generatorButton.classList.remove("firstPosition");

}