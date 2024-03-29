const express = require('express');
const path = require('path');
const app = express();
const cors = require("cors");
var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, POST, GET, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
    next();
  }
app.use(allowCrossDomain);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.urlencoded({ extended: false }));

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, '../public')));

const index = require("./routes/api/index");
const apiMoviesRouter = require('./routes/api/movies');
const apiGenresRouter = require('./routes/api/genres');
const apiActorsRouter = require('./routes/api/actors');


app.use(express.static(path.resolve(__dirname, '../public')));


app.use('/api/movies',apiMoviesRouter);
app.use('/api/actors',apiActorsRouter);
app.use('/api/genres',apiGenresRouter);
app.use("/" , index)

app.listen('3001', () => console.log('Servidor levantado en http://localhost:3001'));
