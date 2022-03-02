// Required modules
const express = require('express');
const path = require('path');
const app = express();

// Set templating for handlebars
app.set('view engine', 'hbs');

// Add middleware
path.resolve(__dirname, 'public');
app.use(express.static('public'));

// More middleware
app.use(express.urlencoded({extended:false}));

// And more middleware!
app.use(function(req, res, next){
    console.log("Method: ", req.method);
    console.log("Path: ", req.path);
    console.log("Query String: ", req.query);
    console.log("/n");
    next();
});

app.get('/', (req, res) => {
    res.render("home.hbs");
})