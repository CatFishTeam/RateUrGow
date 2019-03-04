const MovieDetails = require('./models/movie')

const movie = new MovieDetails();

movie.title = "Test";
movie.year = 1851;
movie.releaseDate = new Date();
movie.save().then(_=> console.log("Saved")).catch();
