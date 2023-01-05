import {Request, Response} from 'express'
import fs from 'fs'

type Books = {
    id: number
    name: string
    author: string
    price: number
    count: number
}
type State = {
    ids:number
    books: Books[]
}
let ids = 1
let books: Books[] = [] 

export function readBooks(req: Request, res: Response){
   
    let bycount = req.query.bycount
    
    if(bycount == undefined){
        res.status(200).json({
            message: "All books",
            books
        })
    }
    else{
        res.status(200).json({
            message: "All books",
            books: books.filter(book => book.count == Number(bycount))
        })
    }       
}

export function readbyName(req:Request, res: Response){
    let byname = req.query.byname

    if(byname == undefined){
        res.status(200).json({
            message: "All books",
            books
        })
    }
    else {
        res.status(200).json({
            message: "All books",
            books: books.filter(book => book.name == String(byname))
        }) 
}
    
}

export function writeBooks(req: Request, res: Response){
    const book: Books = {
        id: ids++,
        name: req.body.name,
        author: req.body.author,
        price: req.body.price,
        count: req.body.count
    }

    books.push(book)

    res.status(200).json({
        message: "Books Writed",
        book
    })
    saveBooks()

}
export function updataBooks(req: Request, res: Response){
    const id:number = +req.params.id
    const name = req.body.name
    const author = req.body.author
    const price = req.body.price
    const count = req.body.count
    const index:number = books.findIndex(book => book.id == id)
    
    books[index] = {
        id,
        name,
        author,
        price,
        count
    }
    res.status(200).json({
        message:"Books has updated"
    })
    saveBooks()
}
export function deleteBooks(req: Request, res: Response){
  let id: number = +req.params.id

    books = books.filter(book => book.id !=id)

    res.status(200).json({
        message: "Book in id: "+ id + " deleted"
    })
    saveBooks()

}

function saveBooks(){
    const state: State = {
        ids,
        books
    }
    const json: string = JSON.stringify(state)

    fs.writeFileSync('boks.json', json)
}

export function loadBoks(){
    if(fs.existsSync('boks.json')){
     const json:string = fs.readFileSync('boks.json', 'utf-8')
     const state:State = JSON.parse(json)

     ids = state.ids
     books = state.books

    }
    else{
        saveBooks()
    }
}