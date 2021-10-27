import ConfettiGenerator from "./confetti.js";

export const sendForm = () => {
    const form = document.getElementById("form-submit");

    let confettiElement = document.getElementById("confetti")
    let confettiSettings = { target: confettiElement };
    let confetti = new ConfettiGenerator(confettiSettings);

    document.addEventListener("submit", e => {
        // e.preventDefault();
        
        if (e.target === form) {
            // console.log(e.target);
            confetti.render();
            setTimeout(() => {
                confetti.clear();
            }, 7000);
            swal("Good job!", "You send me a message!", "success");
        }
    })
}