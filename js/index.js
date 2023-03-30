const contenido = document.querySelector('#contenido')
const cardBooks = document.querySelector('#cardBooks').content
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
const misterioSuspenso = document.getElementById('Mystery-Suspense')
const cienciaFiccion = document.getElementById('ScienceFiction-Fantasy')
const animales = document.getElementById('Animals')
const arte = document.getElementById('Art')
const literaturaGeneral = document.getElementById('GeneralLiterature')
const hobbiesDeportes = document.getElementById('Hobbies-Sports')
const vidaReal = document.getElementById('RealLife')
const cienciaTecnologia = document.getElementById('Science-Technology')


let libros = []

document.addEventListener('DOMContentLoaded', () => {
    loadLibros()
})

cienciaTecnologia.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?categories=Science%20%26%20Technology&lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {            
            libros = []
            libros = response
            creaCards(libros)
            console.log('suspe',libros)
        })
        .catch(err => console.error(err));
})

vidaReal.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?categories=Real%20Life&lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {            
            libros = []
            libros = response
            creaCards(libros)
            console.log('suspe',libros)
        })
        .catch(err => console.error(err));
})

hobbiesDeportes.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?categories=Hobbies%2C%20Sports%20%26%20Outdoors&lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {            
            libros = []
            libros = response
            creaCards(libros)
            console.log('suspe',libros)
        })
        .catch(err => console.error(err));
})

literaturaGeneral.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?categories=General%20Literature&lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {            
            libros = []
            libros = response
            creaCards(libros)
            console.log('suspe',libros)
        })
        .catch(err => console.error(err));
})

arte.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?categories=Art%2C%20Creativity%20%26%20Music&lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {            
            libros = []
            libros = response
            creaCards(libros)
            console.log('suspe',libros)
        })
        .catch(err => console.error(err));
})

animales.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?categories=Animals%2C%20Bugs%20%26%20Pets&lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {            
            libros = []
            libros = response
            creaCards(libros)
            console.log('suspe',libros)
        })
        .catch(err => console.error(err));
})

cienciaFiccion.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?categories=%20Science%20Fiction%20%26%20Fantasy&lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {            
            libros = []
            libros = response
            creaCards(libros)
            console.log('suspe',libros)
        })
        .catch(err => console.error(err));
})

misterioSuspenso.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'adc945c8cfmshc079843a7036b3cp1f019ejsnb4f51094f00d',
            'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
    };
    
    fetch('https://book-finder1.p.rapidapi.com/api/search?categories=Mystery%20%26%20Suspense&lexile_min=600&lexile_max=800&results_per_page=100&page=1', options)
        .then(response => response.json())
        .then(response => {            
            libros = []
            libros = response
            creaCards(libros)
            console.log('suspe',libros)
        })
        .catch(err => console.error(err));   
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
            console.log('libros', libros)
        })
        .catch(err => console.error(err));
}


const creaCards = () => {
    contenido.innerHTML= ''
    Object.values(libros.results).forEach((book) => {
        cardBooks.querySelector('img').setAttribute('src', book.published_works[0].cover_art_url)
        cardBooks.querySelector('.booktitle').textContent = book.title
        cardBooks.querySelector('.authorname').textContent = book.authors
        cardBooks.querySelector('.categoria').textContent = book.categories

        const clone = cardBooks.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

/*
btnBuscar.addEventListener('keyup', () => {
    console.log('tecla', btnBuscar.value)
    let temp = []
    temp = libros.filter((item) => item.title.Object.toLowerCase().includes(btnBuscar.value))
    creaCards(temp)
})
*/