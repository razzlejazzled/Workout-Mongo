const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");


// const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3030;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(require("./routes"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

