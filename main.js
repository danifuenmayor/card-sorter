let cards = [];

document.querySelector("#draw").addEventListener("click", () => {
    shuffle();
    draw(cards);
});

const shuffle = () => {
    let userInput = document.getElementById("generate").value;
    cards = [];
    for (let i = 0; i < userInput; i++) {
        let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        let randomNum = Math.floor(Math.random() * num.length);
        let randomNum2 = num[randomNum];

        let suits = ["spade", "heart", "diamond", "clubs"];
        let randomSuit = Math.floor(Math.random() * suits.length);
        let randomSuit2 = suits[randomSuit];

        cards.push({ num: randomNum2, suit: randomSuit2 })
    }
}

function draw(cards) {
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        let h1 = document.createElement("h1");
        h1.innerHTML = card.num;
        h1.classList.add(card.suit);

        let div = document.createElement("div");
        div.appendChild(h1);
        div.id = "card";
        let cont = document.querySelector(".col-md-12");
        cont.appendChild(div);
    }
}

const bubbleSort = (cards) => {
    let wall = cards.length - 1;
    while (wall > 0) {
        let i = 0;
        console.log(wall)
        while (i < wall) {
            const card = cards[i];
            if (card.num > cards[i + 1].num) {
                let aux = card;
                cards[i] = cards[i + 1];
                cards[i + 1] = aux;
            }
            i++;
        }
        wall--;
    }
    return cards;
};

document.querySelector("#sort").addEventListener("click", () => {
    cards = bubbleSort(cards)
    draw(cards)
});