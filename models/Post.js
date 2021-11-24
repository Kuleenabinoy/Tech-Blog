const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");
class Post extends Model {}
Post.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        postTitle: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
        },
        dataCreated: {
            type: Datatypes.Date,
            allowNull: false,
            defaultValue: Datatypes.NOW,
        },
        user_id: {
            type: Datatypes.INTEGER,
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
model.exports = Post;
