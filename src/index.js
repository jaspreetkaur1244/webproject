const express = require('express');
const Routes = require("./routes.js");
const path = require("path");
const hbs = require("hbs");
const methodOverride = require("method-override");
const bodyParserq = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;



//built in middleware
const staticpath = path.join(__dirname,'../public');
const templatepath = path.join(__dirname,'../templates/views');
const partialpath = path.join(__dirname,'../templates/partials');


//to set view engine
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);

// parse application/x-www-form-urlencoded
app.use(bodyParserq.urlencoded({ extended: true}));
 
// parse application/json
app.use(bodyParserq.json());




//static files
app.use(express.static(staticpath));


//method override
app.use(methodOverride('_method'));

//template engine route
app.use("/", Routes)



app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})