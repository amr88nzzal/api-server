'use strict';

const FoodSchema = (sequelize, DataTypes) =>
  sequelize.define('food', {
    foodName: { type: DataTypes.STRING, allowNull: false },
    foodCategory: { type: DataTypes.STRING }
  })

module.exports = FoodSchema;