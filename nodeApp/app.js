const express=require('express');
const path =require('path');
let elements =require('./data');
const config=require('./config');
const port=config.port;

let app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.get('/', function (req, res) {
    res.render('index', {
        title:'List',
        elements:Object.keys(elements).map(k => elements[k])[0]
    });
});
  
app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});