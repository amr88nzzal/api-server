'use strict'
const foodSchema = require('./food.model')
const clothesSchema = require('./clothes.model')
const {Sequelize ,DataTypes}=require('sequelize')
const Collections = require('./lib/collection')

const postgres_url=process.env.NODE_ENV==='test'?'sqlite:memory:':process.env.DATABASE_URL
const sequelizeOptions=process.env.NODE_ENV==='production'?{
    dialectOptions: {        ssl:{require:true,rejectUnauthorized:false}    }
}:{}

let sequelize = new Sequelize(postgres_url,sequelizeOptions);

const foodModel = foodSchema(sequelize,DataTypes)
const clothesModel = clothesSchema(sequelize,DataTypes)
const foodCollection = new Collections(foodModel);
const clothesCollection = new Collections(clothesModel)


module.exports={
    db:sequelize,
    foodCollection:foodCollection,
    clothesCollection:clothesCollection
};