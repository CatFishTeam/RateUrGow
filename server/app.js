const express = require('express');
const MovieRouter = require('./routes/movie');
const GowRouter = require('./routes/gow');
const TokenRouter = require('./routes/generateToken');
const verifyToken = require('./middlewares/security');
const fixturesRouter = require('./routes/fixtures');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.get('/', (req, res) => {
    //console.log('test')
})

app.use(cors());
app.use(bodyParser.json());
app.use(verifyToken);
app.use(MovieRouter);
app.use(GowRouter);
app.use(TokenRouter);
app.use('/fixtures', fixturesRouter);

app.listen(3000, () => console.log('Listening'));

/*
const movie = new MovieDetails();
movie.title = "Test";
movie.year = 1851;
movie.releaseDate = new Date();
movie.save().then(_=> console.log("Saved")).catch();
*/