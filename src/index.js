

//API
const API = "http://localhost:3000/characters"

//fetch 
fetch(API)
.then((res)=> res.json())
.then(renderCharacterNames)

function renderCharacterNames(characterNames){
    characterNames.forEach(renderCharacterName)
}

function renderCharacterName(characterName){
    const characterBarDiv = document.getElementById("character-bar")
    const spanNames = document.createElement('span')
    spanNames.textContent = characterName.name
    characterBarDiv.append(spanNames)
    spanNames.addEventListener('click', (e) => renderDetails(characterName))
}

function renderDetails(characterName){
    const cName = document.getElementById("name")
    const cImage = document.getElementById("image")
    const cVoteCount = document.getElementById("vote-count")

    cName.textContent = characterName.name
    cImage.src = characterName.image
    cImage.alt = characterName.name
    cVoteCount.textContent = characterName.votes
}

const form = document.getElementById("votes-form")
form.addEventListener("submit", characterVoteCount)
function characterVoteCount(e){
    e.preventDefault()
    let cVoteCount = document.getElementById("vote-count")
    cVoteCount.textContent += parseInt(e.target.votes.value)
}
    


