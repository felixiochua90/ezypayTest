const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.listen(8000, () =>{
    console.log('Server started !')
})

app.route('/api/subs').get((req, res) => {
    res.send({
        cats: [{ name: 'Lily'}, { name: 'Lucy'}],
    })
})

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.route('/api/subs/create').post((req, res) =>{
    // res.send(200, "HELLO")
    res.header('Access-Control-Allow-Origin: *');
    res.header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    console.log("HERE");
    console.log(req.body);
    let amt = req.body.amount;
    let subsMode = req.body.subsMode;
    res.status(200).send([{ amount: amt}, {subscriptionMode: subsMode}]);
})

var corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}