const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoScema = require("../schemas/todoSchemas");
const Todo = new mongoose.model("Todo", todoScema);

// GET SINGLE TODO
router.get('/:id', async(req, res)=>{
    await Todo.find({ _id: req.params.id})
    .then((data) => {
        res.status(200).json({
            result: data,
            message: 'particuler id data get successfully!',
        });
    })
    .catch(() => {
        res.status(500).json({
            err: 'Something were wrong on server side!',
        });
    });

});

// GET ALL active status TODO
router.get('/', async(req, res)=>{
    await Todo.find({ status:"active"})
    .then((data) => {
        res.status(200).json({
            result: data,
            message: 'status active data get successfully!',
        });
    })
    .catch(() => {
        res.status(500).json({
            err: 'Something were wrong on server side!',
        });
    });
    

});

// POST SINGLE TODO
// router.post('/', async(req, res)=>{
//     const newTodo = new Todo(req.body);
//     await newTodo .save((err)=>{
//         if(err) {
//             res.status(500).json({
//                 error: "There was a server side error",
//             });
//         }else{
//             res.status(200).json({
//                 message: "Todo was inserted successfully",
//             })
//         }
//     })

// });
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo
        .save()
        .then(() => {
            res.status(200).json({
                message: 'Todo created successfully!',
            });
        })
        .catch(() => {
            res.status(500).json({
                err: 'Something is wrong on server side!',
            });
        });
});


// POST Multiple TODO
router.post('/all', async(req, res)=>{
    await Todo.insertMany(req.body)
    .then(() => {
        res.status(200).json({
            message: 'multiple Todo created successfully!',
        });
    })
    .catch(() => {
        res.status(500).json({
            err: 'Something were wrong on server side!',
        });
    });
        }
  );


// PUT (update) TODO
router.post('/:id', async(req, res)=>{
    await Todo.updateOne({_id: req.params.id},{
        $set:{
            status:"inactive"
        }
    })
    .then(() => {
        res.status(200).json({
            message: 'Todo updated successfully!',
        });
    })
    .catch(() => {
        res.status(500).json({
            err: 'Something were wrong on server side!',
        });
    });
});


// DELET SINGLE TODO
router.delete('/:id', async(req, res)=>{
    await Todo.deleteOne({ _id: req.params.id})
    .then(() => {
        res.status(200).json({
            message: 'pariculer id data deleted successfully!',
        });
    })
    .catch(() => {
        res.status(500).json({
            err: 'Something were wrong on server side!',
        });
    });

});



module.exports = router;