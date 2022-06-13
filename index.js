let numAdvice = document.getElementById("numAdvice");
let advice = document.getElementById("advice");
let adviceButton = document.getElementById("adviceButton");

async function getAdvice() {
    try {
        let objAdvice = await fetch("https://api.adviceslip.com/advice");
        let jsonAdvice = await objAdvice.json();

        var adviceId = jsonAdvice.slip.id;
        var adviceText = jsonAdvice.slip.advice;

        numAdvice.innerHTML = adviceId;
        advice.innerHTML = adviceText;
    } catch (error) {
        console.log(error.message);
    }
}

getAdvice();

adviceButton.addEventListener("click", getAdvice);
