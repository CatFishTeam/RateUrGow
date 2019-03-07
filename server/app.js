const express = require('express');
const GowRouter = require('./routes/gow');
const SecurityRouter = require('./routes/security');
const verifyToken = require('./middlewares/security');
const FixturesRouter = require('./routes/fixtures');
const UploadImage = require('./routes/uploadimage')
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const formData = require('express-form-data');
app.use(formData.parse())


app.use(cors());
app.use(bodyParser.json());
app.use(GowRouter);
app.use(SecurityRouter);
app.use(FixturesRouter);
app.use(UploadImage);
app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

app.listen(3000, () => console.log('Listening'));
