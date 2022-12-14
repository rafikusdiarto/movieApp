const getDataApi = () => {
    const URL = "https://api.themoviedb.org/3/discover/movie?api_key=65cf174fae8bc3274e79960d1c5782b6&sort_by=popularity.desc";
    const img_URL = "https://image.tmdb.org/t/p/w500/";

    fetch(URL)
        .then((response) => response.json())
        .then((result) => {
        let film = document.getElementById("kontenFilm");
        const remove = (sel) =>
            document.querySelectorAll(sel).forEach((el) => el.remove());
        remove(".thisFilm");

        let dataFilm = result.results;
        dataFilm.forEach((index) => {
            film.innerHTML +=
                `<div class="col-4 mx-auto thisFilm">
                    <div class="card h-100">
                        <img src="` + img_URL +``+ index.poster_path +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">` + index.title +`</h5>
                                    <p class="card-text">Rating : <b>` + index.vote_average + `</b><p>
                                </div>
                            </div>
                        <p class="card-text p-2">Realese Date : <b>` + index.release_date +`</b></p>
                    </div>
                </div>`;
        });
        })
        .catch((error) => console.log(error));
};
getDataApi();



function setName() {
    let search = document.getElementById("search");
    let setSearch = search.value;

    const URL =
        "https://api.themoviedb.org/3/search/movie?api_key=65cf174fae8bc3274e79960d1c5782b6&query=$" +
        setSearch+"&page=1";
    const img_URL = "https://image.tmdb.org/t/p/w500/";

    fetch(URL)
        .then((response) => response.json())
        .then((result) => {
        let film = document.getElementById("kontenFilm");
        const remove = (sel) => document.querySelectorAll(sel).forEach((el) => el.remove());
        remove(".thisFilm");

        let dataFilm = result.results;

        dataFilm.forEach((index) => {
            film.innerHTML +=
            `<div class="col-4 mx-auto thisFilm">
                    <div class="card h-100">
                        <img src="` + img_URL +``+ index.poster_path +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <div class="d-flex justify-content-between">
                                    <h5 class="card-title">` + index.title +`</h5>
                                    <p class="card-text">Rating : <b>` + index.vote_average + `</b><p>
                                </div>
                            </div>
                        <p class="card-text p-2">Realese Date : <b>` + index.release_date +`</b></p>
                    </div>
                </div>`;
        });
        })
        .catch((error) => console.log(error));

    if (setSearch == "") {
        getDataApi();
    }
}

// function setName() {
//     const search_URL = 'https://api.themoviedb.org/3/search/movie?api_key=65cf174fae8bc3274e79960d1c5782b6&query=$';
//     let search = document.getElementById("search");
//     let setSearch = search.value;
//     const remove = (sel) => document.querySelectorAll(sel).forEach(el => el.remove());
//     remove(".thisFilm");

//     if (setSearch) {
//         // console.log(search_URL+setSearch)
//         getDataApi(search_URL+setSearch)
//     } else {
//         getDataApi(URL)
//     }
// }
