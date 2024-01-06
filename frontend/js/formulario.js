window.onload = () => {

    const  qs = (selector) => {
        return document.querySelector(selector)
    }

    const $titulo = qs(".titulo"),
          $calificacion = qs(".calificacion"),
          $premios = qs(".premios"),
          $fecha = qs(".fecha"),
          $duracion = qs(".duracion"),
         $editar = qs(".botonModificar"),
         $crear = qs(".botonAgregar"),
         $eliminar = qs(".botonBorrar"),
         URL_BASE  = `http://localhost:3031/api/movies/2`,
        URL_UPDATE = `http://localhost:3031/api/movies/update/2`,
        URL_CREATE = `http://localhost:3031/api/movies/create`,
        URL_DELETE = `http://localhost:3031/api/movies/delete/2`

        fetch(URL_BASE)
            .then((res) => res.json())
            .then(movie => {
                let peli =  movie.data;
                  console.log(peli);
            let date = new Date(peli.release_date)
       
        $titulo.value = peli.title;
        $duracion.value = peli.length;
        $calificacion.value = peli.rating;
        $premios.value = peli.awards;
        $fecha.value = date.toISOString().substring(0,10);

    }) 


 
      $editar.addEventListener("click", (e) => {

    peliEditada = {

        title : $titulo.value,
        rating : $calificacion.value,
        length : $duracion.value,
        awards : $premios.value,
        release_date : $fecha.value,
    
}

        fetch(URL_UPDATE,{
            method: "PUT",
            body: JSON.stringify(peliEditada),
            headers: {
                "Content-Type" : "application/json"
            }
        
        })
        .then((res) => res.json())
        .then(()=> {
            alert("Editaste esta pelicula")
  
})
        $crear.addEventListener("click", (e) =>{
           
            peliNueva = {

                title : $titulo.value,
                rating : $calificacion.value,
                awards : $premios.value,
                release_date : $fecha.value,
                length : $duracion.value,
        
                
        }
        fetch(URL_CREATE , {
            method: "POST",
            body: JSON.stringify(peliNueva),
            headers: {
                "Content-Type" : "application/json"
            }
        })
        .then((res) => res.json())
        .then(()=> {
            alert("creaste una nueva pelicula")

})
        })

          $eliminar.addEventListener("click", () => {

        fetch(URL_DELETE, {
            method: "DELETE",
            headers: {"Content-Type" : "application/json"}
        })
            .then((response => console.log(response)))
            .then(() => alert("Borraste esta pelicula"))
    }) 
        
       })
 
  };