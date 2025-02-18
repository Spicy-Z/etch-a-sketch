//Creates the layout for the etch-a-sketch
//rows/columns customized or 16
//given class etch and id of d+index
function createSketch(rows) {
    let container = document.querySelector('.container')
    let numOfDivs = rows ? rows : 16
    let calculation = 500 / numOfDivs
    for (i = 0; i < numOfDivs ** 2; i++) {
        let div = document.createElement('div')
        div.setAttribute('id', 'd' + i)
        div.classList.add('etch')
        div.style.width = calculation + 'px'
        div.style.opacity = 0.1
        container.appendChild(div)
    }
    gameMechanics();
}

//Mechanic to turn white square into color and change opacity
function gameMechanics() {
    let container = document.querySelector('.container')
    container.addEventListener('mouseover', (e) => {
        if (e.target.id != "") {
            let randomRed = (Math.round(Math.random() * 255))
            let randomGreen = (Math.round(Math.random() * 255))
            let randomBlue = (Math.round(Math.random() * 255))
            let opac = e.target.style.opacity
            e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
            e.target.style.opacity = e.target.style.opacity < 1 ? parseFloat(opac) + 0.1 : 1;

        }
    })
}

//Removes the sketch from 
function removeSketch() {
    let container = document.querySelector('.container')
    let etch = document.querySelectorAll('.etch')
    etch.forEach((e) => {
        container.removeChild(e)
    })
}

//Mechaninc to turn all squares white again
function clearSketch() {
    let etch = document.querySelectorAll('.etch')
    let clear = document.querySelector('#clear')
    clear.addEventListener('click', () => {
        etch.forEach((e) => {
            console.log(e.style.opacity)
            e.style.backgroundColor = 'white'
            e.style.opacity = 0.1
        })
    })
}


//Change the size of the etch-a-sketch range between 1-100
function changeSize() {
    let size = document.querySelector('#config')
    let newSize
    size.addEventListener('click', () => {
        do {
            newSize = prompt("Enter a size between 1 and 100")
        } while (newSize < 1 || newSize > 100)
        removeSketch();
        createSketch(newSize);
        clearSketch();
    })
}

//Function working similar to main()
//used to call all necessary functions
function runGame() {
    createSketch();
    changeSize();
    clearSketch();
}

runGame();