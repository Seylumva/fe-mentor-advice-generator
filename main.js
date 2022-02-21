const adviceId = document.querySelector(".advice-number__id");
const adviceText = document.querySelector(".advice-quote__text");
const adviceRoll = document.querySelector(".advice-roll");

adviceRoll.addEventListener("click", generateAdvice);

async function fetchAdvice(searchId = "") {
  const res = await fetch(
    `https://api.adviceslip.com/advice${searchId ? `/${searchId}` : ""}`
  );
  const data = await res.json();
  return data.slip;
}

function displayAdvice(advice) {
  console.log(advice);
  adviceId.innerText = advice.id;
  adviceText.innerText = advice.advice;
}

function generateAdvice() {
  fetchAdvice().then((advice) => displayAdvice(advice));
}

fetchAdvice("117").then((advice) => displayAdvice(advice));
