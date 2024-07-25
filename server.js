const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://dhanush:UdLSFndnpqMewvFb@cluster0.h4hqohm.mongodb.net/DetailsDB")

//create a data schema

const notesSchema = {

name: String,
email: String,
phone: String,
theme: String,
place: String,
member: String,
result: String,
date: String


}

const Note = mongoose.model("notes", notesSchema);

app.get("/", function(req, res) {

res.sendFile(__dirname + "/booknow.html");

})

app.post("/", function(req, res){
    let newNote = new Note({
        name: req.body.name,
        email: req.body.content,
        phone: req.body.phone,
        theme: req.body.theme,
        place: req.body.place,
        member: req.body.member,
        result: req.body.result,
        date: req.body.date
    });
    newNote.save();
    res.redirect("/");
})

app.listen(3000, function() {

console.log("server is running on 3000");

})