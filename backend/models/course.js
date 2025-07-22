const { DataTypes } = require("sequelize");
const sequelize = require("../utils/db");

const Course = sequelize.define("Course", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false }, // Markdown, Math, Images, Vidéos
  isFree: { type: DataTypes.BOOLEAN, defaultValue: false }, // zone gratuite
});

module.exports = Course;