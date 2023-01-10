import {Client, ClientConfig} from 'pg'

const config: ClientConfig = {
    connectionString:'postgresql://isnaddinov:5052929o@localhost:5432/shop'
}

const client = new Client(config)

client.connect(err => {
    if(err == null){
        console.log('DATABASE CONNECTED');   
    }
    else{
        console.log('DATABASE CONNECTION ERROR: ', err);
        
    }
})
 function writeTable(){
    const sqltable: string = `CREATE TABLE IF NOT EXISTS users (
        username VARCHAR(80),
        password VARCHAR(80),
        email VARCHAR(80)
    );`

    client.query(sqltable, (err, result) => {
        if(err == null){
            console.log('Table Writed')
        }
        else{
            console.log('Error While Write table: ' + err);
        }
    })
 }
 
 writeTable()