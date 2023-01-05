import {Request, Response} from 'express'
import fs from 'fs'

type Product = {
    id: number
    model: string
    description: string
    price: number
    catId: number
}

type State = {
    ids: number
    products: Product[]
}

let ids: number = 1
let products:Product[] = []

export function createProdact(req:Request, res: Response){
  const product: Product ={
    id: ids++,
    model: req.body.model,
    description: req.body.description,
    price: req.body.price,
    catId: req.body.catId
  }
  products.push(product)

  res.status(200).json({
    message: "Product writed",
    product
  })
  saveProducts()
}
export function readProduct(req:Request, res: Response){
    
    let catId = req.query.category

    if(catId == undefined){
        res.status(200).json({
            message: 'All products',
            products
        })
    }
    else{
        res.status(200).json({
            message: 'All products',
            products: products.filter(product => product.catId == Number(catId))
        })
    }
  res.status(200).json({
    message: "All Products",
    products
  })

}
export function deleteProduct(req:Request, res: Response){
    const id:number = +req.params.id
    products = products.filter(product => product.id !=id)
    res.status(200).json({
        message: "Product deleted",
    })
    saveProducts()
}
export function saveProducts(){
    const state: State = {
        ids,
        products
    }
    const json:string = JSON.stringify(state)
    fs.writeFileSync('products.json', json)
}

export function loadProduct(){
    if(fs.existsSync('products.json')){
        const json:string = fs.readFileSync('products.json', 'utf-8')
        const state:State = JSON.parse(json)
        ids = state.ids
        products = state.products
    }
    else{
        saveProducts()
    }
}