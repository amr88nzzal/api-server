'use strict';

const clothesSchema = (sequelize, DataTypes) =>
  sequelize.define('clothes', {
    clothesBrand: { type: DataTypes.STRING, allowNull: false },
    clothesCategory: { type: DataTypes.STRING },
    clothesSize: { type: DataTypes.STRING }
  })

module.exports = clothesSchema;