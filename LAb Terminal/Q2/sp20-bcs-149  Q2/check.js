const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/playground2",
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true 
 })
.then(()=> console.log('connected...'))
    .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });
app.listen(3000);


const couserSchema = new mongoose.Schema({
    name: String,
    author: String,
});

const Course = mongoose.model('Course2', couserSchema);

async function createCourse(){
    const course = new Course({
        name: "Node",
        author: "ADI"
    })
    const result = await course.save();
console.log(result);

}

createCourse();


