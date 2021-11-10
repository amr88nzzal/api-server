'use strict';

const express = require('express')
const {foodCollection} = require('../models/index')
const validator = require('../middleware/validator')
const foodRouter = express.Router();
//-------------------
foodRouter.get('/food',getAllFood);
foodRouter.get('/food/:id',getOneFood);
foodRouter.post('/food',validator,creatFood);
foodRouter.put('/food/:id',updateFood);
foodRouter.delete('/food/:id',deleteFood);
//--------------------

async function getAllFood(req,res){
    const allFood =await foodCollection.read()
    res.status(200).json(allFood) 
}

async function getOneFood(req,res){
    const id = parseInt(req.params.id)
    const oneFood =await foodCollection.read(id)
    res.status(200).json(oneFood) 
}

async function creatFood(req,res){
    const newFood = req.body;
    console.log('---------------',newFood)
    const addFood = await foodCollection.create(newFood)
res.status(201).json(addFood) 

}
async function updateFood(req,res){
const id =parseInt(req.params.id);
const food = req.body;

const updateFood = await foodCollection.update(id,food)
res.status(201).json(updateFood) 
}
async function deleteFood(req,res){
    const id =parseInt(req.params.id);
    const deleteFood = await foodCollection.delete(id);
    res.status(204).json(deleteFood) 

}


module.exports = foodRouter