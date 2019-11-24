var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync(/*{force: true}*/).then(function()
{
  app.listen(PORT, function()
  {
    console.log("Server listening on: http://localhost:" + PORT);
  });
});


//let printStuff = function(result)
//{
    //console.log("-----------------------");
    //console.log(result);
//}
