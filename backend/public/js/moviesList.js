window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let listado = document.querySelector("ul")
 
    body.classList.add('fondoMoviesList');
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';


    fetch("http://localhost:3001/api/movies")
    .then((res) => res.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let items = data[i];
            listado.innerHTML += `<li>${items}</li>`
        }
    })
}