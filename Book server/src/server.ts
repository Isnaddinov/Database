import express from 'express'
import { readBooks, writeBooks, updataBooks, deleteBooks,loadBoks, readbyName } from './books'
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/books', readBooks)
app.get('/boks', readbyName)
app.post('/books', writeBooks )
app.put('/books/:id', updataBooks)
app.delete('/books/:id', deleteBooks)

app.listen(9090, () => {
    loadBoks()
    console.log('Server 9090 da yugurib getdi');
    
})