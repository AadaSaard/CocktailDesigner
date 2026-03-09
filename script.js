function generateCocktail() {

    let alcoholElement = document.getElementById("alcohol");
    let spiritElement = document.getElementById("spirit");

    let drinkBase = "";

    if (alcoholElement) {
        drinkBase = alcoholElement.value;
    }

    if (spiritElement) {
        drinkBase = spiritElement.value;
    }

    const taste = document.getElementById("taste").value;

    const sweetIngredients = ["mansikka", "mango", "ananas", "vadelma", "appelsiinimehu"];
    const sourIngredients = ["lime", "sitruuna", "karpalo"];
    const freshIngredients = ["minttu", "kurkku", "basilika"];

    let ingredient = "";

    if (taste === "Makea") {
        ingredient = sweetIngredients[Math.floor(Math.random() * sweetIngredients.length)];
    }
    else if (taste === "Hapan") {
        ingredient = sourIngredients[Math.floor(Math.random() * sourIngredients.length)];
    }
    else if (taste === "Raikas") {
        ingredient = freshIngredients[Math.floor(Math.random() * freshIngredients.length)];
    }
    else {
        ingredient =
            sweetIngredients[Math.floor(Math.random() * sweetIngredients.length)]
            + " & " +
            sourIngredients[Math.floor(Math.random() * sourIngredients.length)];
    }

    document.getElementById("result").innerHTML =
        `<h3>Sinun juomasi:</h3>
        <p><strong>${drinkBase} + ${ingredient}</strong></p>
        <p>
        Mittaa shakeriin:<br>
        4cl ${drinkBase}<br>
        4cl ${ingredient}<br>
        2cl sokerisiirappia<br>
        Täytä jäillä ja ravista hyvin.<br>
        Siivilöi lasiin ja nauti!
        </p>`;
}



function rate(star) {

    let stars = document.querySelectorAll(".stars span");

    stars.forEach((s, index) => {
        s.classList.toggle("active", index < star);
    });

}