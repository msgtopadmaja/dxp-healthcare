const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = (filter = '') => {
    const movieList = document.getElementById('movie-list');

    if (movies.length === 0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';

    const filteredMovies = !filter
        ? movies
        : movies.filter(movie => movie.info.title.includes(filter));

    filteredMovies.forEach(movie => {
        const movieEl = document.createElement('li'); // performing the object destruction
        //check the property is existing in an object or not bellow
        // if(!('info' in movie)) {} or if(!(movie.info === undefined)) {}
        const { info, ...otherProp } = movie; // you can also use the rest parameter that is ...otherProp 
        console.log('Here id only the property did not pull out, so remaining property is only id ', otherProp)//  ...otherProp this will now collect all properties which you didn't pull out by name and give you a new object
        // const { title: movieTitle } = info;
        let { getFormattedTitle } = movie;
        console.log('what would be', this);
        // getFormattedTitle = getFormattedTitle.bind(movie);
        console.log('info--', info);
        let text = getFormattedTitle.call(movie) + ' - ';
        for (const key in info) {
            if (key !== 'title' && key !== '_title') {
                text = text + `${key}: ${info[key]}`;
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);
    });
};

const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        return;
    }

    const newMovie = {
        info: {       //setter and getter
            set title(val) {
                if (val.trim() === '') {
                    this.title = 'DEFAULT';
                    return;
                }
                this._title = val;
            },
            get title() {
                return this._title;
            },
            [extraName]: extraValue
        },
        id: Math.random(),
        getFormattedTitle() {
            console.log('this-->', this);
            return this.info.title.toUpperCase();
        },
    };

    newMovie.info.title = title;
    console.log(newMovie.info.title);

    movies.push(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    console.log(this);
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
};

addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);

