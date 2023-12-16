let container = document.querySelectorAll('.acordeon')
let headerItem = document.querySelectorAll('.header-item')
let mainItem = document.querySelectorAll('.main-item')

// acordeon
container.forEach(i => {
    i.addEventListener("click", () => {
        addClassAcordeon()
        i.children[1].classList.remove("none")
    })
})

function addClassAcordeon() {
    container.forEach(i => {
        i.children[1].classList.add("none")
    })
}

// mainItem Router
function addClassMainItem() {
    for (let i of mainItem) {
        i.classList.add("none")
    }
}

addClassMainItem()

mainItem[0].classList.remove("none")

for (const [index, value] of headerItem.entries()) {
    headerItem[index].addEventListener("click", () => {
        addClassMainItem()
        mainItem[index].classList.remove("none")
    })
}

// remove nodo