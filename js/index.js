const contenido = document.querySelector('#contenido')
const cardBooks = document.querySelector('#cardBooks').content
const fragment = document.createDocumentFragment()
let libros = []

document.addEventListener('DOMContentLoaded', () => {
    loadLibros()
})

const loadLibros = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {
            libros = response
            creaCards()
            console.log('libros', libros.results[0].title)
        })
        .catch(err => console.error(err));
}

const creaCards = () => {
    libros.forEach((book) => {
        //ERRORRR
        cardBooks.querySelector('.booktitle').textContent = book.results.title

        const clone = cardBooks.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}
