const path = require('path');
const express = require('express');
const app = express();


app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'/views'))


app.get('/', (req, res) => {
    const spawn = require("child_process").spawn;
    const qa = spawn('python',[path.join(__dirname,'/scripts','question_answering.py')]);
    qa.stdout.on('data', (data) => {
        // Do something with the data returned from python script
        console.log(data.toString());
        res.write(data);
        res.end('end');
    });
})


app.listen(3000, () => {
    console.log('listening')
})
