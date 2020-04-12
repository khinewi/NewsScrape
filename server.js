
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NewsDB")
app.use(routes);


// Connect to the MonGoose db
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });


