import { Client, Pool, ClientConfig } from "pg";
import { Product } from "./models";

const config:ClientConfig ={
    connectionString:'postgresql://isnaddinov:5052929o@localhost:5432/shop'

}

const client = new Client(config)

client.connect(err => {
    if(err == null){
        console.log('Connected');
    }
    else{
        console.log('Error while connection to database: ' + err);
        
    }
})

export function addProduct(products:Product){
    const sql: string = `INSERT INTO products(name, price, count, color) 
    VALUES($1, $2, $3, $4 )`
    const values:any[] = [products.name, products.price, products.count, products.color]

    client.query(sql, values, (err, result) => {
        if(err == null){
            console.log(result.rowCount);
            
        }
        else{
            console.log('Error while create product: ' + err);
        }
    })
}

export function showProducts(){
    const sql: string = `SELECT * FROM products`

    client.query(sql,(err, result) => {
        if(err == null){
            if(result.rowCount == 0){
                console.log('No content');
            }
            else{
                console.table(result.rows);
            }
            
        }
        else{
            console.log('Error while show products: ' + err);
        }
    } )
}