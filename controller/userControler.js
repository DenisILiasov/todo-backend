import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt'
import UserModel from '../models/user.js'



export const register = async (req, res) => {
    try {
        const errors = validationResult(req)
       
        if(!errors.isEmpty()){
            return res.status(400).json(errors.array())
        }
       
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt)
        const doc = new UserModel({
            email: req.body.email,
            name: req.body.name,
            password: passwordHash,
        }) 
        const user = await doc.save()

      
        
        res.json({...user._doc})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться'
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if(!user){
            return res.status(404).json({
                message: 'Не удалось зарегистрироваться'
            })
        }

        const isValidUser = await bcrypt.compare(req.body.password, user._doc.password)
        if(!isValidUser){
            return res.status(404).json({
                message: 'Неверный логин или пароль'
            })
        }
      
    

        res.json({...user._doc})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось зарегистрироваться'
        })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)
        if(!user){
            return res.status(404).json({
                message: 'Пользователь не найден'
            })
        }
        res.json({...user._doc})
    } catch (error) {
        
    }
}