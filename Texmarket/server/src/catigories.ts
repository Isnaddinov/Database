import {Request, Response} from 'express'
import fs from 'fs'

type Category = {
    id: number
    name: string
    image:string
}
type State = {
    ids: number
    categories: Category[]
}

let ids:number = 1
let categories: Category[] = []

export function createCategory(req:Request, res:Response){
    const category: Category ={
        id: ids++,
        name: req.body.name,
        image: req.body.image
    }

    categories.push(category)

    res.status(201).json({
        message:"Category writed"
    })
    saveCategories()
}
export function readCategory(req:Request, res:Response){
    res.status(200).json(categories)
}
export function updateCategory(req:Request, res:Response){
    const id = +req.params.id
    const name = req.body.name
    const image = req.body.image

    const index = categories.findIndex(category => category.id == id)
    categories[index]={
        id,
        name,
        image
    }
    res.status(200).json({
        message: "Category " + id + " updated."
    })
    saveCategories()
}

export function deleteCategory(req:Request, res:Response){
   const id = +req.params.id
   categories = categories.filter(category => category.id != id)

   res.status(200).json({
    message: "Deleted"
   })
   saveCategories()
}

export function saveCategories(){
    const state :State = {
        ids,
        categories
    }
    const json = JSON.stringify(state)
    fs.writeFileSync('./catigories.json', json)
}

export function loadCatigories(){
    if(fs.existsSync('./catigories.json')){
        const json = fs.readFileSync('./catigories.json', 'utf-8')
        const state:State = JSON.parse(json)

        ids = state.ids
        categories = state.categories
    }
    else{
        saveCategories()
    }
}