const getDataApi = () =>{
    const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=65cf174fae8bc3274e79960d1c5782b6&sort_by=popularity.desc';
    // const options = {
    //     method: "GET"
    // };

    fetch(URL)
    .then((response) => response.json())
    .then((result) => {
        let film = document.getElementById("kontenFilm");

        let dataFilm = result.results;

        dataFilm.forEach(index => {
            film.innerHTML += `
            <div class="col-4 mx-auto">
                <div class="card h-100">
                    <img src="https://image.tmdb.org/t/p/w500/`+index.poster_path+`" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div class="d-flex justify-content-between">
                            <h5 class="card-title">`+index.title+`</h5>
                            <p class="card-text">Rating : <b>`+index.vote_average+`</b><p>
                        </div>
                    </div>
                    <p class="card-text p-2">Realese Date : <b>`+index.release_date+`</b></p>
                </div>
            </div>
            `
            console.log(index)

        });
        // console.log(dataFilm)
        // console.log(movieHTML)
        // console.log(result)
    })


    .catch((error) => console.log(error));

};
getDataApi()