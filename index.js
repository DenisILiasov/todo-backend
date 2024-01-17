import express from 'express';
import mongoose from 'mongoose';
import { registerValidation } from './validations/auth.js';
import cors from 'cors'
import { register, login, getMe } from './controller/userControler.js';
import { create, getTodo,remove, update, updateStatus } from './controller/todoControler.js';

mongoose.connect('mongodb+srv://ilasovdenis01:DAn-wrY-Ye8-72u@cluster0.ige8bqh.mongodb.net/todo?retryWrites=true&w=majority')
.then(() => {
    console.log('mongo ok')
})
.catch((err) => {
    console.log('mongo not' + err)
})

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (reg, res) => {
    res.send('Hello world ;oergofd');
});

app.post('/auth/register', registerValidation, register)

app.post('/auth/login', login)

app.get('/infoUser',getMe)

app.post('/todos', create)

app.get('/todos', getTodo)

app.delete('/todos/:id', remove)

app.patch('/todos/:id', update)

app.patch('/todos/status/:id', updateStatus)

app.listen(5050, (err) => {
    if(err){
        console.log(err)

    }

    console.log('server started')
}) ;