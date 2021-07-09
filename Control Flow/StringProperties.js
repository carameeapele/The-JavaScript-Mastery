const movie = {
    title: 'Pride and Prejudice',
    releaseYear: 2005,
    rating: 5.0,
    director: 'idk'
};

showProperties(movie);

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
}