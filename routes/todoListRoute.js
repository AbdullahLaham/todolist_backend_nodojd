import express from "express";
import todoModal from "../modals/todoModal.js";
const router = express();

router.get('/', async (req, res) => {
    try {
        const todoLists = await todoModal.find();
        res.json(todoLists);
    } catch(error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const {title, isDone, date} = req.body;
    console.log('hello')
    try {
        const todoList = await todoModal.create({title, isDone, date});
        res.json(todoList);
    } catch(error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const todoList = await todoModal.findById(id);
        let updatedodoList;
        if (todoList.isDone) {
            updatedodoList = await todoModal.findByIdAndUpdate(id, {isDone: false}, {new: true});
        } else {
            updatedodoList = await todoModal.findByIdAndUpdate(id, {isDone: true}, {new: true});
        }
        
        res.json(updatedodoList);

    } catch(error) {
        console.log(error);
    }
});

router.delete('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const todoList = await todoModal.findByIdAndDelete(id);
        res.json(todoList);
    } catch(error) {
        console.log(error);
    }
})

export default router;
