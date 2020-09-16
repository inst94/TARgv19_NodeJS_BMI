const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html')
});

app.post('/', function(request, response){
    console.log(request.body);
    let kaal = Number(request.body.kaal);
    let pikkus = Number(request.body.pikkus);
    pikkusM = pikkus/100;
    pikkusMeter = (pikkusM * pikkusM).toFixed(2);
    let result = kaal/pikkusMeter;

    if(result<19){
        console.log(`${kaal} / ${pikkusMeter} = ${result.toFixed(2)}(kg/m2), alakaal`);
        response.send(`${kaal} / ${pikkusMeter} = ${result.toFixed(2)}(kg/m2), alakaal`);
    }
    else if(result>=19 && result<=24.9){
        console.log(`${kaal} / ${pikkusMeter} = ${result.toFixed(2)}(kg/m2), normaalkaal`);
        response.send(`${kaal} / ${pikkusMeter} = ${result.toFixed(2)}(kg/m2), normaalkaal`);
    }
    else if(result>=25 && result<=29.9){
        console.log(`${kaal} / ${pikkusMeter} = ${result.toFixed(2)}(kg/m2), ülekaal`);
        response.send(`${kaal} / ${pikkusMeter} = ${result.toFixed(2)}(kg/m2), ülekaal`);
    }
    else if(result>30){
        console.log(`${kaal} / ${pikkusMeter} = ${result.toFixed(2)}(kg/m2), rasvumine`);
        response.send(`${kaal} / ${pikkusMeter} = ${result.toFixed(2)}(kg/m2), rasvumine`);
    }
    else{
        console.log(`Not defined`);
        response.send(`Not defined`);
    }
});

app.listen(3000, function(){
    console.log('Server is running on Port 3000')
});