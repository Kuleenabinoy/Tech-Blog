const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
class Post extends Model {}
Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        postTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        dateCreated: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        postContent: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },

        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "post",
    }
);
module.exports = Post;
