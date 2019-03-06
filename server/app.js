const express = require('express');
const GowRouter = require('./routes/gow');
const SecurityRouter = require('./routes/security');
const verifyToken = require('./middlewares/security');
const FixturesRouter = require('./routes/fixtures');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.get('/', (req, res) => {
    //console.log('test')
})

app.use(cors());
app.use(bodyParser.json());
app.use(verifyToken);
app.use(GowRouter);
app.use(SecurityRouter);
app.use(FixturesRouter);

app.listen(3000, () => console.log('Listening'));
