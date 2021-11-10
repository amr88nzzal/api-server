'use strict';

const express = require('express')
const {clothesCollection} = require('../models/index')
const validator = require('../middleware/validator')
const clothesRouter = express.Router();
//-------------------
clothesRouter.get('/clothes',getAllClothes);
clothesRouter.get('/clothes/:id',getOneClothes);
clothesRouter.post('/clothes',validator,creatClothes);
clothesRouter.put('/clothes/:id',updateClothes);
clothesRouter.delete('/clothes/:id',deleteClothes);
//--------------------

async function getAllClothes(req,res){
    const allClothes =await clothesCollection.read()
    res.status(200).json(allClothes) 
}

async function getOneClothes(req,res){
    const id = parseInt(req.params.id)
    const oneClothes =await clothesCollection.read(id)
    res.status(200).json(oneClothes) 
}

async function creatClothes(req,res){
    const newClothes = req.body;
    console.log(newClothes)
    const addClothes = await clothesCollection.create(newClothes)
res.status(201).json(addClothes) 

}
async function updateClothes(req,res){
const id =parseInt(req.params.id);
const clothes = req.body;

const updateClothes = await clothesCollection.update(id,clothes)
res.status(201).json(updateClothes) 
}
async function deleteClothes(req,res){
    const id =parseInt(req.params.id);
    const deleteClothes = await clothesCollection.delete(id);
    res.status(204).json(deleteClothes) 

}


module.exports = clothesRouter