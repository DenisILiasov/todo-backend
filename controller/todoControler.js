import todoModel from '../models/todo.js'


export const getTodo = async (req, res) => {
    try{
        const todos = await todoModel.find();

        res.json(todos)
    }catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось найти пост'
        })
    }
}

export const create = async (req, res) => {
    try{
        const doc = new todoModel({
            title: req.body.todo.title,
            text: req.body.todo.text,
            user: req.body.user,
            status: false
        });

        const todo = doc.save();

        res.json(todo)
    }catch(error){
        console.log(error)
        res.status(500).json({
            message: 'Не удалось добавить пост'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const todoId = req.params.id;
        const todo = await todoModel.findByIdAndDelete(todoId);
        if(todoC){
            return res.json(todoC)
        }
  
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось удалить пост'
        })
    }
}

export const update = async (req, res) => {
    try {
        const todoId = req.params.id;
        await todoModel.updateOne({
            _id: todoId
        }, {
            title: req.body.title,
            text: req.body.text
        });

        res.json({
            message: 'update'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось обновить пост пост'
        })
    }
}

export const updateStatus = async (req, res) => {
    try {
        const todoId = req.params.id;
        await todoModel.updateOne({
            _id: todoId
        }, {
            status: true,
        });
        res.json({
            message: 'update'
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Не удалось обновить пост пост'
        })
    }
}