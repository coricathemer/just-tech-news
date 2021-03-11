const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create user model 
class User extends Model {}

//define table columns and configuration
User.init(
  {
    //Table column definitions go here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {
    // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))
    sequelize, 
    timestamps: false,
    freezeTableName: true, 
    underscored: true, 
    modelName: 'user'
    // pass in our imported sequelize connection (the direct connection to our database)
    // sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    // timestamps: false,
    // don't pluralize name of database table
    // freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    // underscored: true,
    // make it so our model name stays lowercase in the database
    // modelName: 'user'
  }
);

module.exports = User;