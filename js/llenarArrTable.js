// iterar array
let arr = [123, 456, 798]
let arr1 = [123, 456, 798]
let tabla = document.querySelector('.arr-tabla')
let tabla1 = document.querySelector('.arr-tabla1')

function llenarTablar(arr, tabla) {
    tabla.innerHTML = ""

    for (let i of arr) {
        tabla.innerHTML += `<li>${i}</li>`
    }

}

llenarTablar(arr, tabla)
llenarTablar(arr1, tabla1)