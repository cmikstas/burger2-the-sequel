var express = require("express");

var routes = require("./controllers/burgers_controller");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function()
{
  console.log("Server listening on: http://localhost:" + PORT);
});

//let printStuff = function(result)
//{
    //console.log("-----------------------");
    //console.log(result);
//}
