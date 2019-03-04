const express = require('express');
const MovieRouter = require('./routes/movie');
const app =  express();

app.use(MovieRouter);

app.get('/', (req, res) => {
    //console.log('test')
})

app.listen(3000, () => console.log('Listening'));

/*
const movie = new MovieDetails();
movie.title = "Test";
movie.year = 1851;
movie.releaseDate = new Date();
movie.save().then(_=> console.log("Saved")).catch();
*/