import express from 'express';
import mongoose from 'mongoose';
import { registerValidation } from './validations/auth.js';
import cors from 'cors'
import { register, login, createUserTodo } from './controller/userControler.js';

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



app.post('/user/todos/:id', createUserTodo)



app.listen(5050, (err) => {
    if(err){
        console.log(err)

    }

    console.log('server started')
}) ;

