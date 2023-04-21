// Global Viable
const nav = document.querySelector(".game-list")
const img = document.getElementById("detail-image")
const inputScore = document.getElementById("score-input")
const form = document.getElementById("high-score-form")
const highScore = document.getElementById('detail-high-score')

// add game name and manufacture in "#game-list"
const addGameList = (games) => {
    // create a h5 tag
    const h5Game = document.createElement("h5")
    // put the h5Game under nav
    nav.append(h5Game)
    // set the gamename + manufacturer name as inner text
    h5Game.innerText = `${games.name} (${games["manufacturer_name"]})`;
    // challenge 3: add click event listener
    h5Game.addEventListener("click", () => {
        img.src = games.image
    })
}

// challenge 2: add image from first gamedata list.
const defaultImg = (gameData) => {
    img.src = gameData[0]["image"]
}

// challenge 4: add submit event listener to form#high-score-form
const addHighScore = (e) => {
    e.preventDefault()
    const userScore = inputScore.value
    highScore.textContent = userScore
    form.reset()
}
form.addEventListener('submit', addHighScore)

// challenge 1: fetch the data
const fetchDataList = () => {
    fetch('http://localhost:3000/games')
    .then(resp => resp.json())
    .then(dataLists => {
        defaultImg(dataLists);
        dataLists.forEach(game => addGameList(game))
    })
    // test
    // .then(dataLists => console.log(dataLists))
    .catch(err => alert(err))
}
fetchDataList();



