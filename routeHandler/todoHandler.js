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
router.post('/', async(req, res)=>{

});


// POST Multiple TODO
router.post('/all', async(req, res)=>{

});

// PUT TODO
router.post('/:id', async(req, res)=>{

});


// DELET SINGLE TODO
router.delete('/:id', async(req, res)=>{

});



module.exports = router;