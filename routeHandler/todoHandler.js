const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const todoScema = require("../schemas/todoSchemas");
const Todo = new mongoose.model("Todo", todoScema);

// GET SINGLE TODO
router.get('/:id', async(req, res)=>{

});

// GET ALL TODO
router.get('/', async(req, res)=>{
    

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

  
// PUT TODO
router.post('/:id', async(req, res)=>{

});


// DELET SINGLE TODO
router.delete('/:id', async(req, res)=>{

});



module.exports = router;