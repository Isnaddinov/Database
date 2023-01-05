import express from 'express'
import cors from 'cors'
import { createCategory,readCategory,updateCategory, deleteCategory, loadCatigories } from './catigories'
import { createProdact, deleteProduct, loadProduct, readProduct, } from './products'


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/categories', createCategory)
app.get('/categories', readCategory)
app.put('/categories/:id', updateCategory)
app.delete('/categories/:id', deleteCategory)

app.post('/products', createProdact)
app.get('/products', readProduct)
app.delete('/products/:id', deleteProduct)

app.get


app.listen(9090, () => {
    loadProduct(),
    loadCatigories()
    console.log('Server is running on http://localhost:9090');
    
})
